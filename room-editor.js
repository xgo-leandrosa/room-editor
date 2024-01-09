class RoomObject {
    constructor() {
        this.rotate = 0;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.halfWidth = 0;
        this.halfHeight = 0;
        this.scale = 1;
        this.element = null;
        this.world = null;
        this.dragable = false;
    }

    pan(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    zoom(factor) {
        this.scale *= factor;
    }

    addRotation(rotation) {
        this.rotate += rotation;

        if(this.rotate > 360) {
            this.rotate = 0;
        }
    }

    addToContainer() {
        this.world.element.appendChild(this.element);
    }

    removeOfContainer() {
        this.world.element.removeChild(this.element);
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x - this.halfWidth}px, ${this.y - this.halfHeight}px) scale(${this.scale}) rotate(${this.rotate}deg)`;
    }
}

class World extends RoomObject {
    roomPlan;

    constructor(editorContainer) {
        super();
        this.x = 0;
        this.y = 0;
        this.scale = 1;

        this.tables = [];

        this.element = document.createElement("div");
        this.element.classList.add('world');
        //this.element.style.width=this.worldSize + 'px';
        //this.element.style.height=this.worldSize + 'px';
        editorContainer.appendChild(this.element)
    }


    worldPositionObject(object) {
        return this.worldPosition({ x: object.x, y: object.y });
    }

    worldPosition({ x, y }) {
        return { x: this.x - x, y: this.y - y };
    }

    setRoomPlan(roomPlan) {
        this.roomPlan = roomPlan;
        this.roomPlan.world = this;
        this.roomPlan.addToContainer();
    }

    addTable(table) {
        table.world = this;
        table.addToContainer();
        this.tables.push(table)
        this.updateTablesCode();
    }

    removeTable(table) {
        table.removeOfContainer();
        this.tables = this.tables.filter(t => t !== table);
    }

    removeTables() {
        for(let table of this.tables) {
            table.removeOfContainer();
        }
        this.tables = [];
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }

    calculateIntersectionArea(rect1, rect2) {
        const xIntersection = Math.max(0, Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x));
        const yIntersection = Math.max(0, Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y));
        return xIntersection * yIntersection;
    }

    areTablesOverlapping(tables) {
        // Helper function to calculate the intersection area of two rectangles
        for (let i = 0; i < this.tables.length; i++) {
            this.tables[i].isSafe();
        }
        // Check if any pair of tables overlap
        for (let i = 0; i < this.tables.length; i++) {
            for (let j = i + 1; j < this.tables.length; j++) {
                // Compare the two tables using their coordinates and dimensions
                const intersectionArea = this.calculateIntersectionArea(this.tables[i], this.tables[j]);
                const minArea = Math.min(this.tables[i].width * this.tables[i].height, this.tables[j].width * this.tables[j].height);
                // If the intersection area is greater than a certain threshold, the tables are considered overlapping
                if (intersectionArea / minArea > 0) {
                    this.tables[j].isInDanger();
                    this.tables[i].isInDanger();
                    //return true;
                }
            }
        }
        
        //return false;
    }

    updateTablesCode() {
        for (let i = 0; i < this.tables.length; i++) {
            this.tables[i].code = i;
            this.tables[i].updateTableNumerationValue();
        }
    }
}

class RoomPlan extends RoomObject {
    constructor(imageSrc) {
        super();
        this.element = document.createElement('div');
        this.element.classList.add('roomPlan');

        this.updateImageSrc(imageSrc);
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }

    updateImageSrc(imageSrc) {
        if(this.elementImg) {
            this.element.removeChild(this.elementImg);
        }

        this.imageSrc = imageSrc;
        this.elementImg = document.createElement('img');

        this.elementImg.onload = (event) => {
            this.width = event.target.naturalWidth;
            this.height = event.target.naturalHeight;
            this.element.style.width = `${this.width}px`;
            this.element.style.height = `${this.height}px`;

            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
        }

        this.elementImg.style.width = '100%';
        this.elementImg.style.height = '100%';
        this.elementImg.src = imageSrc;
        this.element.appendChild(this.elementImg);
    }
}

const TABLE_ELEMENT_OFFSET = 35;

class Table extends RoomObject {

    code = "";
    name = "";
    notes = "";

    tableDefaultSize = 155;
    seatsPositions = [
    ];
    seats = [];
    tableType = "Table";
    tablePurpose = "GUEST";
    
    tableElement;
    tableElementSize = 105;

    inDanger = false;

    spaceBetweenTables = 0;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSize;
        this.height = this.tableDefaultSize;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }

    init() {
        this.initializeSeats();
        this.addTableElement();
        this.addSeatsTooltips();
        this.updateSeatsNumerations();
        this.addTableNumeration();
    }

    initializeSeats() {
        for (let seatPosition of this.seatsPositions) {
            const seat = new Seat(this);
            seat.rotate = seatPosition.rotate || 0;
            seat.x = seatPosition.x + (this.spaceBetweenTables/2);
            seat.y = seatPosition.y + (this.spaceBetweenTables/2);
            seat.number = seatPosition.number;
            seat.isCouple = !!seatPosition.couple;
            seat.applyTransform();
            seat.updateStatus();
            this.seats.push(seat);
        }
    }

    updateSeats() {
        for (let seat of this.seats) {
            seat.updateStatus();
            seat.updateToolTip();
        }
    }

    addSeatsTooltips() {
        for (let seat of this.seats) {
            seat.addTooltip();
        }
    }

    updateSeatsNumerations() {
        for (let seat of this.seats) {
            seat.addSeatNumeration();
        }
    }

    addTableElement() {
    }

    addTableNumeration() {
        this.tableElementNumeration = document.createElement("div");
        this.tableElementNumeration.classList.add('tableNumeration');
        
        this.tableElementNumeration.style.left = "45%";
        this.tableElementNumeration.style.top =  "40%";
        this.updateTableNumerationValue();
        this.tableElement.appendChild(this.tableElementNumeration);
    }

    updateTableNumerationValue() {
        this.tableElementNumeration.innerText = this.code;
    }

    isElementOrChildElement(elementToCompare) {
        return this.element === elementToCompare || this.tableElement === elementToCompare || this.tableElementNumeration === elementToCompare || this.seats.find(s => s.isElementOrChildElement(elementToCompare));
    }

    isSafe() {
        this.inDanger = false;
        this.element.classList.remove('tableDanger');
    }

    isInDanger() {
        this.inDanger = true;
        this.element.classList.add('tableDanger');
    }

    setSelected() {
        this.element.classList.add('tableSelected');
        this.tableElement.classList.add('table-draw--selected');
    }

    unsetSelected() {
        this.element.classList.remove('tableSelected');
        this.tableElement.classList.remove('table-draw--selected');
    }

    destroy() {

    }
}

class SquareTable extends Table {
    tableDefaultSize = 270;
    spaceBetweenTables = 0;

    seatsPositions = [
        {
            number: 0,
            x: 55,
            y: 0,
        },
        {
            number: 1,
            x: 115,
            y: 0,
        },
        {
            number: 2,
            x: 175,
            y: 0,
        },
        {
            number: 3,
            x: 230,
            y: 55,
            rotate: 90,
        },
        {
            number: 4,
            x: 230,
            y: 115,
            rotate: 90,
        },
        {
            number: 5,
            x: 230,
            y: 175,
            rotate: 90,
        },
        {
            number: 6,
            x: 175,
            y: 230,
            rotate: 180,
        },
        {
            number: 7,
            x: 115,
            y: 230,
            rotate: 180,
        },
        {
            number: 8,
            x: 55,
            y: 230,
            rotate: 180,
        },
        {
            number: 9,
            x: 0,
            y: 175,
            rotate: 270,
        },
        {
            number: 10,
            x: 0,
            y: 115,
            rotate: 270,
        },
        {
            number: 11,
            x: 0,
            y: 55,
            rotate: 270,
        },
    ];
    seats = [];
    tableType = "SquareTable";

    tableElement;
    tableElementSize = 200;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSize + this.spaceBetweenTables;
        this.height = this.tableDefaultSize + this.spaceBetweenTables;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSize}px`;
        this.tableElement.style.height = `${this.tableElementSize}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables/2)}px, ${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables/2)}px) scale(1)`;
    }
}

class RectangularTable extends Table {
    width = 360;
    height = 190;

    spaceBetweenTables = 0;

    seatsPositions = [
        {
            number: 0,
            x: 55,
            y: 0,
        },
        {
            number: 1,
            x: 115,
            y: 0,
        },
        {
            number: 2,
            x: 175,
            y: 0,
        },
        {
            number: 3,
            x: 225,
            y: 0,
        },
        {
            number: 4,
            x: 275,
            y: 0,
        },
        {
            number: 5,
            x: 330,
            y: 55,
            rotate: 90,
        },
        {
            number: 6,
            x: 330,
            y: 115,
            rotate: 90,
        },
        {
            number: 7,
            x: 275,
            y: 165,
            rotate: 180,
        },
        {
            number: 8,
            x: 225,
            y: 165,
            rotate: 180,
        },
        {
            number: 9,
            x: 175,
            y: 165,
            rotate: 180,
        },
        {
            number: 10,
            x: 115,
            y: 165,
            rotate: 180,
        },
        {
            number: 11,
            x: 55,
            y: 165,
            rotate: 180,
        },
        {
            number: 12,
            x: 0,
            y: 115,
            rotate: 270,
        },
        {
            number: 13,
            x: 0,
            y: 55,
            rotate: 270,
        },
    ];
    seats = [];
    tableType = "RectangularTable";

    tableElement;
    tableElementWidth = 300;
    tableElementHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');

        this.width = this.width + this.spaceBetweenTables;
        this.height = this.height + this.spaceBetweenTables;

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementWidth}px`;
        this.tableElement.style.height = `${this.tableElementHeight}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px, ${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px) scale(1)`;
    }
}

class RectangularLTable extends Table {
    width = 520;
    height = 200;

    spaceBetweenTables = 0;

    seatsPositions = [
        {
            number: 0,
            x: 70,
            y: 0,
        },
        {
            number: 1,
            x: 140,
            y: 0,
        },
        {
            number: 2,
            x: 210,
            y: 0,
        },
        {
            number: 3,
            x: 280,
            y: 0,
        },
        {
            number: 4,
            x: 350,
            y: 0,
        },
        {
            number: 5,
            x: 420,
            y: 0,
        },
        {
            number: 6,
            x: 485,
            y: 55,
            rotate: 90,
        },
        {
            number: 7,
            x: 485,
            y: 115,
            rotate: 90,
        },
        {
            number: 8,
            x: 420,
            y: 165,
            rotate: 180,
        },
        {
            number: 9,
            x: 350,
            y: 165,
            rotate: 180,
        },
        {
            number: 10,
            x: 280,
            y: 165,
            rotate: 180,
        },
        {
            number: 11,
            x: 210,
            y: 165,
            rotate: 180,
        },
        {
            number: 12,
            x: 140,
            y: 165,
            rotate: 180,
        },
        {
            number: 13,
            x: 70,
            y: 165,
            rotate: 180,
        },
        {
            number: 14,
            x: 0,
            y: 115,
            rotate: 270,
        },
        {
            number: 15,
            x: 0,
            y: 55,
            rotate: 270,
        },
    ];
    seats = [];
    tableType = "RectangularLTable";

    tableElement;
    tableElementWidth = 450;
    tableElementHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');

        this.width = this.width + this.spaceBetweenTables;
        this.height = this.height + this.spaceBetweenTables;

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementWidth}px`;
        this.tableElement.style.height = `${this.tableElementHeight}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px, ${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px) scale(1)`;
    }
}

class RoundTable extends Table {
    tableDefaultSize = 240;

    spaceBetweenTables = 30;

    seatsPositions = [
        {
            number: 0,
            x: 105,
            y: 0,
            rotate: 0,
        },
        {
            number: 1,
            x: 175,
            y: 25,
            rotate: 41,
        },
        {
            number: 2,
            x: 205,
            y: 72,
            rotate: 62,
        },
        {
            number: 3,
            x: 207,
            y: 134,
            rotate: 108,
        },
        {
            number: 4,
            x: 175,
            y: 185,
            rotate: 139,
        },
        {
            number: 5,
            x: 110,
            y: 210,
            rotate: 180,
        },
        {
            number: 6,
            x: 45,
            y: 195,
            rotate: 215,
        },
        {
            number: 7,
            x: 5,
            y: 140,
            rotate: 253,
        },
        {
            number: 8,
            x: 5,
            y: 67,
            rotate: 290,
        },
        {
            number: 9,
            x: 45,
            y: 20,
            rotate: 320,
        },
    ];
    seats = [];
    tableType = "RoundTable";

    tableElement;
    tableElementSize = 180;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSize + this.spaceBetweenTables;
        this.height = this.tableDefaultSize + this.spaceBetweenTables;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSize}px`;
        this.tableElement.style.height = `${this.tableElementSize}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px, ${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px) scale(1)`;
        this.tableElement.style["border-radius"] = "50%";
    }
}

class ForestMTable extends Table {
    tableDefaultSizeWidth = 255;
    tableDefaultSizeHeight = 185;
    seatsPositions = [
        {
            number: 0,
            x: 90,
            y: 155,
        },
        {
            number: 1,
            x: 45,
            y: 155,
        },
        {
            number: 2,
            x: 0,
            y: 105,
        },
        {
            number: 3,
            x: 0,
            y: 55,
        },
        {
            number: 4,
            x: 55,
            y: 0,
        },
        {
            number: 5,
            x: 100,
            y: 0,
        },
        {
            number: 6,
            x: 145,
            y: 0,
        },
        {
            number: 7,
            x: 185,
            y: 0,
        },
        {
            number: 8,
            x: 220,
            y: 55,
        },
        {
            number: 9,
            x: 220,
            y: 105,
        },
        {
            number: 10,
            x: 180,
            y: 155,
        },
        {
            number: 11,
            x: 135,
            y: 155,
        },
    ];
    seats = [];
    tableType = "ForestMTable";

    tableElement;
    tableElementSizeWidth = 195;
    tableElementSizeHeight = 125;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET}px, ${TABLE_ELEMENT_OFFSET}px) scale(1)`;
    }
}

class CoupleRoundTable extends Table {
    tableDefaultSize = 240;
    seatsPositions = [
        {
            number: 0,
            x: 75,
            y: 5,
            rotate: 345,
            couple: true,
        },
        {
            number: 1,
            x: 140,
            y: 5,
            rotate: 15,
            couple: true,
        },
    ];
    seats = [];
    tableType = "CoupleRoundTable";
    tablePurpose="COUPLE";
    
    tableElement;
    tableElementSize = 180;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSize;
        this.height = this.tableDefaultSize;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSize}px`;
        this.tableElement.style.height = `${this.tableElementSize}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET}px, ${TABLE_ELEMENT_OFFSET}px) scale(1)`;
        this.tableElement.style["border-radius"] = "50%";
    }
}

class CoupleOvalSTable extends Table {
    tableDefaultSizeWidth = 310;
    tableDefaultSizeHeight = 180;
    seatsPositions = [
        {
            number: 0,
            x: 110,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 1,
            x: 165,
            y: 5,
            rotate: 0,
            couple: true,
        },
    ];
    seats = [];
    tableType = "CoupleOvalSTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 250;
    tableElementSizeHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    } 

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(30px, 40px) scale(1)`;
        this.tableElement.style["border-radius"] = "60px";
    }
}

class CoupleOvalMTable extends Table {
    tableDefaultSizeWidth = 460;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 75,
            y: 165,
            rotate: 180,
        },
        {
            number: 1,
            x: 2,
            y: 115,
            rotate: 250,
        },
        {
            number: 2,
            x: 5,
            y: 50,
            rotate: 295,
        },
        {
            number: 3,
            x: 75,
            y: 5,
            rotate: 0,
        },
        {
            number: 4,
            x: 174,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 5,
            x: 260,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 6,
            x: 351,
            y: 5,
            rotate: 0,
        },
        {
            number: 7,
            x: 420,
            y: 50,
            rotate: 70,
        },
        {
            number: 8,
            x: 422,
            y: 112,
            rotate: 105,
        },
        {
            number: 9,
            x: 400,
            y: 165,
            rotate: 170,
        },
    ];
    seats = [];
    tableType = "CoupleOvalMTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 400;
    tableElementSizeHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(30px, 40px) scale(1)`;
        this.tableElement.style["border-radius"] = "60px";
    }
}

class CoupleOvalMFullTable extends Table {
    tableDefaultSizeWidth = 460;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 75,
            y: 165,
            rotate: 180,
        },
        {
            number: 1,
            x: 2,
            y: 115,
            rotate: 250,
        },
        {
            number: 2,
            x: 5,
            y: 50,
            rotate: 295,
        },
        {
            number: 3,
            x: 75,
            y: 5,
            rotate: 0,
        },
        {
            number: 4,
            x: 174,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 5,
            x: 260,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 6,
            x: 351,
            y: 5,
            rotate: 0,
        },
        {
            number: 7,
            x: 420,
            y: 50,
            rotate: 70,
        },
        {
            number: 8,
            x: 422,
            y: 112,
            rotate: 105,
        },
        {
            number: 9,
            x: 400,
            y: 165,
            rotate: 170,
        },
        {
            number: 10,
            x: 250,
            y: 163,
            rotate: 180,
        },
        {
            number: 11,
            x: 165,
            y: 163,
            rotate: 180,
        },
    ];
    seats = [];
    tableType = "CoupleOvalMFullTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 400;
    tableElementSizeHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(30px, 40px) scale(1)`;
        this.tableElement.style["border-radius"] = "60px";
    }
}

class CoupleOvalLTable extends Table {
    tableDefaultSizeWidth = 660;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 1,
            x: 125,
            y: 175,
            rotate: 0,
        },
        {
            number: 2,
            x: 65,
            y: 175,
            rotate: 0,
        },
        {
            number: 3,
            x: 5,
            y: 135,
            rotate: 0,
        },
        {
            number: 4,
            x: 5,
            y: 85,
            rotate: 0,
        },
        {
            number: 5,
            x: 10,
            y: 35,
            rotate: 0,
        },
        {
            number: 6,
            x: 115,
            y: 5,
            rotate: 0,
        },
        {
            number: 7,
            x: 240,
            y: 10,
            rotate: 0,
        },
        {
            number: 8,
            x: 352,
            y: 10,
            rotate: 0,
            couple: true,
        },
        {
            number: 9,
            x: 400,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 10,
            x: 490,
            y: 5,
            rotate: 0,
        },
        {
            number: 11,
            x: 575,
            y: 10,
            rotate: 0,
        },
        {
            number: 12,
            x: 630,
            y: 50,
            rotate: 0,
        },
        {
            number: 13,
            x: 635,
            y: 100,
            rotate: 0,
        },
        {
            number: 14,
            x: 625,
            y: 140,
            rotate: 0,
        },
        {
            number: 15,
            x: 550,
            y: 165,
            rotate: 0,
        },
        {
            number: 16,
            x: 480,
            y: 165,
            rotate: 0,
        },
    ];
    seats = [];
    tableType = "CoupleOvalLTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 600;
    tableElementSizeHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(30px, 40px) scale(1)`;
        this.tableElement.style["border-radius"] = "60px";
    }
}

class CoupleOvalLFullTable extends Table {
    tableDefaultSizeWidth = 660;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 200,
            y: 175,
            rotate: 0,
        },
        {
            number: 1,
            x: 125,
            y: 175,
            rotate: 0,
        },
        {
            number: 2,
            x: 65,
            y: 175,
            rotate: 0,
        },
        {
            number: 3,
            x: 5,
            y: 135,
            rotate: 0,
        },
        {
            number: 4,
            x: 5,
            y: 85,
            rotate: 0,
        },
        {
            number: 5,
            x: 10,
            y: 35,
            rotate: 0,
        },
        {
            number: 6,
            x: 115,
            y: 5,
            rotate: 0,
        },
        {
            number: 7,
            x: 240,
            y: 10,
            rotate: 0,
        },
        {
            number: 8,
            x: 352,
            y: 10,
            rotate: 0,
            couple: true,
        },
        {
            number: 9,
            x: 400,
            y: 5,
            rotate: 0,
            couple: true,
        },
        {
            number: 10,
            x: 490,
            y: 5,
            rotate: 0,
        },
        {
            number: 11,
            x: 575,
            y: 10,
            rotate: 0,
        },
        {
            number: 12,
            x: 630,
            y: 50,
            rotate: 0,
        },
        {
            number: 13,
            x: 635,
            y: 100,
            rotate: 0,
        },
        {
            number: 14,
            x: 625,
            y: 140,
            rotate: 0,
        },
        {
            number: 15,
            x: 550,
            y: 165,
            rotate: 0,
        },
        {
            number: 16,
            x: 480,
            y: 165,
            rotate: 0,
        },
        {
            number: 17,
            x: 400,
            y: 165,
            rotate: 0,
        },
    ];
    seats = [];
    tableType = "CoupleOvalLFullTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 600;
    tableElementSizeHeight = 130;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(30px, 40px) scale(1)`;
        this.tableElement.style["border-radius"] = "60px";
    }
}

class CoupleForestSTable extends Table {
    tableDefaultSizeWidth = 265;
    tableDefaultSizeHeight = 170;
    seatsPositions = [
        {
            number: 0,
            x: 90,
            y: 0,
            couple: true,
        },
        {
            number: 1,
            x: 150,
            y: 0,
            couple: true,
        },
    ];
    seats = [];
    tableType = "CoupleForestSTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 205;
    tableElementSizeHeight = 110;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET}px, ${TABLE_ELEMENT_OFFSET}px) scale(1)`;
    }
}

class CoupleForestMTable extends Table {
    tableDefaultSizeWidth = 255;
    tableDefaultSizeHeight = 185;
    seatsPositions = [
        {
            number: 0,
            x: 90,
            y: 155,
        },
        {
            number: 1,
            x: 45,
            y: 155,
        },
        {
            number: 2,
            x: 0,
            y: 105,
        },
        {
            number: 3,
            x: 0,
            y: 55,
        },
        {
            number: 4,
            x: 55,
            y: 0,
        },
        {
            number: 5,
            x: 100,
            y: 0,
            couple: true,
        },
        {
            number: 6,
            x: 145,
            y: 0,
            couple: true,
        },
        {
            number: 7,
            x: 185,
            y: 0,
        },
        {
            number: 8,
            x: 220,
            y: 55,
        },
        {
            number: 9,
            x: 220,
            y: 105,
        },
        {
            number: 10,
            x: 180,
            y: 155,
        },
        {
            number: 11,
            x: 135,
            y: 155,
        },
    ];
    seats = [];
    tableType = "CoupleForestMTable";
    tablePurpose="COUPLE";

    tableElement;
    tableElementSizeWidth = 195;
    tableElementSizeHeight = 125;

    constructor() {
        super();
        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');
        this.width = this.tableDefaultSizeWidth;
        this.height = this.tableDefaultSizeHeight;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET}px, ${TABLE_ELEMENT_OFFSET}px) scale(1)`;
    }
}

const TableTypes = {
    Table,
    SquareTable,
    RectangularTable,
    RectangularLTable,
    RoundTable,
    ForestMTable,
    CoupleRoundTable,
    CoupleOvalSTable,
    CoupleOvalMTable,
    CoupleOvalMFullTable,
    CoupleOvalLTable,
    CoupleOvalLFullTable,
    CoupleForestSTable,
    CoupleForestMTable,
}

TableTypesTranslations = {
    "RoundTable": "Redonda",
    "SquareTable": "Quadrada",
    "RectangularTable": "Retangular",
    "RectangularLTable": "Retangular Aumento",
    "ForestMTable": "Forest",
    "CoupleRoundTable": "Redonda",
    "CoupleOvalSTable": "Oval S",
    "CoupleOvalMTable": "Oval M",
    "CoupleOvalMFullTable": "Oval M Compl.",
    "CoupleOvalLTable": "Oval L",
    "CoupleOvalLFullTable": "Oval L Compl.",
    "CoupleForestSTable": "Forest S",
    "CoupleForestMTable": "Forest M",
}

TableTypesIcon = {
    "RoundTable": "round-table",
    "SquareTable": "square-table",
    "RectangularTable": "rectangular-table",
    "RectangularLTable": "rectangular-table",
    "ForestMTable": "rectangular-table",
    "CoupleRoundTable": "round-table",
    "CoupleOvalSTable": "round-table",
    "CoupleOvalMTable": "round-table",
    "CoupleOvalMFullTable": "round-table",
    "CoupleOvalLTable": "round-table",
    "CoupleOvalLFullTable": "round-table",
    "CoupleForestSTable": "rectangular-table",
    "CoupleForestMTable": "rectangular-table",
}

class Seat extends RoomObject {
    number = 0;
    code = 0;
    guestName = "";
    guestAge = "ADULT";
    foodRestrictions = [];

    width = 35;
    height = 35;

    constructor(table) {
        super();
        this.table = table;
        this.element = document.createElement('div');
        this.element.classList.add('seat');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        
        this.addToContainer();
    }

    updateStatus() {
        if(this.isCouple) {
            this.element.classList.add('seat--couple');
            this.setFilledCouple();
        } else {
            this.element.classList.remove('seat--couple');

            if(this.guestName) {
                this.setFilled();
            } else {
                this.setREM();
            }
        }

    }

    setREM() {
        this.element.classList.remove('seat--filled');
        this.element.classList.add('seat--rem');
    }
    
    setFilledCouple() {
        this.element.classList.remove('seat--couple--rem');
        this.element.classList.add('seat--couple--filled');
    }

    setFilled() {
        this.element.classList.remove('seat--rem');
        this.element.classList.add('seat--filled');
    }

    addToContainer() {
        this.table.element.appendChild(this.element);
    }

    addTooltip() {
        this.tooltipElement = document.createElement("div");

        this.tooltipElementRow1 = document.createElement("div");
        this.tooltipElementRow1.classList.add("editor-row");

        this.tooltipElementRow1Icon = document.createElement("div");
        this.tooltipElementRow1Content = document.createElement("div");
        this.tooltipElementRow1.appendChild(this.tooltipElementRow1Icon)

        this.miniSeat = document.createElement("div");
        this.miniSeat.classList.add("miniSeat");
        this.miniSeat.innerHTML = this.number;
        this.tooltipElementRow1Icon.appendChild(this.miniSeat);

        this.tooltipElementRow1.appendChild(this.tooltipElementRow1Content)
        this.tooltipElementRow1Content.innerHTML = this.guestName || "Sem convidado";

        this.tooltipElementRow2 = document.createElement("div");
        this.tooltipElementRow2.classList.add("editor-row");
        this.tooltipElementRow2Icon = document.createElement("div");
        this.tooltipElementRow2Icon.classList.add("table_ui");
        this.tooltipElementRow2Icon.classList.add("cake-icon");

        this.tooltipElementRow2Content = document.createElement("div");
        this.tooltipElementRow2.appendChild(this.tooltipElementRow2Icon)
        this.tooltipElementRow2.appendChild(this.tooltipElementRow2Content)
        this.tooltipElementRow2Content.innerHTML = this.guestAge;

        this.tooltipElement.appendChild(this.tooltipElementRow1);
        this.tooltipElement.appendChild(this.tooltipElementRow2);

        this.tippyInstance = tippy(this.element, { 
            theme: 'light',
            content: this.tooltipElement 
        });
    }

    updateToolTip() {
        this.tooltipElementRow1Content.innerText = this.guestName || "Sem convidado";

        if(this.isCouple) {
            this.miniSeat.classList.add('seat--couple');
            this.miniSeat.classList.remove('seat--couple--rem');
            this.miniSeat.classList.add('seat--couple--filled');
        } else {
            this.miniSeat.classList.remove('seat--couple');

            if(this.guestName) {
                this.miniSeat.classList.remove('seat--rem');
            this.miniSeat.classList.add('seat--filled');
            } else {
                this.miniSeat.classList.remove('seat--filled');
                this.miniSeat.classList.add('seat--rem');
            }
        }
    }

    addSeatNumeration() {
        this.elementNumeration = document.createElement("div");
        this.elementNumeration.classList.add('seatNumeration');
        this.updateSeatNumerationValue();
        this.element.appendChild(this.elementNumeration);
    }

    updateSeatNumerationValue() {
        this.elementNumeration.innerText = this.number;
    }

    isElementOrChildElement(isElement) {
        return this.element === isElement;
    }
}

class MouseManager {
    selectedObject = null;
    editorContainerElement=null;
    guestModal;

    constructor(world, editorContainerElement, guestModal) {
        this.editorContainerElement = editorContainerElement;
        this.guestModal = guestModal;
        this.initializeContextMenu();
        this.initializeUi();
        this.setBindings();

        this.lastX = 0;
        this.lastY = 0;
        this.dragging = false;
        this.zoomIntensity = 0.02;
        this.contextMenuVisible = false;
        this.contextMenuElement = document.getElementById("contextMenu");


        
    }
    
    setBindings() {
        this.editorContainerElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.editorContainerElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.editorContainerElement.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.editorContainerElement.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        this.editorContainerElement.addEventListener('wheel', this.handleMouseWheel.bind(this));
    }

    setWorld(world) {
        this.world = world;

        this.pointerDiv = document.createElement("div");
        this.pointerDiv.style.width = "10px";
        this.pointerDiv.style.height = "10px";
        this.pointerDiv.style.background = "red";
        this.world.element.appendChild(this.pointerDiv);
    }

    activeGuestTables = [];

    

    setActiveGuestTables(tablesTypes) {
        this.activeGuestTables = tablesTypes;
        const elements = document.getElementsByClassName("tables_ui");

        if(elements.length > 0) {
            elements[0].innerHTML = "";

            
            for(let agt of this.activeGuestTables) {

                elements[0].innerHTML += `
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="${agt}">
                        <div class="table_ui ${TableTypesIcon[agt]}  ui guestTableChooserItem" data-tableType="${agt}"></div>
                            ${TableTypesTranslations[agt]}
                            <div class="pax  ui guestTableChooserItem" data-tableType="${agt}">
                            <i class="fa-regular fa-user  ui guestTableChooserItem" data-tableType="${agt}"></i>14
                        </div>
                    </button>
                `;
            }
            
        }
/*
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="RoundTable">
                        <div class="table_ui round-table  ui guestTableChooserItem" data-tableType="RoundTable"></div>
                        Redonda
                        <div class="pax  ui guestTableChooserItem" data-tableType="RoundTable">
                            <i class="fa-regular fa-user  ui guestTableChooserItem" data-tableType="RoundTable"></i>14
                        </div>
                    </button>
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="SquareTable">
                        <div class="table_ui square-table  guestTableChooserItem" data-tableType="SquareTable"></div>
                        Quadrada
                        <div class="pax  guestTableChooserItem" data-tableType="SquareTable">
                            <i class="fa-regular fa-user  guestTableChooserItem" data-tableType="SquareTable"></i>14
                        </div>
                    </button>
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="RectangularTable">
                        <div class="table_ui rectangular-table ui guestTableChooserItem" data-tableType="RectangularTable"></div>
                        Retangular
                        <div class="pax ui guestTableChooserItem" data-tableType="RectangularTable">
                            <i class="fa-regular fa-user  ui guestTableChooserItem" data-tableType="RectangularTable"></i>14
                        </div>
                    </button>
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="RectangularLTable">
                        <div class="table_ui rectangular-table ui guestTableChooserItem" data-tableType="RectangularLTable"></div>
                        Retangular Aumento
                        <div class="pax ui guestTableChooserItem" data-tableType="RectangularLTable">
                            <i class="fa-regular fa-user ui guestTableChooserItem" data-tableType="RectangularLTable"></i>14
                        </div>
                    </button>
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="ForestMTable">
                        <div class="table_ui rectangular-table ui guestTableChooserItem" data-tableType="ForestMTable" ></div>
                        Forest
                        <div class="pax ui guestTableChooserItem" data-tableType="ForestMTable" >
                            <i class="fa-regular fa-user ui guestTableChooserItem" data-tableType="ForestMTable" ></i>14
                        </div>
                    </button>
*/
    }
    activeCouplesTables = [];
    setActiveCouplesTables(tablesTypes) {
        this.activeCouplesTables = tablesTypes;
        const elements = document.getElementsByClassName("coupleTableSelect");

        if(elements.length > 0) {
            
            if ($('#coupleTableSelect').data('select2')) {
                $('#coupleTableSelect').select2('destroy').empty()
            }
            
            for(let act of this.activeCouplesTables) {

                elements[0].innerHTML += `
                    <option title="${TableTypesIcon[act]}" value="${act}" pax="14">${TableTypesTranslations[act]}</option>
                `;
            }

            this.initializeCoupleTableSelect();    
        }
    }

    initializeUi() {
        const ui1 = document.createElement('div');
        ui1.classList.add("editor-row");
        ui1.classList.add("ui-row");
        ui1.style["justify-content"] = "space-between";
        
        /*<option title="round-table" value="ovals" pax="14">Redonda</option>
        <option title="square-table" value="square" pax="14">Quadrada</option>
        <option title="rectangular-table" value="forestS">Forest S</option>
        <option title="rectangular-table" value="forestM">Forest M</option>*/
        ui1.innerHTML = `
            <div style="display: inline-flex;">
                <div class="input" style="width: 180px;">
                    <label>Mesa dos noivos:</label>
                    <select id="coupleTableSelect" class="coupleTableSelect ui">
                        
                    </select>
                </div>
        
                <div class="input ui">
                    <label>Tipo:</label>
                    <div class="types">
                        <div class="editor-radio">
                            <input type="radio" id="guest" name="contact" value="guest">
                            <span for="contactChoice1">Convidados</span>
                        </div>
        
                        <div class="editor-radio">
                            <input type="radio" id="staff" name="contact" value="staff">
                            <span for="contactChoice1">Staff</span>
                        </div>
        
                        <div class="editor-radio">
                            <input type="radio" id="children" name="contact" value="children">
                            <span for="contactChoice1">Crianças</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <button class="editor-btn editor-btn-primary">
                <i class="fas fa-undo"></i>
                Retroceder
            </button>
        `;
        
/*
<option title="round-table" value="CoupleRoundTable" pax="14">Redonda</option>
<option title="round-table" value="CoupleOvalSTable" pax="14">Oval S</option>
<option title="round-table" value="CoupleOvalMTable" pax="14">Oval M</option>
<option title="round-table" value="CoupleOvalMFullTable" pax="14">Oval M Compl.</option>
<option title="round-table" value="CoupleOvalLTable" pax="14">Oval L</option>
<option title="round-table" value="CoupleOvalLFullTable" pax="14">Oval L Compl.</option>
<option title="rectangular-table" value="CoupleForestSTable" pax="14">Forest S</option>
<option title="rectangular-table" value="CoupleForestMTable" pax="14">Forest M</option>
*/
        
        const ui2 = document.createElement('div');
        ui2.classList.add("editor-row");
        ui2.classList.add("ui-row");

        ui2.innerHTML = `
        <div class="input">
                <label>Mesas:</label>
                <div class="tables_ui" style="margin-top: 2px">
                    
                </div>
            </div>
        `;
        
        this.editorContainerElement.appendChild(ui1);
        this.editorContainerElement.appendChild(ui2);

        $(document).ready(() => {
            this.initializeCoupleTableSelect();    
        });
    }

    initializeCoupleTableSelect() {
        $('#coupleTableSelect').select2({
            minimumResultsForSearch: -1,
            templateResult: function (table) {
                var $span = $(`
                <span class="option">
                    <div style="display: inline-flex">
                        <div class="table_ui ${table?.title}"></div>
                        ${table.text}
                    </div>
                    <div class="pax">
                        <i class="fa-regular fa-user"></i>
                        14pax
                    </div>
                </span>`);
                return $span;
            },
            templateSelection: function (table) {
                if (!table.id) {
                    return table.text;
                }

                var $state = $(
                    `<span class="option">
                    <div style="display: inline-flex">
                        <div class="table_ui ${table?.title}"></div>
                        ${table.text}
                    </div>
                    <div class="pax">
                        <i class="fa-regular fa-user"></i>
                        14pax
                    </div>
                </span>`
                );
                return $state;
            },
        });

        $('#coupleTableSelect').on("select2:select", (event) => {
            const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");

            const newTableCouple = new TableTypes[event.params.data.id](this.world);

            const pos = this.getWorldPositionCenterScreen();
            if(!tableCouple) {
                newTableCouple.x = pos.x;
                newTableCouple.y = pos.y;
                
            } else {
                newTableCouple.x = tableCouple.x;
                newTableCouple.y = tableCouple.y;
                newTableCouple.rotate = tableCouple.rotate;

                this.world.removeTable(tableCouple);
            }
            
            newTableCouple.init();
            this.world.addTable(newTableCouple);
            newTableCouple.applyTransform();

            if(this.selectedObject) {
                this.selectedObject.unsetSelected();
            }

            this.selectedObject = newTableCouple;
            this.selectedObject.setSelected();
            
        })
    }

    initializeContextMenu() {
        const menu = document.createElement('div');
        menu.id = "contextMenu";
        menu.classList.add("context-menu");
        menu.style.display = "none";

        const ul = document.createElement("ul");
        ul.classList.add("context-menu-options");
        menu.appendChild(ul);

        document.body.appendChild(menu);

        /*document.body.innerHTML += `
            <!-- Context menu-->
            <div id="contextMenu" class="context-menu" style="display: none">
                <ul class="menu">
                    <!--<li class="share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i> Share</a></li>
                    <li class="rename"><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</a></li>
                    <li class="link"><a href="#"><i class="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li>
                    <li class="copy"><a href="#"><i class="fa fa-copy" aria-hidden="true"></i> Copy to</a></li>
                    <li class="paste"><a href="#"><i class="fa fa-paste" aria-hidden="true"></i> Move to</a></li>
                    <li class="download"><a href="#"><i class="fa fa-download" aria-hidden="true"></i> Download</a></li>-->
                    <li class="download"><a href="#" onclick="mouseManager.contextMenuAction(event, 'ROTATE')" ><i class="fas fa-sync-alt" aria-hidden="true"></i> Rodar</a></li>
                    <li class="trash"><a href="#" onclick="mouseManager.contextMenuAction(event, 'DELETE')"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</a></li>
                </ul>
            </div>
        `*/
    }

    contextMenuCreateElement(params) {
        const element = document.createElement("li");
        element.classList.add(params.class);
        const aElement = document.createElement("a");
        aElement.href= "#";
        aElement.id=params.id;
        element.appendChild(aElement);
        const iElement = document.createElement("i");
        iElement.classList.add("fas")
        iElement.classList.add(params.icon)
        iElement.ariaHidden=true;
        aElement.onclick = params.onclick;
        aElement.appendChild(iElement);
        aElement.innerHTML += " " + params.text;
        return element;
    }

    contextMenuActiveOptions(options) {
        const elements = document.getElementsByClassName("context-menu-options");
        if(elements.length > 0 ) {
            elements[0].innerHTML = '';

            for(let option of options) {

                switch(option) {
                    case "ROTATE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "rotate",
                                id: "ui-context-rotate",
                                icon: "fa-sync-alt",
                                text: "Rodar",
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ROTATE')
                                }
                            })
                        );
                        break;
                    case "MANAGE_GUESTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "guests",
                                id: "ui-context-manage_guests",
                                icon: "fa-address-book",
                                text: "Gerir convidados",
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'MANAGE_GUESTS')
                                }
                            })
                        );
                        break;
                    case "DELETE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "trash",
                                id: "ui-context-delete",
                                icon: "fa-trash",
                                text: "Eliminar",
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'DELETE')
                                }
                            })
                        );
                        break;
                }
            }
        }
    }

    getFocalPosition(event, deltaScale = 0) {
        
        if(deltaScale > 1) {
            return { x: 0, y: 0 };
        } else {
            return { x: 0, y: 0 };
        }
    }

    getWorldPositionCenterScreen() {
        const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = ((editorRect.x + (editorRect.width/2)) - (roomPlanRect.left)) / this.world.scale;
        let y = ((editorRect.y + (editorRect.height/2)) - (roomPlanRect.top)) / this.world.scale;
        
        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        console.log("World Position:", {x, y})
        this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    getWorldPosition(event) {
        //const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = (event.clientX  - (roomPlanRect.left)) / this.world.scale;
        let y = (event.clientY  - (roomPlanRect.top)) / this.world.scale;
        
        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        console.log("World Position:", {x, y})
        this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    handleContextMenu(event) {
        const options = [];

        if(this.selectedObject && this.selectedObject.tableType) {
            
            options.push("ROTATE");
            options.push("MANAGE_GUESTS");
            
            if(this.selectedObject.tablePurpose != "COUPLE") { 
                options.push("DELETE");
            }

        }
        this.contextMenuActiveOptions(options);

        this.activeContextMenu(event);
    }

    handleMouseDown(event) {

        if (event.button === 0) {
            this.dragging = true;
            this.lastX = event.clientX;
            this.lastY = event.clientY;
        }

        const pos = this.getWorldPosition(event);

        if (event.button == 2 || this.contextMenuVisible == true) {
            this.hideContextMenu();
        }

        if (event.toElement.classList.contains("ui")) {

            if (event.toElement.dataset["tabletype"]) {
                const table1 = new TableTypes[event.toElement.dataset["tabletype"]](this.world);
                table1.x = pos.x;
                table1.y = pos.y;
                table1.init();
                this.world.addTable(table1);
                table1.applyTransform();
                
                if(this.selectedObject) {
                    this.selectedObject.unsetSelected();
                }
                this.selectedObject = table1;
                this.selectedObject.setSelected();
            }

            return;
        } else {
            const isWorldObject = this.world.tables.find(t => t.isElementOrChildElement(event.toElement));
            if (isWorldObject && isWorldObject.dragable) {
                
                if(this.selectedObject) {
                    this.selectedObject.unsetSelected();
                }

                this.selectedObject = isWorldObject;
                this.selectedObject.setSelected();
            } else {
                if(this.selectedObject) {
                    this.selectedObject.unsetSelected();
                }

                this.selectedObject = null;
            }
        }


        event.preventDefault();
    }

    handleMouseMove(event) {
        //document.getElementById("mousePosition").innerHTML = `X: ${event.clientX}px Y:${event.clientY} px`;

        if (!this.dragging || event.buttons !== 1) {
            return;
        }

        const dx = event.clientX - this.lastX;
        const dy = event.clientY - this.lastY;


        if (this.selectedObject) {
            this.selectedObject.pan(dx / this.world.scale, dy / this.world.scale);
            this.selectedObject.applyTransform();
        } else {
            this.world.pan(dx, dy);
            this.world.applyTransform();
            //document.getElementById("worldPosition").innerHTML = `X: ${this.world.x}px Y:${this.world.y} px`;

        }

        this.lastX = event.clientX;
        this.lastY = event.clientY;
    }

    handleMouseUp(event) {
        if (event.button === 0) {
            this.dragging = false;
        }

        this.world.areTablesOverlapping();
    }

    handleMouseWheel(event) {
        const scaleDelta = event.deltaY > 0 ? -1 : 1;
        const zoom = Math.exp(scaleDelta * this.zoomIntensity);
        
        const posFocal = this.getFocalPosition(event, zoom);

        this.world.pan(posFocal.x, posFocal.y);
        this.world.zoom(zoom);
        this.world.applyTransform();
    }

    hideContextMenu() {
        this.contextMenuVisible = false;
        this.contextMenuElement
            .style.display = "none"
    }

    activeContextMenu(event) {
        event.preventDefault();

        this.contextMenuVisible = true;
        this.contextMenuVisible = true;
        this.contextMenuElement.style.display = 'block';
        this.contextMenuElement.style.left = event.pageX + "px";
        this.contextMenuElement.style.top = event.pageY + "px";
    }

    contextMenuAction(event, action) {
        switch(action) {
            case "ROTATE":
                this.selectedObject.addRotation(90);
                this.selectedObject.applyTransform();
                break;                
            case "MANAGE_GUESTS":
                this.guestModal.open(this.selectedObject);
                break;
            case "DELETE":
                this.world.removeTable(this.selectedObject);
                this.selectedObject = null;
                break;
            default:
                throw new Error("Unexpected action");
        }

        this.hideContextMenu();
    }
}

class RoomEditor {
    editorContainerElement = null;
    word = null;
    mouseManager = null;
    
    
    constructor(
        idOfElement,
        ) {
            this.editorContainerElement = document.getElementById(idOfElement);
            this.editorContainerElement.style.overflow = "hidden";
            this.guestsModal = new ManageGuestsModal();

        /*const savedWorld = localStorage.getItem('savedWorld');
        if (savedWorld) {
            this.world = this.deserializeEditor(savedWorld);

            //world.roomPlan.updateImageSrc("http://sllc-api.xpertgo.pt:5000/api/files/657c1d159ed69d0d68cf0405")
            this.world.roomPlan.updateImageSrc("mapascale.png");
        } else {
            this.world = new World(this.editorContainerElement);
            this.world.applyTransform();
            const roomPlan = new RoomPlan('planosala.png');
            this.world.setRoomPlan(roomPlan);
            roomPlan.applyTransform();
        }*/

        this.mouseManager = new MouseManager(this.world, this.editorContainerElement, this.guestsModal);
    }

    setRoomPlan(roomPlanImg) {
        if(!this.world) {
            this.world = new World(this.editorContainerElement);
            this.world.applyTransform();
            
            const roomPlan = new RoomPlan(roomPlanImg);
            this.world.setRoomPlan(roomPlan);
            roomPlan.applyTransform();
            
            this.mouseManager.setWorld(this.world);
        } else {
            this.world.roomPlan.updateImageSrc(roomPlanImg)
            this.mouseManager.setWorld(this.world);
        }
    }

    serializeEditor() {
        const serializedData = {
            roomPlan: {
                imageSrc: this.world.roomPlan.imageSrc,
                x: this.world.x,
                y: this.world.y,
                scale: this.world.scale,
            },
            tables: [],
        };

        // Serialize each object in the editor
        this.world.tables.forEach((table) => {
            const serializedObject = {
                x: table.x,
                y: table.y,
                scale: table.scale,
                rotate: table.rotate,
                tableType: table.tableType,
                code: table.code,
                name: table.name,
                notes: table.notes,
                tablePurpose: table.tablePurpose,


                seats: table.seats.map(s => ({
                    code: s.code,
                    number: s.number,
                    guestName: s.guestName,
                    guestAge: s.guestAge,
                    foodRestrictions: s.foodRestrictions,
                }))
                // Add other properties specific to your object
            };

            // Add the serialized object to the array
            serializedData.tables.push(serializedObject);
        });

        return serializedData;
    }

    deserializeEditor(serializedData) {

        // Deserialize the world

        this.setRoomPlan(serializedData.roomPlan.imageSrc);
        
        this.world.removeTables();
        this.world.x = serializedData.roomPlan.x;
        this.world.y = serializedData.roomPlan.y;
        this.world.scale = serializedData.roomPlan.scale;
        this.world.applyTransform();


        // Deserialize each object in the editor
        serializedData.tables.forEach((serializedObject) => {
            const object = new TableTypes[serializedObject.tableType](this.world);
            object.x = serializedObject.x;
            object.y = serializedObject.y;
            object.scale = serializedObject.scale;
            object.code = serializedObject.code;
            object.tablePurpose = serializedObject.tablePurpose;
            object.name = serializedObject.name;
            object.notes = serializedObject.notes;
            object.init();
            // Add other properties specific to your object

            for(const objSeat of serializedObject.seats) {
                object.seats[objSeat.number | objSeat.code].guestName = objSeat.guestName;
                object.seats[objSeat.number | objSeat.code].guestAge = objSeat.guestAge;
                object.seats[objSeat.number | objSeat.code].foodRestrictions = objSeat.foodRestrictions;
            }
            object.updateSeats();


            // Add the deserialized object to the world
            this.world.addTable(object);
            object.applyTransform();
        });

        this.world.updateTablesCode();

        return this.world;
    }

    activeGuestTables(tablesTypes) {
        this.mouseManager.setActiveGuestTables(tablesTypes);
    }

    activeCoupleTables(tablesTypes) {
        this.mouseManager.setActiveCouplesTables(tablesTypes);
    }
}

class ManageGuestsModal {
    modalElement;
    modalBodyElement;

    subjectTable = null;

    formElements = {};

    constructor() {
        this.modalElement = document.createElement("div");
        this.modalElement.classList.add("editor-modal-wrap");
        this.modalElement.id = "myModal";

        const editorModalElement = document.createElement("div");
        editorModalElement.classList.add("editor-modal")

        this.modalElement.appendChild(editorModalElement);

        const closeElementButton =document.createElement("i");
        closeElementButton.id = "iconClose";
        closeElementButton.classList.add("fa-solid");
        closeElementButton.classList.add("fa-x");
        closeElementButton.classList.add("editor-modal-close");
        closeElementButton.onclick = () => {
            this.close();
        }
        editorModalElement.appendChild(closeElementButton);

        const modalHeaderElement = document.createElement("div");
        modalHeaderElement.classList.add("editor-modal-header");
        modalHeaderElement.innerHTML = '<div class="editor-modal-title">Gerir mesa</div>';
        editorModalElement.appendChild(modalHeaderElement);

        this.modalBodyElement = document.createElement("div");
        this.modalBodyElement.classList.add("editor-modal-body");
        editorModalElement.appendChild(this.modalBodyElement);
        
        // Add modal footer
        const modalFooterElement = document.createElement("div");
        modalFooterElement.classList.add("editor-modal-footer");
        
        const btnCancelElement = document.createElement("button");
        btnCancelElement.id = "btnClose";
        btnCancelElement.type = "button";
        btnCancelElement.classList.add("editor-btn");
        btnCancelElement.classList.add("editor-btn-default");
        btnCancelElement.textContent = "Cancelar";
        btnCancelElement.onclick = () => {
            this.close();
        };
        modalFooterElement.appendChild(btnCancelElement);
        
        const btnSaveElement = document.createElement("button");
        btnSaveElement.type = "submit";
        btnSaveElement.classList.add("editor-btn");
        btnSaveElement.classList.add("editor-btn-primary");
        btnSaveElement.textContent = "Gravar";
        btnSaveElement.onclick = () => {
            this.save();
        };
        modalFooterElement.appendChild(btnSaveElement);
        
        editorModalElement.appendChild(modalFooterElement);
        
        document.body.appendChild(this.modalElement);
        
    }

    createModalBody(table) {
        this.subjectTable = table;
        this.modalBodyElement.innerHTML = '';        
        this.formElements = {};

        // Create the first row with buttons
        const row1 = document.createElement("div");
        row1.classList.add("editor-row");

        const button1 = document.createElement("button");
        button1.classList.add("editor-btn");
        button1.classList.add("editor-btn-default-focus");
        button1.innerHTML = '<div class="editor-table round-table"></div>Redonda';
        row1.appendChild(button1);

        const button2 = document.createElement("button");
        button2.classList.add("editor-btn");
        button2.classList.add("editor-btn-default-focus");
        button2.innerHTML = '<i class="fa-regular fa-user" style="margin-right: 5px;"></i>14';
        row1.appendChild(button2);

        this.modalBodyElement.appendChild(row1);

        // Create the second row with form and editor stats
        const row2 = document.createElement("div");
        row2.classList.add("editor-row");
        row2.style.marginTop = "10px";

        const col1 = document.createElement("div");
        col1.classList.add("editor-col");

        const formElement = document.createElement("form");
        formElement.name = "editor-table-form";
        formElement.action = "/action.php";
        formElement.method = "post";
        formElement.onsubmit = (event) => this.submitForm(event);
        formElement.classList.add("editor-form");

        // Create the form line with table code and input
        const formLine = document.createElement("div");
        formLine.classList.add("editor-form-line");

        const tableCodeDiv = document.createElement("div");
        tableCodeDiv.classList.add("editor-table-code");
        tableCodeDiv.textContent = table.code || "X"; // TODO REMOVE
        formLine.appendChild(tableCodeDiv);

        const tableNameInput = document.createElement("input");
        tableNameInput.classList.add("editor-input");
        tableNameInput.type = "text";
        tableNameInput.id = "tableName";
        tableNameInput.name = "tableName";
        tableNameInput.value = table.name || "";

        this.formElements.name = tableNameInput;
        formLine.appendChild(tableNameInput);

        formElement.appendChild(formLine);

        // Create the seats div
        const seatsDiv = document.createElement("div");
        seatsDiv.id = "seats";
        formElement.appendChild(seatsDiv);

        // Create the form line with editor stats
        const editorFormLine = document.createElement("div");
        editorFormLine.classList.add("editor-form-line");

        const editorStatsDiv = document.createElement("div");
        editorStatsDiv.classList.add("editor-stats");
        editorStatsDiv.innerHTML = `
        <div class="editor-stats-line">
            <span>A partir de 8 anos</span>
            <span id="totalAdult" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span>Dos 3 aos 7 anos</span>
            <span id="totalChild" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span>Dos 6 meses aos 2 anos</span>
            <span id="totalBaby" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span>Dos 0 aos 5 meses</span>
            <span id="totalNewborn" class="editor-stats-qty">0</span>
        </div>
        `;

        const editorStatsGlobalDiv = document.createElement("div");
        editorStatsGlobalDiv.classList.add("editor-stats-global");
        
        editorStatsGlobalDiv.innerHTML = `
            <span class="editor-stats-total">
                <span id="total">0</span>
            </span>
            <span class="editor-stats-stroller" id="totalStroller">0 carrinho</span>
        `;

        editorFormLine.appendChild(editorStatsDiv);
        editorFormLine.appendChild(editorStatsGlobalDiv);

        formElement.appendChild(editorFormLine);
        
        col1.appendChild(formElement);

        const col2 = document.createElement("div");
        col2.classList.add("editor-col");
        col2.id = "table-draw";
        this.tableDrawElement = col2;

        row2.appendChild(col1);
        row2.appendChild(col2);

        this.modalBodyElement.appendChild(row2);

        // Create the third row with notes textarea
        const row3 = document.createElement("div");
        row3.classList.add("editor-row");
        row3.classList.add("editor-row-notes");

        const notesDiv = document.createElement("div");
        notesDiv.textContent = "Notas:";
        row3.appendChild(notesDiv);

        const notesTextarea = document.createElement("textarea");
        notesTextarea.id = "notes";
        notesTextarea.classList.add("editor-input");
        notesTextarea.name = "notes";
        notesTextarea.rows = "4";
        notesTextarea.cols = "50";
        notesTextarea.maxLength = "200";
        notesTextarea.textContent = table.notes || "";
        this.formElements.notes = notesTextarea;
        row3.appendChild(notesTextarea);

        this.modalBodyElement.appendChild(row3);


        this.initializeSeats(seatsDiv, table);
        this.drawTable();
    }

    drawTable() {
        const bounding = this.tableDrawElement.getBoundingClientRect();
        
        if(bounding.width == 0) {
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.drawTable();
            }, 200);
        } else {
            this.miniTable = new TableTypes[this.subjectTable.tableType]();
            this.miniTable.x = this.miniTable.halfWidth + ((bounding.width - this.miniTable.width) / 2);
            this.miniTable.y = this.miniTable.halfHeight + 60;
            this.miniTable.init();
            this.miniTable.world = {
                element: this.tableDrawElement,
            };
            this.miniTable.addToContainer();
            this.miniTable.applyTransform();

            for(const miniSeat of this.miniTable.seats) {
                miniSeat.guestName = this.subjectTable.seats[miniSeat.number].guestName;
                miniSeat.guestAge = this.subjectTable.seats[miniSeat.number].guestAge;
                miniSeat.foodRestrictions = this.subjectTable.seats[miniSeat.number].foodRestrictions;
            }

            this.miniTable.updateSeats();
            
        }

    }

    initializeSeats(seatDiv, table) {
        this.formElements.seats = [];

        for(const seat of table.seats) {
            this.formElements.seats[seat.number] = {};

            const formLineDiv = document.createElement("div");
            formLineDiv.classList.add("editor-form-line");
            formLineDiv.classList.add("editor-seat");

            const seatCodeDiv = document.createElement("div");
            seatCodeDiv.classList.add("editor-seat-code");
            seatCodeDiv.innerHTML = seat.number;
            formLineDiv.appendChild(seatCodeDiv);

            const guestNameInput = document.createElement("input");
            guestNameInput.classList.add("editor-input");
            guestNameInput.classList.add("editor-seat-name");
            guestNameInput.type = "text";
            guestNameInput.id = `guestName-${seat.number}`;
            guestNameInput.name = `guestName-${seat.number}`;
            guestNameInput.value = seat.guestName || '';
            guestNameInput.onblur = () => {
                if(this.miniTable) {
                    this.miniTable.seats[seat.number].guestName = guestNameInput.value;
                    this.miniTable.updateSeats();
                }

            }
            this.formElements.seats[seat.number].guestName = guestNameInput;
            formLineDiv.appendChild(guestNameInput);

            const guestAgeInput = document.createElement("select");
            guestAgeInput.classList.add("editor-form-select")
            guestAgeInput.classList.add("selectAge")
            guestAgeInput.classList.add(`editor-select-age-${seat.number}`)
            guestAgeInput.name = `guestAge-${seat.number}`;
            //this.formElements.seats[seat.number].guestAge = guestAgeInput;
            formLineDiv.appendChild(guestAgeInput);

            const guestRestrictionInput = document.createElement("select");
            guestRestrictionInput.classList.add("editor-form-select-multiple")
            guestRestrictionInput.classList.add(`editor-form-select-restriction-${seat.number}`)
            guestRestrictionInput.attributes.multiple = true;
            guestRestrictionInput.name = `foodRestrictions${seat.number}`;
            //this.formElements.seats[seat.number].foodRestrictions = guestRestrictionInput;
            formLineDiv.appendChild(guestRestrictionInput);


            seatDiv.appendChild(formLineDiv);                
        }
        for(let seat of table.seats) {
            this.initializeSeatInputs(seat);
        }

        this.updateTotals();
    }

    initializeSeatInputs(seat) {
        
        this.formElements.seats[seat.number].guestAge = $(`.editor-select-age-${seat.number}`).select2({
            minimumResultsForSearch: -1,
            data: [
                { id: 'ADULT', text: 'mais de 7 anos' },
                { id: 'CHILD', text: '3 a 7 anos' },
                { id: 'BABY', text: '6 meses a 2 anos' },
                { id: 'NEWBORN', text: '0 a 5 meses' },
            ],
            val: seat?.guestAge || null
        });
        if (seat?.guestAge) $(`.editor-select-age-${seat.number}`).val(seat.guestAge).trigger('change');
        $(`.editor-select-age-${seat.number}`).on("select2:select", () => { this.updateTotals(); });

        this.formElements.seats[seat.number].foodRestrictions = $(`.editor-form-select-restriction-${seat.number}`).select2({
            placeholder: '',
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            data: [
                { id: '1', text: 'veg', description: 'Vegetariano' },
                { id: '2', text: 'Veg', description: 'Vegan' },
                { id: '3', text: 'PC', description: 'Trocar peixe por carne' },
                { id: '4', text: 'CP', description: 'Trocar carne por peixe' },
            ],
            templateSelection: function (table) {
                if (!table.id) return table.text;

                var $state = $(
                    `<span class="option">${table.text}, </span>`
                );
                return $state;
            }
        });
        if (seat?.foodRestrictions?.length > 0) $(`.editor-form-select-restriction-${seat.code}`).val(seat.foodRestrictions).trigger('change');
    }

    open(table) {
        this.createModalBody(table);
        this.modalElement.style.display = "block";
    }

    close() {
        this.modalElement.style.display = "none";
    }

    save() {
        // Add logic to handle saving data
        console.log("Saving data...");
        if(this.validateForm())  {
            
            this.subjectTable.name = this.formElements.name.value;
            this.subjectTable.notes = this.formElements.notes.value;

            for(const [i, seat] of this.subjectTable.seats.entries()) {
                seat.guestName = this.formElements.seats[i].guestName.value;
                seat.guestAge = this.formElements.seats[i].guestAge.select2('data')[0].id;
                seat.foodRestrictions = this.formElements.seats[i].foodRestrictions.select2('data').map(v => v.id);
            }
            
            this.subjectTable.updateSeats();
            this.close();
        }

    }

    submitForm(event) {
        // Add logic to handle form submission
        console.log("Form submitted:", event);
        this.save();
    }  

    validateForm() {    
        const tableName = this.formElements.name;
        if (tableName == '') {
            document.getElementById("tableName").setCustomValidity("Invalid field.")
            document.getElementById("tableName").reportValidity();
            return false;
        } else {
            document.getElementById("tableName").setCustomValidity("");
            return true;
        }

        // You can add more functionality as needed.
    }

    updateTotals() {
        
        let totalAdult = 0;
        if(document.getElementById('totalAdult')) {
            totalAdult = this.formElements.seats.filter(s => s.guestAge.select2('data')[0].id == 'ADULT').length;
            document.getElementById('totalAdult').innerHTML = totalAdult;
        }

        let totalChild = 0;
        if(document.getElementById('totalChild')) {
            totalChild = this.formElements.seats.filter(s => s.guestAge.select2('data')[0].id == 'CHILD').length;
            
            document.getElementById('totalChild').innerHTML = totalChild;
        }

        let totalBaby = 0;
        if(document.getElementById('totalBaby')) {
            totalBaby = this.formElements.seats.filter(s => s.guestAge.select2('data')[0].id == 'BABY').length;
            document.getElementById('totalBaby').innerHTML = totalBaby;
        }

        let  totalNewborn = 0;
        if(document.getElementById('totalNewborn')) {
            totalNewborn = this.formElements.seats.filter(s => s.guestAge.select2('data')[0].id == 'NEWBORN').length;
            document.getElementById('totalNewborn').innerHTML = totalNewborn;
        }

        if(document.getElementById('totalStroller')) {
            if(totalNewborn > 0) {
    
                document.getElementById('totalStroller').classList.remove('hide');
                document.getElementById('totalStroller').innerHTML = `${totalNewborn} carrinho`;
            } else {
                document.getElementById('totalStroller').classList.add('hide');
            }
        }

        const total = totalAdult + totalChild;
        document.getElementById('total').innerHTML = total;
    }

}



if(!window.RoomEditor) {
    window.RoomEditor = RoomEditor;
}
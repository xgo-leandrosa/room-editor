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
        this.element.style.transform = `translate(${this.x - this.halfWidth}px, ${this.y - this.halfWidth}px) scale(${this.scale}) rotate(${this.rotate}deg)`;
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
    }

    removeTable(table) {
        table.removeOfContainer();
        this.tables = this.tables.filter(t => t !== table);
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

    tableDefaultSize = 155;
    seatsPositions = [
    ];
    seats = [];
    tableType = "Table";
    
    tableElement;
    tableElementSize = 105;

    couple = false;
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

    addSeatsTooltips() {
        for (let seat of this.seats) {
            tippy(seat.element, { content: seat.gestName })
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
    couple = true;
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
    couple = true;

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
            x: 46,
            y: 176,
            rotate: 0,
        },
        {
            number: 1,
            x: 6,
            y: 114,
            rotate: 0,
        },
        {
            number: 2,
            x: 7,
            y: 61,
            rotate: 0,
        },
        {
            number: 3,
            x: 43,
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
            x: 425,
            y: 61,
            rotate: 0,
        },
        {
            number: 8,
            x: 430,
            y: 102,
            rotate: 0,
        },
        {
            number: 9,
            x: 400,
            y: 163,
            rotate: 0,
        },
    ];
    seats = [];
    tableType = "CoupleOvalMTable";
    couple = true;

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
    tableType = "CoupleOvalLTable";
    couple = true;

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
    couple = true;

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
    couple = true;

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
    RoundTable,
    CoupleRoundTable,
    CoupleOvalSTable,
    CoupleOvalMTable,
    CoupleOvalLTable,
    CoupleForestSTable,
    CoupleForestMTable,
}

class Seat extends RoomObject {
    number = 0;
    code = 0;
    gestName = "Guest";
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

            this.setREM();
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

    constructor(world, editorContainerElement) {
        this.editorContainerElement = editorContainerElement;
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

    initializeUi() {
        const ui1 = document.createElement('div');
        ui1.classList.add("ant-row");
        ui1.style["justify-content"] = "space-between";
        
        /*<option title="round-table" value="ovals" pax="14">Redonda</option>
        <option title="square-table" value="square" pax="14">Quadrada</option>
        <option title="rectangular-table" value="forestS">Forest S</option>
        <option title="rectangular-table" value="forestM">Forest M</option>*/
        ui1.innerHTML = `
            <div style="display: inline-flex;">
                <div class="input" style="width: 180px;">
                    <label>Mesa dos noivos:</label>
                    <select class="js-example-basic-multiple ui">
                        <option title="round-table" value="CoupleRoundTable" pax="14">Redonda</option>
                        <option title="round-table" value="CoupleOvalSTable" pax="14">Oval S</option>
                        <option title="round-table" value="CoupleOvalMTable" pax="14">Oval M</option>
                        <option title="round-table" value="CoupleOvalLTable" pax="14">Oval L</option>
                        <option title="rectangular-table" value="CoupleForestSTable" pax="14">Forest S</option>
                        <option title="rectangular-table" value="CoupleForestMTable" pax="14">Forest M</option>
                    </select>
                </div>
        
                <div class="input ui">
                    <label>Tipo:</label>
                    <div class="types">
                        <div class="ant-radio">
                            <input type="radio" id="guest" name="contact" value="guest">
                            <span for="contactChoice1">Convidados</span>
                        </div>
        
                        <div class="ant-radio">
                            <input type="radio" id="staff" name="contact" value="staff">
                            <span for="contactChoice1">Staff</span>
                        </div>
        
                        <div class="ant-radio">
                            <input type="radio" id="children" name="contact" value="children">
                            <span for="contactChoice1">Crianças</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <button class="ant-btn ant-btn-primary">
                <i class="fas fa-undo"></i>
                Retroceder
            </button>
        `;
        
        
        const ui2 = document.createElement('div');
        ui2.classList.add("ant-row");

        ui2.innerHTML = `
        <div class="input">
                <label>Mesas:</label>
                <div class="tables_ui" style="margin-top: 2px">
                    <button class="ant-btn ui guestTableChooserItem" data-tableType="RoundTable">
                        <div class="table_ui round-table  ui guestTableChooserItem" data-tableType="RoundTable"></div>
                        Redonda
                        <div class="pax  ui guestTableChooserItem" data-tableType="RoundTable">
                            <i class="fa-regular fa-user  ui guestTableChooserItem" data-tableType="RoundTable"></i>14
                        </div>
                    </button>
                    <button class="ant-btn ui guestTableChooserItem">
                        <div class="table_ui oval-table"></div>
                        Oval
                        <div class="pax">
                            <i class="fa-regular fa-user"></i>14
                        </div>
                    </button>
                    <button class="ant-btn ui guestTableChooserItem" data-tableType="SquareTable">
                        <div class="table_ui square-table  guestTableChooserItem" data-tableType="SquareTable"></div>
                        Quadrada
                        <div class="pax  guestTableChooserItem" data-tableType="SquareTable">
                            <i class="fa-regular fa-user  guestTableChooserItem" data-tableType="SquareTable"></i>14
                        </div>
                    </button>
                    <button class="ant-btn ui guestTableChooserItem" data-tableType="RectangularTable">
                        <div class="table_ui rectangular-table ui guestTableChooserItem" data-tableType="RectangularTable"></div>
                        Retangular
                        <div class="pax ui guestTableChooserItem" data-tableType="RectangularTable">
                            <i class="fa-regular fa-user  ui guestTableChooserItem" data-tableType="RectangularTable"></i>14
                        </div>
                    </button>
                    <button class="ant-btn ui guestTableChooserItem">
                        <div class="table_ui rectangular-table"></div>
                        Retangular Aumento
                        <div class="pax">
                            <i class="fa-regular fa-user"></i>14
                        </div>
                    </button>
                    <button class="ant-btn ui guestTableChooserItem">
                        <div class="table_ui rectangular-table"></div>
                        Forest
                        <div class="pax">
                            <i class="fa-regular fa-user"></i>14
                        </div>
                    </button>
                </div>
            </div>
        `;
        
        this.editorContainerElement.appendChild(ui1);
        this.editorContainerElement.appendChild(ui2);

        
            $('.js-example-basic-multiple').select2({
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
                }
            });

            $('.js-example-basic-multiple').on("select2:select", (event) => {
                const tableCouple = this.world.tables.find(t => t.couple);

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
        ul.classList.add("menu");
        menu.appendChild(ul);

        ul.innerHTML = `
                <li class="download"><a href="#" id="ui-context-rotate" ><i class="fas fa-sync-alt" aria-hidden="true"></i> Rodar</a></li>
                <li class="trash"><a href="#" id="ui-context-delete"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</a></li>
        `;

        document.body.appendChild(menu);

        document.getElementById("ui-context-rotate").onclick = (event) => {
            this.contextMenuAction(event, 'ROTATE')
        };
        document.getElementById("ui-context-delete").onclick = (event) => {
            this.contextMenuAction(event, 'DELETE')
        };

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

    getFocalPosition(event, deltaScale = 0) {
        return { x: 0, y: 0 };
    }

    getWorldPositionCenterScreen() {
        const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = ((editorRect.x + (editorRect.width/2)) - (roomPlanRect.left)) / this.world.scale;
        let y = ((editorRect.y + (editorRect.height/2)) - (roomPlanRect.top)) / this.world.scale;
        
        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        console.log("World Position:")
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

        console.log("World Position:")
        this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    handleContextMenu(event) {
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

        this.mouseManager = new MouseManager(this.world, this.editorContainerElement);
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
        }
    }

    serializeEditor() {
        const serializedData = {
            world: {
                x: world.x,
                y: world.y,
                scale: world.scale,
            },
            roomPlan: {
                imageSrc: world.roomPlan.imageSrc,
                x: world.roomPlan.x,
                y: world.roomPlan.y,
                scale: world.roomPlan.scale,
            },
            tables: [],
        };

        // Serialize each object in the editor
        this.world.tables.forEach((table) => {
            const serializedObject = {
                x: table.x,
                y: table.y,
                scale: table.scale,
                tableType: table.tableType,
                code: table.code,
                // Add other properties specific to your object
            };

            // Add the serialized object to the array
            serializedData.tables.push(serializedObject);
        });

        // Convert the serialized data to JSON
        const jsonString = JSON.stringify(serializedData);
        localStorage.setItem('savedWorld', jsonString);
        return jsonString;
    }

    deserializeEditor(jsonString) {
        // Parse the JSON string
        const serializedData = JSON.parse(jsonString);

        // Deserialize the world
        const world = new World(this.editorContainerElement);
        world.x = serializedData.world.x;
        world.y = serializedData.world.y;
        world.scale = serializedData.world.scale;
        world.applyTransform();


        const roomPlan = new RoomPlan(serializedData.roomPlan.imageSrc);
        roomPlan.x = serializedData.roomPlan.x;
        roomPlan.y = serializedData.roomPlan.y;
        roomPlan.scale = serializedData.roomPlan.scale;

        world.setRoomPlan(roomPlan);
        roomPlan.applyTransform();

        // Deserialize each object in the editor
        serializedData.tables.forEach((serializedObject) => {
            const object = new TableTypes[serializedObject.tableType](world);
            object.x = serializedObject.x;
            object.y = serializedObject.y;
            object.scale = serializedObject.scale;
            object.init();
            // Add other properties specific to your object

            // Add the deserialized object to the world
            world.addTable(object);
            object.applyTransform();
        });

        world.updateTablesCode();

        return world;
    }
}

if(!window.RoomEditor) {
    window.RoomEditor = RoomEditor;
}
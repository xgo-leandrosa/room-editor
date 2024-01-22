const DEFAULT_TRANSLATIONS = [
    {
        value: {
            pt: "Cancelar",
            en: "Cancel",
            es: "Cancelar",
            fr: "Annuler"
        },
        tag: "CANCEL",
        platform: "BO"
    },
    {
        value: {
            pt: "Eliminar",
            en: "Delete",
            es: "Eliminar",
            fr: "Éliminer"
        },
        "canBeDeleted": true,
        platform: "BO",
        tag: "DELETE"
    },
    {
        value: {
            pt: "Rodar",
            en: "Rotate",
            es: "Girar",
            fr: "Tourner"
        },
        platform: "BO",
        tag: "ROTATE"
    },
    {
        value: {
            pt: "A partir dos 8 anos",
            en: "From 8 years old",
            es: "A partir de 8 años",
            fr: "A partir de 8 ans"
        },
        tag: "ABOVE_8_YEARS",
        platform: "BO"
    },
    {
        value: {
            pt: "Maior de 8 anos",
            en: "Over 8 years old",
            es: "Mayores de 8 años",
            fr: "Plus de 8 ans"
        },
        tag: "ADULT_AGE",
        platform: "BO",
    },
    {
        value: {
            pt: "3 aos 7 anos",
            en: "3 to 7 years old",
            es: "3 a 7 años",
            fr: "3 à 7 ans"
        },
        tag: "CHILD_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "6 meses a 2 anos",
            en: "6 months to 2 years",
            es: "6 meses a 2 años",
            fr: "6 meses a 2 años"
        },
        tag: "BABY_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "Carrinho",
            en: "Stroller",
            es: "Cochecito",
            fr: "Poussette"
        },
        tag: "BABY_CAR",
        platform: "BO"
    },
    {
        value: {
            pt: "Dos 6 meses a 2 anos",
            en: "From 6 months to 2 years",
            es: "De 6 meses a 2 años",
            fr: "De 6 meses a 2 años"
        },
        tag: "FROM_BABY_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "Dos 3 aos 7 anos",
            en: "From 3 to 7 years old",
            es: "De 3 a 7 años",
            fr: "De 3 à 7 ans"
        },
        tag: "FROM_CHILD_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "Dos 0 a 5 meses",
            en: "From 0 to 5 months",
            es: "De 0 a 5 meses",
            fr: "De 0 à 5 mois"
        },
        tag: "FROM_NEWBORN_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "Dos 0 aos 2 anos",
            en: "From 0 to 2 years",
            es: "De 0 a 2 años",
            fr: "De 0 à 2 ans"
        },
        tag: "FROM_NEWBORN_CHILD_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "0 a 5 meses",
            en: "0 to 5 months",
            es: "0 a 5 meses",
            fr: "0 à 5 mois"
        },
        tag: "NEWBORN_AGE",
        platform: "BO"
    },
    {
        value: {
            pt: "Notas",
            en: "Notes",
            es: "Notas",
            fr: "Remarques"
        },
        tag: "NOTES",
        platform: "BO"
    },
    {
        value: {
            pt: "Crianças",
            en: "Children",
            es: "Niños",
            fr: "Enfants"
        },
        tag: "ROOM_PLAN_CHILD",
        platform: "BO"
    },
    {
        value: {
            pt: "Convidados",
            en: "Guests",
            es: "Invitados",
            fr: "Invités"
        },
        tag: "ROOM_PLAN_GUESTS",
        platform: "BO"
    },
    {
        value: {
            pt: "Staff",
            en: "Staff",
            es: "Staff",
            fr: "Staff"
        },
        tag: "ROOM_PLAN_STAFF",
        platform: "BO"
    },
    {
        value: {
            pt: "Mesas para",
            en: "Tables for",
            es: "Tablas para",
            fr: "Tables pour"
        },
        platform: "BO",
        tag: "TYPE_TABLES"
    },
    {
        value: {
            pt: "Mesa do casal",
            en: "Couple's table",
            es: "Mesa de pareja",
            fr: "La table des couples"
        },
        tag: "COUPLE_TABLES",
        platform: "BO"
    },
    {
        value: {
            pt: "Gerir convidados",
            en: "Manage guests",
            es: "Administrar invitados",
            fr: "Gérer les invités"
        },
        tag: "MNG_GUESTS",
        platform: "BO"
    },
    {
        value: {
            pt: "Mesas",
            en: "Tables",
            es: "Tablas",
            fr: "Tables"
        },
        platform: "BO",
        tag: "TABLES"
    },







    {
        value: {
            pt: "Média pax/mesa",
            en: "Average pax/table",
            es: "Promedio pax/tabla",
            fr: "Moyenne pax/table"
        },
        tag: "AVG_PAX_TABLES",
        platform: "BO"
    },


    {
        value: {
            pt: "Posicionamento casal",
            en: "Couple positioning",
            es: "Posicionamiento de pareja",
            fr: "Positionnement du couple"
        },
        tag: "COUPLE_POSITION",
        platform: "BO"
    },

    {
        value: {
            pt: "c/convidados à frente",
            en: "w/guests in front",
            es: "con invitados al frente",
            fr: "avec des invités devant"
        },
        tag: "COUPLE_TABLE_COMPLETE",
        platform: "BO"
    },
    {
        value: {
            pt: "s/convidados à frente",
            en: "w/o guests at the front",
            es: "sin invitados al frente",
            fr: "sans invités à l'avant"
        },
        tag: "COUPLE_TABLE_INCOMPLETE",
        platform: "BO"
    },
    {
        value: {
            pt: "Mesa de noivos > 8 pax",
            en: "Couple table > 8 pax",
            es: "Mesa de novios > 8 pax",
            fr: "Table de marié > 8 pax"
        },
        tag: "COUPLE_TABLE_OPTIONS",
        platform: "BO"
    },

    {
        value: {
            pt: "Cadeiras vazias",
            en: "Empty chairs",
            es: "Sillas vacias",
            fr: "Chaises vides"
        },
        tag: "EMPTY_CHAIRS",
        platform: "BO"
    },
    {
        value: {
            pt: "Erro",
            en: "Error",
            es: "Error",
            fr: "Erreur"
        },
        "canBeDeleted": false,
        tag: "ERROR",
        platform: "BO"
    },
    {
        value: {
            pt: "Evento de",
            en: "Event by",
            es: "Evento por",
            fr: "Événement par"
        },
        tag: "EVENT_BY",
        platform: "BO"
    },
    {
        value: {
            pt: "Cadeiras preenchidas",
            en: "Filled chairs",
            es: "Sillas llenas",
            fr: "Chaises remplies"
        },
        tag: "FILLED_CHAIRS",
        platform: "BO"
    },

    {
        value: {
            pt: "Convidados previstos",
            en: "Expected guests",
            es: "Invitados esperados",
            fr: "Invités attendus"
        },
        tag: "GUEST_EXPECTED",
        platform: "BO"
    },
    {
        value: {
            pt: "Plano dos convidados",
            en: "Guest plan",
            es: "Plan de invitados",
            fr: "Forfait invité"
        },
        tag: "GUEST_PLAN",
        platform: "BO"
    },
    {
        value: {
            pt: "Não é possível unir as mesas",
            en: "Unable to join tables",
            es: "No se puede unir mesas",
            fr: "Impossible de rejoindre les tables"
        },
        "canBeDeleted": false,
        tag: "INVALID_TABLE_JOIN",
        platform: "BO"
    },
    {
        value: {
            pt: "Unir mesas",
            en: "Join tables",
            es: "Unirse tablas",
            fr: "Joindre des tables"
        },
        "canBeDeleted": false,
        tag: "JOIN_TABLES",
        platform: "BO"
    },
    {
        value: {
            pt: "Deseja unir as mesas?",
            en: "Do you want to join the tables?",
            es: "¿Quieres unirte a las mesas?",
            fr: "Voulez-vous rejoindre les tables?"
        },
        "canBeDeleted": false,
        tag: "JOIN_TABLES_QUESTION",
        platform: "BO"
    },
    {
        value: {
            pt: "Ao unir as mesas, o plano de sala e posicionamentos das outras mesas poderão alterar de maneira a respeitar as regras de sala e posicionamentos.",
            en: "When joining tables, the room plan and positioning of other tables may change in order to respect the room rules and positions.",
            es: "Al unir mesas, el plano de la sala y la ubicación de otras mesas pueden cambiar para respetar las reglas y posiciones de la sala.",
            fr: "Lors de la jonction des tables, le plan de la salle et le positionnement des autres tables peuvent changer afin de respecter les règles et positions de la salle."
        },
        "canBeDeleted": false,
        tag: "JOIN_TABLES_QUESTION_DESCRIPTION",
        platform: "BO"
    },



    {
        value: {
            pt: "Nº",
            en: "No.",
            es: "Nº",
            fr: "N°"
        },
        tag: "NUMBER_SHORT",
        platform: "BO"
    },


    {
        value: {
            pt: "Redonda",
            en: "Round",
            es: "Redondo",
            fr: "Rond"
        },
        tag: "CoupleRoundTable"
    },
    {
        value: {
            pt: "Oval S",
            en: "Oval S",
            es: "Ovalado S",
            fr: "Ovale S"
        },
        tag: "CoupleOvalSTable"
    },
    {
        value: {
            pt: "Oval M",
            en: "Oval M",
            es: "Ovalado M",
            fr: "Ovale M"
        },
        tag: "CoupleOvalMTable"
    },
    {
        value: {
            pt: "Oval M completa",
            en: "Oval M complete",
            es: "Ovalado M completo",
            fr: "Ovale M complet"
        },
        tag: "CoupleOvalMFullTable"
    },
    {
        value: {
            pt: "Oval L",
            en: "Oval L",
            es: "Ovalado L",
            fr: "Ovale L"
        },
        tag: "CoupleOvalLFullTable"
    },
    {
        value: {
            pt: "Oval L completa",
            en: "Oval L complete",
            es: "Ovalado L completo",
            fr: "Ovale L complet"
        },
        tag: "CoupleOvalLTable"
    },
    {
        value: {
            pt: "Forest S",
            en: "Forest S",
            es: "Forest S",
            fr: "Forest S"
        },
        tag: "CoupleForestSTable"
    },
    {
        value: {
            pt: "Forest M",
            en: "Forest M",
            es: "Forest M",
            fr: "Forest M"
        },
        tag: "CoupleForestMTable"
    },
    {
        value: {
            pt: "Forest M",
            en: "Forest M",
            es: "Forest M",
            fr: "Forest M"
        },
        tag: "ForestMTable"
    },
    {
        value: {
            pt: "Redonda",
            en: "Round",
            es: "Redondo",
            fr: "Rond"
        },
        tag: "RoundTable"
    },
    {
        value: {
            pt: "Quadrada",
            en: "Square",
            es: "Cuadrado",
            fr: "Carré"
        },
        tag: "SquareTable"
    },
    {
        value: {
            pt: "Retangular M",
            en: "Rectangular M",
            es: "Rectángulo M",
            fr: "Rectangulaire M"
        },
        tag: "RectangularTable"
    },
    {
        value: {
            pt: "Retangular L",
            en: "Rectangular L",
            es: "Rectángulo L",
            fr: "Rectangulaire L"
        },
        tag: "RectangularLTable"
    },
    {
        value: {
            pt: "Oval",
            en: "Oval",
            es: "Oval",
            fr: "Ovale"
        },
        tag: "OVAL_TABLE",
        platform: "BO"
    },
    {
        value: {
            pt: "Retangular",
            en: "Rectangular",
            es: "Rectangular",
            fr: "Rectangulaire"
        },
        tag: "RECTANGULAR_TABLE",
        platform: "BO"
    },


    {
        value: {
            pt: "Retroceder",
            en: "Rewind",
            es: "Regresa",
            fr: "Retourner"
        },
        platform: "BO",
        tag: "REWIND"
    },
    {
        value: {
            pt: "Plano de sala",
            en: "Room plan",
            es: "Plan des salles",
            fr: "Plano de la sala"
        },
        tag: "ROOM_PLAN",
        platform: "BO"
    },

    {
        value: {
            pt: "Posicionamento global",
            en: "Global positioning",
            es: "Posicionamiento global",
            fr: "Positionnement global"
        },
        tag: "ROOM_PLAN_POSITION",
        platform: "BO"
    },

    {
        value: {
            pt: "Total mesas",
            en: "Total tables",
            es: "Tablas totales",
            fr: "Tables totaux"
        },
        tag: "ROOM_PLAN_TOTAL_TABLES",
        platform: "BO"
    },
    {
        value: {
            pt: "PAX total",
            en: "Total PAX",
            es: "PAX totales",
            fr: "Total PAX"
        },
        tag: "ROOM_PLAN_TOTAL_PAX",
        platform: "BO"
    },

    {
        value: {
            pt: "Redonda",
            en: "Round",
            es: "Redondo",
            fr: "Rond"
        },
        tag: "ROUND_TABLE",
        platform: "BO"
    },
    {
        value: {
            pt: "Quadrada",
            en: "Square",
            es: "Cuadrado",
            fr: "Carré"
        },
        tag: "SQUARE_TABLE",
        platform: "BO"
    },

    {
        value: {
            pt: "Folhetos de mesa",
            en: "Table flyers",
            es: "Folletos de mesa",
            fr: "Dépliants de table"
        },
        tag: "TABLE_FLYERS",
        platform: "BO"
    },
    {
        value: {
            pt: "Posição inválida",
            en: "Invalid position",
            es: "Posición no válida",
            fr: "Poste invalide"
        },
        tag: "TABLE_INVALID_POSITION",
        platform: "BO"
    },

    {
        value: {
            pt: "Local",
            en: "Venue",
            es: "Lugar",
            fr: "Lieu"
        },
        tag: "WEDDING_PLACE_SHORT",
        platform: "BO"
    },
    {
        value: {
            pt: "Sem convidados",
            en: "No guests",
            es: "Sin invitados",
            fr: "Aucun invité"
        },
        tag: "NO_GUESTS",
        platform: "BO",
    },
    {
        value: {
            pt: "Alterar mesa",
            en: "Change table",
            es: "Cambiar tabla",
            fr: "Changer de tableau"
        },
        tag: "CHANGE_TABLE",
        platform: "BO",
    },
    {
        value: {
            pt: "As alterações de ingredientes ficarão a cargo do chefe.",
            en: "Ingredient changes will be the responsibility of the chef.",
            es: "Los cambios de ingredientes serán responsabilidad del chef.",
            fr: "Les changements d'ingrédients seront à la charge du chef."
        },
        tag: "CHEF_CHOICE",
        platform: "BO",
    }
];


class RoomObject {


    constructor() {
        this.translationSystem = new TranslationSystem();

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

        if (this.rotate > 360) {
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
        this.element.style.transform = `translate(${this.x + this.halfWidth}px, ${this.y + this.halfHeight}px) scale(${this.scale}) rotate(${this.rotate}deg)`;
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

        this.foodRestrictions = [];

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
        this.roomPlan.buildConstraintZonePolygonElement();
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
        for (let table of this.tables) {
            table.removeOfContainer();
        }
        this.tables = [];
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }

    debugElements = [];

    rotatePoint(x, y, angleDegrees) {
        // Convert angle to radians
        var angleRadians = angleDegrees * Math.PI / 180;
    
        // Calculate new coordinates after rotation
        var xPrime = x * Math.cos(angleRadians) - y * Math.sin(angleRadians);
        var yPrime = x * Math.sin(angleRadians) + y * Math.cos(angleRadians);
    
        // Return the new coordinates
        return { x: xPrime, y: yPrime };
    }

    rotatePointAroundOrigin(x, y, angleDegrees, originX = 0, originY = 0) {
        // Translate the point to make the origin coincide with (0, 0)
        var translatedX = x - originX;
        var translatedY = y - originY;
    
        // Rotate the translated point around the origin
        var rotatedPoint = this.rotatePoint(translatedX, translatedY, angleDegrees);
    
        // Translate the rotated point back to the original position
        rotatedPoint.x += originX;
        rotatedPoint.y += originY;
    
        // Return the new coordinates
        return rotatedPoint;
    }
    

    calculateTableAreaCorners(table) {
        if(table.rotate > 0) { 
            return {
                lt: this.rotatePointAroundOrigin((table.x + table.halfWidth), (table.y + table.halfHeight), table.rotate, (table.x  + table.width), (table.y  + table.height)),
                rt:this.rotatePointAroundOrigin((table.x + table.halfWidth) + table.width, (table.y + table.halfHeight), table.rotate, (table.x  + table.width), (table.y  + table.height)),
                lb:this.rotatePointAroundOrigin((table.x + table.halfWidth) + table.width, (table.y + table.halfHeight) + table.height, table.rotate, (table.x  + table.width), (table.y  + table.height)),
                rb:this.rotatePointAroundOrigin((table.x + table.halfWidth), (table.y + table.halfHeight) + table.height, table.rotate, (table.x  + table.width), (table.y  + table.height)),
            };
        } else {
            return {
                lt: { x: (table.x + table.halfWidth), y: (table.y + table.halfHeight) },
                rt:{ x: (table.x + table.halfWidth) + table.width, y: (table.y + table.halfHeight) },
                lb:{ x: (table.x + table.halfWidth) + table.width, y: (table.y + table.halfHeight) + table.height },
                rb:{ x: (table.x + table.halfWidth), y: (table.y + table.halfHeight) + table.height },
            };
        }
    }


    setDebugPoints(table, color) {

        if(table.rotate > 0) {
            
            
            let localPoslt = this.rotatePointAroundOrigin((table.x + table.halfWidth), (table.y + table.halfHeight), table.rotate, (table.x  + table.width), (table.y  + table.height));
            this.addDebugPoint(color, localPoslt.x, localPoslt.y);
            let localPosrt = this.rotatePointAroundOrigin((table.x + table.halfWidth) + table.width, (table.y + table.halfHeight), table.rotate, (table.x  + table.width), (table.y  + table.height));
            this.addDebugPoint(color, localPosrt.x, localPosrt.y);
            let localPoslb = this.rotatePointAroundOrigin((table.x + table.halfWidth) + table.width, (table.y + table.halfHeight) + table.height, table.rotate, (table.x  + table.width), (table.y  + table.height));
            this.addDebugPoint(color, localPoslb.x, localPoslb.y);
            let localPosrb = this.rotatePointAroundOrigin((table.x + table.halfWidth), (table.y + table.halfHeight) + table.height, table.rotate, (table.x  + table.width), (table.y  + table.height));
            this.addDebugPoint(color, localPosrb.x, localPosrb.y);
        }   
    }

    addDebugPoint(color, x, y) {
        const i = this.debugElements.length;
        this.debugElements[i] = document.createElement("div");
        this.debugElements[i].classList.add("debugPoint");;
        this.debugElements[i].style.position = "absolute";
        this.debugElements[i].style.background = color;
        this.debugElements[i].style.width = "5px";
        this.debugElements[i].style.height = "5px";
        this.debugElements[i].style.transform = `translate(${x}px, ${y}px)`;
        this.element.appendChild(this.debugElements[i]);
    }

    clearDebugPoints() {
        for (let debugPoint of this.debugElements) {
            this.element.removeChild(debugPoint);
        }

        this.debugElements = [];
    }

    isPointInPolygon(x, y , polygon) {
        if(polygon.length == 0) {
            return true;
        }
         // Get the angle between the point and the first and last vertices.
        let maxPoint = polygon.length - 1;
        let totalAngle = this.getAngle(polygon[maxPoint].x, polygon[maxPoint].y, x, y, polygon[0].x, polygon[0].y);

        // Add the angles from the point to each other pair of vertices.
        for (let i = 0; i < maxPoint; i++) {
            totalAngle += this.getAngle(polygon[i].x, polygon[i].y, x, y, polygon[i + 1].x, polygon[i + 1].y);
        }

        // The total angle should be 2 * Math.PI or -2 * Math.PI if
        // the point is in the polygon and close to zero
        // if the point is outside the polygon.
        
        return Math.abs(totalAngle) > 0.000001;
    }

    getAngle(ax, ay, bx, by, cx, cy) {
        // Get the dot product.
        let dotProduct = this.dotProduct(ax, ay, bx, by, cx, cy);
    
        // Get the cross product.
        let crossProduct = this.crossProductLength(ax, ay, bx, by, cx, cy);
    
        // Calculate the angle.
        return Math.atan2(crossProduct, dotProduct);
    }
    
    dotProduct(ax, ay, bx, by, cx, cy) {
        // Get the vectors' coordinates.
        let bAx = ax - bx;
        let bAy = ay - by;
        let bCx = cx - bx;
        let bCy = cy - by;
    
        // Calculate the dot product.
        return (bAx * bCx + bAy * bCy);
    }
    
    crossProductLength(ax, ay, bx, by, cx, cy) {
        // Get the vectors' coordinates.
        let bAx = ax - bx;
        let bAy = ay - by;
        let bCx = cx - bx;
        let bCy = cy - by;
    
        // Calculate the cross product length.
        return (bAx * bCy - bAy * bCx);
    }

    checkTableInConstraintZone(table) {
        const isLt = this.isPointInPolygon(table.x + (table.width/2), table.y + (table.height/2), this.roomPlan.constraintZonePolygon);
        const isRt = this.isPointInPolygon(table.x + (table.width + table.width/2), table.y + (table.height/2), this.roomPlan.constraintZonePolygon);
        const isLb = this.isPointInPolygon(table.x + (table.width/2), table.y + (table.height + table.height/2), this.roomPlan.constraintZonePolygon);
        const isRb = this.isPointInPolygon(table.x + (table.width + table.width/2), table.y + (table.height + table.height/2), this.roomPlan.constraintZonePolygon);

        if(!(isLt && isRt && isLb && isRb)) {
            table.isInDanger();
        }

    }

    checkTablesInConstraintZone() {
        for(let table of this.tables) {
            this.checkTableInConstraintZone(table);
        }
    }

    calculateIntersectionArea(rect1, rect2) {

        // TODO ADD FLAG
        const cornersRect1 = this.calculateTableAreaCorners(rect1);
        const cornersRect2 = this.calculateTableAreaCorners(rect2);
        
        this.setDebugPoints(rect1, "red");
        this.setDebugPoints(rect2, "blue");

        // Check for separation along each axis
        if (
            (rect1.x + rect1.halfWidth) + rect1.width < (rect2.x + rect2.halfWidth) ||
            (rect1.x + rect1.halfWidth) > (rect2.x + rect2.halfWidth) + rect2.width ||
            (rect1.y + rect1.halfHeight) + rect1.height < (rect2.y + rect2.halfHeight) ||
            (rect1.y + rect1.halfHeight) > (rect2.y + rect2.halfHeight) + rect2.height
        ) {
            // Rectangles do not intersect
            return 0;
        }


        // Calculate the overlap along the x-axis
        const xOverlap = Math.min((rect1.x + rect1.halfWidth) + rect1.width, (rect2.x + rect2.halfWidth) + rect2.width) - Math.max((rect1.x + rect1.halfWidth), (rect2.x + rect2.halfWidth));

        // Calculate the overlap along the y-axis
        const yOverlap = Math.min((rect1.y + rect1.halfHeight) + rect1.height, (rect2.y + rect2.halfHeight) + rect2.height) - Math.max((rect1.y + rect1.halfHeight), (rect2.y + rect2.halfHeight));

        // Calculate the area of intersection
        const intersectionArea = xOverlap * yOverlap;

        return intersectionArea;
    }

    areTablesOverlapping() {
        // Helper function to calculate the intersection area of two rectangles
        for (let i = 0; i < this.tables.length; i++) {
            this.tables[i].isSafe();
        }

        // TODO ADD FLAG
        this.clearDebugPoints();

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
        
        this.checkTablesInConstraintZone();
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

    constraintZonePolygon = [];

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
        if (this.elementImg) {
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

            //TODO ALWAYS DO THIS ? 
            this.constrainElement.style.width = `${this.width}px`;
            this.constrainElement.style.height = `${this.height}px`;
        }

        this.elementImg.style.width = '100%';
        this.elementImg.style.height = '100%';
        this.elementImg.src = imageSrc;
        this.element.appendChild(this.elementImg);
    }

    buildConstraintZonePolygonElement() {
        const element = document.createElement("div");
        element.style.width = `${this.width}px`;
        element.style.height = `${this.height}px`;
        element.style.position = "absolute";
        this.world.element.appendChild(element);
        this.constrainElement = element;

        this.updateConstrainZonePoligonElement();
    }

    updateConstrainZonePoligonElement() {
        if(this.constrainElement) {

            if(this.constraintZonePolygon.length > 0)
                this.constrainElement.style.background = "#ff00000f";
            else
                this.constrainElement.style.background = "none";

            let coords = '';
            for(let i = 0; i <= this.constraintZonePolygon.length-1; i++) {
                const isLast = this.constraintZonePolygon.length-1 == i;
                const p = this.constraintZonePolygon[i];
                coords += ` ${p.x}px ${p.y}px` + (!isLast ? ',': '');
            }
            this.constrainElement.style["clip-path"] = `polygon(${coords})`;
        }
    }

    clearConstraintPoints() {
        this.constraintZonePolygon = [];
        this.updateConstrainZonePoligonElement();
    }

    addConstraintZonePolygon(x, y) {
        /*const element = document.createElement("div");
        element.style.width = "20px";
        element.style.height = "20px";
        element.style.background = "violet";
        element.style.position = "absolute";
        element.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        this.world.element.appendChild(element);*/
        this.constraintZonePolygon.push({
            x,
            y,
            //element
        });
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
            seat.x = seatPosition.x + (this.spaceBetweenTables / 2);
            seat.y = seatPosition.y + (this.spaceBetweenTables / 2);
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
        this.tableElementNumeration.style.top = "40%";
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
        this.tableElement.style.transform = `translate(${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px, ${TABLE_ELEMENT_OFFSET + (this.spaceBetweenTables / 2)}px) scale(1)`;
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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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
    tablePurpose = "COUPLE";

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

TableTypesIcon = {
    "RoundTable": "round-table",
    "SquareTable": "square-table",
    "RectangularTable": "rectangular-table",
    "RectangularLTable": "rectangular-table",
    "ForestMTable": "rectangular-table",
    "CoupleRoundTable": "round-table",
    "CoupleOvalSTable": "oval-table",
    "CoupleOvalMTable": "oval-table",
    "CoupleOvalMFullTable": "oval-table",
    "CoupleOvalLTable": "oval-table",
    "CoupleOvalLFullTable": "oval-table",
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
        if (this.isCouple) {
            this.element.classList.add('seat--couple');
            this.setFilledCouple();
        } else {
            this.element.classList.remove('seat--couple');

            if (this.guestName) {
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

        this.tooltipElementRow1Content.innerHTML = this.guestName || new TranslationSystem().getTranslation("NO_GUESTS"); // TODO FALTA A TRADUO

        this.tooltipElementRow2 = document.createElement("div");
        this.tooltipElementRow2.classList.add("editor-row");
        this.tooltipElementRow2Icon = document.createElement("div");
        this.tooltipElementRow2Icon.classList.add("table_ui");
        this.tooltipElementRow2Icon.classList.add("cake-icon");

        this.tooltipElementRow2Content = document.createElement("div");
        this.tooltipElementRow2.appendChild(this.tooltipElementRow2Icon)
        this.tooltipElementRow2.appendChild(this.tooltipElementRow2Content)

        this.tooltipElementRow2Content.innerHTML = this.guestAgeTranslation();

        this.tooltipElement.appendChild(this.tooltipElementRow1);
        this.tooltipElement.appendChild(this.tooltipElementRow2);

        this.tippyInstance = tippy(this.element, {
            theme: 'light',
            content: this.tooltipElement
        });
    }

    guestAgeTranslation() {
        let guestAgeTranslation = "";
        switch (this.guestAge) {
            case 'ADULT':
                guestAgeTranslation = this.translationSystem.getTranslation("ADULT_AGE");
                break;
            case 'CHILD':
                guestAgeTranslation = this.translationSystem.getTranslation("CHILD_AGE");
                break;
            case 'BABY':
                guestAgeTranslation = this.translationSystem.getTranslation("BABY_AGE");
                break;
            case 'NEWBORN':
                guestAgeTranslation = this.translationSystem.getTranslation("NEWBORN_AGE");
                break;
        }
        return guestAgeTranslation;
    }

    updateToolTip() {
        this.tooltipElementRow1Content.innerText = this.guestName || "Sem convidado";

        if (this.isCouple) {
            this.miniSeat.classList.add('seat--couple');
            this.miniSeat.classList.remove('seat--couple--rem');
            this.miniSeat.classList.add('seat--couple--filled');
        } else {
            this.miniSeat.classList.remove('seat--couple');

            if (this.guestName) {
                this.miniSeat.classList.remove('seat--rem');
                this.miniSeat.classList.add('seat--filled');
            } else {
                this.miniSeat.classList.remove('seat--filled');
                this.miniSeat.classList.add('seat--rem');
            }
        }

        this.tooltipElementRow2Content.innerHTML = this.guestAgeTranslation();
    }

    addSeatNumeration() {
        this.elementNumeration = document.createElement("div");
        this.elementNumeration.classList.add('seatNumeration');
        this.updateSeatNumerationValue();
        this.element.appendChild(this.elementNumeration);
    }

    updateSeatNumerationValue() {
        this.elementNumeration.innerText = this.number + 1;
    }

    isElementOrChildElement(isElement) {
        return this.element === isElement;
    }
}

class MouseManager {
    selectedObject = null;
    editorContainerElement = null;
    guestModal;
    roomEditor;
    translationSystem;

    constructor(world, editorContainerElement, guestModal) {
        this.editorContainerElement = editorContainerElement;
        this.guestModal = guestModal;
        this.translationSystem = new TranslationSystem();

        this.initializeContextMenu();
        this.initializeUi();
        this.translationSystem.reviewPage();

        this.setBindings();

        this.lastX = 0;
        this.lastY = 0;
        this.dragging = false;
        this.zoomIntensity = 0.02;
        this.contextMenuVisible = false;
        this.contextMenuElement = document.getElementById("contextMenu");
    }

    setRoomEditor(roomEditor) {
        this.roomEditor = roomEditor;
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

        if (elements.length > 0) {
            elements[0].innerHTML = "";


            for (let agt of this.activeGuestTables) {

                elements[0].innerHTML += `
                    <button class="editor-btn ui guestTableChooserItem" data-tableType="${agt}">
                        <div class="table_ui ${TableTypesIcon[agt]}  ui guestTableChooserItem" data-tableType="${agt}"></div>
                            <span class="ui guestTableChooserItem" data-tableType="${agt}" translation-key="${agt}">${agt}</span>
                            <div class="pax  ui guestTableChooserItem" data-tableType="${agt}">
                        </div>
                    </button>
                `;
            }
            this.translationSystem.reviewPage();

        }
    }


    initializeUi() {
        const ui1 = document.createElement('div');
        ui1.classList.add("editor-row");
        ui1.classList.add("ui-row");

        const mainContainer = document.createElement('div');
        mainContainer.style.display = 'inline-flex';
      
        // Create the first editorRoom-input div
        const editorRoomInput1 = document.createElement('div');
        editorRoomInput1.classList.add('editorRoom-input', 'ui');
      
        const undoButton = document.createElement('button');
        undoButton.classList.add('editor-btn', 'editor-btn-primary', "ui");
      
        const undoIcon = document.createElement('i');
        undoIcon.classList.add('fas', 'fa-undo', "ui");
      
        undoButton.appendChild(undoIcon);
        editorRoomInput1.appendChild(undoButton);
      
        mainContainer.appendChild(editorRoomInput1);
      
        // Create the second editorRoom-input div
        const editorRoomInput2 = document.createElement('div');
        editorRoomInput2.classList.add('editorRoom-input', 'ui');
      
        const typeLabel = document.createElement('label');
        typeLabel.innerHTML = '<span class="ui" translation-key="TYPE_TABLES">Tipo</span>:';
      
        const typesDiv = document.createElement('div');
        typesDiv.classList.add('types');
      

        this.tablePurposesInputs =  {};
        const translationsInputs = {
            'guest':'ROOM_PLAN_GUESTS',
            'staff':'ROOM_PLAN_STAFF',
            'child':'ROOM_PLAN_CHILD',
        };

        ['guest', 'staff', 'child'].forEach((value, index) => {
          const radioDiv = document.createElement('div');
          radioDiv.classList.add('editor-radio');
          radioDiv.classList.add('ui');
      
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.classList.add('roomEditor-radio', 'ui');
          radioInput.id = `tablePurpose${value.toUpperCase()}`;
          radioInput.name = 'tablePurpose';
          radioInput.value = value;

          this.tablePurposesInputs[value.toUpperCase()] = radioInput;
          radioInput.onchange = (e) => {
                this.changeSelectedTablePurpose(value.toUpperCase());
          }

          const radioSpan = document.createElement('span');
          radioSpan.setAttribute('for', `tablePurpose${value.toUpperCase()}`);
          radioSpan.setAttribute('translation-key', translationsInputs[value]);
          radioSpan.classList.add("ui");
          radioSpan.innerHTML = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize first letter
      
          radioDiv.appendChild(radioInput);
          radioDiv.appendChild(radioSpan);
          typesDiv.appendChild(radioDiv);
        });
      
        editorRoomInput2.appendChild(typeLabel);
        editorRoomInput2.appendChild(typesDiv);
        mainContainer.appendChild(editorRoomInput2);
      
        // Create the third editorRoom-input div
        const editorRoomInput3 = document.createElement('div');
        editorRoomInput3.classList.add('editorRoom-input');
      
        const tablesLabel = document.createElement('label');
        tablesLabel.innerHTML = '<span translation-key="TABLES">Mesas</span>:';
      
        const tablesUiDiv = document.createElement('div');
        tablesUiDiv.classList.add('tables_ui');
        tablesUiDiv.style.marginTop = '2px';
      
        editorRoomInput3.appendChild(tablesLabel);
        editorRoomInput3.appendChild(tablesUiDiv);
        mainContainer.appendChild(editorRoomInput3);
        
        ui1.appendChild(mainContainer);
        
        this.editorContainerElement.appendChild(ui1);

        const ui3 = document.createElement('div');
        ui3.classList.add("editor-row");
        ui3.classList.add("ui-row");
        ui3.classList.add("room-editor-row-stats");
        ui3.innerHTML = `
            <div class="room-editor-stats">
                <span translation-key="ADULT_AGE">Maior de 8 anos:</span>
                <span id="editorTotalAdult" class="room-editor-stat-value">0</span>
            </div>
            <div class="room-editor-stats">
                <span translation-key="FROM_CHILD_AGE">Dos 3 aos 7 anos</span>
                <span id="editorTotalChild" class="room-editor-stat-value">0</span>
            </div>
            <div class="room-editor-stats">
                <span translation-key="FROM_NEWBORN_CHILD_AGE">Dos 0 aos 2 anos</span>
                <span id="editorTotalBaby" class="room-editor-stat-value">0</span>
            </div>
            <div class="room-editor-stats">
                <span translation-key="ROOM_PLAN_TOTAL_TABLES">Total mesas</span>
                <span id="editorTotalTables" class="room-editor-stat-value">0</span>
            </div>
            <div class="room-editor-stats">
                <span translation-key="AVG_PAX_TABLES">Média pax/mesa</span>
                <span id="editorAvg" class="room-editor-stat-value editor-stats-danger">0</span>
            </div>
            <div class="room-editor-stats">
                <span translation-key="ROOM_PLAN_TOTAL_PAX">Total PAX</span>
                <span id="editorPax" class="room-editor-stat-value editor-stats-pax">0</span>
            </div>
        `;

        this.editorContainerElement.appendChild(ui1);
        this.editorContainerElement.appendChild(ui3);


    }

    changeCoupleTable(tableType) {
        const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");

        const newTableCouple = new TableTypes[tableType](this.world);

        const pos = this.getWorldPositionCenterScreen();
        if (!tableCouple) {
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

        newTableCouple.updateSeats();
        this.setSelectedObject(newTableCouple);
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
    }

    contextMenuCreateElement(params) {
        const element = document.createElement("li");
        element.classList.add(params.class);
        const aElement = document.createElement("a");
        aElement.href = "#";
        aElement.id = params.id;
        element.appendChild(aElement);
        const iElement = document.createElement("i");
        iElement.classList.add("fas")
        iElement.classList.add(params.icon)
        iElement.ariaHidden = true;
        aElement.onclick = params.onclick;
        aElement.appendChild(iElement);
        aElement.innerHTML += " " + params.text;
        return element;
    }

    contextMenuActiveOptions(options) {
        const elements = document.getElementsByClassName("context-menu-options");
        if (elements.length > 0) {
            elements[0].innerHTML = '';

            for (let option of options) {

                switch (option) {
                    case "ROTATE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "rotate",
                                id: "ui-context-rotate",
                                icon: "fa-sync-alt",
                                text: this.translationSystem.getTranslation("ROTATE"),
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
                                text: this.translationSystem.getTranslation("MNG_GUESTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'MANAGE_GUESTS')
                                }
                            })
                        );
                        break;
                    case "CHANGE_COUPLE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "change_couple",
                                id: "ui-context-change_couple",
                                icon: "fa-pencil",
                                text: this.translationSystem.getTranslation("CHANGE_TABLE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'CHANGE_COUPLE')
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
                                text: this.translationSystem.getTranslation("DELETE"),
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

    changeSelectedTablePurpose(type) {
        if(this.selectedObject) {
            if(this.selectedObject.tablePurpose != "COUPLE") {
                this.selectedObject.tablePurpose = type;
            }
        }
    }

    setTablePurposeInput(type) {
        
        if(this.tablePurposesInputs[type])  {
            for(let itp of Object.keys(this.tablePurposesInputs)) {
                this.tablePurposesInputs[itp].disabled = false;
            }
            this.tablePurposesInputs[type].checked= true;
        } else {
            for(let itp of Object.keys(this.tablePurposesInputs)) {
                this.tablePurposesInputs[itp].disabled = true;
                this.tablePurposesInputs[itp].checked = false;
            }
        }
    }

    getFocalPosition(event, deltaScale = 0) {

        if (deltaScale > 1) {
            return { x: 0, y: 0 };
        } else {
            return { x: 0, y: 0 };
        }
    }

    getWorldPositionCenterScreen() {
        const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = ((editorRect.x + (editorRect.width / 2)) - (roomPlanRect.left)) / this.world.scale;
        let y = ((editorRect.y + (editorRect.height / 2)) - (roomPlanRect.top)) / this.world.scale;

        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        console.log("World Position:", { x, y })
        this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    getWorldPosition(event) {
        //const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = (event.clientX - (roomPlanRect.left)) / this.world.scale;
        let y = (event.clientY - (roomPlanRect.top)) / this.world.scale;

        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        console.log("World Position:", { x, y })
        this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    handleContextMenu(event) {
        const options = [];

        if (this.selectedObject && this.selectedObject.tableType) {

            if (this.selectedObject.tablePurpose == "COUPLE") {
                options.push("CHANGE_COUPLE");
            }

            options.push("MANAGE_GUESTS");

            if (this.selectedObject.tablePurpose != "COUPLE") {
                options.push("ROTATE");
                options.push("DELETE");
            }

        }
        this.contextMenuActiveOptions(options);

        this.activeContextMenu(event);
    }


    setSelectedObject(obj) {
        if(this.selectedObject) {
            this.selectedObject.unsetSelected();
        }
        this.selectedObject = obj;

        if(obj !== null && obj !== undefined) {
            this.selectedObject.setSelected();
            this.setTablePurposeInput(this.selectedObject.tablePurpose)
        }

    }

    handleMouseDown(event) {

        if (event.button === 0) {
            this.dragging = true;
            this.lastX = event.clientX;
            this.lastY = event.clientY;
        }

        const pos = this.getWorldPosition(event);

        if (event.button == 1 && this.roomEditor.administrationMode) {
            this.roomEditor.world.roomPlan.addConstraintZonePolygon(pos.x, pos.y);
            this.roomEditor.world.roomPlan.updateConstrainZonePoligonElement();            
        }

        if (event.button == 2 || this.contextMenuVisible == true) {
            this.hideContextMenu();
        }

        if (event.toElement.classList.contains("ui")) {

            if (event.toElement.dataset["tabletype"]) {
                const table1 = new TableTypes[event.toElement.dataset["tabletype"]](this.world);
                table1.x = pos.x - table1.width;
                table1.y = pos.y - table1.height;
                table1.init();
                this.world.addTable(table1);
                table1.applyTransform();
                
                table1.updateSeats();
                this.setSelectedObject(table1);
            }

            return;
        } else {
            const isWorldObject = this.world.tables.find(t => t.isElementOrChildElement(event.toElement));
            if (isWorldObject && isWorldObject.dragable) {
                this.setSelectedObject(isWorldObject);
            } else {
                this.setSelectedObject(null);
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
        this.contextMenuElement.style.display = 'block';
        this.contextMenuElement.style.left = event.pageX + "px";
        this.contextMenuElement.style.top = event.pageY + "px";
    }

    contextMenuAction(event, action) {
        switch (action) {
            case "ROTATE":
                this.selectedObject.addRotation(90);
                this.selectedObject.applyTransform();
                break;
            case "CHANGE_COUPLE":
                this.callChangeCoupleEvent();
                break;
            case "MANAGE_GUESTS":
                this.guestModal.open(this.selectedObject);
                break;
            case "DELETE":
                this.world.removeTable(this.selectedObject);
                this.setSelectedObject(null);
                break;
            default:
                throw new Error("Unexpected action");
        }

        this.hideContextMenu();
    }

    setChangeCoupleEvent(action) {
        this.changeCoupleEvent = action;
    }

    changeCoupleEvent;
    callChangeCoupleEvent() {
        this.changeCoupleEvent();
    }
}

class TranslationSystem {

    activeLanguage = "en";

    constructor() {
        if (TranslationSystem._instance) {
            return TranslationSystem._instance
        }
        TranslationSystem._instance = this;

        this.setActiveLanguage(this.activeLanguage);
    }

    setActiveLanguage(activeLanguage) {
        this.activeLanguage = activeLanguage;
        this.reviewPage();
    }

    getTranslation(key) {
        const translations = DEFAULT_TRANSLATIONS.find(t => t.tag == key);

        if (translations) {
            return translations.value[this.activeLanguage];
        }

        return key;
    }

    reviewPage() {
        for (const node of document.querySelectorAll('[translation-key]')) {
            const key = node.getAttribute("translation-key");
            node.innerText = this.getTranslation(key);
        }
    }
}

class RoomEditor {
    editorContainerElement = null;
    world = null;
    mouseManager = null;
    translationSystem;
    
    administrationMode = false;

    constructor(
        idOfElement,
        activeLanguage = "en"
    ) {
        this.editorContainerElement = document.getElementById(idOfElement);
        this.editorContainerElement.style.overflow = "hidden";
        this.translationSystem = new TranslationSystem();
        this.translationSystem.setActiveLanguage(activeLanguage);

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
        this.mouseManager.setRoomEditor(this);
    }


    setAdministrationMode(active) {
        this.administrationMode = active;
    }

    setRoomPlan(roomPlanImg, constraintPoints = []) {
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

        this.world.roomPlan.clearConstraintPoints();
        for(let cp of constraintPoints) {
            this.world.roomPlan.addConstraintZonePolygon(cp.x, cp.y);
        }
        this.world.roomPlan.updateConstrainZonePoligonElement();
    }

    serializeEditor() {
        const serializedData = {
            roomPlan: {
                imageSrc: this.world.roomPlan.imageSrc,
                x: this.world.x,
                y: this.world.y,
                scale: this.world.scale,

                constraintPoints: [
                    ...this.world.roomPlan.constraintPoints
                ]
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


        if(serializedData.roomPlan.constraintPoints) {
            for(let cp of serializedData.roomPlan.constraintPoints) {
                this.world.roomPlan.addConstraintZonePolygon(cp.x, cp.y);
            }
            this.world.roomPlan.updateConstrainZonePoligonElement();
        }

        // Deserialize each object in the editor
        serializedData.tables.forEach((serializedObject) => {
            const object = new TableTypes[serializedObject.tableType](this.world);
            object.x = serializedObject.x;
            object.y = serializedObject.y;
            object.scale = serializedObject.scale;
            object.rotate = serializedObject.rotate | 0;
            object.code = serializedObject.code;
            object.tablePurpose = serializedObject.tablePurpose;
            object.name = serializedObject.name;
            object.notes = serializedObject.notes;
            object.init();
            // Add other properties specific to your object

            for (const objSeat of serializedObject.seats) {
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
        this.world.areTablesOverlapping();

        this.guestsModal.foodRestrictions = serializedData.foodRestrictions.map(m => ({
            id: m?._id,
            text: m?.acronym?.pt,
            subtitle: m?.subtitle?.pt,
            description: m?.description?.pt,
            notesRequired: m?.notesRequired,
            chefChoice: m?.chefChoice
        }));

        return this.world;
    }

    activeGuestTables(tablesTypes) {
        this.mouseManager.setActiveGuestTables(tablesTypes);
    }

    /*
    activeCoupleTables(tablesTypes) {
        this.mouseManager.setActiveCouplesTables(tablesTypes);
    }*/
}

class ManageGuestsModal {
    modalElement;
    modalBodyElement;

    subjectTable = null;

    formElements = {};

    translationSystem;

    foodRestrictions = [];

    globalView = 0;

    constructor() {
        this.translationSystem = new TranslationSystem();
        this.modalElement = document.createElement("div");
        this.modalElement.classList.add("editor-modal-wrap");
        this.modalElement.id = "myModal";

        const editorModalElement = document.createElement("div");
        editorModalElement.classList.add("editor-modal")

        this.modalElement.appendChild(editorModalElement);

        const closeElementButton = document.createElement("i");
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
        modalHeaderElement.innerHTML = '<div class="editor-modal-title" translation-key="MNG_GUESTS">Gerir convidados</div>';
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
        btnCancelElement.setAttribute('translation-key', "CANCEL");
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

    changeBtnGroup = () => {
        const btnCouple = document.getElementById('couplePosition');
        if (!this.globalView) btnCouple.classList.replace("editor-btn-default-focus", "editor-btn-primary");
        else btnCouple.classList.replace("editor-btn-primary", "editor-btn-default-focus");

        const btnGlobal = document.getElementById('globalPosition');
        if (this.globalView) btnGlobal.classList.replace("editor-btn-default-focus", "editor-btn-primary");
        else btnGlobal.classList.replace("editor-btn-primary", "editor-btn-default-focus");
    }

    createModalBody(table) {
        this.subjectTable = table;
        this.modalBodyElement.innerHTML = '';
        this.formElements = {};

        // Create the first row with buttons
        const row1 = document.createElement("div");
        row1.classList.add("editor-row");
        row1.classList.add("editor-space-between");

        const info = document.createElement("div");
        info.classList.add("editor-info-table");
        info.innerHTML = `
            <div class="editor-table round-table"></div>
            <span translation-key="${this.subjectTable.tableType}">${this.subjectTable.tableType}</span>
            <i class="fa-regular fa-user editor-table-user" style="margin: 0 2px 0 10px"></i>${this.subjectTable.seats?.length}
        `;
        row1.appendChild(info);

        const chefInfo = document.createElement("div");
        chefInfo.classList.add("editor-info-table");
        chefInfo.classList.add("editor-error");
        chefInfo.id = 'chefChoice';
        chefInfo.innerHTML = `
            <i class="fa-solid fa-circle-info editor-table-user" style="margin: 0 5px"></i>
            <span translation-key="CHEF_CHOICE">As alterações de ingredientes ficarão a cargo do chefe.</span>
        `;
        chefInfo.style.display = 'none';
        row1.appendChild(chefInfo);
        this.modalBodyElement.appendChild(row1);

        // const button1 = document.createElement("button");
        // button1.classList.add("editor-btn");
        // button1.classList.add("editor-btn-default-focus");
        // button1.classList.add("editor-default-cursor");
        // button1.innerHTML = `<div class="editor-table round-table"></div><span translation-key="${this.subjectTable.tableType}">${this.subjectTable.tableType}</span>`;
        // buttons1.appendChild(button1);

        // const button2 = document.createElement("button");
        // button2.classList.add("editor-btn");
        // button2.classList.add("editor-btn-default-focus");
        // button2.classList.add("editor-default-cursor");
        // button2.innerHTML = `<i class="fa-regular fa-user" style="margin-right: 5px;"></i>${this.subjectTable.seats?.length}`;
        // buttons1.appendChild(button2);
        // row1.appendChild(buttons1);

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
        tableCodeDiv.textContent = (table.code + 1) || "X"; // TODO REMOVE
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
            <span translation-key="ABOVE_8_YEARS">A partir de 8 anos</span>
            <span id="totalAdult" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span translation-key="FROM_CHILD_AGE">Dos 3 aos 7 anos</span>
            <span id="totalChild" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span translation-key="FROM_BABY_AGE">Dos 6 meses aos 2 anos</span>
            <span id="totalBaby" class="editor-stats-qty">0</span>
        </div>
        <div class="editor-stats-line">
            <span translation-key="FROM_NEWBORN_AGE">Dos 0 aos 5 meses</span>
            <span id="totalNewborn" class="editor-stats-qty">0</span>
        </div>
        `;

        const editorStatsGlobalDiv = document.createElement("div");
        editorStatsGlobalDiv.classList.add("editor-stats-global");

        editorStatsGlobalDiv.innerHTML = `
            <span class="editor-stats-total">
                <span id="total">0</span>
            </span>
            <span class="editor-stats-stroller" id="totalStroller">0 <span translation-key="BABY_CAR">carrinho</span></span>
        `;

        editorFormLine.appendChild(editorStatsDiv);
        editorFormLine.appendChild(editorStatsGlobalDiv);

        formElement.appendChild(editorFormLine);

        col1.appendChild(formElement);

        const col2 = document.createElement("div");
        col2.classList.add("editor-col");

        const groupBtn = document.createElement("div");
        groupBtn.classList.add("editor-group-button");
        groupBtn.classList.add("editor-row");

        const buttonGroup1 = document.createElement("button");
        buttonGroup1.id = "couplePosition";
        buttonGroup1.classList.add("editor-btn");
        buttonGroup1.classList.add("editor-btn-primary");
        buttonGroup1.innerHTML = `<span translation-key="COUPLE_POSITION">Posicicionamento casal</span>`;
        buttonGroup1.onclick = () => {
            if (!this.globalView) return;
            else {
                this.globalView = !this.globalView;
                this.changeBtnGroup();
            }
        };
        groupBtn.appendChild(buttonGroup1);

        const buttonGroup2 = document.createElement("button");
        buttonGroup2.id = "globalPosition";
        buttonGroup2.classList.add("editor-btn");
        buttonGroup2.classList.add("editor-btn-default-focus");
        buttonGroup2.innerHTML = `<span translation-key="ROOM_PLAN_POSITION">Posicicionamento global</span>`;
        buttonGroup2.onclick = () => {
            if (this.globalView) return;
            else {
                this.globalView = !this.globalView;
                this.changeBtnGroup();
            }
        };
        groupBtn.appendChild(buttonGroup2);
        col2.appendChild(groupBtn);
        
        const drawTable = document.createElement("div");
        drawTable.classList.add("editor-row");
        drawTable.classList.add("editor-col-draw");
        drawTable.id = "table-draw";
        this.tableDrawElement = drawTable;
        col2.appendChild(drawTable);

        row2.appendChild(col1);
        row2.appendChild(col2);

        this.modalBodyElement.appendChild(row2);

        // Create the third row with notes textarea
        const row3 = document.createElement("div");
        row3.classList.add("editor-row");
        row3.classList.add("editor-row-notes");

        const notesDiv = document.createElement("div");
        notesDiv.setAttribute("translation-key", "NOTES");
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

        if (bounding.width == 0) {
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.drawTable();
            }, 200);
        } else {
            this.miniTable = new TableTypes[this.subjectTable.tableType]();
            this.miniTable.x = ((bounding.width - this.miniTable.width) / 2) - this.miniTable.halfWidth;
            this.miniTable.y = 60 - this.miniTable.halfHeigh;
            this.miniTable.init();
            this.miniTable.world = {
                element: this.tableDrawElement,
            };
            this.miniTable.addToContainer();
            this.miniTable.applyTransform();

            for (const miniSeat of this.miniTable.seats) {
                miniSeat.guestName = this.subjectTable.seats[miniSeat.number].guestName;
                miniSeat.guestAge = this.subjectTable.seats[miniSeat.number].guestAge;
                miniSeat.foodRestrictions = this.subjectTable.seats[miniSeat.number].foodRestrictions;
            }

            this.miniTable.updateSeats();

        }

    }

    initializeSeats(seatDiv, table) {
        this.formElements.seats = [];

        for (const seat of table.seats) {
            this.formElements.seats[seat.number] = {};

            const formLineDiv = document.createElement("div");
            formLineDiv.classList.add("editor-form-line");
            formLineDiv.classList.add("editor-seat");
            formLineDiv.id = `editor-seat-${seat.number}`;

            const seatCodeDiv = document.createElement("div");
            seatCodeDiv.classList.add("editor-seat-code");
            seatCodeDiv.innerHTML = seat.number + 1;
            formLineDiv.appendChild(seatCodeDiv);

            const guestNameInput = document.createElement("input");
            guestNameInput.classList.add("editor-input");
            guestNameInput.classList.add("editor-seat-name");
            guestNameInput.type = "text";
            guestNameInput.id = `guestName-${seat.number}`;
            guestNameInput.name = `guestName-${seat.number}`;
            guestNameInput.value = seat.guestName || '';
            guestNameInput.onblur = () => {
                if (this.miniTable) {
                    this.miniTable.seats[seat.number].guestName = guestNameInput.value;
                    this.miniTable.updateSeats();
                    this.updateTotals();
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

            // const guestRestrictionInput = document.createElement("select");
            const guestRestrictionDiv = document.createElement("div");
            guestRestrictionDiv.classList.add("editor-form-select-restriction");

            this.formElements.seats[seat.number].foodRestrictions = [...seat.foodRestrictions] || [];
            this.checkChefChoice();
            const guestRestrictionInput = document.createElement("div");
            guestRestrictionInput.classList.add("editor-input");
            guestRestrictionInput.classList.add("editor-form-select-multiple")
            guestRestrictionInput.classList.add(`editor-form-select-restriction-${seat.number}`)
            guestRestrictionInput.attributes.multiple = true;
            guestRestrictionInput.name = `foodRestrictions-${seat.number}`;
            guestRestrictionInput.id = `foodRestrictions${seat.number}`;
            guestRestrictionInput.onclick = () => this.createRestrictionModal(guestRestrictionDiv, guestRestrictionInput, seat);
            this.setSelectedResctrictions(seat, guestRestrictionInput);
            // this.formElements.seats[seat.number].foodRestrictions = guestRestrictionInput;
            guestRestrictionDiv.appendChild(guestRestrictionInput);
            formLineDiv.appendChild(guestRestrictionDiv);


            seatDiv.appendChild(formLineDiv);
        }
        for (let seat of table.seats) {
            this.initializeSeatInputs(seat);
        }

        this.updateTotals();
    }

    createRestrictionModal(element, input, seat) {
        const guestRestrictionSelect = document.createElement("ul");
        guestRestrictionSelect.classList.add("editor-form-select-multiple-content");
        guestRestrictionSelect.classList.add(`foodRestrictions${seat.number}`);
        guestRestrictionSelect.id = `foodRestrictions${seat.number}`;

        this.foodRestrictions.forEach(restriction => {
            const restrictionOption = document.createElement("li");
            restrictionOption.classList.add(`foodRestrictions${seat.number}`);

            const checked = this.formElements.seats[seat.number].foodRestrictions.find(f => f == restriction?.id) ? true : false;

            let textTranslation = restriction.text;
            if (this.translationSystem)
                textTranslation = this.translationSystem.getTranslation(restriction.text);

            let subtitleTranslation = restriction.subtitle;
            if (this.translationSystem)
                subtitleTranslation = this.translationSystem.getTranslation(restriction.subtitle);

            const option = document.createElement("span");
            option.classList.add('editor-option');
            option.style.justifyContent = 'left';
            option.id = `foodRestrictions${seat.number}`;
            option.innerHTML = `<input id="foodRestrictions${seat.number}" type="checkbox" name="foodRestrictions${seat.number}" value="${restriction.id}" ${checked ? 'checked' : ''}> <span id="foodRestrictions${seat.number}" translation-key="${restriction.text}">${textTranslation}</span>`;

            this.tippyInstance = tippy(option, {
                theme: 'light',
                content: `<span id="foodRestrictions${seat.number}" translation-key="${restriction.subtitle}">${subtitleTranslation}</span>`
            });

            restrictionOption.onclick = () => this.selectRestriction(seat, input, option, restriction);

            restrictionOption.appendChild(option);
            guestRestrictionSelect.appendChild(restrictionOption);
        });
        this.translationSystem.reviewPage();

        guestRestrictionSelect.style.display = 'block';
        element.appendChild(guestRestrictionSelect);
    }

    selectRestriction(seat, input, option, restriction) {
        const inputById = document.getElementById(input.id);
        const optionById = document.getElementById(option.id);

        const selectedIndex = this.formElements.seats[seat.number].foodRestrictions.findIndex(f => f == restriction.id);
        if (selectedIndex > -1) {
            this.formElements.seats[seat.number].foodRestrictions = this.formElements.seats[seat.number].foodRestrictions.filter(f => f != restriction.id);
        } else this.formElements.seats[seat.number].foodRestrictions.push(restriction.id);
        const checked = selectedIndex > -1 ? false : true;

        this.setSelectedResctrictions(seat, input);
        this.checkChefChoice();

        let textTranslation = restriction.text;
        if (this.translationSystem)
            textTranslation = this.translationSystem.getTranslation(restriction.text);

        option.innerHTML = `<input id="foodRestrictions${seat.number}" type="checkbox" name="foodRestrictions${seat.number}" value="${restriction.id}" ${checked ? 'checked' : ''}> <span id="foodRestrictions${seat.number}" translation-key="${restriction.text}">${textTranslation}</span>`;
    }

    setSelectedResctrictions(seat, input) {
        const elemsSelected = this.foodRestrictions.filter(f => this.formElements.seats[seat.number].foodRestrictions.findIndex(f2 => f2 == f.id) > -1);
        input.innerHTML = elemsSelected.map(m => m?.text).join(', ');
    }

    checkChefChoice() {
        const warnChefChoice = document.getElementById('chefChoice');

        const selectedRestrictions = this.formElements.seats
            .filter(s => s.guestName.value)
            .filter(s => s.foodRestrictions?.length > 0)
            .map(m => m?.foodRestrictions)
            .flat();
        const uniqueRestrictions = [...new Set(selectedRestrictions)];
        const chefChoiceRestrictions = this.foodRestrictions.filter(f => f?.chefChoice);
        const restrictions = chefChoiceRestrictions.filter(f => uniqueRestrictions.includes(f?.id));

        warnChefChoice.style.display = restrictions?.length > 0 ? 'block' : 'none';
    }

    closeSelectRestriction(element) {
        element.style.display = "none";
    }

    initializeSeatInputs(seat) {
        this.formElements.seats[seat.number].guestAge = $(`.editor-select-age-${seat.number}`).select2({
            minimumResultsForSearch: -1,
            data: [
                { id: 'ADULT', text: this.translationSystem.getTranslation("ABOVE_8_YEARS") },
                { id: 'CHILD', text: this.translationSystem.getTranslation("CHILD_AGE") },
                { id: 'BABY', text: this.translationSystem.getTranslation("BABY_AGE") },
                { id: 'NEWBORN', text: this.translationSystem.getTranslation("NEWBORN_AGE") },
            ],
            val: seat?.guestAge || null
        });
        if (seat?.guestAge) $(`.editor-select-age-${seat.number}`).val(seat.guestAge).trigger('change');
        $(`.editor-select-age-${seat.number}`).on("select2:select", () => { this.updateTotals(); });

        // this.formElements.seats[seat.number].foodRestrictions = $(`.editor-form-select-restriction-${seat.number}`).select2({
        //     placeholder: '',
        //     multiple: true,
        //     closeOnSelect: false,
        //     allowClear: false,
        //     data: this.foodRestrictions || [],
        //     templateResult: (table) => {
        //         let textTranslation = table.text;
        //         if (this.translationSystem)
        //             textTranslation = this.translationSystem.getTranslation(table.text);

        //         let subtitleTranslation = table.subtitle;
        //         if (this.translationSystem)
        //             subtitleTranslation = this.translationSystem.getTranslation(table.subtitle);

        //         var $span = $(`
        //         <span class="editor-option">
        //             <span class="editor-tooltip" translation-key="${table.text}">${textTranslation}</span>
        //                 <!-- <span style="font-size: 10px" translation-key="${table.subtitle}">(${subtitleTranslation})</span> -->
        //         </span>`);

        //         const option = document.createElement("span");
        //         option.classList.add('editor-option');
        //         option.innerHTML = `<span class="editor-tooltip" translation-key="${table.text}">${textTranslation}</span>`;


        //         this.tippyInstance = tippy(option, {
        //             theme: 'light',
        //             content: `<span class="editor-tooltip-text" translation-key="${table.subtitle}">${subtitleTranslation}</span>`
        //         });
        //         return option;
        //     },
        //     templateSelection: function (table) {
        //         if (!table.id) return table.text;

        //         var $state = $(
        //             `<span class="editor-option">${table.text}, </span>`
        //         );
        //         return $state;
        //     }
        // });
        // if (seat?.foodRestrictions?.length > 0) $(`.editor-form-select-restriction-${seat.code}`).val(seat.foodRestrictions).trigger('change');
    }

    open(table) {
        this.createModalBody(table);
        this.modalElement.style.display = "block";
        this.translationSystem.reviewPage();
    }

    close() {
        this.modalElement.style.display = "none";
    }

    save() {
        // Add logic to handle saving data
        console.log("Saving data...");
        if (this.validateForm()) {

            this.subjectTable.name = this.formElements.name.value;
            this.subjectTable.notes = this.formElements.notes.value;

            for (const [i, seat] of this.subjectTable.seats.entries()) {
                seat.guestName = this.formElements.seats[i].guestName.value;
                seat.guestAge = this.formElements.seats[i].guestAge.select2('data')[0].id;
                seat.foodRestrictions = this.formElements.seats[i].foodRestrictions;
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
        let isValid = false;
        const tableName = this.formElements.name.value;
        document.getElementById("tableName").setCustomValidity("");

        // if (tableName == '') {
        //     document.getElementById("tableName").setCustomValidity("Invalid field.")
        //     document.getElementById("tableName").reportValidity();
        //     return false;
        // } else {
        //     document.getElementById("tableName").setCustomValidity("");
        //     isValid = true;
        // }

        const selectedRestrictions = this.formElements.seats
            .filter(s => s.guestName.value)
            .filter(s => s.foodRestrictions?.length > 0)
            .map(m => m?.foodRestrictions)
            .flat();
        const uniqueRestrictions = [...new Set(selectedRestrictions)];
        const requiredNotesRestrictions = this.foodRestrictions.filter(f => f?.notesRequired);
        const restrictions = requiredNotesRestrictions.filter(f => uniqueRestrictions.includes(f?.id));

        const tableNotes = this.formElements.notes.value;
        if (restrictions?.length > 0 && tableNotes?.trim() == '') {
            document.getElementById("notes").setCustomValidity("Invalid field.")
            document.getElementById("notes").reportValidity();
            return false;
        } else {
            document.getElementById("notes").setCustomValidity("");
            isValid = true;
        }

        return isValid;

        // You can add more functionality as needed.
    }

    updateTotals() {

        let totalAdult = 0;
        if (document.getElementById('totalAdult')) {
            totalAdult = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')[0].id == 'ADULT').length;
            document.getElementById('totalAdult').innerHTML = totalAdult;
        }

        let totalChild = 0;
        if (document.getElementById('totalChild')) {
            totalChild = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')[0].id == 'CHILD').length;

            document.getElementById('totalChild').innerHTML = totalChild;
        }

        let totalBaby = 0;
        if (document.getElementById('totalBaby')) {
            totalBaby = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')[0].id == 'BABY').length;
            document.getElementById('totalBaby').innerHTML = totalBaby;
        }

        let totalNewborn = 0;
        if (document.getElementById('totalNewborn')) {
            totalNewborn = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')[0].id == 'NEWBORN').length;
            document.getElementById('totalNewborn').innerHTML = totalNewborn;
        }

        if (document.getElementById('totalStroller')) {
            if (totalNewborn > 0) {

                document.getElementById('totalStroller').classList.remove('hide');
                document.getElementById('totalStroller').innerHTML = `${totalNewborn} <span translation-key="BABY_CAR">carrinho</span>`;
                this.translationSystem.reviewPage();
            } else {
                document.getElementById('totalStroller').classList.add('hide');
            }
        }

        const total = totalAdult + totalChild;
        document.getElementById('total').innerHTML = total;
    }

}



if (!window.RoomEditor) {
    window.RoomEditor = RoomEditor;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var elements = document.querySelectorAll('.editor-form-select-multiple-content');
    const insideContent = event.target.id.includes('foodRestrictions');

    if (!event.target.matches('.editor-form-select-multiple') && !insideContent) {
        elements.forEach(function (element) {
            element.style.display = 'none';
        });
    } else {
        elements.forEach(function (element) {
            if (!element?.classList?.contains(event.target.id)) {
                element.style.display = 'none';
            }
        });
    }
}
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
            pt: "Fechar",
            en: "Close",
            es: "Cerrar",
            fr: "Fermer"
        },
        tag: "CLOSE",
        platform: "BO"
    },
    {
        value: {
            pt: "Guardar",
            en: "Save",
            es: "Guardar",
            fr: "Sauver"
        },
        tag: "SAVE",
        platform: "BO"
    },
    {
        value: {
            pt: "Eliminar",
            en: "Delete",
            es: "Eliminar",
            fr: "Éliminer"
        },
        platform: "BO",
        tag: "DELETE"
    },
    {
        value: {
            pt: "Desativar",
            en: "Disable",
            es: "Desactivar",
            fr: "Désactiver"
        },
        platform: "BO",
        tag: "DISABLE"
    },
    {
        value: {
            pt: "Ativar",
            en: "Activate",
            es: "Activar",
            fr: "Activer"
        },
        platform: "BO",
        tag: "ENABLE"
    },
    {
        value: {
            pt: "Aumentar mesa",
            en: "Enlarge table",
            es: "Ampliar tabla",
            fr: "Agrandir le tableau"
        },
        platform: "BO",
        tag: "INCREASE_TABLE"
    },
    {
        value: {
            pt: "Reduzir mesa",
            en: "Reduce table",
            es: "Reducir mesa",
            fr: "Réduire le tableau"
        },
        platform: "BO",
        tag: "REDUCE_TABLE"
    },
    {
        value: {
            pt: "Definir centro da sala",
            en: "Set center of the room",
            es: "Establecer el centro de la sala.",
            fr: "Définir le centre de le salle"
        },
        platform: "BO",
        tag: "DEFINE_CENTER"
    },
    {
        value: {
            pt: "Trocar convidados",
            en: "Swap guests",
            es: "Intercambiar invitados",
            fr: "Échanger les invités"
        },
        platform: "BO",
        tag: "CHANGE_GUESTS"
    },
    {
        value: {
            pt: "Ordem",
            en: "Order",
            es: "Orden",
            fr: "Commande"
        },
        platform: "BO",
        tag: "ORDER"
    },
    {
        value: {
            pt: "Ordem atribuída!",
            en: "Order assigned!",
            es: "¡Orden asignada!",
            fr: "Commande attribuée!"
        },
        platform: "BO",
        tag: "ORDER_ASSIGNED"
    },
    {
        value: {
            pt: "Indique um valor superior a 1.",
            en: "Enter a value greater than 1.",
            es: "Introduzca un valor mayor que 1!",
            fr: "Entrez une valeur supérieure à 1!"
        },
        platform: "BO",
        tag: "ORDER_BIGGER_THAN1"
    },
    {
        value: {
            pt: "Eliminar com mesa de casal Oval L",
            en: "Remove with Oval L couple table",
            es: "Quitar con mesa pareja Oval L",
            fr: "Retirer avec table de couple Oval L"
        },
        platform: "BO",
        tag: "REMOVE_WITH_OVAL_L"
    },
    {
        value: {
            pt: "Obrigatório",
            en: "Required",
            es: "Requerido",
            fr: "Obligatoire"
        },
        platform: "BO",
        tag: "INPUT_ERROR_REQUIRED"
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
            pt: "Mesas disponíveis",
            en: "Tables available",
            es: "Tablas disponibles",
            fr: "Tables disponibles"
        },
        platform: "BO",
        tag: "AVAILABLE_TABLES"
    },







    {
        value: {
            pt: "Média pessoas/mesa",
            en: "Average people/table",
            es: "Promedio personas/tabla",
            fr: "Moyenne personnes/table"
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
        tag: "CoupleOvalLTable"
    },
    {
        value: {
            pt: "Oval L completa",
            en: "Oval L complete",
            es: "Ovalado L completo",
            fr: "Ovale L complet"
        },
        tag: "CoupleOvalLFullTable"
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
            pt: "Total convidados",
            en: "Total guests",
            es: "Invitados totales",
            fr: "Total des invités"
        },
        tag: "ROOM_PLAN_TOTAL_GUESTS",
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
    },
    {
        value: {
            pt: "Ordem circular",
            en: "Circular order",
            es: "Orden circular",
            fr: "Ordre circulaire"
        },
        tag: "ORDER_POSITION_LABEL"
    },
    {
        value: {
            pt: "Gerir Zona",
            en: "Manage zone",
            es: "Administrar zona",
            fr: "Gérer la zone"
        },
        tag: "MNG_ZONE"
    },
    {
        value: {
            pt: "Apenas staff",
            en: "Staff only",
            es: "Sólo personal",
            fr: "Personnel seulement"
        },
        tag: "STAFF_ONLY"
    },
    {
        value: {
            pt: "Apenas crianças",
            en: "Children only",
            es: "Solo niños",
            fr: "Juste des enfants"
        },
        tag: "CHILD_ONLY"
    },
    {
        value: {
            pt: "Uniões permitidas",
            en: "Allowed unions",
            es: "Uniones permitidas",
            fr: "Unions autorisées"
        },
        tag: "ALLOWED_UNIONS"
    },
    {
        value: {
            pt: "Mesas de convidados autorizadas",
            en: "Authorized guest tables",
            es: "Mesas de invitados autorizadas",
            fr: "Tables d'hôtes autorisées"
        },
        tag: "ALLOWED_GUEST_TABLES"
    },
    {
        value: {
            pt: "Orientação das mesas",
            en: "Tables orientation",
            es: "Orientación de las mesas",
            fr: "Orientation du tableau"
        },
        tag: "TABLES_ROTATE"
    },
    {
        value: {
            pt: "Vertical",
            en: "Vertical",
            es: "Vertical",
            fr: "Vertical"
        },
        tag: "VERTICAL_ROTATE"
    },
    {
        value: {
            pt: "Horizontal",
            en: "Horizontal",
            es: "Horizontal",
            fr: "Horizontal"
        },
        tag: "HORIZONTAL_ROTATE"
    },
    {
        value: {
            pt: "Horizontal e vertical",
            en: "Horizontal and vertical",
            es: "Horizontal y vertical",
            fr: "Horizontal et vertical"
        },
        tag: "BOTH_ROTATE"
    },
    {
        value: {
            pt: "Nome",
            en: "Name",
            es: "Nombre",
            fr: "Nom"
        },
        tag: "ZONE_NAME"
    },
    {
        value: {
            pt: "Eliminar zona",
            en: "Delete zone",
            es: "Eliminar zona",
            fr: "Supprimer une zone"
        },
        tag: "DELETE_ZONE"
    },
    {
        value: {
            pt: "Criar zona",
            en: "Create zone",
            es: "Crear zona",
            fr: "Créer une zone"
        },
        tag: "CREATE_ZONE"
    },
    {
        value: {
            pt: "Adicionar pontos constrição",
            en: "Add constriction points",
            es: "Agregar puntos de constricción",
            fr: "Ajouter des points de constriction"
        },
        tag: "CREATE_CONSTRAINT_POINTS"
    },
    {
        value: {
            pt: "Eliminar pontos constrição",
            en: "Eliminate constriction points",
            es: "Eliminar puntos de constricción",
            fr: "Élimine les points de constriction"
        },
        tag: "DELETE_CONSTRAINT_POINTS"
    },
    {
        value: {
            pt: "Adicionar pontos zona",
            en: "Add zone points",
            es: "Ajouter des points de zone",
            fr: "Agregar puntos de zona"
        },
        tag: "CREATE_ZONE_POINTS"
    },
    {
        value: {
            pt: "Eliminar pontos zona",
            en: "Delete zone points",
            es: "Eliminar puntos de zona",
            fr: "Supprimer des points de zone"
        },
        tag: "DELETE_ZONE_POINTS"
    },
    {
        value: {
            pt: "Para a frente",
            en: "Bring forward",
            es: "Adelantar",
            fr: "Amener à l'avant"
        },
        tag: "ZONE_FRONT"
    },
    {
        value: {
            pt: "Para trás",
            en: "Send backward",
            es: "Enviar atrás",
            fr: "Envoyer en arrière"
        },
        tag: "ZONE_BACK"
    },
    {
        value: {
            pt: "Selecione a opção trocar convidados da mesa que deseja trocar.",
            en: "Select the option to change guests for the table you want to change.",
            es: "Seleccione la opción para cambiar invitados para la mesa que desea cambiar.",
            fr: "Sélectionnez l'option permettant de modifier les invités pour la table que vous souhaitez modifier."
        },
        tag: "CHANGE_GUESTS_ALERT"
    },
    {
        value: {
            pt: "Numero de convidados excedem os lugares disponíveis para a união.",
            en: "GNumber of guests exceeds the places available for the union.",
            es: "Número de invitados supera las plazas disponibles para el sindicato.",
            fr: "Le nombre d'invités dépasse les places disponibles pour le syndicat."
        },
        tag: "GUESTS_EXCEED_SEATS_ALERT"
    },
];


class RoomObject {

    corners = {};

    constructor() {
        this.translationSystem = new TranslationSystem();

        this.rotate = 0;
        this.x = 0;
        this.y = 0;
        this.originX = 0;
        this.originY = 0;
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

    sortCoordinatesCounterclockwise(coordinates) {
        // Find the centroid as the reference point
        const centroid = coordinates.reduce(
            (acc, coord) => ({ x: acc.x + coord.x, y: acc.y + coord.y }),
            { x: 0, y: 0 }
        );
        centroid.x /= coordinates.length;
        centroid.y /= coordinates.length;

        // Calculate polar angles with respect to the centroid
        const polarAngles = coordinates.map(coord => {
            const angle = Math.atan2(coord.y - centroid.y, coord.x - centroid.x);
            return { coord, angle };
        });

        // Sort coordinates based on polar angles in counterclockwise order
        polarAngles.sort((a, b) => b.angle - a.angle);

        // Return sorted coordinates
        return polarAngles.map(entry => entry.coord);
    }

    calculateTableAreaCorners() {
        if (this.rotate > 0) {
            this.corners = {
                lt: this.rotatePointAroundOrigin((this.x + this.halfWidth), (this.y + this.halfHeight), this.rotate, (this.x + this.width), (this.y + this.height)),
                rt: this.rotatePointAroundOrigin((this.x + this.halfWidth) + this.width, (this.y + this.halfHeight), this.rotate, (this.x + this.width), (this.y + this.height)),
                lb: this.rotatePointAroundOrigin((this.x + this.halfWidth) + this.width, (this.y + this.halfHeight) + this.height, this.rotate, (this.x + this.width), (this.y + this.height)),
                rb: this.rotatePointAroundOrigin((this.x + this.halfWidth), (this.y + this.halfHeight) + this.height, this.rotate, (this.x + this.width), (this.y + this.height)),
            };
        } else {
            this.corners = {
                lt: { x: (this.x + this.halfWidth), y: (this.y + this.halfHeight) },
                rt: { x: (this.x + this.halfWidth) + this.width, y: (this.y + this.halfHeight) },
                lb: { x: (this.x + this.halfWidth) + this.width, y: (this.y + this.halfHeight) + this.height },
                rb: { x: (this.x + this.halfWidth), y: (this.y + this.halfHeight) + this.height },
            };
        }

        this.corners.coordsConterClockwise = this.sortCoordinatesCounterclockwise([
            { ...this.corners.lt },
            { ...this.corners.rt },
            { ...this.corners.lb },
            { ...this.corners.rb }
        ]);
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x + this.halfWidth}px, ${this.y + this.halfHeight}px) scale(${this.scale}) rotate(${this.rotate}deg)`;

        this.calculateTableAreaCorners();
    }
}

const SNAPPING_POINT_ACTIVE_DISTANCE = 20;
const SNAPPING_POINT_BLOW_DISTANCE = 230;
const SNAPPING_POINT_INITIAL_SCALE = 0.1;
const SNAPPING_POINT_FINAL_SCALE = 2;
const DEBUG_POINTS = false;
class World extends RoomObject {
    roomPlan;
    guestsBy = 'SEAT';

    horizontalCenterOfRoom = null;
    horizontalCenterOfRoomElement = null;

    extraCostChangedFunc;

    constructor(roomEditor) {
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
        this.roomEditor = roomEditor;
        this.roomEditor.editorContainerElement.appendChild(this.element)
    }


    worldPositionObject(object) {
        return this.worldPosition({ x: object.x, y: object.y });
    }

    worldPosition({ x, y }) {
        return { x: this.x - x, y: this.y - y };
    }

    worldSize(width, height) {
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
    }

    worldOrigin(x, y) {
        this.originX = x;
        this.originY = y;
        this.element.style['transform-origin'] = `${x}px ${y}px`;
    }

    setRoomPlan(roomPlan) {
        this.roomPlan = roomPlan;
        this.roomPlan.world = this;
        this.roomPlan.addToContainer();
        this.roomPlan.initConstraintZone();
    }

    addTable(table) {
        table.world = this;
        table.addToContainer();
        this.tables.push(table);
        this.updateTablesNumber();
        this.checkworldWithCoupleOvalL(table, false);
        this.checkTablesSideOfRoom();

        this.setTableGuestsBy(table);
    }

    removeTable(table) {
        table.removeOfContainer();
        this.tables = this.tables.filter(t => t !== table);
        this.checkworldWithCoupleOvalL(table, true);
    }

    checkworldWithCoupleOvalL(table, removed = false) {
        const tablesOvalL = ['CoupleOvalLTable', 'CoupleOvalLFullTable']
        if (tablesOvalL.includes(table.tableType)) {
            const tablesToRemove = this.tables.filter(t => t.removeWithOvalL);

            for (let table of tablesToRemove) {
                table.worldWithOvalLTable(!removed);
            }
        }
    }

    removeTables() {
        for (let table of this.tables) {
            table.removeOfContainer();
        }
        this.tables = [];
    }

    applyTransform() {
        //const finalX = this.x - (this.originX * (1 - this.scale ));
        //const finalY = this.y - (this.originY * (1 - this.scale ));
        //this.element.style.transform = `translate(${finalX}px, ${finalY}px) scale(${this.scale})`;

        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }

    debugElements = [];


    setDebugPoints(table, color) {
        this.addDebugPoint(color, table.corners.lt.x, table.corners.lt.y);
        this.addDebugPoint(color, table.corners.rt.x, table.corners.rt.y);
        this.addDebugPoint(color, table.corners.lb.x, table.corners.lb.y);
        this.addDebugPoint(color, table.corners.rb.x, table.corners.rb.y);
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

    isPointInPolygon(x, y, polygon) {
        if (polygon.length == 0) {
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

    checkTablesZonesRules() {

        for (const zone of this.roomPlan.zones) {

            zone.tables = [];
            for (const table of this.tables) {
                const isLt = this.isPointInPolygon(table.corners.lt.x, table.corners.lt.y, zone.polygon);
                const isRt = this.isPointInPolygon(table.corners.rt.x, table.corners.rt.y, zone.polygon);
                const isLb = this.isPointInPolygon(table.corners.lb.x, table.corners.lb.y, zone.polygon);
                const isRb = this.isPointInPolygon(table.corners.rb.x, table.corners.rb.y, zone.polygon);

                if (isLt || isRt || isLb || isRb) {
                    zone.tables.push(table);
                }
            }
        }

        if (this.roomEditor.mode !== RoomEditorMode.ADMINISTRATOR) {
            for (const zone of this.roomPlan.zones) {
                zone.validateTables();
            }
        }

    }

    checkTableInConstraintZone(table) {
        const isLt = this.isPointInPolygon(table.corners.lt.x, table.corners.lt.y, this.roomPlan.constraintZone.polygon);
        const isRt = this.isPointInPolygon(table.corners.rt.x, table.corners.rt.y, this.roomPlan.constraintZone.polygon);
        const isLb = this.isPointInPolygon(table.corners.lb.x, table.corners.lb.y, this.roomPlan.constraintZone.polygon);
        const isRb = this.isPointInPolygon(table.corners.rb.x, table.corners.rb.y, this.roomPlan.constraintZone.polygon);

        if (!(isLt && isRt && isLb && isRb)) {
            table.isInDanger(TABLE_DANGER_TYPE.OUT_CONSTRAINT_ZONE);
        }

    }

    checkTablesInConstraintZone() {
        const filteredTables = this.tables.filter(t => t.isActive());
        for (let i = 0; i < filteredTables.length; i++) {
            filteredTables[i].isSafe(TABLE_DANGER_TYPE.OUT_CONSTRAINT_ZONE);
        }

        for (let table of filteredTables) {
            this.checkTableInConstraintZone(table);
        }
    }

    checkTableOverlapping(table1, table2) {

        if (DEBUG_POINTS) {
            this.setDebugPoints(table1, "red");
            this.setDebugPoints(table2, "blue");
        }

        if (
            this.isPointInPolygon(table1.corners.lt.x, table1.corners.lt.y, table2.corners.coordsConterClockwise)
        ) {
            return true;
        }
        if (
            this.isPointInPolygon(table1.corners.rt.x, table1.corners.rt.y, table2.corners.coordsConterClockwise)
        ) {
            return true;
        }
        if (
            this.isPointInPolygon(table1.corners.lb.x, table1.corners.lb.y, table2.corners.coordsConterClockwise)
        ) {
            return true;
        }
        if (
            this.isPointInPolygon(table1.corners.rb.x, table1.corners.rb.y, table2.corners.coordsConterClockwise)
        ) {
            return true;
        }


        return false;
    }

    areTablesOverlapping() {
        // Helper function to calculate the intersection area of two rectangles
        const filteredTables = this.tables.filter(t => t.isActive());

        for (let i = 0; i < filteredTables.length; i++) {
            filteredTables[i].isSafe(TABLE_DANGER_TYPE.OVERLAPPING);
        }

        if (DEBUG_POINTS) {
            this.clearDebugPoints();
        }

        // Check if any pair of tables overlap
        for (let i = 0; i < filteredTables.length; i++) {
            const filteredTablesWihoutTableI = filteredTables.filter(t => t !== filteredTables[i]);
            for (let j = 0; j < filteredTablesWihoutTableI.length; j++) {
                // Compare the two tables using their coordinates and dimensions
                const tablesOverlapping = this.checkTableOverlapping(filteredTables[i], filteredTablesWihoutTableI[j]);
                if (tablesOverlapping) {
                    filteredTablesWihoutTableI[j].isInDanger(TABLE_DANGER_TYPE.OVERLAPPING);
                    filteredTables[i].isInDanger(TABLE_DANGER_TYPE.OVERLAPPING);
                    //return true;
                }
            }
        }

        //TODO THIS HERE ?
        this.checkTablesInConstraintZone();
        this.checkTablesZonesRules();
        //return false;
    }

    updateTablesNumber() {
        const filteredTables = this.tables.filter(t => t.isActive());
        for (let i = 0; i < filteredTables.length; i++) {
            filteredTables[i].number = i;
            filteredTables[i].updateTableNumerationValue();
        }
    }

    arePointsClose(point1, point2, distanceThreshold) {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < distanceThreshold;
    }

    scaleBaseOnDistance(point1, point2, distanceThreshold) {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < distanceThreshold) {
            // Quadratic scaling function: scale = 1 + (distance / distanceThreshold)^2

            return SNAPPING_POINT_INITIAL_SCALE + (SNAPPING_POINT_FINAL_SCALE - SNAPPING_POINT_INITIAL_SCALE) * (1 - Math.pow(distance / distanceThreshold, 2));
        } else {
            return 0;
        }
    }

    checkSnappingPoints() {
        
        if(this.roomEditor.mode == "COUPLE") {
            return;
        }
        
        let filteredTables = this.tables.filter(t => t.isActive() && t.snappingPointsActive );
        
        for (let table of filteredTables) {
            for (let sp of table.snappingPoints) {
                sp.scale = 0;
                sp.applyTransform();
            }
        }
        
        filteredTables = filteredTables.filter(t => !(t.rotate == 90 || t.rotate == 270));

        let tablesSnapping = null;
        for (let table1 of filteredTables) {
            if (tablesSnapping)
                break;

            for (let table2 of filteredTables.filter(t => table1 != t && (table1.tableElementSizeHeight) == (t.tableElementSizeHeight))) {
                if (tablesSnapping)
                    break;

                for (let spt1 of table1.snappingPoints) {
                    if (tablesSnapping)
                        break;

                    const sp1WorldPosition = { x: table1.halfWidth + table1.x + spt1.x, y: table1.halfHeight + table1.y + spt1.y };

                    for (let spt2 of table2.snappingPoints.filter(sp => sp.side != spt1.side)) {
                        if (tablesSnapping)
                            break;

                        const sp2WorldPosition = { x: table2.halfWidth + table2.x + spt2.x, y: table2.halfHeight + table2.y + spt2.y };

                        if (this.arePointsClose(sp1WorldPosition, sp2WorldPosition, SNAPPING_POINT_ACTIVE_DISTANCE)) {
                            tablesSnapping = {
                                table1,
                                snappingPointTable1: spt1,
                                table2,
                                snappingPointTable2: spt2,

                            }
                        } else {
                            const scale = this.scaleBaseOnDistance(sp1WorldPosition, sp2WorldPosition, SNAPPING_POINT_BLOW_DISTANCE);
                            if (scale > spt1.scale) {
                                spt1.scale = scale;
                                spt1.applyTransform();

                            }
                            if (scale > spt2.scale) {
                                spt2.scale = scale;
                                spt2.applyTransform();
                            }
                        }
                    }

                }
            }
        }

        if (tablesSnapping) {
            // TODO ASK IF WANT TO JOIN
            this.joinTable(tablesSnapping);
        }
    }

    getMidpoint(point1, point2) {
        const midX = (point1.x + point2.x) / 2;
        const midY = (point1.y + point2.y) / 2;

        return { x: midX, y: midY };
    }

    joinTable(tablesSnapping) {
        const { table1, table2 } = tablesSnapping;

        if (table1.tableType == "ExpandedTable" || table2.tableType == "ExpandedTable") {

            let expandedTable = null;
            let tableToJoin = null;
            if (table1.tableType == "ExpandedTable" && table2.tableType == "ExpandedTable") {
                // TODO QUE DEUS TENHA PIADADE
            } else {
                if (table1.tableType == "ExpandedTable") {
                    expandedTable = table1;
                    tableToJoin = table2;
                }
                if (table2.tableType == "ExpandedTable") {
                    expandedTable = table2;
                    tableToJoin = table1;
                }
            }


            const newSeatsNumber = expandedTable.calculateNumberOfSeats(tableToJoin.seatsTopNumber)
            const oldSeats = [...table1.seats.filter(s => s.guestName.trim() != ''), ...table2.seats.filter(s => s.guestName.trim() != '')];

            if(oldSeats.length > newSeatsNumber) {
                this.roomEditor.mouseManager.showMessage(this.roomEditor.translationSystem.getTranslation("GUESTS_EXCEED_SEATS_ALERT"), 3000);
                if(table1.code == this.roomEditor.mouseManager.selectedObject.code) {
                    if(table1.originalPosition) {
                        table1.x = table1.originalPosition.x;
                        table1.y = table1.originalPosition.y;
                        table1.applyTransform();
                    }
                } else {
                    if(table2.originalPosition) {
                        table2.x = table2.originalPosition.x;
                        table2.y = table2.originalPosition.y;
                        table2.applyTransform();
                    }
                }

                return;
            }

            expandedTable.x -= (tableToJoin.tableElementSizeWidth) + ((tableToJoin.tableElementSizeWidth) / 2);
            expandedTable.tableElementSizeWidth += tableToJoin.tableElementSizeWidth;
            expandedTable.snappingPoints.find(sp => sp.side == 'right').x += tableToJoin.tableElementSizeWidth;
            expandedTable.width = expandedTable.tableElementSizeWidth + expandedTable.spaceBetweenTablesHorizontal + (TABLE_SEAT_SIZE * 2);
            expandedTable.code = table1.code > table2.code
                ? table2.code
                : table1.code;
            expandedTable.parentTableType = table1.tableType;
            expandedTable.value++;

            expandedTable.seatsTopNumber += tableToJoin.seatsTopNumber;

            expandedTable.sizeChanged();
            expandedTable.applyTransform();
            expandedTable.tableElementUpdateSize();
            expandedTable.updateSnappingPoints();
            expandedTable.initializeSeatsExpanded(tableToJoin);
            expandedTable.updateSeats();
            this.removeTable(tableToJoin);
            this.fixTablesCircularOrder(table1.code, table2.code);

        } else {
            const pos = this.getMidpoint({ x: table1.x, y: table1.y }, { x: table2.x, y: table2.y })

            const newExpandedTable = new ExpandedTable(this);
            newExpandedTable.spaceBetweenTablesHorizontal = this.roomPlan.spaceBetweenTables;
            newExpandedTable.spaceBetweenTablesVertical = this.roomPlan.spaceBetweenTables;
            newExpandedTable.tableElementSizeHeight = table1.tableElementSizeHeight;
            newExpandedTable.tableElementSizeWidth = (table1.tableElementSizeWidth) + (table2.tableElementSizeWidth);

            newExpandedTable.snappingPoints.find(sp => sp.side == 'right').x = newExpandedTable.tableElementSizeWidth + (newExpandedTable.spaceBetweenTablesHorizontal / 2) + TABLE_ELEMENT_OFFSET;

            newExpandedTable.height = table1.height;
            newExpandedTable.width = newExpandedTable.tableElementSizeWidth + newExpandedTable.spaceBetweenTablesHorizontal + (TABLE_SEAT_SIZE * 2);

            newExpandedTable.x = pos.x - (newExpandedTable.width / 2);
            newExpandedTable.y = pos.y;

            newExpandedTable.seatsTopNumber = table1.seatsTopNumber * 2;
            newExpandedTable.seatsSidesNumber = table1.seatsSidesNumber;
            newExpandedTable.code = table1.code > table2.code
                ? table2.code
                : table1.code;
            newExpandedTable.name = table1.code > table2.code
                ? table2.name
                : table1.name;
            newExpandedTable.parentTableType = table1.tableType;
            newExpandedTable.value++;

            newExpandedTable.sizeChanged();
            newExpandedTable.init();
            newExpandedTable.initializeSeatsExpanded();

            const oldSeats = [...table1.seats.filter(s => s.guestName.trim() != ''), ...table2.seats.filter(s => s.guestName.trim() != '')];

            if(oldSeats.length > newExpandedTable.seats.length) {
                this.roomEditor.mouseManager.showMessage(this.roomEditor.translationSystem.getTranslation("GUESTS_EXCEED_SEATS_ALERT"), 3000);
                
                if(table1.code == this.roomEditor.mouseManager.selectedObject.code) {
                    if(table1.originalPosition) {
                        table1.x = table1.originalPosition.x;
                        table1.y = table1.originalPosition.y;
                        table1.applyTransform();
                    }
                } else {
                    if(table2.originalPosition) {
                        table2.x = table2.originalPosition.x;
                        table2.y = table2.originalPosition.y;
                        table2.applyTransform();
                    }
                }


                newExpandedTable.destroy();
                return;
            }

            this.addTable(newExpandedTable);
            
            newExpandedTable.applyTransform();


            let number = 0;
            for(let oldSeat of oldSeats) {

                const seat = newExpandedTable.seats.find(s => s.number == number);
                if(seat) {
                    seat.guestName = oldSeat.guestName;
                    seat.guestAge = oldSeat.guestAge;
                    seat.foodRestrictions = oldSeat.foodRestrictions;
    
                    number++;
                }
            }

            newExpandedTable.updateSeats();

            /*this.setSelectedObject(table1);*/
            this.removeTable(table1);
            this.removeTable(table2);

            this.fixTablesCircularOrder(table1.code, table2.code);
        }
    }

    fixTablesCircularOrder(orderPos1, orderPos2) {
        const orderPositionToFix = orderPos1 < orderPos2
            ? orderPos2
            : orderPos1;
        const tablesToCorrectOrder = this.tables.filter(f => f?.code > orderPositionToFix);
        if (tablesToCorrectOrder?.length > 0) {
            for (let index = 0; index < tablesToCorrectOrder.length; index++) {
                const table = tablesToCorrectOrder[index];
                table.code = table.code - 1;
                table.updateTableNumerationValue();
            }
        }
    }

    showDangers() {
        for (const table of this.tables) {
            table.showDangers()
        }
    }

    hideDangers() {
        for (const table of this.tables) {
            table.hideDangers()
        }
    }


    checkExtraCost(totalTables, avgPaxTable) {
        const cloupleTableSeatsNumber = this.tables.find(t => t.tablePurpose == "COUPLE")?.seats.filter(s => s.guestName?.trim() != '').length;
        
        if (totalTables > 14 && (
            (cloupleTableSeatsNumber > 8 && avgPaxTable < 9.5) ||
            (cloupleTableSeatsNumber <= 8 && avgPaxTable < 9.8)
        )) {

            //if (!this.roomPlan.extraCost) {
                this.roomPlan.extraCost = true;
                this.roomPlan.emitExtraCostEvent();
            //}
        } else {
            //if (this.roomPlan.extraCost) {
                this.roomPlan.extraCost = false;
            //    this.roomPlan.emitExtraCostEvent();
            //}
        }
    }

    setGuestsBy(guestsBy) {
        // TODO CHANGED
        this.guestsBy = guestsBy;

        if (this.guestsBy == 'TABLE') {
            tippy.hideAll();
            for (const table of this.tables) {
                table.enableTooltip();
                table.disableSeatsTooltip();
                table.updateSeats();
            }
        } else {
            tippy.hideAll();
            for (const table of this.tables) {
                table.disableTooltip();
                table.enableSeatsTooltip();
                table.updateSeats();
            }
        }

    }

    setTableGuestsBy(table) {
        tippy.hideAll();
        if (this.guestsBy == 'TABLE') {
            table.enableTooltip();
            table.disableSeatsTooltip();
            table.updateSeats();
        
        } else {
            tippy.hideAll();
            table.disableTooltip();
            table.enableSeatsTooltip();
            table.updateSeats();
        }
    }

    setHorizontalCenterOfRoom(horizontalCenterOfRoom) {

        if (horizontalCenterOfRoom) {
            this.horizontalCenterOfRoom = horizontalCenterOfRoom;

            if (!this.horizontalCenterOfRoomElement) {
                this.horizontalCenterOfRoomElement = document.createElement("div");
                this.horizontalCenterOfRoomElement.classList.add("horizontalCenterOfRoom");
                this.element.appendChild(this.horizontalCenterOfRoomElement)
            }
            this.horizontalCenterOfRoomElement.style.transform = `translate(${horizontalCenterOfRoom}px,-1500px) scale(1) rotate(0deg)`;

            this.checkTablesSideOfRoom();
        }
    }

    checkTablesSideOfRoom() {
        if (this.horizontalCenterOfRoom) {
            for (const table of this.tables) {
                if (table.rotate == 0 || table.rotate == 180) {
                    table.sideOfRoom = (table.x + table.halfWidth) > this.horizontalCenterOfRoom ? 'RIGHT' : 'LEFT';
                }
                if (table.rotate == 90 || table.rotate == 270) {
                    table.sideOfRoom = (table.x + table.halfHeight) > this.horizontalCenterOfRoom ? 'RIGHT' : 'LEFT';
                }
            }
        }
    }

    changeGuestsTable(table1, table2) {

        if(table1 == table2) {
            return;
        }

        const table1Temp = {
            name: table1.name,
            seats: table1.seats.map(s => ({
                guestName: s.guestName,
                guestAge: s.guestAge,
                foodRestrictions: s.foodRestrictions,
            }))
        }
        const table2Temp = {
            name: table2.name,
            seats: table2.seats.map(s => ({
                guestName: s.guestName,
                guestAge: s.guestAge,
                foodRestrictions: s.foodRestrictions,
            }))
        }

        table1.name = table2Temp.name;
        table2.name = table1Temp.name;

        table1.seats.forEach(s => {
            s.guestName = "";
            s.guestAge = "ADULT";
            s.foodRestrictions = [];
        });
        table2.seats.forEach(s => {
            s.guestName = "";
            s.guestAge = "ADULT";
            s.foodRestrictions = [];
        });

        for (const seat of table2Temp.seats.filter(s => s.guestName.trim() != "")) {
            const freeSeat = table1.seats.find(s => s.guestName.trim() == "");

            freeSeat.guestName = seat.guestName;
            freeSeat.guestAge = seat.guestAge;
            freeSeat.foodRestrictions = seat.foodRestrictions;
        }

        for (const seat of table1Temp.seats.filter(s => s.guestName.trim() != "")) {
            const freeSeat = table2.seats.find(s => s.guestName.trim() == "");

            freeSeat.guestName = seat.guestName;
            freeSeat.guestAge = seat.guestAge;
            freeSeat.foodRestrictions = seat.foodRestrictions;
        }

        table1.updateSeats();
        table2.updateSeats();
    }

    destroy() {

    }
}

class Zone {

    zoneElement;

    name = "Nova Zona";
    polygon = [];
    allowedTables = [];
    allowedOrientation = null;
    coupleAllowed = false;
    staffOnly = false;
    childOnly = false;
    allowExpanded = false;
    freeZone = false;
    color = "#e5e5e538";
    bright = 1;

    zindex = 0;

    // IS UPDATED WITH THE TABLES PRESENT IN THE ZONE ON RUNTIME
    tables = [];

    constructor(world) {
        this.world = world;

        this.buildZonePolygonElement();
    }

    buildZonePolygonElement() {
        if (!this.zoneElement) {
            const element = document.createElement("div");
            element.style.width = `${this.width}px`;
            element.style.height = `${this.height}px`;
            element.style.position = "absolute";
            this.world.element.appendChild(element);
            this.zoneElement = element;
        }

        this.updateZonePoligonElement();
    }

    updateZonePoligonElement() {
        if (this.zoneElement) {

            this.bright = this.zoneElement.getAttribute("zone") == 'true'
                ? 0.9
                : 1;

            if (this.polygon.length > 0) {
                this.zoneElement.style.background = this.color;
                this.zoneElement.style.filter = `brightness(${this.bright})`;
            } else {
                this.zoneElement.style.background = "none";
            }

            let coords = '';
            for (let i = 0; i <= this.polygon.length - 1; i++) {
                const isLast = this.polygon.length - 1 == i;
                const p = this.polygon[i];
                coords += ` ${p.x}px ${p.y}px` + (!isLast ? ',' : '');
            }
            this.zoneElement.style["clip-path"] = this.polygon.length > 0
                ? `polygon(${coords})`
                : 'unset';

            if (this.zindex) {
                this.zoneElement.style['z-index'] = 15 + this.zindex;
            } else {
                this.zoneElement.style['z-index'] = null;
            }
        }
    }

    polygonArea() {
        let area = 0;
        const numVertices = this.polygon.length;

        for (let i = 0; i < numVertices; i++) {
            const j = (i + 1) % numVertices;
            area += (this.polygon[i].x * this.polygon[j].y - this.polygon[j].x * this.polygon[i].y);
        }

        area = Math.abs(area) / 2;
        return area;
    }


    hide() {
        if (this.zoneElement) {
            this.zoneElement.style.display = 'none';
        }
    }

    show() {
        if (this.zoneElement) {
            this.zoneElement.style.display = 'block';
        }
    }

    clearPoints() {
        this.polygon = [];
        this.updateZonePoligonElement();
    }

    addZonePolygon(x, y) {
        this.polygon.push({
            x,
            y,
        });

        this.updateZonePoligonElement();
    }

    setSize(width, height) {
        this.zoneElement.style.width = `${width}px`;
        this.zoneElement.style.height = `${height}px`;
    }

    destroy() {
        this.world.element.removeChild(this.zoneElement);
    }

    validateTables() {
        for (const table of this.tables) {
            table.isSafe(TABLE_DANGER_TYPE.INVALID_ZONE);


            // STAFF ONLY
            if ((this.staffOnly && table.tablePurpose != 'STAFF') || (!this.staffOnly && table.tablePurpose == 'STAFF')) {
                table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                console.log("if(this.staffOnly && table.tablePurpose != 'STAFF') {")
                continue;
            }

            // CHILD ONLY
            if ((this.childOnly && table.tablePurpose != 'CHILD')) {
                table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                console.log("if(this.childOnly && table.tablePurpose != 'CHILD') {")
                continue;
            }

            // CHECK ORIENTATION
            if (this.allowedOrientation) {
                if (this.allowedOrientation == 'HORIZONTAL' && (table.rotate != 0 && table.rotate != 180)) {
                    table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                    console.log("if(this.allowedOrientation == 'HORIZONTAL'&& (table.rotate != 0 &&  table.rotate != 180)) {")
                    continue;
                }

                if (this.allowedOrientation == 'VERTICAL' && (table.rotate != 90 && table.rotate != 270)) {
                    table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                    console.log("if(this.allowedOrientation == 'VERTICAL' && (table.rotate != 90 &&  table.rotate != 270)) {")
                    continue;
                }

                //if(this.allowedOrientation == 'BOTH') {

                //}
            }


            // COUPLE ALLOWED
            if (table?.tablePurpose == 'COUPLE') {
                if (!this.coupleAllowed) {
                    table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                    console.log("if(!this.coupleAllowed && table.tablePurpose == 'COUPLE') {")
                    continue;
                }
            } else {

                // ALLOW EXPANDED
                if (table.tableType == 'ExpandedTable' && !this.allowExpanded) {
                    table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                    console.log("if(table.tableType == 'EXPANDED_TABLE' && !this.allowExpanded) {")
                    continue;
                }

                // CHECK TYPE
                const typeToCompare = table?.tableType == 'ExpandedTable'
                    ? table?.parentTableType
                    : table?.tableType;
                if (!this.allowedTables.includes(typeToCompare)) {
                    table.isInDanger(TABLE_DANGER_TYPE.INVALID_ZONE);
                    console.log("if(!this.allowedTables.includes(typeToCompare)) {")
                    continue;
                }

            }
        }
    }
}

class RoomPlan extends RoomObject {

    world = null;

    editorMode = null; // "CONTRAINT_ZONE" || "ZONE"
    zoneEditing;

    spaceBetweenTables = 0;

    constraintZone;

    imageLoaded = false;
    afterLoadImageFunctions = [];

    extraCost = false;
    

    zones = []


    constructor(world, imageSrc) {
        super();
        this.world = world;
        this.element = document.createElement('div');
        this.element.classList.add('roomPlan');

        this.updateImageSrc(imageSrc);
    }

    applyTransform() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }

    afterLoadImage(func) {
        if (!this.imageLoaded) {
            this.afterLoadImageFunctions.push(func);
        } else {
            func();
        }
    }

    updateImageSrc(imageSrc) {
        this.imageLoaded = false;

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

            setTimeout(() => {
                
                this.imageLoaded = true;
            }, 8000);

            for (const f of this.afterLoadImageFunctions) {
                f();
            }
            this.afterLoadImageFunctions = [];


            //TODO ALWAYS DO THIS ? 
            this.constraintZone.setSize(this.width, this.height);

            for (const zone of this.zones) {
                zone.setSize(this.width, this.height);
            }


            // this.world.worldSize(this.width, this.height);
            this.world.worldOrigin(this.halfWidth, this.halfHeight);
            this.world.applyTransform();
        }

        this.elementImg.style.width = '100%';
        this.elementImg.style.height = '100%';
        this.elementImg.src = imageSrc;
        this.element.appendChild(this.elementImg);
    }

    initConstraintZone() {
        // TODO
        this.constraintZone = new Zone(this.world);
        this.constraintZone.zoneElement.setAttribute("constraintZone", true);
        this.constraintZone.zoneElement.classList.add("constraintZone");
    }

    createZone() {
        return new Zone(this.world);
    }

    addZone(zone) {
        if (!zone) {
            return;
        }
        zone.zoneElement.setAttribute("zone", true);
        zone.zoneElement.classList.add("zone");

        return this.zones.push(zone);
    }

    deleteZone(zone) {
        zone.destroy();
        this.zones = this.zones.filter(z => z !== zone);
    }

    deleteZones() {
        for (const zone of this.zones) {
            zone.destroy();
        }
        this.zones = [];
    }

    hideZones() {
        for (const zone of this.zones) {
            zone.hide();
        }
    }
    showZones() {
        for (const zone of this.zones) {
            zone.show();
        }
    }

    emitExtraCostEvent() {
        if (this.world.extraCostChangedFunc) {
            this.world.extraCostChangedFunc(this.extraCost);
        }
    }

}


const TABLE_ELEMENT_OFFSET = 35;
const TABLE_SEAT_SIZE = 60;
const SNAPPING_POINT_SIZE = 15;

const TABLE_DANGER_TYPE = {
    OVERLAPPING: "OVERLAPPING",
    INVALID_ZONE: "INVALID_ZONE",
    OUT_CONSTRAINT_ZONE: "OUT_CONSTRAINT_ZONE",
    MISSING_ORDER: 'MISSING_ORDER',
    ORDER_OUT_OF_RANGE: 'ORDER_OUT_OF_RANGE',
    TABLE_INCREASE_BOTH_SIDES: 'TABLE_INCREASE_BOTH_SIDES',
    TABLE_DUPLICATED_CODE: 'TABLE_DUPLICATED_CODE',
};

class Table extends RoomObject {

    code = 0;
    name = "";
    notes = "";
    active = true;
    removeWithOvalL = false;
    removeBecauseOfOvalL = false;

    originalPosition = null;

    tableDefaultSize = 155;

    seatsTopNumber = 0;
    seatsSidesNumber = 0;
    seatsPositions = [];
    seats = [];
    tableType = "Table";
    tablePurpose = "GUEST";
    parentTableType = null;

    tableElement;
    tableElementSizeWidth = 105;
    tableElementSizeHeight = 105;
    tableElementPosition = { x: 0, y: 0 };

    optionElement;
    optionTooltipElement;

    inDanger = false;
    dangerType = [];

    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    snappingPointsActive = false;
    snappingPoints = [
        { side: 'left', x: 0, y: 0, scale: 0 },
        { side: 'right', x: 0, y: 0, scale: 0 },
    ];
    parentTable;
    childsTable = [];

    sideOfRoom = null;

    constructor() {
        super();
    }

    build(world) {
        if(!this.spaceBetweenTablesHorizontal)
            this.spaceBetweenTablesHorizontal = world.roomPlan.spaceBetweenTables;
        if(!this.spaceBetweenTablesVertical)
            this.spaceBetweenTablesVertical = world.roomPlan.spaceBetweenTables;

        this.dragable = true;
        this.element = document.createElement('div');
        this.element.classList.add('table');

        this.width = this.tableElementSizeWidth + this.spaceBetweenTablesHorizontal + (TABLE_SEAT_SIZE * 2);
        this.height = this.tableElementSizeHeight + this.spaceBetweenTablesVertical + (TABLE_SEAT_SIZE * 2);

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.sizeChanged();
    }

    sizeChanged() {

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        // RECALCULATE TABLE NUMERATION
        // if (this.tableElementNumeration) {
        //     this.tableElementNumeration.style.left = `${this.halfWidth - (this.spaceBetweenTables / 2) - TABLE_ELEMENT_OFFSET - 18}px`;
        //     this.tableElementNumeration.style.top = `${this.halfHeight - (this.spaceBetweenTables / 2) - TABLE_ELEMENT_OFFSET - 25}px`;
        // }

        this.calculateTableAreaCorners();
    }

    init() {
        this.calculateSeatPositions();
        this.initializeSeats();

        if (this.snappingPointsActive) {
            this.addSnappingPoints();
        }

        this.addTableElement();
        this.addSeatsTooltips();
        this.updateSeatsNumerations();
        this.addTableNumeration();

        this.addTooltipGuest();
        this.disableTooltip();
    }

    enable() {
        this.element.style.opacity = 1;
        this.active = true;
    }

    disable() {
        this.element.style.opacity = 0.3;
        this.active = false;
    }

    isActive() {
        return this.active == true && this.removeBecauseOfOvalL == false;
    }

    worldWithOvalLTable(withOvalLTable = false) {
        if (withOvalLTable) {
            this.removeBecauseOfOvalL = true;
            this.element.style.display = 'none';
        } else {
            this.removeBecauseOfOvalL = false;
            this.element.style.display = 'block';
        }
    }


    enableTooltip() {
        this.tippyInstance.enable();
    }
    disableTooltip() {
        this.tippyInstance.disable();
    }

    addTooltipGuest() {
        this.tooltipElementGuest = document.createElement("div");
        this.updateTooltipGuest();
        this.tippyInstance = tippy(this.tableElement, {
            theme: 'light',
            content: this.tooltipElementGuest
        });
    }

    updateTooltipGuest() {
        this.tooltipElementGuest.innerHTML = '';

        if(this.seats.filter(s => s.guestName).length == 0 && !this.name) {
            if(this.tippyInstance) {
                this.tippyInstance.disable();
            }
            return;
        }

        if(this.tippyInstance && (this.world && this.world.guestsBy == 'TABLE')) {
            this.tippyInstance.enable();
        }

        const tooltipElementRowTableName = document.createElement("div");
        tooltipElementRowTableName.classList.add("editor-row");
        tooltipElementRowTableName.style.textAlign = 'center';
        tooltipElementRowTableName.style.fontWeight = 'bold';
        tooltipElementRowTableName.style.width = '100%';
        tooltipElementRowTableName.style.borderBottom = '1px solid #B8B8B3';
        tooltipElementRowTableName.style.paddingBottom = '1px';
        tooltipElementRowTableName.style.marginBottom = '6px';
        tooltipElementRowTableName.style.paddingLeft = '3px';
        tooltipElementRowTableName.innerText = this.numberToLetter() + " - " + this.name;
        this.tooltipElementGuest.appendChild( tooltipElementRowTableName); 

        for (let seat of this.seats.filter(s => s.guestName)) {

            const tooltipElementRow1 = document.createElement("div");
            tooltipElementRow1.classList.add("editor-row");

            const tooltipElementRow1Icon = document.createElement("div");
            const tooltipElementRow1Content = document.createElement("div");
            tooltipElementRow1.appendChild(tooltipElementRow1Icon)

            const miniSeat = document.createElement("div");
            miniSeat.style.fontWeight = 'bold';
            miniSeat.innerHTML = seat.number + 1 + " - ";
            tooltipElementRow1Icon.appendChild(miniSeat);

            tooltipElementRow1.appendChild(tooltipElementRow1Content)
            tooltipElementRow1Content.style.textAlign = 'left';
            tooltipElementRow1Content.innerHTML = seat.guestName || new TranslationSystem().getTranslation("NO_GUESTS");

            const tooltipElementRow2Icon = document.createElement("div");
            tooltipElementRow2Icon.classList.add("table_ui");
            tooltipElementRow2Icon.classList.add("cake-icon");

            const tooltipElementRow2Content = document.createElement("div");
            tooltipElementRow1.appendChild(tooltipElementRow2Icon)
            tooltipElementRow1.appendChild(tooltipElementRow2Content)
            tooltipElementRow2Content.style.textAlign = 'left';
            tooltipElementRow2Content.innerHTML = seat.guestAgeTranslation();


            this.tooltipElementGuest.appendChild(tooltipElementRow1);
        }
    }

    getGuestName(name) {
        // Split the input string into words
        const words = name.trim().split(/\s+/);

        // If there are less than 2 words, return the input string
        if (words.length < 2) {
            return name;
        }

        // Extract the first and last words
        const firstWord = words[0];
        const lastWord = words[words.length - 1];

        // Concatenate the first and last words into a new string
        const result = `${firstWord} ${lastWord}`;

        return result;
    }

    calculateNumberOfSeats(addSeatsTopNumber = 0, addSeatsSidesNumber = 0) {
        if (this.isRound) {
            const numSeats = (this.seatsTopNumber + addSeatsTopNumber) || 10;
            return numSeats;
        } else {
            const topsNumbersSeats = (this.seatsTopNumber + addSeatsTopNumber) > 0 ? (this.seatsTopNumber + addSeatsTopNumber) : Math.floor(this.tableElementSizeWidth / 70);
            const sidesNumbersSeats = (this.seatsSidesNumber + addSeatsSidesNumber) > 0 ? (this.seatsSidesNumber + addSeatsSidesNumber) : Math.floor(this.tableElementSizeHeight / 70);
            return topsNumbersSeats + sidesNumbersSeats;
        }
    }

    calculateSeatPositions() {

        if (this.seatsPositions.length > 0)
            return;

        const offsetBorders = 8; // PRAY THE LORD!?

        if (this.isRound) {
            // CALCULATE SEATS POSITIONS

            this.seatsPositions = [];
            const numSeats = this.seatsTopNumber || 10;
            let centerX = this.tableElementSizeWidth / 2 + (TABLE_SEAT_SIZE / 2) +  ((offsetBorders/2)* 3); // MAGIC NUMBER !??
            let centerY = this.tableElementSizeHeight / 2 + (TABLE_SEAT_SIZE / 2) - (offsetBorders/2);
            let radius = this.tableElementSizeWidth / 2 + (TABLE_SEAT_SIZE / 2) +  (offsetBorders/2);

            for (let i = 0; i < numSeats; i++) {
                const angle = (i / numSeats) * 2 * Math.PI - Math.PI / 2;
                const objectX = centerX + radius * Math.cos(angle);
                const objectY = centerY + radius * Math.sin(angle);

                this.seatsPositions.push({ number: i, x: objectX, y: objectY, rotate: i * (360 / numSeats) });
            }
        } else {
            this.seatsPositions = [];

            const topsNumbersSeats = this.seatsTopNumber > 0 ? this.seatsTopNumber : Math.floor(this.tableElementSizeWidth / 70);
            const sidesNumbersSeats = this.seatsSidesNumber > 0 ? this.seatsSidesNumber : Math.floor(this.tableElementSizeHeight / 70);

            let distanceBetweenSeatsTops = TABLE_ELEMENT_OFFSET;
            let distanceBetweenSeatsSides = TABLE_ELEMENT_OFFSET;
            distanceBetweenSeatsTops = (
                this.tableElementSizeWidth - (
                    (topsNumbersSeats) * TABLE_ELEMENT_OFFSET)
                    ) / (topsNumbersSeats + 1);
            distanceBetweenSeatsSides = (
                this.tableElementSizeHeight - (
                    (sidesNumbersSeats) * TABLE_ELEMENT_OFFSET)
                    ) / (sidesNumbersSeats + 1);

                    
            let globalNumber = 0;
            for (let i = 0; i <= (topsNumbersSeats - 1); i++) {
                this.seatsPositions.push({
                    number: globalNumber,
                    x: (TABLE_SEAT_SIZE) + (distanceBetweenSeatsTops) + (i * distanceBetweenSeatsTops) + (i * TABLE_ELEMENT_OFFSET),
                    y: -offsetBorders,
                    rotate: 0,
                });
                globalNumber++;
            }

            for (let i = 0; i <= (sidesNumbersSeats - 1); i++) {
                this.seatsPositions.push({
                    number: globalNumber,
                    x: (offsetBorders*2) + this.tableElementSizeWidth + TABLE_SEAT_SIZE,
                    y: -(offsetBorders*2) + (TABLE_SEAT_SIZE) + (distanceBetweenSeatsSides) + (i * distanceBetweenSeatsSides) + (i * TABLE_ELEMENT_OFFSET),
                    rotate: 90,
                });
                globalNumber++;
            }

            for (let i = (topsNumbersSeats - 1); i >= 0; i--) {
                this.seatsPositions.push({
                    number: globalNumber,
                    x: (TABLE_SEAT_SIZE) + (distanceBetweenSeatsTops)  + (i * distanceBetweenSeatsTops) + (i * TABLE_ELEMENT_OFFSET),
                    y: this.tableElementSizeHeight + TABLE_SEAT_SIZE,
                    rotate: 180,
                });
                globalNumber++;
            }

            for (let i = (sidesNumbersSeats - 1); i >= 0; i--) {
                this.seatsPositions.push({
                    number: globalNumber,
                    x: offsetBorders,
                    y: -(offsetBorders*2) + (TABLE_SEAT_SIZE) + (distanceBetweenSeatsSides) + (i * distanceBetweenSeatsSides) + (i * TABLE_ELEMENT_OFFSET),
                    rotate: 270,
                });
                globalNumber++;
            }

        }

    }

    initializeSeats() {
        for (let seatPosition of this.seatsPositions) {
            const seat = new Seat(this);
            seat.side = seatPosition.side;
            seat.rotate = seatPosition.rotate || 0;
            
            seat.x = seatPosition.x + ((this.spaceBetweenTablesHorizontal / 2));
            seat.y = seatPosition.y + ((this.spaceBetweenTablesVertical / 2));
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

        this.updateTooltipGuest();
        this.updateBackground();
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

    disableSeatsTooltip() {
        for (let seat of this.seats) {
            seat.disableTooltip();
        }
    }
    enableSeatsTooltip() {
        for (let seat of this.seats) {
            seat.enableTooltip();
        }
    }

    addTableElement() {
    }

    updateBackground() {

        let GUEST_TABLE_COLOR = '#d1cece';
        let COUPLE_TABLE_COLOR = '#D1BB80';
        let STAFF_TABLE_COLOR = '#95B1B0';
        let CHILD_TABLE_COLOR = '#AEE4F5';

        if (this.world) {
            if (this.world.guestsBy == 'TABLE' && this.seats.filter(s => s.guestName).length > 0) {
                // IF ALL SEATS FILL THEN CHANGE COLOR
                GUEST_TABLE_COLOR = '#b6d7a8';
                CHILD_TABLE_COLOR = "linear-gradient(180deg, rgba(174,228,245,1) 48%, rgba(182,215,168,1) 100%)";
            }
        }

        let backgroundColor = GUEST_TABLE_COLOR;
        switch (this.tablePurpose) {
            case 'COUPLE':
                backgroundColor = COUPLE_TABLE_COLOR;
                this.element.classList.remove('tableStaff');
                break;
            case 'STAFF':
                backgroundColor = STAFF_TABLE_COLOR;
                this.element.classList.add('tableStaff');
                break;
            case 'CHILD':
                backgroundColor = CHILD_TABLE_COLOR;
                this.element.classList.remove('tableStaff');
                break;
            default:
                backgroundColor = GUEST_TABLE_COLOR;
                this.element.classList.remove('tableStaff');
        }
        this.tableElement.style.background = backgroundColor;
    }

    updateTablePurpose(tablePurpose) {
        this.tablePurpose = tablePurpose;
        this.updateBackground();
    }

    addTableNumeration() {
        this.tableElementNumeration = document.createElement("div");
        this.tableElementNumerationAlt = document.createElement("div");
        this.tableElementNumeration.classList.add('tableNumeration');
        this.tableElementNumerationAlt.classList.add('tableNumeration');

        // this.tableElementNumeration.style.left = `${this.halfWidth - TABLE_ELEMENT_OFFSET - (this.spaceBetweenTables / 2) - 18}px`;
        // this.tableElementNumeration.style.top = `${this.halfHeight - TABLE_ELEMENT_OFFSET - (this.spaceBetweenTables / 2) - 25}px`;
        //this.tableElementNumeration.style.left = "45%";
        //this.tableElementNumeration.style.top = "40%";

        this.spanTableNumeration = document.createElement('span');
        this.spanTableNumerationAlt = document.createElement('span');
        this.updateTableNumerationValue();
        this.tableElementNumeration.appendChild(this.spanTableNumeration);
        this.tableElementNumerationAlt.appendChild(this.spanTableNumerationAlt);

        // this.spanTableCircularOrder = document.createElement('span');
        // this.spanTableCircularOrder.classList.add('tableCircularOrder');
        // this.updateTableOrderValue();
        // this.tableElementNumeration.appendChild(this.spanTableCircularOrder);

        
        this.element.appendChild(this.tableElementNumeration);
        this.tableElement.appendChild(this.tableElementNumerationAlt);
    }

    updateTableNumerationValue() {
        this.spanTableNumeration.innerText = this.numberToLetter();
        this.spanTableNumerationAlt.innerText = this.numberToLetter();
    }

    numberToLetter() {
        if (!Number.isInteger(this.code) || this.code < 0) {
            return;
        }

        // Calculate the position in the alphabet
        let position = this.code % 26;

        // Calculate the number of repetitions
        let repetitions = Math.floor(this.code / 26) + 1;

        return String.fromCharCode(position + 65).repeat(repetitions);
    }

    // updateTableOrderValue() {
    //     // TODO only show on ROOM_PLAN mode
    //     this.spanTableCircularOrder.style.display = this.orderPosition != null && this.orderPosition != undefined
    //         ? 'block'
    //         : 'none';
    //     this.spanTableCircularOrder.innerHTML = `<i class="fa-solid fa-rotate"></i>${(this.orderPosition + 1)}`;
    // }

    getElementAndParents(element) {
        const elementsArray = [];
        elementsArray.push(element);

        let count = 0;
        while (element.parentNode && count < 3) {
            element = element.parentNode;
            elementsArray.push(element);
            count++;
        }

        return elementsArray;
    }

    isElementOrChildElement(elementToCompare) {
        const elementsToCompare = this.getElementAndParents(elementToCompare);
        return elementsToCompare.some(item => (item === this.element) || (item === this.tableElement) || (item === this.tableElementNumeration) || (item === this.optionElement));
        // return this.element === elementToCompare || this.tableElement === elementToCompare || this.tableElementNumeration === elementToCompare || this.seats.find(s => s.isElementOrChildElement(elementToCompare));
    }

    isSafe(dangerType) {
        this.dangerType = this.dangerType.filter(dt => dt != dangerType);
        if (this.dangerType.length == 0) {
            this.inDanger = false;
            this.element.classList.remove('tableDanger');
        }
    }

    isInDanger(dangerType) {

        this.inDanger = true;
        this.element.classList.add('tableDanger');

        if (!this.dangerType.includes(dangerType)) {
            this.dangerType.push(dangerType);
        }

    }

    hideDangers() {
        this.element.classList.remove('tableDanger');
    }

    showDangers() {
        if (this.inDanger)
            this.element.classList.add('tableDanger');
    }

    setSelected() {
        this.originalPosition = {
            x: this.x,
            y: this.y
        };
        this.element.classList.add('tableSelected');
        this.tableElement.classList.add('table-draw--selected');
    }

    unsetSelected() {
        this.originalPosition = null;
        this.element.classList.remove('tableSelected');
        this.tableElement.classList.remove('table-draw--selected');
    }

    tableElementTransform() {
        this.tableElement.style.transform = `translate(${this.tableElementPosition.x}px, ${this.tableElementPosition.y}px) scale(1)`;
    }

    destroy() {

    }

    updateSnappingPoints() {

        this.snappingPoints[0].x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.snappingPoints[0].y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2) + ((this.tableElementSizeHeight) / 2);

        this.snappingPoints[1].x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2) + (this.tableElementSizeWidth) - SNAPPING_POINT_SIZE;
        this.snappingPoints[1].y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2) + ((this.tableElementSizeHeight) / 2);

        for (let sp of this.snappingPoints) {
            sp.applyTransform();
        }
    }

    addSnappingPoints() {

        for (let sp of this.snappingPoints) {
            sp.locked = false;

            sp.applyTransform = function () {
                this.element.style.transform = `translate(${sp.x}px, ${sp.y}px) scale(${sp.scale})`;
            }

            const spe = document.createElement("div");
            sp.element = spe;
            spe.style.position = "absolute";
            spe.style.width = `${SNAPPING_POINT_SIZE}px`;
            spe.style.height = `${SNAPPING_POINT_SIZE}px`;
            spe.style.backgroundColor = "#ffb1b1";
            spe.style.border = "1px solid #ff5252";
            spe.style['border-radius'] = "50%";
            spe.style['z-index'] = 1;

            spe.style.transform = `translate(${sp.x}px, ${sp.y}px) scale(1)`;

            this.element.appendChild(spe);
        }

        this.updateSnappingPoints();
    }
}

class ExpandedTable extends Table {
    width = 360;
    height = 190;

    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    seatsPositions = [];

    seats = [];
    tableType = "ExpandedTable";
    parentTableType = null;
    value = 1;

    tableElement;
    tableElementSizeWidth = 300;
    tableElementSizeHeight = 130;

    snappingPointsActive = true;

    constructor(world) {
        super();
        this.build(world);
    }

    initializeSeats() {}

    initializeSeatsExpanded(tableToJoin) {

        let oldSeats = this.seats.filter(s => s.guestName.trim() != '').map(s => ({ guestName: s.guestName, guestAge: s.guestAge, foodRestrictions: s.foodRestrictions}));

        if(tableToJoin) {
            const otherTableOldSeats = tableToJoin.seats.filter(s => s.guestName.trim() != '').map(s => ({ guestName: s.guestName, guestAge: s.guestAge, foodRestrictions: s.foodRestrictions}));
            oldSeats = [...oldSeats, ...otherTableOldSeats];
        }

        for (let seat of this.seats) {
            seat.destroy();
        }


        this.seats = [];
    
        this.seatsPositions = [];
      
        this.calculateSeatPositions();
    
        for (let seatPosition of this.seatsPositions) {
            const seat = new Seat(this);
            seat.side = seatPosition.side;
            seat.rotate = seatPosition.rotate || 0;
            seat.x = seatPosition.x + (this.spaceBetweenTablesHorizontal / 2);
            seat.y = seatPosition.y + (this.spaceBetweenTablesVertical / 2);
            seat.number = seatPosition.number;
            seat.isCouple = !!seatPosition.couple;
            seat.applyTransform();
    
            seat.updateStatus();
            seat.addTooltip();
            this.seats.push(seat);
        }
        
        this.updateSeatsNumerations();

        if(oldSeats.length > 0) {
            let number = 0;
            for(let oldSeat of oldSeats) {
                const seat = this.seats.find(s => s.number == number);
                if(seat) {
                    seat.guestName = oldSeat.guestName;
                    seat.guestAge = oldSeat.guestAge;
                    seat.foodRestrictions = oldSeat.foodRestrictions;
    
                    number++;
                }
            }
        }
    }

    updateSeats() {
            for (let seat of this.seats) {
                seat.updateStatus();
                seat.updateToolTip();
            }
    
            this.updateTooltipGuest();
            this.updateBackground();
    }

    tableElementUpdateSize() {
        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElementUpdateSize();

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
    }
}

class SquareTable extends Table {
    tableDefaultSize = 270;
    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    snappingPointsActive = true;

    seatsTopNumber = 3;
    seatsSidesNumber = 3;
    seatsPositions = [
    ];
    seats = [];
    tableType = "SquareTable";

    tableElement;
    tableElementSizeWidth = 200;
    tableElementSizeHeight = 200;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class RectangularTable extends Table {
    width = 360;
    height = 190;

    snappingPointsActive = true;

    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    seatsTopNumber = 5;
    seatsSidesNumber = 2;
    seatsPositions = [];
    seats = [];
    tableType = "RectangularTable";

    tableElement;
    tableElementSizeWidth = 300;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class RectangularLTable extends Table {
    width = 520;
    height = 200;

    snappingPointsActive = true;

    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    seatsTopNumber = 6;
    seatsSidesNumber = 2;
    seatsPositions = [
    ];
    seats = [];
    tableType = "RectangularLTable";

    tableElement;
    tableElementSizeWidth = 450;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class RoundTable extends Table {
    tableDefaultSize = 240;

    spaceBetweenTablesHorizontal = 0;
    spaceBetweenTablesVertical = 0;

    seatsTopNumber = 11;
    seatsSidesNumber = 0;
    seatsPositions = [];

    seats = [];
    isRound = true;
    tableType = "RoundTable";

    tableElement;
    tableElementSizeWidth = 180;
    tableElementSizeHeight = 180;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "50%";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class ForestMTable extends Table {
    tableDefaultSizeWidth = 255;
    tableDefaultSizeHeight = 185;

    snappingPointsActive = true;

    seatsTopNumber = 4;
    seatsSidesNumber = 2;
    seatsPositions = [
    ];
    seats = [];
    tableType = "ForestMTable";

    tableElement;
    tableElementSizeWidth = 195;
    tableElementSizeHeight = 125;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);


        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleRoundTable extends Table {
    tableDefaultSize = 240;
    seatsPositions = [
        {
            number: 0,
            x: 124 - 30,
            y: 37 - 30,
            rotate: 341,
            couple: true,
        },
        {
            number: 1,
            x: 197 - 30,
            y: 36 - 30,
            rotate: 17,
            couple: true,
        },
    ];
    seats = [];
    tableType = "CoupleRoundTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 180;
    tableElementSizeHeight = 180;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "50%";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleOvalSTable extends Table {
    tableDefaultSizeWidth = 310;
    tableDefaultSizeHeight = 180;
    seatsPositions = [
        {
            number: 0,
            x: 140,
            y: 0,
            rotate: 0,
            couple: true,
        },
        {
            number: 1,
            x: 195,
            y: 0,
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

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "60px";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleOvalMTable extends Table {
    tableDefaultSizeWidth = 460;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 105,
            y: 190,
            rotate: 180,
        },
        {
            number: 1,
            x: 15,
            y: 130,
            rotate: 249,
        },
        {
            number: 2,
            x: 16,
            y: 50,
            rotate: 293,
        },
        {
            number: 3,
            x: 105,
            y: -8,
            rotate: 0,
        },
        {
            number: 4,
            x: 205,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 5,
            x: 290,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 6,
            x: 380,
            y: -8,
            rotate: 0,
        },
        {
            number: 7,
            x: 465,
            y: 50,
            rotate: 66,
        },
        {
            number: 8,
            x: 465,
            y: 129,
            rotate: 111,
        },
        {
            number: 9,
            x: 380,
            y: 190,
            rotate: 180,
        },
    ];
    seats = [];
    tableType = "CoupleOvalMTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 400;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "60px";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);


        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleOvalMFullTable extends Table {
    tableDefaultSizeWidth = 460;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 205,
            y: 190,
            rotate: 180,
        },
        {
            number: 1,
            x: 105,
            y: 190,
            rotate: 180,
        },
        {
            number: 2,
            x: 15,
            y: 130,
            rotate: 249,
        },
        {
            number: 3,
            x: 16,
            y: 50,
            rotate: 293,
        },
        {
            number: 4,
            x: 105,
            y: -8,
            rotate: 0,
        },
        {
            number: 5,
            x: 205,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 6,
            x: 290,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 7,
            x: 380,
            y: -8,
            rotate: 0,
        },
        {
            number: 8,
            x: 465,
            y: 50,
            rotate: 66,
        },
        {
            number: 9,
            x: 465,
            y: 129,
            rotate: 111,
        },
        {
            number: 10,
            x: 380,
            y: 190,
            rotate: 180,
        },
        {
            number: 11,
            x: 290,
            y: 190,
            rotate: 180,
        },
    ];
    seats = [];
    tableType = "CoupleOvalMFullTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 400;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "60px";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleOvalLTable extends Table {
    tableDefaultSizeWidth = 660;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 205,
            y: 190,
            rotate: 180,
        },
        {
            number: 1,
            x: 115,
            y: 190,
            rotate: 180,
        },
        {
            number: 2,
            x: 28,
            y: 150,
            rotate: 237,
        },
        {
            number: 3,
            x: 10,
            y: 88,
            rotate: 270,
        },
        {
            number: 4,
            x: 30,
            y: 24,
            rotate: -47,
        },
        {
            number: 5,
            x: 115,
            y: -8,
            rotate: 0,
        },
        {
            number: 6,
            x: 205,
            y: -8,
            rotate: 0,
        },
        {
            number: 7,
            x: 295,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 8,
            x: 395,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 9,
            x: 485,
            y: -8,
            rotate: 0,
        },
        {
            number: 10,
            x: 575,
            y: -8,
            rotate: 0,
        },
        {
            number: 11,
            x: 650,
            y: 24,
            rotate: 50,
        },
        {
            number: 12,
            x: 670,
            y: 88,
            rotate: 90,
        },
        {
            number: 13,
            x: 658,
            y: 147,
            rotate: 122,
        },
        {
            number: 14,
            x: 575,
            y: 190,
            rotate: 180,
        },
        {
            number: 15,
            x: 485,
            y: 190,
            rotate: 180,
        },
    ];
    seats = [];
    tableType = "CoupleOvalLTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 600;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "60px";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleOvalLFullTable extends Table {
    tableDefaultSizeWidth = 660;
    tableDefaultSizeHeight = 200;
    seatsPositions = [
        {
            number: 0,
            x: 295,
            y: 190,
            rotate: 180,
        },
        {
            number: 1,
            x: 205,
            y: 190,
            rotate: 180,
        },
        {
            number: 2,
            x: 115,
            y: 190,
            rotate: 180,
        },
        {
            number: 3,
            x: 28,
            y: 150,
            rotate: 237,
        },
        {
            number: 4,
            x: 10,
            y: 88,
            rotate: 270,
        },
        {
            number: 5,
            x: 30,
            y: 24,
            rotate: -47,
        },
        {
            number: 6,
            x: 115,
            y: -8,
            rotate: 0,
        },
        {
            number: 7,
            x: 205,
            y: -8,
            rotate: 0,
        },
        {
            number: 8,
            x: 295,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 9,
            x: 395,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 10,
            x: 485,
            y: -8,
            rotate: 0,
        },
        {
            number: 11,
            x: 575,
            y: -8,
            rotate: 0,
        },
        {
            number: 12,
            x: 650,
            y: 24,
            rotate: 50,
        },
        {
            number: 13,
            x: 670,
            y: 88,
            rotate: 90,
        },
        {
            number: 14,
            x: 658,
            y: 147,
            rotate: 122,
        },
        {
            number: 15,
            x: 575,
            y: 190,
            rotate: 180,
        },
        {
            number: 16,
            x: 485,
            y: 190,
            rotate: 180,
        },
        {
            number: 17,
            x: 395,
            y: 190,
            rotate: 180,
        },
    ];
    seats = [];
    tableType = "CoupleOvalLFullTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 600;
    tableElementSizeHeight = 130;

    constructor(world) {
        super();
        this.spaceBetweenTablesHorizontal = 120;
        this.spaceBetweenTablesVertical = world.roomPlan.spaceBetweenTables;
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;
        this.tableElement.style["border-radius"] = "60px";

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleForestSTable extends Table {
    tableDefaultSizeWidth = 265;
    tableDefaultSizeHeight = 170;
    seatsPositions = [
        {
            number: 0,
            x: 120,
            y: -8,
            couple: true,
        },
        {
            number: 1,
            x: 180,
            y: -8,
            couple: true,
        },
    ];
    seats = [];
    tableType = "CoupleForestSTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 205;
    tableElementSizeHeight = 110;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

class CoupleForestMTable extends Table {
    tableDefaultSizeWidth = 255;
    tableDefaultSizeHeight = 185;

    snappingPointsActive = true;

    seatsPositions = [
        {
            number: 0,
            x: 75,
            y: -8,
            rotate: 0
        },
        {
            number: 1,
            x: 120,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 2,
            x: 165,
            y: -8,
            rotate: 0,
            couple: true,
        },
        {
            number: 3,
            x: 205,
            y: -8,
            rotate: 0
        },
        {
            number: 4,
            x: 265,
            y: 65,
            rotate: 90
        },
        {
            number: 5,
            x: 265,
            y: 115,
            rotate: 90
        },
        {
            number: 6,
            x: 205,
            y: 185,
            rotate: 180
        },
        {
            number: 7,
            x: 160,
            y: 185,
            rotate: 180
        },
        {
            number: 8,
            x: 115,
            y: 185,
            rotate: 180
        },
        {
            number: 9,
            x: 70,
            y: 185,
            rotate: 180
        },
        {
            number: 10,
            x: 8,
            y: 110,
            rotate: -90
        },
        {
            number: 11,
            x: 8,
            y: 60,
            rotate: -90
        },
    ];
    seats = [];
    tableType = "CoupleForestMTable";
    tablePurpose = "COUPLE";

    tableElement;
    tableElementSizeWidth = 195;
    tableElementSizeHeight = 125;

    constructor(world) {
        super();
        this.build(world);
    }

    addTableElement() {
        this.tableElement = document.createElement('div');
        this.tableElement.classList.add('table-draw');
        this.element.appendChild(this.tableElement);

        this.tableElement.style.width = `${this.tableElementSizeWidth}px`;
        this.tableElement.style.height = `${this.tableElementSizeHeight}px`;

        this.tableElementPosition.x = TABLE_SEAT_SIZE + (this.spaceBetweenTablesHorizontal / 2);
        this.tableElementPosition.y = TABLE_SEAT_SIZE + (this.spaceBetweenTablesVertical / 2);

        this.tableElementTransform();
        this.updateTablePurpose(this.tablePurpose);
    }
}

const TableTypes = {
    Table,
    ExpandedTable,
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

const TableTypesIcon = {
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

    width = TABLE_ELEMENT_OFFSET;
    height = TABLE_SEAT_SIZE;

    side;

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

            //IF HIDE GUESTS
            if (this.table.world && this.table?.world?.guestsBy == 'TABLE') {
                this.setREM();
            } else {
                if (this.guestName) {
                    this.setFilled();
                } else {
                    this.setREM();
                }
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
        this.miniSeat.innerHTML = this.number + 1;
        this.tooltipElementRow1Icon.appendChild(this.miniSeat);

        this.tooltipElementRow1.appendChild(this.tooltipElementRow1Content)

        this.tooltipElementRow1Content.innerHTML = this.guestName || new TranslationSystem().getTranslation("NO_GUESTS");

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

    disableTooltip() {
        this.tippyInstance.disable();
    }

    enableTooltip() {
        this.tippyInstance.enable();
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

    destroy() {
        this.table.element.removeChild(this.element);
    }
}

class MouseManager {
    selectedObject = null;
    editorContainerElement = null;
    editorContentElement = null;
    guestModal;
    orderPositionModal;
    zoneModal;
    roomEditor;
    translationSystem;

    activeGuestTables = [];
    activeCouplesTables = [];

    uids = {};
    statsElements = {};
    uiEnable = true;

    secundarySelectedObject = null;
    changingGuestsTable = false;

    contextPos = null;

    manageGuestsActive = false;

    constructor(world, roomEditor) {
        this.roomEditor = roomEditor;
        this.editorContainerElement = roomEditor.editorContainerElement;
        this.editorContentElement = roomEditor.editorContentElement;
        this.guestModal = roomEditor.guestsModal;
        this.orderPositionModal = roomEditor.orderPositionModal;
        this.zoneModal = roomEditor.zoneModal;

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

    destroy() {
        this.contextMenuElement.parentElement.removeChild(this.contextMenuElement)
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

        if (!this.pointerDiv) {
            this.pointerDiv = document.createElement("div");
            this.pointerDiv.style.width = "10px";
            this.pointerDiv.style.height = "10px";
            this.pointerDiv.style.background = "#c7c7c7";
            this.pointerDiv.style['border-radius'] = '50%';
            this.pointerDiv.style['border'] = '1px solid #979797';
            this.world.element.appendChild(this.pointerDiv);
        }
    }


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

    setActiveCouplesTables(tablesTypes) {
        this.activeCouplesTables = tablesTypes;
        const elements = document.getElementsByClassName("coupleTableSelect");

        if (elements.length > 0) {

            if ($('#coupleTableSelect').data('select2')) {
                $('#coupleTableSelect').select2('destroy').empty()
            }

            for (let act of this.activeCouplesTables) {
                elements[0].innerHTML += `
                    <option title="${TableTypesIcon[act]}" value="${act}" pax="14" >${act}</option>
                `;
            }

            this.initializeCoupleTableSelect();
            this.translationSystem.reviewPage();
        }


        if (this.world) {
            const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");
            if (tableCouple) {
                $("#coupleTableSelect").val(tableCouple.tableType);
            }
        }
    }


    initializeUi() {
        this.uids['ui1'] = document.createElement('div');
        this.uids['ui1'].classList.add("editor-row", "ui-row");

        const mainContainer = document.createElement('div');
        mainContainer.style.display = 'flex';
        mainContainer.style.flexWrap = 'wrap';

        // Create the first editorRoom-input div
        const editorRoomInput1 = document.createElement('div');
        editorRoomInput1.classList.add('editorRoom-input', 'ui');

        /*
        const undoButton = document.createElement('button');
        undoButton.classList.add('editor-btn', 'editor-btn-primary', "ui");
        undoButton.style.marginBottom = '0px';

        const undoIcon = document.createElement('i');
        undoIcon.classList.add('fas', 'fa-undo', "ui");

        undoButton.appendChild(undoIcon);
        editorRoomInput1.appendChild(undoButton);
        */

        mainContainer.appendChild(editorRoomInput1);

        // Create the second editorRoom-input div
        const editorRoomInput2 = document.createElement('div');
        editorRoomInput2.classList.add('editorRoom-input', 'ui');

        const typeLabel = document.createElement('label');
        typeLabel.innerHTML = '<span class="ui" translation-key="TYPE_TABLES">Tipo</span>:';

        const typesDiv = document.createElement('div');
        typesDiv.classList.add('types');


        this.tablePurposesInputs = {};
        const translationsInputs = {
            'guest': 'ROOM_PLAN_GUESTS',
            'staff': 'ROOM_PLAN_STAFF',
            'child': 'ROOM_PLAN_CHILD',
        };

        ['guest', 'staff', 'child'].forEach((value, index) => {
            const radioDiv = document.createElement('div');
            radioDiv.classList.add('editor-radio');
            radioDiv.classList.add('ui');
            radioDiv.id = `radiotablePurpose${value.toUpperCase()}`;

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
        editorRoomInput3.id = 'inputTables'

        const tablesLabel = document.createElement('label');
        tablesLabel.innerHTML = '<span translation-key="TABLES">Mesas</span>:';

        const tablesUiDiv = document.createElement('div');
        tablesUiDiv.classList.add('tables_ui');
        tablesUiDiv.style.marginTop = '2px';

        editorRoomInput3.appendChild(tablesLabel);
        editorRoomInput3.appendChild(tablesUiDiv);
        mainContainer.appendChild(editorRoomInput3);

        // TODO CHECK IF OS TO ACTIVE SELECT
        /*<!--<div class="editorRoom-input" style="width: 180px;">
        <label translation-key="COUPLE_TABLES">Mesa dos noivos:</label>
        <select id="coupleTableSelect" class="coupleTableSelect ui">
            
        </select>
    </div>-->*/
        const coupleInput = document.createElement("div");
        coupleInput.classList.add("editorRoom-input", 'ui');
        coupleInput.style.width = "260px";
        coupleInput.id = 'editorCoupleInput';

        const coupleInputLabel = document.createElement("label");
        const coupleInputLabelSpan = document.createElement("span");
        coupleInputLabelSpan.innerText = "Mesa dos noivos";
        coupleInputLabelSpan.setAttribute('translation-key', 'COUPLE_TABLES');
        coupleInputLabel.appendChild(coupleInputLabelSpan);
        coupleInputLabel.innerHTML += ":";
        coupleInput.appendChild(coupleInputLabel);

        this.coupleInputSelect = document.createElement("select");
        this.coupleInputSelect.id = "coupleTableSelect";
        this.coupleInputSelect.classList.add("coupleTableSelect");
        this.coupleInputSelect.classList.add("ui");
        coupleInput.appendChild(this.coupleInputSelect);

        mainContainer.appendChild(coupleInput);

        this.uids['ui1'].appendChild(mainContainer);

        this.editorContainerElement.appendChild(this.uids['ui1']);

        this.uids['ui3'] = document.createElement('div');
        this.uids['ui3'].classList.add("editor-row", "ui-row", 'editor-toolbar');
        this.uids['ui3'].classList.add("room-editor-row-stats");

        const statAdultAgeDiv = document.createElement("div");
        statAdultAgeDiv.classList.add("room-editor-stats");
        const statAdultAgeSpan1 = document.createElement("span");
        statAdultAgeSpan1.classList.add('stats-label');
        const statAdultAgeSpan11 = document.createElement("span");
        const statAdultAgeSpan12 = document.createElement("span");
        statAdultAgeSpan11.setAttribute('translation-key', 'ADULT_AGE');
        statAdultAgeSpan12.innerText = ":";
        statAdultAgeSpan1.appendChild(statAdultAgeSpan11);
        statAdultAgeSpan1.appendChild(statAdultAgeSpan12);
        const statAdultAgeSpan2 = document.createElement("span");
        statAdultAgeSpan2.classList.add("room-editor-stat-value");
        statAdultAgeSpan2.innerText = "0";
        this.statsElements['ADULT_AGE'] = statAdultAgeSpan2;
        statAdultAgeDiv.appendChild(statAdultAgeSpan1);
        statAdultAgeDiv.appendChild(statAdultAgeSpan2);
        this.uids['ui3'].appendChild(statAdultAgeDiv);

        const statFromChildAgeDiv = document.createElement("div");
        statFromChildAgeDiv.classList.add("room-editor-stats");
        const statFromChildAgeSpan1 = document.createElement("span");
        statFromChildAgeSpan1.classList.add('stats-label');
        const statFromChildAgeSpan11 = document.createElement("span");
        const statFromChildAgeSpan12 = document.createElement("span");
        statFromChildAgeSpan11.setAttribute('translation-key', 'FROM_CHILD_AGE');
        statFromChildAgeSpan12.innerText = ":";
        statFromChildAgeSpan1.appendChild(statFromChildAgeSpan11);
        statFromChildAgeSpan1.appendChild(statFromChildAgeSpan12);
        const statFromChildAgeSpan2 = document.createElement("span");
        statFromChildAgeSpan2.classList.add("room-editor-stat-value");
        statFromChildAgeSpan2.innerText = "0";
        this.statsElements['FROM_CHILD_AGE'] = statFromChildAgeSpan2;
        statFromChildAgeDiv.appendChild(statFromChildAgeSpan1);
        statFromChildAgeDiv.appendChild(statFromChildAgeSpan2);
        this.uids['ui3'].appendChild(statFromChildAgeDiv);

        const statFromNewbornAgeDiv = document.createElement("div");
        statFromNewbornAgeDiv.classList.add("room-editor-stats");
        const statFromNewbornAgeSpan1 = document.createElement("span");
        statFromNewbornAgeSpan1.classList.add('stats-label');
        const statFromNewbornAgeSpan11 = document.createElement("span");
        const statFromNewbornAgeSpan12 = document.createElement("span");
        statFromNewbornAgeSpan11.setAttribute('translation-key', 'FROM_NEWBORN_CHILD_AGE');
        statFromNewbornAgeSpan12.innerText = ":";
        statFromNewbornAgeSpan1.appendChild(statFromNewbornAgeSpan11);
        statFromNewbornAgeSpan1.appendChild(statFromNewbornAgeSpan12);
        const statFromNewbornAgeSpan2 = document.createElement("span");
        statFromNewbornAgeSpan2.classList.add("room-editor-stat-value");
        statFromNewbornAgeSpan2.innerText = "0";
        this.statsElements['FROM_NEWBORN_CHILD_AGE'] = statFromNewbornAgeSpan2;
        statFromNewbornAgeDiv.appendChild(statFromNewbornAgeSpan1);
        statFromNewbornAgeDiv.appendChild(statFromNewbornAgeSpan2);
        this.uids['ui3'].appendChild(statFromNewbornAgeDiv);

        const statStaffDiv = document.createElement("div");
        statStaffDiv.classList.add("room-editor-stats");
        const statStaffSpan1 = document.createElement("span");
        statStaffSpan1.classList.add('stats-label');
        const statStaffSpan11 = document.createElement("span");
        const statStaffSpan12 = document.createElement("span");
        statStaffSpan11.setAttribute('translation-key', 'ROOM_PLAN_STAFF');
        statStaffSpan12.innerText = ":";
        statStaffSpan1.appendChild(statStaffSpan11);
        statStaffSpan1.appendChild(statStaffSpan12);
        const statStaffSpan2 = document.createElement("span");
        statStaffSpan2.classList.add("room-editor-stat-value");
        statStaffSpan2.innerText = "0";
        this.statsElements['STAFF'] = statStaffSpan2;
        statStaffDiv.appendChild(statStaffSpan1);
        statStaffDiv.appendChild(statStaffSpan2);
        this.uids['ui3'].appendChild(statStaffDiv);

        const statTotalTablesDiv = document.createElement("div");
        statTotalTablesDiv.classList.add("room-editor-stats");
        const statTotalTablesSpan1 = document.createElement("span");
        statTotalTablesSpan1.classList.add('stats-label');
        const statTotalTablesSpan11 = document.createElement("span");
        const statTotalTablesSpan12 = document.createElement("span");
        statTotalTablesSpan11.setAttribute('translation-key', 'ROOM_PLAN_TOTAL_TABLES');
        statTotalTablesSpan12.innerText = ":";
        statTotalTablesSpan1.appendChild(statTotalTablesSpan11);
        statTotalTablesSpan1.appendChild(statTotalTablesSpan12);
        const statTotalTablesSpan2 = document.createElement("span");
        statTotalTablesSpan2.classList.add("room-editor-stat-value");
        statTotalTablesSpan2.innerText = "0";
        this.statsElements['ROOM_PLAN_TOTAL_TABLES'] = statTotalTablesSpan2;
        statTotalTablesDiv.appendChild(statTotalTablesSpan1);
        statTotalTablesDiv.appendChild(statTotalTablesSpan2);
        this.uids['ui3'].appendChild(statTotalTablesDiv);

        const statTotalGuestDiv = document.createElement("div");
        statTotalGuestDiv.classList.add("room-editor-stats");
        const statTotalGuestSpan1 = document.createElement("span");
        statTotalGuestSpan1.classList.add('stats-label');
        const statTotalGuestSpan11 = document.createElement("span");
        const statTotalGuestSpan12 = document.createElement("span");
        statTotalGuestSpan11.setAttribute('translation-key', 'ROOM_PLAN_TOTAL_GUESTS');
        statTotalGuestSpan12.innerText = ":";
        statTotalGuestSpan1.appendChild(statTotalGuestSpan11);
        statTotalGuestSpan1.appendChild(statTotalGuestSpan12);
        const statTotalGuestSpan2 = document.createElement("span");
        statTotalGuestSpan2.classList.add("room-editor-stat-value");
        statTotalGuestSpan2.innerText = "0";
        this.statsElements['ROOM_PLAN_TOTAL_GUESTS'] = statTotalGuestSpan2;
        statTotalGuestDiv.appendChild(statTotalGuestSpan1);
        statTotalGuestDiv.appendChild(statTotalGuestSpan2);
        this.uids['ui3'].appendChild(statTotalGuestDiv);


        const statAvgPaxTablesDiv = document.createElement("div");
        statAvgPaxTablesDiv.classList.add("room-editor-stats");
        const statAvgPaxTablesSpan1 = document.createElement("span");
        statAvgPaxTablesSpan1.classList.add('stats-label');
        const statAvgPaxTablesSpan11 = document.createElement("span");
        const statAvgPaxTablesSpan12 = document.createElement("span");
        statAvgPaxTablesSpan11.setAttribute('translation-key', 'AVG_PAX_TABLES');
        statAvgPaxTablesSpan12.innerText = ":";
        statAvgPaxTablesSpan1.appendChild(statAvgPaxTablesSpan11);
        statAvgPaxTablesSpan1.appendChild(statAvgPaxTablesSpan12);
        const statAvgPaxTablesSpan2 = document.createElement("span");
        statAvgPaxTablesSpan2.classList.add("room-editor-stat-value", 'editor-stats-danger');
        statAvgPaxTablesSpan2.innerText = "0";
        this.statsElements['AVG_PAX_TABLES'] = statAvgPaxTablesSpan2;
        statAvgPaxTablesDiv.appendChild(statAvgPaxTablesSpan1);
        statAvgPaxTablesDiv.appendChild(statAvgPaxTablesSpan2);
        this.uids['ui3'].appendChild(statAvgPaxTablesDiv);

        const statTotalPaxDiv = document.createElement("div");
        statTotalPaxDiv.classList.add("room-editor-stats");
        const statTotalPaxSpan1 = document.createElement("span");
        statTotalPaxSpan1.classList.add('stats-label');
        const statTotalPaxSpan11 = document.createElement("span");
        const statTotalPaxSpan12 = document.createElement("span");
        statTotalPaxSpan11.setAttribute('translation-key', 'ROOM_PLAN_TOTAL_PAX');
        statTotalPaxSpan12.innerText = ":";
        statTotalPaxSpan1.appendChild(statTotalPaxSpan11);
        statTotalPaxSpan1.appendChild(statTotalPaxSpan12);
        const statTotalPaxSpan2 = document.createElement("span");
        statTotalPaxSpan2.classList.add("room-editor-stat-value");
        statTotalPaxSpan2.innerText = "0";
        this.statsElements['ROOM_PLAN_TOTAL_PAX'] = statTotalPaxSpan2;
        statTotalPaxDiv.appendChild(statTotalPaxSpan1);
        statTotalPaxDiv.appendChild(statTotalPaxSpan2);
        this.uids['ui3'].appendChild(statTotalPaxDiv);


        /*this.uids['ui3'].innerHTML = `
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
        `;*/

        this.editorContainerElement.appendChild(this.uids['ui3']);


        this.uids['ui4'] = document.createElement("div");

        this.uids['ui4'].style.position = "absolute";
        this.uids['ui4'].style.top = "36px";
        this.uids['ui4'].style.left = "29%";
        this.uids['ui4'].style.zIndex = 999;
        this.uids['ui4'].style.background = "rgba(0,0,0,0.7)";
        this.uids['ui4'].style.padding = "16px";
        this.uids['ui4'].style.borderRadius = "13px";
        this.uids['ui4'].style.color = "white";
        this.uids['ui4'].innerText = this.translationSystem.getTranslation("CHANGE_GUESTS_ALERT");

        this.editorContainerElement.appendChild(this.uids['ui4']);

        $(document).ready(() => {
            this.initializeCoupleTableSelect();
        });
    }

    updateStats(checkExtraCost = false) {
        const allGuests = this.world.tables.filter(t => t.isActive() && t.tablePurpose != 'STAFF').map(t => t.seats).flat().filter(s => s.guestName?.trim() != '');
        const allGuestsStaff = this.world.tables.filter(t => t.isActive() && t.tablePurpose == 'STAFF').map(t => t.seats).flat().filter(s => s.guestName?.trim() != '');

        const ADULT_AGE = allGuests.filter(s => s.guestAge == 'ADULT').length;
        const FROM_CHILD_AGE = allGuests.filter(s => s.guestAge == 'CHILD').length;
        const FROM_NEWBORN_CHILD_AGE = allGuests.filter(s => s.guestAge == 'BABY' || s.guestAge == 'NEWBORN').length;
        const ROOM_PLAN_TOTAL_TABLES = this.world.tables.filter(t => t.isActive() && t.tablePurpose != 'STAFF').length;
        const ROOM_PLAN_TOTAL_PAX = ADULT_AGE + (FROM_CHILD_AGE / 2) + (allGuestsStaff.length / 2);

        const ROOM_PLAN_TOTAL_GUESTS = ADULT_AGE + FROM_CHILD_AGE + FROM_NEWBORN_CHILD_AGE;
        const AVG_PAX_TABLES = (ROOM_PLAN_TOTAL_GUESTS / ROOM_PLAN_TOTAL_TABLES);

        this.statsElements['STAFF'].innerText = allGuestsStaff.length;
        this.statsElements['ADULT_AGE'].innerText = ADULT_AGE;
        this.statsElements['FROM_CHILD_AGE'].innerText = FROM_CHILD_AGE;
        this.statsElements['FROM_NEWBORN_CHILD_AGE'].innerText = FROM_NEWBORN_CHILD_AGE;
        this.statsElements['ROOM_PLAN_TOTAL_TABLES'].innerText = ROOM_PLAN_TOTAL_TABLES;
        this.statsElements['AVG_PAX_TABLES'].innerText = AVG_PAX_TABLES?.toFixed(2) || 0;
        if (AVG_PAX_TABLES < 10) {
            this.statsElements['AVG_PAX_TABLES'].classList.add('editor-stats-danger');
        } else this.statsElements['AVG_PAX_TABLES'].classList.remove('editor-stats-danger');
        this.statsElements['ROOM_PLAN_TOTAL_PAX'].innerText = ROOM_PLAN_TOTAL_PAX?.toFixed(2) || 0;
        this.statsElements['ROOM_PLAN_TOTAL_GUESTS'].innerText = ROOM_PLAN_TOTAL_GUESTS || 0;

        if(checkExtraCost)
            this.world.checkExtraCost(ROOM_PLAN_TOTAL_TABLES, AVG_PAX_TABLES);
    }

    enableUI() {
        this.uiEnable = true;
        for (let ui of Object.keys(this.uids)) {
            if (this.roomEditor.mode == RoomEditorMode.ROOM_PLAN && (ui == 'ui3')) {
                this.uids[ui].style.display = 'none';
            } else this.uids[ui].style.display = 'flex';
        }

        const coupleInput = document.getElementById('editorCoupleInput');
        if (coupleInput) {
            coupleInput.style.display = this.roomEditor.mode !== RoomEditorMode.ROOM_PLAN ? 'none' : 'flex';
        }

        const staffRadioInput = document.getElementById('radiotablePurposeSTAFF');
        if (staffRadioInput) {
            staffRadioInput.style.display = this.roomEditor.mode == RoomEditorMode.COUPLE ? 'none' : 'flex';
        }

        const tablesInput = document.getElementById('inputTables');
        if (tablesInput) {
            tablesInput.style.display = this.roomEditor.mode == RoomEditorMode.COUPLE ? 'none' : 'flex';
        }

        this.hideMessage();
    }

    disableUI() {
        this.uiEnable = false;
        for (let ui of Object.keys(this.uids)) {
            this.uids[ui].style.display = 'none';
        }

        this.hideMessage();
    }

    showMessage(message, miliseconds) {
        this.uids['ui4'].innerText = message;
        this.uids['ui4'].style.display = 'block';

        if(miliseconds) {
            setTimeout(() => {
                this.hideMessage();                
            }, miliseconds);
        }
    }
    hideMessage() {
        this.uids['ui4'].style.display = 'none';
    }

    initializeCoupleTableSelect() {
        $('#coupleTableSelect').select2({
            minimumResultsForSearch: -1,
            templateResult: (table) => {
                let translation = table.text;
                if (this.translationSystem)
                    translation = this.translationSystem.getTranslation(table.text);


                var $span = $(`
                <span class="editor-option">
                    <div style="display: inline-flex">
                        <div class="table_ui ${table?.title}"></div>
                        <span translation-key="${table.text}">${translation}</span>
                    </div>
                    <!--<div class="pax">
                        <i class="fa-regular fa-user"></i>
                        14pax
                    </div>-->
                </span>`);
                return $span;
            },
            templateSelection: (table) => {
                if (!table.id) {
                    return table.text;
                }
                let translation = table.text;
                if (this.translationSystem)
                    translation = this.translationSystem.getTranslation(table.text);

                var $state = $(
                    `<span class="editor-option">
                    <div style="display: inline-flex">
                        <div class="table_ui ${table?.title}"></div>
                        <span translation-key="${table.text}">${translation}</span>
                    </div>
                    <!--<div class="pax">
                        <i class="fa-regular fa-user"></i>
                        14pax
                    </div>-->
                </span>`
                );
                return $state;
            },
        });

        // const tableCouple = this.world?.tables?.find(t => t.tablePurpose == "COUPLE");
        // if (tableCouple) $(`#coupleTableSelect`).val(tableCouple.tableType).trigger('change');

        $('#coupleTableSelect').on("select2:select", (event) => {
            const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");

            const newTableCouple = new TableTypes[event.params.data.id](this.world);

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

            newTableCouple.spaceBetweenTablesHorizontal = this.world.roomPlan.spaceBetweenTables || 0;
            newTableCouple.spaceBetweenTablesVertical = this.world.roomPlan.spaceBetweenTables || 0;
            newTableCouple.init();
            this.world.addTable(newTableCouple);
            newTableCouple.applyTransform();

            if (this.selectedObject) {
                this.selectedObject.unsetSelected();
            }

            this.selectedObject = newTableCouple;
            this.selectedObject.setSelected();

        });
    }

    changeCoupleTable(tableType) {
        const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");

        const newTableCouple = new TableTypes[tableType](this.world);

        if (!tableCouple) {
            const pos = this.getWorldPositionCenterScreen();
            newTableCouple.code = 0;
            newTableCouple.x = pos.x;
            newTableCouple.y = pos.y;

        } else {
            newTableCouple.code = 0;

            newTableCouple.x = (tableCouple.x + tableCouple.halfWidth) - newTableCouple.halfWidth;
            newTableCouple.y = (tableCouple.y + tableCouple.halfHeight) - newTableCouple.halfHeight;
            const diff_old_center_x = (tableCouple.x + tableCouple.halfWidth) - (newTableCouple.x + tableCouple.halfWidth);
            const diff_old_center_y = (tableCouple.y + tableCouple.halfHeight) - (newTableCouple.y + tableCouple.halfHeight);
            newTableCouple.x -= diff_old_center_x;
            newTableCouple.y -= diff_old_center_y;

            newTableCouple.rotate = tableCouple.rotate;



            this.world.removeTable(tableCouple);
        }

        newTableCouple.spaceBetweenTablesHorizontal = this.world.roomPlan.spaceBetweenTables || 0;
        newTableCouple.spaceBetweenTablesVertical = this.world.roomPlan.spaceBetweenTables || 0;
        newTableCouple.init();
        this.world.addTable(newTableCouple);
        newTableCouple.applyTransform();

        newTableCouple.updateSeats();
        this.setSelectedObject(newTableCouple);
        this.updateStats();
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
        //aElement.href = "#";
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
                    case "DISABLE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "trash",
                                id: "ui-context-delete",
                                icon: "fa-trash",
                                text: this.translationSystem.getTranslation("DISABLE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'DISABLE')
                                }
                            })
                        );
                        break;
                    case "ENABLE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "enable",
                                id: "ui-context-delete",
                                icon: "fa-trash-arrow-up",
                                text: this.translationSystem.getTranslation("ENABLE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ENABLE')
                                }
                            })
                        );
                        break;
                    case "CHANGE_GUESTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "changeGuests",
                                id: "ui-context-change-guests",
                                icon: "fa-pencil",
                                text: this.translationSystem.getTranslation("CHANGE_GUESTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'CHANGE_GUESTS')
                                }
                            })
                        );
                        break;
                    case "INCREASE_TABLE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "increaseTable",
                                id: "ui-context-increase-table",
                                icon: "fa-expand",
                                text: this.translationSystem.getTranslation("INCREASE_TABLE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'INCREASE_TABLE')
                                }
                            })
                        );
                        break;
                    case "REDUCE_TABLE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "reduceTable",
                                id: "ui-context-reduce-table",
                                icon: "fa-compress",
                                text: this.translationSystem.getTranslation("REDUCE_TABLE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'REDUCE_TABLE')
                                }
                            })
                        );
                        break;
                    case "ORDER_POSITION":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-sort",
                                text: this.translationSystem.getTranslation("ORDER_POSITION_LABEL"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ORDER_POSITION')
                                }
                            })
                        );
                        break;

                    case "DELETE_ZONE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-eraser",
                                text: this.translationSystem.getTranslation("DELETE_ZONE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'DELETE_ZONE')
                                }
                            })
                        );
                        break;
                    case "CREATE_NEW_ZONE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-draw-polygon",
                                text: this.translationSystem.getTranslation("CREATE_ZONE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'CREATE_NEW_ZONE')
                                }
                            })
                        );
                        break;
                    case "MNG_ZONE":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-pen-ruler",
                                text: this.translationSystem.getTranslation("MNG_ZONE"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'MNG_ZONE')
                                }
                            })
                        );
                        break;
                    case "ZONE_FRONT":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-square-caret-up",
                                text: this.translationSystem.getTranslation("ZONE_FRONT"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ZONE_FRONT')
                                }
                            })
                        );
                        break;
                    case "ZONE_BACK":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-square-caret-down",
                                text: this.translationSystem.getTranslation("ZONE_BACK"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ZONE_BACK')
                                }
                            })
                        );
                        break;
                    case "ADD_CONSTRAINT_POINTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-draw-polygon",
                                text: this.translationSystem.getTranslation("CREATE_CONSTRAINT_POINTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ADD_CONSTRAINT_POINTS')
                                }
                            })
                        );
                        break;
                    case "CLEAR_CONSTRAINT_POINTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-eraser",
                                text: this.translationSystem.getTranslation("DELETE_CONSTRAINT_POINTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'CLEAR_CONSTRAINT_POINTS')
                                }
                            })
                        );
                        break;
                    case "ADD_POINTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-draw-polygon",
                                text: this.translationSystem.getTranslation("CREATE_ZONE_POINTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'ADD_POINTS')
                                }
                            })
                        );
                        break;
                    case "CLEAR_POINTS":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-eraser",
                                text: this.translationSystem.getTranslation("DELETE_ZONE_POINTS"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'CLEAR_POINTS')
                                }
                            })
                        );
                        break;
                    case "DEFINE_CENTER":
                        elements[0].appendChild(
                            this.contextMenuCreateElement({
                                class: "sort",
                                id: "ui-context-sort",
                                icon: "fa-draw-polygon",
                                text: this.translationSystem.getTranslation("DEFINE_CENTER"),
                                onclick: (event) => {
                                    this.contextMenuAction(event, 'DEFINE_CENTER')
                                }
                            })
                        );
                        break;
                }
            }
        }
    }

    changeSelectedTablePurpose(type) {
        if (this.selectedObject) {
            if (
                this.selectedObject.tablePurpose != "COUPLE" 
                // || (this.roomEditor.mode == "ROOM_PLAN" && this.selectedObject.tablePurpose == "STAFF")
            ) {
                // this.selectedObject.tablePurpose = type;

                if (type == 'STAFF') {
                    const existStaffTable = this.roomEditor.world.tables.filter(t => t.tablePurpose == 'STAFF');
                    if (existStaffTable.length > 0) {
                        this.setTablePurposeInput(this.selectedObject.tablePurpose);
                        return;
                    }
                }

                this.selectedObject.updateTablePurpose(type);
                this.roomEditor.world.checkTablesZonesRules();
                this.updateStats();
            }

        }
    }

    setTablePurposeInput(type) {

        if (this.tablePurposesInputs[type]) {
            for (let itp of Object.keys(this.tablePurposesInputs)) {
                this.tablePurposesInputs[itp].disabled = false;
            }
            this.tablePurposesInputs[type].checked = true;
        } else {
            for (let itp of Object.keys(this.tablePurposesInputs)) {
                this.tablePurposesInputs[itp].disabled = true;
                this.tablePurposesInputs[itp].checked = false;
            }
        }
    }


    getWorldPositionCenterScreen() {
        const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = ((editorRect.x + (editorRect.width / 2)) - (roomPlanRect.left)) / this.world.scale;
        let y = ((editorRect.y + (editorRect.height / 2)) - (roomPlanRect.top)) / this.world.scale;

        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        //console.log("World Position center screen:", { x, y })
        //this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    getWorldPosition(event) {
        //const editorRect = this.editorContainerElement.getBoundingClientRect();
        //const worldRect = this.world.element.getBoundingClientRect();
        const roomPlanRect = document.getElementsByClassName("roomPlan")[0].getBoundingClientRect()
        let x = (event.clientX - (roomPlanRect.left)) / this.world.scale;
        let y = (event.clientY - (roomPlanRect.top)) / this.world.scale;

        //document.getElementById("mouseWorlPosition").innerHTML = `X: ${x}px Y: ${y}px`;

        //console.log("World Position:", { x, y })

        //TODO
        //this.pointerDiv.style.transform = `translate(${x}px, ${y}px) scale(1)`;

        return { x, y };
    }

    handleContextMenu(event) {

        this.contextPos = this.getWorldPosition(event);


        // if (this.roomEditor.mode == RoomEditorMode.READ_ONLY) {
        //     event.preventDefault();
        //     return;
        // }

        const options = [];

        if (this.selectedObject && this.selectedObject.tableType) {

            if ((this.roomEditor.mode == RoomEditorMode.ROOM_PLAN || this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR) && this.selectedObject.tablePurpose != "COUPLE") {
                options.push("ORDER_POSITION");
            }

            if (this.selectedObject.tablePurpose == "COUPLE" && this.roomEditor.mode != RoomEditorMode.ROOM_PLAN && this.roomEditor.mode != RoomEditorMode.READ_ONLY) {
                options.push("CHANGE_COUPLE");
            }

            if (this.manageGuestsActive) {
                options.push("MANAGE_GUESTS");
            }

            if (
                this.selectedObject &&
                (this.selectedObject.tablePurpose == "GUEST" || this.selectedObject.tablePurpose == "CHILD") &&
                 this.selectedObject.isActive() &&
                (this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR || this.roomEditor.mode == RoomEditorMode.COUPLE)
            ) {
                options.push('CHANGE_GUESTS');

                if (this.selectedObject?.tableType == 'RectangularTable') {

                    if (this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR) {
                        options.push('INCREASE_TABLE');
                    } else {
                        // CHECK IF EXIST INCREASED TABLE ON THIS SIDE
                        if (this.selectedObject.sideOfRoom) {
                            const tablesOfthisSide = this.world.tables.filter(t => t.sideOfRoom == this.selectedObject.sideOfRoom);
                            const existIncreasedTable = tablesOfthisSide.find(t => t.tableType == "RectangularLTable");
                            if (!existIncreasedTable) {
                                options.push('INCREASE_TABLE');
                            }
                        } else { // DONT HAVE SIZE INCREASE
                            options.push('INCREASE_TABLE');
                        }
                    }

                }
                if (this.selectedObject?.tableType == 'RectangularLTable') options.push('REDUCE_TABLE');
            }

            if ((this.selectedObject.tablePurpose != "COUPLE" && this.selectedObject?.tablePurpose != 'STAFF') && (this.roomEditor.mode == RoomEditorMode.COUPLE || this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR)) {

                if (this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR) {
                    if (this.selectedObject?.active) {
                        options.push("DISABLE");
                    } else {
                        options.push("ENABLE");
                    }
                }

                if (this.roomEditor.mode == RoomEditorMode.COUPLE) {
                    const tablesNumbers = this.world.tables.filter(t => t.tablePurpose != "STAFF" && t.tablePurpose != "COUPLE").filter(t => t.isActive()).map(t => t.code);
                    const charNumber = this.selectedObject.code;
                    if (this.selectedObject?.active) {
                        if (charNumber == Math.max(...tablesNumbers)) {
                            options.push("DISABLE");
                        }
                    } else {
                        // GET THE BIGGEST ACTIVE
                        const biggestActiveTable = Math.max(...tablesNumbers)
                        //FIND THE NEXT DISABLED
                        const nextDisabledTables = this.world.tables.filter(t => t.tablePurpose != "STAFF" && t.tablePurpose != "COUPLE").filter((t) => t.code > biggestActiveTable).filter(t => !t.isActive()).map(t => t.code);

                        if (charNumber == Math.min(...nextDisabledTables)) {
                            options.push("ENABLE");
                        }
                    }

                }
            }

            if (
                this.selectedObject.tablePurpose != "COUPLE" 
                && (this.roomEditor.mode == RoomEditorMode.ROOM_PLAN || this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR)
            ) {
                options.push("ROTATE");
                options.push("DELETE");
            }

        }

        // TODO: allow admin too?
        if (event.target.getAttribute("constraintZone") == 'true') {
            if ((this.roomEditor.mode == RoomEditorMode.ROOM_PLAN || this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR)) {
                options.push("CREATE_NEW_ZONE");
            }
            if (this.roomEditor.mode == RoomEditorMode.ROOM_PLAN) {
                options.push("ADD_CONSTRAINT_POINTS");
                options.push("CLEAR_CONSTRAINT_POINTS");
            }
        }
        if ((this.roomEditor.mode == RoomEditorMode.ROOM_PLAN || this.roomEditor.mode == RoomEditorMode.ADMINISTRATOR) && event.target.getAttribute("zone") == 'true') {
            this.selectedZone = this.world.roomPlan.zones.find(z => z.zoneElement === event.target);
            options.push("DELETE_ZONE");
            options.push("MNG_ZONE");
            options.push("ZONE_FRONT");
            options.push("ZONE_BACK");
            options.push("ADD_POINTS");
            options.push("CLEAR_POINTS");
        }

        if (this.roomEditor.mode == RoomEditorMode.ROOM_PLAN) {
            options.push("DEFINE_CENTER");
        }

        this.contextMenuActiveOptions(options);

        this.activeContextMenu(event);
    }

    setSelectedObject(obj) {
        if (this.selectedObject) {
            this.selectedObject.unsetSelected();
        }
        this.selectedObject = obj;

        if (obj !== null && obj !== undefined) {
            this.selectedObject.setSelected();
            this.setTablePurposeInput(this.selectedObject.tablePurpose)
        }

    }

    handleMouseDown(event) {

        // if (this.roomEditor.mode == RoomEditorMode.READ_ONLY) {
        //     return;
        // }


        if (event.button === 0) {
            this.dragging = true;
            this.lastX = event.clientX;
            this.lastY = event.clientY;
        }

        const pos = this.getWorldPosition(event);


        if (event.button == 1 && this.roomEditor.mode == RoomEditorMode.ROOM_PLAN) {

            if (this.editorMode == "CONTRAINT_ZONE") {
                this.roomEditor.world.roomPlan.constraintZone.addZonePolygon(pos.x, pos.y);
                this.roomEditor.world.roomPlan.constraintZone.updateZonePoligonElement();
            }

            if (this.editorMode == "ZONE" && this.selectedZone) {
                this.selectedZone.addZonePolygon(pos.x, pos.y);
                this.selectedZone.updateZonePoligonElement();
            }

            if (this.editorMode == "DEFINE_CENTER") {
                this.roomEditor.world.setHorizontalCenterOfRoom(pos.x);
            }
            event.preventDefault();
            return;
        } else {
            this.editorMode = null;
            this.selectedZone = null;
        }

        if (event.button == 2 || this.contextMenuVisible == true) {
            this.hideContextMenu();
        }

        if (event.toElement.classList.contains("ui")) {
            if (event.toElement.dataset["tabletype"]) {
                const table1 = new TableTypes[event.toElement.dataset["tabletype"]](this.world);
                table1.code = this.world?.tables?.length > 0 ? this.world?.tables?.length : 1;
                table1.x = pos.x - table1.width;
                table1.y = pos.y - table1.height;
                table1.spaceBetweenTablesHorizontal = this.world.roomPlan.spaceBetweenTables || 0;
                table1.spaceBetweenTablesVertical = this.world.roomPlan.spaceBetweenTables || 0;
                table1.init();
                this.world.addTable(table1);
                table1.applyTransform();

                table1.updateSeats();
                this.setSelectedObject(table1);
                this.updateStats();
                event.preventDefault();
                return;
            }
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

        if (this.roomEditor.mode == RoomEditorMode.READ_ONLY) {
            return;
        }

        //document.getElementById("mousePosition").innerHTML = `X: ${event.clientX}px Y:${event.clientY} px`;

        if (!this.dragging || event.buttons !== 1) {
            return;
        }

        const dx = event.clientX - this.lastX;
        const dy = event.clientY - this.lastY;

        if (this.selectedObject && this.roomEditor.mode != RoomEditorMode.COUPLE) {
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

        if (this.roomEditor.mode == RoomEditorMode.READ_ONLY) {
            return;
        }

        if (event.button === 0) {
            this.dragging = false;

            // TODO CHECK IF THIS IS OK
            this.world.areTablesOverlapping();
            this.world.checkSnappingPoints();
            this.world.checkTablesSideOfRoom();

            if (this.selectedObject && this.selectedObject?.inDanger) {

                // If dragged to an unouthorized zone, send to original position
                if (this.selectedObject?.dangerType?.includes(TABLE_DANGER_TYPE.OUT_CONSTRAINT_ZONE)) {

                    if (this.selectedObject?.originalPosition) {
                        // TODO add alert
                        this.selectedObject.x = this.selectedObject.originalPosition.x;
                        this.selectedObject.y = this.selectedObject.originalPosition.y;
                        this.selectedObject.applyTransform();
                    } else {
                        this.selectedObject.disable();
                        return;
                    }
                }

            }
        }

    }

    handleMouseWheel(event) {

        if (this.roomEditor.mode == RoomEditorMode.READ_ONLY) {
            return;
        }

        const scaleDelta = event.deltaY > 0 ? -1 : 1;
        const zoom = Math.exp(scaleDelta * this.zoomIntensity);
        const pos1 = this.getWorldPosition(event);

        this.world.zoom(zoom);
        this.world.applyTransform();

        const pos2 = this.getWorldPosition(event);
        this.world.pan(-(pos1.x - pos2.x) * this.world.scale, -(pos1.y - pos2.y) * this.world.scale);
        this.world.applyTransform();

        event.preventDefault();
    }

    hideContextMenu() {
        this.contextMenuVisible = false;
        this.contextMenuElement.style.display = "none"
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
                this.guestModal.open(this.selectedObject, this.roomEditor);
                this.guestModal.onAfterSave = () => {
                    this.updateStats();
                }
                break;
            case "DELETE":
                this.world.removeTable(this.selectedObject);
                this.setSelectedObject(null);
                this.updateStats();
                break;
            case "DISABLE":
                this.selectedObject.disable();
                this.setSelectedObject(null);
                this.updateStats();
                break;
            case "ENABLE":
                this.selectedObject.enable();
                this.setSelectedObject(null);
                this.updateStats(true);
                break;
            case "ORDER_POSITION":
                this.orderPositionModal.open(this.selectedObject, this.world.tables);
                this.orderPositionModal.onAfterSave = () => {
                    this.selectedObject.updateTableNumerationValue();
                }
                break;
            case "CHANGE_GUESTS":

                if (this.changingGuestsTable) {
                        const seatsOccupiedA = this.selectedObject.seats.filter(s => s.guestName.trim() != "").length;
                        const seatsA = this.selectedObject.seats.length;
                        const seatsOccupiedB = this.secundarySelectedObject.seats.filter(s => s.guestName.trim() != "").length;
                        const seatsB = this.secundarySelectedObject.seats.length;

                        if (seatsOccupiedA > seatsB || seatsOccupiedB > seatsA) {
                            this.hideMessage();
                            this.changingGuestsTable = false;
                            this.secundarySelectedObject = null;
                            this.callGuestChangeError();
                        }else {
                            this.world.changeGuestsTable(this.selectedObject, this.secundarySelectedObject);
                            this.hideMessage();
                            this.changingGuestsTable = false;
                            this.setSelectedObject(null);
                            this.secundarySelectedObject = null;
                        }

                } else {
                    this.secundarySelectedObject = this.selectedObject;
                    this.changingGuestsTable = true;
                    this.showMessage(this.translationSystem.getTranslation("CHANGE_GUESTS_ALERT"));
                }
                break;
            case "INCREASE_TABLE":
                this.convertTable("RectangularLTable")
                break;
            case "REDUCE_TABLE":
                this.convertTable("RectangularTable")
                break;
            case "DELETE_ZONE":
                this.world.roomPlan.deleteZone(this.selectedZone);
                break;
            case "CREATE_NEW_ZONE":
                this.selectedZone = this.world.roomPlan.createZone();
                this.selectedZone.setSize(this.world.roomPlan.width, this.world.roomPlan.height);
                this.selectedZone.bright = 0.85;
                this.world.roomPlan.addZone(this.selectedZone);
                this.editorMode = "ZONE";
                break;
            case "MNG_ZONE":
                this.zoneModal.open(this.selectedZone);
                this.zoneModal.onAfterSave = () => {
                    this.world.areTablesOverlapping();
                    this.world.checkTablesZonesRules();
                }
                break;
            case "ZONE_FRONT":
                if (this.selectedZone) {
                    this.selectedZone.zindex++;
                    this.selectedZone.updateZonePoligonElement();
                }
                break;
            case "ZONE_BACK":
                if (this.selectedZone) {
                    this.selectedZone.zindex--;
                    this.selectedZone.updateZonePoligonElement();
                }
                break;
            case "ADD_CONSTRAINT_POINTS":
                this.editorMode = "CONTRAINT_ZONE";
                break;
            case "CLEAR_CONSTRAINT_POINTS":
                this.world.roomPlan.constraintZone.clearPoints();
                break;
            case "ADD_POINTS":
                this.editorMode = "ZONE";
                break;
            case "CLEAR_POINTS":
                this.selectedZone.clearPoints();
                break;
            case "DEFINE_CENTER":
                this.editorMode = "DEFINE_CENTER";
                this.roomEditor.world.setHorizontalCenterOfRoom(this.contextPos.x);
                break;
            default:
                throw new Error("Unexpected action");
        }

        this.hideContextMenu();
    }

    convertTable(newTableType) {
        const newIncreasedTable = new TableTypes[newTableType](this.world);
        newIncreasedTable.code = this.selectedObject.code;
        newIncreasedTable.x = (this.selectedObject.x + this.selectedObject.halfWidth) - newIncreasedTable.halfWidth;
        newIncreasedTable.y = (this.selectedObject.y + this.selectedObject.halfHeight) - newIncreasedTable.halfHeight;
        const diff_old_center_x = (this.selectedObject.x + this.selectedObject.halfWidth) - (newIncreasedTable.x + this.selectedObject.halfWidth);
        const diff_old_center_y = (this.selectedObject.y + this.selectedObject.halfHeight) - (newIncreasedTable.y + this.selectedObject.halfHeight);
        newIncreasedTable.x -= diff_old_center_x;
        newIncreasedTable.y -= diff_old_center_y;
        newIncreasedTable.rotate = this.selectedObject.rotate;

        this.world.removeTable(this.selectedObject);

        newIncreasedTable.spaceBetweenTablesHorizontal = this.world.roomPlan.spaceBetweenTables || 0;
        newIncreasedTable.spaceBetweenTablesVertical = this.world.roomPlan.spaceBetweenTables || 0;
        newIncreasedTable.init();
        this.world.addTable(newIncreasedTable);
        newIncreasedTable.applyTransform();

        newIncreasedTable.updateSeats();
        this.setSelectedObject(newIncreasedTable);
        this.updateStats();
    }

    setChangeCoupleEvent(action) {
        this.changeCoupleEvent = action;
    }
    
    
    changeCoupleEvent;
    callChangeCoupleEvent() {
        this.changeCoupleEvent();
    }
    
    guestChangeError;
    onGuestChangeError(action) {
        this.guestChangeError = action;
    }
    
    callGuestChangeError() {
        if(!this.guestChangeError) {
            return;
        }

        this.guestChangeError();
    }

    worldFitScreen() {

        if (this.roomEditor.editorContainerElement.getClientRects().length == 0) {
            console.warn("Can't use this function with display none")
            return;
        }

        const scaleX = this.roomEditor.editorContainerElement.getClientRects()[0].width / this.world.roomPlan.width - 0.002;
        const scaleY = this.roomEditor.editorContainerElement.getClientRects()[0].height / this.world.roomPlan.height - 0.002;

        this.world.scale = scaleX < scaleY ? scaleX : scaleY;
        this.world.x = -(this.world.roomPlan.halfWidth * (1 - scaleX));
        this.world.y = -(this.world.roomPlan.halfHeight * (1 - scaleY));
        this.world.applyTransform();
    }
}

class TranslationSystem {

    activeLanguage = "en";

    constructor() {
        if (TranslationSystem._instance) {
            return TranslationSystem._instance
        }
        TranslationSystem._instance = this;

        this.setData(DEFAULT_TRANSLATIONS);
        this.setActiveLanguage(this.activeLanguage);
    }

    setActiveLanguage(activeLanguage) {
        this.activeLanguage = activeLanguage;
        this.reviewPage();
    }

    data = [];

    setData(data) {
        this.data = data;
        this.reviewPage();
    }

    getData() {
        return this.data;
    }

    getTranslation(key) {
        const translations = this.getData().find(t => t.tag == key);

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

const RoomEditorMode = {
    COUPLE: 'COUPLE',
    ADMINISTRATOR: 'ADMINISTRATOR',
    ROOM_PLAN: 'ROOM_PLAN',
    READ_ONLY: 'READ_ONLY',
}

class RoomEditor {
    editorContainerElement = null;
    world = null;
    mouseManager = null;
    translationSystem;

    mode = 'READ_ONLY';

    constructor(
        idOfElement,
        activeLanguage = "en"
    ) {
        this.editorContainerElement = document.getElementById(idOfElement);

        if (!this.editorContainerElement) {
            throw Error("Element with id: " + idOfElement + " not found !");
        }

        this.editorContainerElement.style.overflow = "hidden";
        this.translationSystem = new TranslationSystem();
        this.translationSystem.setActiveLanguage(activeLanguage);

        this.guestsModal = new ManageGuestsModal();
        this.orderPositionModal = new OrderPositionModal();
        this.zoneModal = new ZoneModal();


        this.mouseManager = new MouseManager(this.world, this);

        this.mouseManager.disableUI();
        this.mouseManager.setSelectedObject(null);

        $("#myDiv").on("remove", function () {
            this.destroy();
        })
    }

    valid() {
        const result = {
            status: "INVALID",
            tables: [],
        }

        const tablesInDanger = this.mode == RoomEditorMode.ROOM_PLAN
            ? this.world.tables.filter(f => f?.isActive()).filter(t => t.inDanger || t.number == null || t.number < 0)
            : this.world.tables.filter(f => f?.isActive()).filter(t => t.inDanger);

        for (const tableInDanger of tablesInDanger) {
            if (!tableInDanger.inDanger) {
                if (tableInDanger.number == null || tableInDanger.number == undefined) {
                    if (!tableInDanger.dangerType.includes(TABLE_DANGER_TYPE.MISSING_ORDER)) {
                        tableInDanger.isInDanger(TABLE_DANGER_TYPE.MISSING_ORDER);
                    }
                }
                if (tableInDanger.number < 0) {
                    if (!tableInDanger.dangerType.includes(TABLE_DANGER_TYPE.ORDER_OUT_OF_RANGE)) {
                        tableInDanger.isInDanger(TABLE_DANGER_TYPE.ORDER_OUT_OF_RANGE);
                    }
                }
            }

            for (const danger of tableInDanger.dangerType) {
                result.tables.push({
                    code: tableInDanger.code,
                    number: tableInDanger.number,
                    name: tableInDanger.name,
                    danger: danger,
                })
            }
        }

        // CHECK IF TABLES RECTANGULARL IS THE SAME IN BOTH SIDES
        const rectLLeft = this.world.tables.filter(t => t.tableType == TableTypes.RectangularLTable && t.side == 'LEFT');
        const rectLRight = this.world.tables.filter(t => t.tableType == TableTypes.RectangularLTable && t.side == 'RIGHT');
        if (rectLLeft.length != rectLRight.length) {
            result.tables.push({
                code: null,
                number: null,
                name: null,
                danger: TABLE_DANGER_TYPE.TABLE_INCREASE_BOTH_SIDES,
            })
        }


        for(let table of this.world.tables) {

            const find_code = this.world.tables.find(t => t.code == table.code && table != t);

            if(find_code)  {
                result.tables.push({
                    code: table.code,
                    number: table.number,
                    name: table.name,
                    danger: TABLE_DANGER_TYPE.TABLE_DUPLICATED_CODE,
                });
            }
        }

        if (result.tables.length == 0) {
            result.status = "VALID";
        }

        return result;
    }

    setAdministrationMode(active) {
        this.setMode(RoomEditorMode.ROOM_PLAN);
        console.warn("function deprecated use the setMode function instead");
    }

    setGuestsMode(mode) { // TABLE or SEAT
        if (!["TABLE", "SEAT"].includes(mode)) {
            throw new Error("Guest mode no available only 'TABLE' or 'SEAT' options");
        }

        this.world.setGuestsBy(mode);
    }

    setMode(mode) {
        if (!RoomEditorMode[mode]) {
            throw new Error("Invalid Editor Mode");
        }

        this.mode = mode;

        if (this.mode == RoomEditorMode.READ_ONLY) {
            // SET ZOOM FIT ON SCREEN
            if(this.world) {
                const that = this;
                this.world.roomPlan.afterLoadImage(() => {
                    that.mouseManager.worldFitScreen();
                });
            }
            //this.mouseManager.worldFitScreen();

            // HIDE UI
            this.mouseManager.disableUI();
            this.mouseManager.uids['ui3'].style.display = 'block';

            this.mouseManager.setSelectedObject(null);
        } else {
            this.mouseManager.enableUI();
        }
    }

    enableTableByNumber(number) {
        const table = this.world.tables.find(t => t.number == number);
        if (table) {
            table.enable();
        } else {
            console.warn("Table not found!")
        }
    }

    disableTableByNumber(number) {
        const table = this.world.tables.find(t => t.number == number);
        if (table) {
            table.disable();
        } else {
            console.warn("Table not found!")
        }
    }

    enableTableByCode(code) {
        const table = this.world.tables.find(t => t.code == code);
        if (table) {
            table.enable();
        } else {
            console.warn("Table not found!")
        }
    }

    disableTableByCode(code) {
        const table = this.world.tables.find(t => t.code == code);
        if (table) {
            table.disable();
        } else {
            console.warn("Table not found!")
        }
    }

    extraCostValue() {
        return this.world.roomPlan.extraCost;
    }

    extraCostChangedFunc;
    onExtraCostChanged(funcOnExtraCostChanged) {
        this.extraCostChangedFunc = funcOnExtraCostChanged;
    }

    setRoomPlan(roomPlanImg, constraintPoints = []) {
        if (!this.world) {
            this.world = new World(this);
            this.world.applyTransform();

            if(this.extraCostChangedFunc) {
                this.world.extraCostChangedFunc = this.extraCostChangedFunc;
            }

            const roomPlan = new RoomPlan(this.world, roomPlanImg);
            this.world.setRoomPlan(roomPlan);
            roomPlan.applyTransform();

            this.mouseManager.setWorld(this.world);
        } else {
            this.world.roomPlan.updateImageSrc(roomPlanImg)
            this.mouseManager.setWorld(this.world);
        }

        const constraintZone = this.world.roomPlan.constraintZone;
        constraintZone.clearPoints();
        for (let cp of constraintPoints) {
            constraintZone.addZonePolygon(cp.x, cp.y);
        }
        constraintZone.updateZonePoligonElement();
        /*
                this.world.roomPlan.clearConstraintPoints();
                for(let cp of constraintPoints) {
                    this.world.roomPlan.addConstraintZonePolygon(cp.x, cp.y);
                }
                this.world.roomPlan.updateConstrainZonePoligonElement();
            */
    }

    getImage() {
        if(this.world.roomPlan.imageLoaded == false) {
            return Promise.reject(new Error("Room plan image is loading, try later."));
        }

        return new Promise((resolve, reject) => {
            const width = this.editorContainerElement.getClientRects()[0].width;
            const height = this.editorContainerElement.getClientRects()[0].height;
            this.mouseManager.worldFitScreen();
            this.mouseManager.setSelectedObject(null);
            this.world.roomPlan.hideZones();
            this.world.hideDangers();

            domtoimage.toPng(this.world.element, {
                width,
                height,
                bgcolor: 'white'
            })
                .then((dataUrl) => {

                    this.world.roomPlan.showZones();
                    this.world.showDangers();

                    resolve(dataUrl);
                })
                .catch((error) => {
                    console.error('[Room editor] getimage error', error);
                    reject(error);
                });

        })
    }

    setManageGuestsActive(active) {
        this.mouseManager.manageGuestsActive = active;
    }

    serializeEditor() {
        const serializedData = {
            roomPlan: {
                imageSrc: this.world.roomPlan.imageSrc,
                x: this.world.x,
                y: this.world.y,
                scale: this.world.scale,
                spaceBetweenTables: this.world.roomPlan.spaceBetweenTables,
                constraintPoints: [
                    ...this.world.roomPlan.constraintZone.polygon
                ],
                zones: this.world.roomPlan.zones.map(z => ({
                    name: z.name,
                    polygon: z.polygon,
                    allowedTables: z.allowedTables,
                    allowedOrientation: z.allowedOrientation,
                    coupleAllowed: z.coupleAllowed,
                    staffOnly: z.staffOnly,
                    childOnly: z.childOnly,
                    allowExpanded: z.allowExpanded,
                    zindex: z.zindex,
                })),
                //extraCost: this.world.roomPlan.extraCost,
                horizontalCenterOfRoom: this.world.horizontalCenterOfRoom,
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
                parentTableType: table?.parentTableType || null,
                value: table?.value || 1,
                code: table.code,
                number: table.number,
                name: table.name,
                notes: table.notes,
                tablePurpose: table.tablePurpose,
                active: table.active,

                removeWithOvalL: table.removeWithOvalL,
                removeBecauseOfOvalL: table.removeBecauseOfOvalL,

                width: table.tableElementSizeWidth,
                height: table.tableElementSizeHeight,

                seats: table.seats.map(s => ({
                    code: s.code,
                    number: s.number,
                    guestName: s.guestName,
                    guestAge: s.guestAge,
                    foodRestrictions: s.foodRestrictions,
                    couple: s.isCouple,
                })),
                // Add other properties specific to your object

                sideOfRoom: table.sideOfRoom,
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
        this.world.staff = serializedData?.roomPlan?.staff || 0;
        this.world.applyTransform();


        if (serializedData.roomPlan.constraintPoints) {
            for (let cp of serializedData.roomPlan.constraintPoints) {
                this.world.roomPlan.constraintZone.addZonePolygon(cp.x, cp.y);
            }

            this.world.roomPlan.constraintZone.updateZonePoligonElement();
        }

        //this.world.roomPlan.extraCost = serializedData.roomPlan.extraCost || false;

        this.world.roomPlan.deleteZones();
        if (serializedData.roomPlan.zones) {
            for (let zone of serializedData.roomPlan.zones) {
                const z = this.world.roomPlan.createZone();
                z.name = zone.name;
                z.polygon = zone.polygon;
                z.allowedTables = zone.allowedTables;
                z.allowedOrientation = zone.allowedOrientation;
                z.coupleAllowed = zone.coupleAllowed;
                z.staffOnly = zone.staffOnly;
                z.childOnly = zone.childOnly;
                z.allowExpanded = zone.allowExpanded;
                z.zindex = zone.zindex || 0;
                this.world.roomPlan.addZone(z);
                z.setSize(this.world.roomPlan.width, this.world.roomPlan.height);
                z.bright = 0.85;
                z.updateZonePoligonElement();
            }
        }

        this.world.roomPlan.spaceBetweenTables = serializedData.roomPlan.spaceBetweenTables;

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
            object.active = (serializedObject.active === true || serializedObject.active === false) ? serializedObject.active : true;

            object.removeWithOvalL = serializedObject.removeWithOvalL || false;
            object.removeBecauseOfOvalL = serializedObject.removeBecauseOfOvalL || false;

            object.sideOfRoom = serializedObject.sideOfRoom || null;

            object.value = serializedObject?.value | 1;


            // ExpandedTable Only
            if (object.tableType == "ExpandedTable") {
                const parentObject = new TableTypes[serializedObject.parentTableType](this.world);
                object.parentTableType = parentObject?.tableType || null;

                object.tableElementSizeWidth = parentObject.tableElementSizeWidth * serializedObject.value;
                object.tableElementSizeHeight = parentObject.tableElementSizeHeight;

                object.width = object.tableElementSizeWidth + this.world.roomPlan.spaceBetweenTables + (TABLE_ELEMENT_OFFSET * 2);
                object.height = object.tableElementSizeHeight + this.world.roomPlan.spaceBetweenTables + (TABLE_ELEMENT_OFFSET * 2);

                object.snappingPoints.find(sp => sp.side == 'right').x = object.width + TABLE_ELEMENT_OFFSET;

                object.seatsTopNumber = parentObject.seatsTopNumber * serializedObject.value;
                object.seatsSidesNumber = parentObject.seatsSidesNumber;

                object.init();
                object.initializeSeatsExpanded();
                object.tableElementUpdateSize();
                object.updateSnappingPoints();
                object.sizeChanged();
                object.applyTransform();
                object.updateSeats();
            } else {
                
                object.calculateSeatPositions();
                if (object.tablePurpose == 'STAFF' && object.seatsPositions.length != serializedObject.seats.length) {

                    object.seatsPositions = [];
                    for (const objSeat of serializedObject.seats) {
                        object.seatsPositions.push(
                            {
                                number: objSeat.number,
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                            );
                        }
                }
                
                object.init();
            }



            for (const objSeat of serializedObject.seats) {
                object.seats[objSeat.number].guestName = objSeat.guestName;
                object.seats[objSeat.number].guestAge = objSeat.guestAge;
                object.seats[objSeat.number].foodRestrictions = objSeat.foodRestrictions;
            }

            if (object.tableType != "ExpandedTable") {
                object.updateSeats();
            }

            if (object.active === false) {
                object.disable();
            } else {
                object.enable();
            }

            if (object.removeBecauseOfOvalL) {
                object.worldWithOvalLTable(object.removeBecauseOfOvalL);
            }

            object.applyTransform();

            // Add the deserialized object to the world
            this.world.addTable(object);
        });


        this.world.setHorizontalCenterOfRoom(serializedData.roomPlan.horizontalCenterOfRoom);

        // this.world.updateTablesNumber();
        this.world.areTablesOverlapping();
        this.mouseManager.updateStats();

        this.guestsModal.foodRestrictions = (serializedData.foodRestrictions || []).map(m => ({
            id: m?._id,
            text: m?.acronym?.pt,
            subtitle: m?.subtitle?.pt,
            description: m?.description?.pt,
            notesRequired: m?.notesRequired,
            chefChoice: m?.chefChoice
        }));

        const tableCouple = this.world.tables.find(t => t.tablePurpose == "COUPLE");
        if (tableCouple && $("#coupleTableSelect") && this.mouseManager.activeCouplesTables) {
            $("#coupleTableSelect").val(tableCouple.tableType).trigger('change');
        }


        this.setMode(this.mode);
        return this.world;
    }

    activeGuestTables(tablesTypes) {
        this.mouseManager.setActiveGuestTables(tablesTypes);
    }

    activeCoupleTables(tablesTypes) {
        this.mouseManager.setActiveCouplesTables(tablesTypes);
    }


    setTranslations(data) {
        this.translationSystem.setData(data);
    }

    destroy() {
        this.world.destroy();
        this.mouseManager.destroy();
        this.guestsModal.destroy();
        this.zoneModal.destroy();
        this.orderPositionModal.destroy();
    }
}

class OrderPositionModal {
    modalElement;
    modalBodyElement;
    subjectTable = {};
    worldTables = [];
    formElements = {};
    translationSystem;
    onAfterSave;

    constructor() {
        this.translationSystem = new TranslationSystem();
        this.modalElement = document.createElement("div");
        this.modalElement.classList.add("editor-modal-wrap");
        this.modalElement.id = "myModal";
        const editorModalElement = document.createElement("div");
        editorModalElement.classList.add("editor-modal")
        editorModalElement.style.width = "25%";
        editorModalElement.style['minWidth'] = "470px";

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
        modalHeaderElement.innerHTML = '<div class="editor-modal-title" translation-key="ORDER_POSITION_LABEL">Ordem circular</div>';
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
        btnSaveElement.setAttribute('translation-key', "SAVE");
        btnSaveElement.textContent = "Guardar";
        btnSaveElement.onclick = () => {
            this.save();
        };
        modalFooterElement.appendChild(btnSaveElement);

        editorModalElement.appendChild(modalFooterElement);

        document.body.appendChild(this.modalElement);
    }

    destroy() {
        this.modalElement.parentElement.removeChild(this.modalElement);
    }

    open(table, tables) {
        this.createModalBody(table, tables);
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
            this.subjectTable.code = this.formElements.code.value - 1;
            this.subjectTable.removeWithOvalL = this.formElements.removeWithOvalL.checked;
            

            if (this.onAfterSave) {
                this.onAfterSave();
            }

            this.close();
        }
    }

    validateForm() {
        let isValid = false;
        const code = this.formElements.code.value;
        document.getElementById("orderPositionInput").setCustomValidity("");

        const foundOrder = parseInt(code) > 1
            ? this.worldTables.find(f => f?.code != this.subjectTable?.code && f?.code == (parseInt(code) - 1))
            : null;
        if (code == '' || parseInt(code) <= 1 || foundOrder) {
            const errorMsg = foundOrder
                ? 'ORDER_ASSIGNED'
                : code && parseInt(code) <= 1
                    ? "ORDER_BIGGER_THAN1"
                    : "INPUT_ERROR_REQUIRED";
            document.getElementById("orderPositionInput").setCustomValidity(this.translationSystem.getTranslation(errorMsg));
            document.getElementById("orderPositionInput").reportValidity();
            return false;
        } else {
            document.getElementById("orderPositionInput").setCustomValidity("");
            isValid = true;
        }
        return isValid;
    }

    numberToLetter(code) {
        if (!Number.isInteger(code) || code < 1) {
            return;
        }

        if (code > 104) code = 104;

        // Calculate the position in the alphabet
        let position = (code - 1) % 26;

        // Calculate the number of repetitions
        let repetitions = Math.floor((code - 1) / 26) + 1;

        return String.fromCharCode(position + 65).repeat(repetitions);
    }

    createModalBody(table, tables) {
        this.subjectTable = table;
        this.worldTables = tables;
        this.modalBodyElement.innerHTML = '';
        this.formElements = {};

        const formElement = document.createElement("form");
        formElement.name = "editor-order-form";
        formElement.onsubmit = (event) => this.save(event);
        formElement.classList.add("editor-form");
        formElement.style.background = 'unset';
        formElement.style.border = 'unset';

        // Create the first row with buttons
        const row = document.createElement("div");
        row.classList.add("editor-row");
        row.style.justifyContent = 'space-between';

        const divOrder = document.createElement('div');

        const label = document.createElement("div");
        const labelSpan = document.createElement("span");
        labelSpan.setAttribute('translation-key', "ORDER");
        labelSpan.innerText = "Ordem";
        const labelSpanDots = document.createElement("span");
        labelSpanDots.innerText = ":";
        label.appendChild(labelSpan);
        label.appendChild(labelSpanDots);

        const input = document.createElement("input");
        input.classList.add('editor-input-number');
        input.style.marginLeft = '0px';
        input.type = "number";
        input.min = '1';
        input.max = '104'
        input.id = "orderPositionInput";
        input.name = "code";
        input.value = table?.code ? (table?.code + 1) : "";
        input.onchange = (e) => {
            const val = e?.target?.value;
            labelLetterSpan.style.opacity = val != '' ? '1' : '0';
            labelLetterSpan.innerText = val && parseInt(val)
                ? this.numberToLetter(parseInt(val))
                : '';
        }
        input.onwheel = (e) => {
            const val = e.target.value;
            labelLetterSpan.style.display = val != '' ? '1' : '0';
            labelLetterSpan.innerText = val && parseInt(val)
                ? this.numberToLetter(parseInt(val))
                : '';
        }

        const labelLetterSpan = document.createElement("span");
        labelLetterSpan.classList.add('tag')
        labelLetterSpan.style.marginLeft = '8px';
        labelLetterSpan.style.opacity = table?.code
            ? '1'
            : '0';
        labelLetterSpan.innerText = table?.code
            ? this.numberToLetter(table?.code + 1)
            : "";

        this.formElements.code = input;
        divOrder.appendChild(label);
        divOrder.appendChild(input);
        divOrder.appendChild(labelLetterSpan);
        row.appendChild(divOrder);

        const divOvalL = document.createElement('div');
        divOvalL.style.display = 'flex';
        divOvalL.style.alignItems = 'center';
        divOvalL.style.paddingTop = '20px';

        const labelOvalL = document.createElement("div");
        const labelOvalLSpan = document.createElement("span");
        labelOvalLSpan.setAttribute('translation-key', "REMOVE_WITH_OVAL_L");
        labelOvalLSpan.innerText = "Eliminar com mesa do casal Oval L";
        const labelOvalLSpanDots = document.createElement("span");
        labelOvalLSpanDots.innerText = ":";
        labelOvalL.appendChild(labelOvalLSpan);
        labelOvalL.appendChild(labelOvalLSpanDots);

        const inputOvalL = document.createElement("input");
        inputOvalL.style.marginLeft = '8px';
        inputOvalL.type = "checkbox";
        inputOvalL.id = "removeWithOvalL";
        inputOvalL.name = "removeWithOvalL";
        inputOvalL.checked = table.removeWithOvalL || false;

        this.formElements.removeWithOvalL = inputOvalL;
        divOvalL.appendChild(labelOvalL);
        divOvalL.appendChild(inputOvalL);
        row.appendChild(divOvalL);

        formElement.appendChild(row);

        this.modalBodyElement.appendChild(formElement);
    }
}

class ZoneModal {
    modalElement;
    modalBodyElement;
    subjectZone = {};
    formElements = {};
    translationSystem;
    onAfterSave;

    objectTypes = [
        'RoundTable',
        'SquareTable',
        'RectangularTable',
        'RectangularLTable',
        'ForestMTable',
    ];

    constructor() {
        this.translationSystem = new TranslationSystem();
        this.modalElement = document.createElement("div");
        this.modalElement.classList.add("editor-modal-wrap");
        this.modalElement.id = "zoneModal";
        const editorModalElement = document.createElement("div");
        editorModalElement.classList.add("editor-modal")
        editorModalElement.style.width = "25%";
        editorModalElement.style['minWidth'] = "470px";

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
        modalHeaderElement.innerHTML = '<div class="editor-modal-title" translation-key="MNG_ZONE">Gerir zona</div>';
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
        btnSaveElement.setAttribute('translation-key', "SAVE");
        btnSaveElement.textContent = "Guardar";
        btnSaveElement.onclick = () => {
            this.save();
        };
        modalFooterElement.appendChild(btnSaveElement);

        editorModalElement.appendChild(modalFooterElement);

        document.body.appendChild(this.modalElement);
    }

    destroy() {
        this.modalElement.parentElement.removeChild(this.modalElement);
    }

    open(zone) {
        this.createModalBody(zone);
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

            this.subjectZone.name = this.formElements.name.value;
            this.subjectZone.allowedOrientation = this.formElements.allowedOrientation.select2('data')[0].id;
            this.subjectZone.coupleAllowed = this.formElements.coupleAllowed.checked;
            this.subjectZone.staffOnly = this.formElements.staffOnly.checked;
            this.subjectZone.childOnly = this.formElements.childOnly.checked;
            this.subjectZone.allowExpanded = this.formElements.allowExpanded.checked;
            this.subjectZone.allowedTables = this.formElements.allowedTables.select2('data')?.length > 0
                ? this.formElements.allowedTables.select2('data').map(m => m?.id)
                : [];

            if (this.onAfterSave) {
                this.onAfterSave();
            }

            this.close();
        }
    }

    validateForm() {
        let isValid = false;
        const zoneName = this.formElements.name.value;
        document.getElementById("zoneName").setCustomValidity("");

        if (zoneName == '') {
            document.getElementById("zoneName").setCustomValidity(this.translationSystem.getTranslation('INPUT_ERROR_REQUIRED'))
            document.getElementById("zoneName").reportValidity();
            return false;
        } else {
            document.getElementById("zoneName").setCustomValidity("");
            isValid = true;
        }

        // const rotate = this.formElements.allowedOrientation.select2('data')?.[0]
        //     ? this.formElements.allowedOrientation.select2('data')[0].id
        //     : '';
        // document.getElementById("rotateTableSelect").setCustomValidity("");

        // if (rotate == '') {
        //     document.getElementById("rotateTableSelect").setCustomValidity(this.translationSystem.getTranslation('INPUT_ERROR_REQUIRED'))
        //     document.getElementById("rotateTableSelect").reportValidity();
        //     return false;
        // } else {
        //     document.getElementById("rotateTableSelect").setCustomValidity("");
        //     isValid = true;
        // }


        return isValid;
    }

    createModalBody(zone) {
        this.subjectZone = zone;
        this.modalBodyElement.innerHTML = '';
        this.formElements = {};

        const formElement = document.createElement("form");
        formElement.name = "editor-zone-form";
        formElement.onsubmit = (event) => this.save(event);
        formElement.classList.add("editor-form");
        formElement.style.background = 'unset';
        formElement.style.border = 'unset';

        // Create the first row with buttons
        const row = document.createElement("div");
        row.classList.add("editor-row");

        const col1 = document.createElement("div");
        col1.classList.add("editor-col");

        const labelName = document.createElement("div");
        const labelNameSpan = document.createElement("span");
        labelNameSpan.setAttribute('translation-key', "ZONE_NAME");
        labelNameSpan.innerText = "Nome";
        const labelNameSpanDots = document.createElement("span");
        labelNameSpanDots.innerText = ":";
        labelName.appendChild(labelNameSpan);
        labelName.appendChild(labelNameSpanDots);

        const inputName = document.createElement("input");
        inputName.classList.add('editor-input');
        inputName.style.marginLeft = '0px';
        inputName.type = "text";
        inputName.id = "zoneName";
        inputName.name = "name";
        inputName.value = zone.name || "";

        this.formElements.name = inputName;
        col1.appendChild(labelName);
        col1.appendChild(inputName);

        row.appendChild(col1);

        const col2 = document.createElement("div");
        col2.classList.add("editor-col");

        const labelRotate = document.createElement("div");
        const labelRotateSpan = document.createElement("span");
        labelRotateSpan.setAttribute('translation-key', "TABLES_ROTATE");
        labelRotateSpan.innerText = "Orientação das mesas";
        const labelRotateSpanDots = document.createElement("span");
        labelRotateSpanDots.innerText = ":";
        labelRotate.appendChild(labelRotateSpan);
        labelRotate.appendChild(labelRotateSpanDots);

        const inputRotate = document.createElement("div");
        inputRotate.classList.add("editorRoom-input", 'ui');
        inputRotate.style.width = '100%';

        const selectRotate = document.createElement("select");
        selectRotate.id = "rotateTableSelect";
        selectRotate.classList.add("rotateTableSelect");
        selectRotate.classList.add("ui");
        inputRotate.appendChild(selectRotate);

        col2.appendChild(labelRotate);
        col2.appendChild(inputRotate);

        row.appendChild(col1);
        row.appendChild(col2);

        const row2 = document.createElement("div");
        row2.classList.add("editor-row");
        row2.style.flexWrap = 'wrap';
        row2.style.justifyContent = 'space-between';
        row2.style.margin = '15px 0';

        const labelCouple = document.createElement("div");
        const labelCoupleSpan = document.createElement("span");
        labelCoupleSpan.setAttribute('translation-key', "COUPLE_TABLES");
        labelCoupleSpan.innerText = "Mesa do casal";
        const labelCoupleSpanDots = document.createElement("span");
        labelCoupleSpanDots.innerText = ":";
        labelCouple.appendChild(labelCoupleSpan);
        labelCouple.appendChild(labelCoupleSpanDots);

        const inputCouple = document.createElement("input");
        inputCouple.style.marginLeft = '8px';
        inputCouple.type = "checkbox";
        inputCouple.id = "coupleAllowed";
        inputCouple.name = "coupleAllowed";
        inputCouple.checked = zone.coupleAllowed || false;
        inputCouple.onchange = (e) => {
            this.formElements.staffOnly.checked = false;
            this.formElements.childOnly.checked = false;
            // TODO only if checked?
            $(`#allowedTablesSelect`).val(null).trigger('change');
        }

        this.formElements.coupleAllowed = inputCouple;
        labelCouple.appendChild(inputCouple);
        row2.appendChild(labelCouple);

        const labelStaff = document.createElement("div");
        const labelStaffSpan = document.createElement("span");
        labelStaffSpan.setAttribute('translation-key', "STAFF_ONLY");
        labelStaffSpan.innerText = "Apenas staff";
        const labelStaffSpanDots = document.createElement("span");
        labelStaffSpanDots.innerText = ":";
        labelStaff.appendChild(labelStaffSpan);
        labelStaff.appendChild(labelStaffSpanDots);

        const inputStaff = document.createElement("input");
        inputStaff.style.marginLeft = '8px';
        inputStaff.type = "checkbox";
        inputStaff.id = "staffOnly";
        inputStaff.name = "staffOnly";
        inputStaff.checked = zone.staffOnly || false;
        inputStaff.onchange = (e) => {
            this.formElements.coupleAllowed.checked = false;
            this.formElements.childOnly.checked = false;
            this.formElements.allowExpanded.checked = false;
        }

        this.formElements.staffOnly = inputStaff;
        labelStaff.appendChild(inputStaff);
        row2.appendChild(labelStaff);

        const labelChild = document.createElement("div");
        const labelChildSpan = document.createElement("span");
        labelChildSpan.setAttribute('translation-key', "CHILD_ONLY");
        labelChildSpan.innerText = "Apenas crianças";
        const labelChildSpanDots = document.createElement("span");
        labelChildSpanDots.innerText = ":";
        labelChild.appendChild(labelChildSpan);
        labelChild.appendChild(labelChildSpanDots);

        const inputChild = document.createElement("input");
        inputChild.style.marginLeft = '8px';
        inputChild.type = "checkbox";
        inputChild.id = "childOnly";
        inputChild.name = "childOnly";
        inputChild.checked = zone.childOnly || false;
        inputChild.onchange = (e) => {
            this.formElements.coupleAllowed.checked = false;
            this.formElements.staffOnly.checked = false;
        }

        this.formElements.childOnly = inputChild;
        labelChild.appendChild(inputChild);
        row2.appendChild(labelChild);

        const labelUnion = document.createElement("div");
        const labelUnionSpan = document.createElement("span");
        labelUnionSpan.setAttribute('translation-key', "ALLOWED_UNIONS");
        labelUnionSpan.innerText = "Uniões autorizadas";
        const labelUnionSpanDots = document.createElement("span");
        labelUnionSpanDots.innerText = ":";
        labelUnion.appendChild(labelUnionSpan);
        labelUnion.appendChild(labelUnionSpanDots);

        const inputUnion = document.createElement("input");
        inputUnion.style.marginLeft = '8px';
        inputUnion.type = "checkbox";
        inputUnion.id = "allowExpanded ";
        inputUnion.name = "allowExpanded ";
        inputUnion.checked = zone.allowExpanded || false;

        this.formElements.allowExpanded = inputUnion;
        labelUnion.appendChild(inputUnion);
        row2.appendChild(labelUnion);

        // Create the first row with buttons
        const row3 = document.createElement("div");
        row3.classList.add("editor-row");
        row3.style.flexDirection = 'column';
        row3.style.alignItems = 'stretch'

        const labelAllowedGuestTables = document.createElement("div");
        const labelAllowedGuestTablesSpan = document.createElement("span");
        labelAllowedGuestTablesSpan.setAttribute('translation-key', "ALLOWED_GUEST_TABLES");
        labelAllowedGuestTablesSpan.innerText = "Mesas de convidados autorizadas";
        const labelSpanDots = document.createElement("span");
        labelSpanDots.innerText = ":";
        labelAllowedGuestTables.appendChild(labelAllowedGuestTablesSpan);
        labelAllowedGuestTables.appendChild(labelSpanDots);

        const inputAllowedGuestTables = document.createElement("div");
        inputAllowedGuestTables.classList.add("editorRoom-input", 'ui');

        const selectAllowedGuestTables = document.createElement("select");
        selectAllowedGuestTables.id = "allowedTablesSelect";
        selectAllowedGuestTables.classList.add("ui");
        inputAllowedGuestTables.appendChild(selectAllowedGuestTables);

        row3.appendChild(labelAllowedGuestTables);
        row3.appendChild(inputAllowedGuestTables);

        formElement.appendChild(row);
        formElement.appendChild(row2);
        formElement.appendChild(row3);
        this.modalBodyElement.appendChild(formElement);

        this.initializeSelects();
    }

    initializeSelects() {
        this.formElements.allowedOrientation = $(`#rotateTableSelect`).select2({
            minimumResultsForSearch: -1,
            data: [
                { id: 'HORIZONTAL', text: this.translationSystem.getTranslation("HORIZONTAL_ROTATE") },
                { id: 'VERTICAL', text: this.translationSystem.getTranslation("VERTICAL_ROTATE") },
                { id: 'BOTH', text: this.translationSystem.getTranslation("BOTH_ROTATE") },
            ],
            val: this.subjectZone?.allowedOrientation || null,
        });
        $(`#rotateTableSelect`).val(this.subjectZone?.allowedOrientation || 'BOTH').trigger('change');

        this.formElements.allowedTables = $(`#allowedTablesSelect`).select2({
            multiple: true,
            closeOnSelect: false,
            allowClear: false,
            data: this.objectTypes || [],
            templateResult: (type) => {
                let translation = type.text;
                if (this.translationSystem)
                    translation = this.translationSystem.getTranslation(type.text);

                var $span = $(`
                <span class="editor-option">
                    <div style="display: inline-flex; align-items: center; padding: 0 4px">
                        <div class="table_ui ${TableTypesIcon[type.text]}"></div>
                        <span translation-key="${type.text}">${translation}</span>
                    </div>
                </span>`);
                return $span;
            },
            templateSelection: (type) => {
                if (!type?.text) {
                    return '';
                }
                let translation = type.text;
                if (this.translationSystem)
                    translation = this.translationSystem.getTranslation(type.text);

                var $state = $(
                    `<span class="editor-option">
                    <div style="display: inline-flex; align-items: center; padding: 0 4px">
                        <div class="table_ui ${TableTypesIcon[type.text]}"></div>
                        <span translation-key="${type.text}">${translation}</span>
                    </div>
                </span>`
                );
                return $state;
            },
        });
        if (this.subjectZone?.allowedTables.length > 0) $(`#allowedTablesSelect`).val(this.subjectZone.allowedTables).trigger('change');
    }
}

class ManageGuestsModal {
    modalElement;
    modalBodyElement;
    roomEditor;

    subjectTable = null;

    formElements = {};

    translationSystem;

    foodRestrictions = [];

    globalView = 0;

    onAfterSave;

    constructor() {
        this.translationSystem = new TranslationSystem();
        this.modalElement = document.createElement("div");
        this.modalElement.classList.add("editor-modal-wrap");
        this.modalElement.id = "guestModal";

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
        btnCancelElement.id = "btnCloseGuest";
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
        btnSaveElement.id = "btnSubmitGuest"
        btnSaveElement.type = "submit";
        btnSaveElement.classList.add("editor-btn");
        btnSaveElement.classList.add("editor-btn-primary");
        btnSaveElement.setAttribute('translation-key', "SAVE");
        btnSaveElement.textContent = "Guardar";
        btnSaveElement.onclick = () => {
            this.save();
        };
        modalFooterElement.appendChild(btnSaveElement);

        editorModalElement.appendChild(modalFooterElement);

        document.body.appendChild(this.modalElement);
    }

    destroy() {
        this.modalElement.parentElement.removeChild(this.modalElement);
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
        const tablePurposeTag = this.subjectTable?.tablePurpose == 'CHILD'
            ? 'ROOM_PLAN_CHILD'
            : this.subjectTable?.tablePurpose == 'STAFF'
                ? 'ROOM_PLAN_STAFF'
                : 'ROOM_PLAN_GUESTS';
        this.modalBodyElement.innerHTML = '';
        this.formElements = {};

        // Create the first row with buttons
        const row1 = document.createElement("div");
        row1.classList.add("editor-row");
        row1.classList.add("editor-space-between");

        const info = document.createElement("div");
        info.classList.add("editor-info-table");
        info.innerHTML = this.subjectTable.tablePurpose == 'STAFF'
            ? `
                <i class="fa-regular fa-user editor-table-user" style="margin: 0 2px 0 10px"></i>${this.subjectTable.seats?.length}
                <div style="display: ${this.subjectTable?.tablePurpose != 'GUEST' ? 'block' : 'none'}; margin-left: 10px">
                <span class="editor-label" translation-key="TYPE_TABLES">Mesas para</span>
                <span translation-key="${tablePurposeTag}">Convidados</span>
                </div>
            `
            : `
            <div class="editor-table ${TableTypesIcon[this.subjectTable.tableType]}"></div>
            <span translation-key="${this.subjectTable.tableType}">${this.subjectTable.tableType}</span>
            <i class="fa-regular fa-user editor-table-user" style="margin: 0 2px 0 10px"></i>${this.subjectTable.seats?.length}
            <div style="display: ${this.subjectTable?.tablePurpose != 'GUEST' ? 'block' : 'none'}; margin-left: 10px">
            <span class="editor-label" translation-key="TYPE_TABLES">Mesas para</span>
            <span translation-key="${tablePurposeTag}">Convidados</span>
            </div>
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
        row2.classList.add("editor-row-stretch");
        row2.style.marginTop = "10px";

        const col1 = document.createElement("div");
        col1.classList.add("editor-col");

        const formElement = document.createElement("form");
        formElement.name = "editor-table-form";
        formElement.onsubmit = (event) => this.submitForm(event);
        formElement.classList.add("editor-form");

        // Create the form line with table code and input
        const formLine = document.createElement("div");
        // formLine.classList.add("editor-form-line");
        formLine.classList.add("editor-preview-line");

        const tableNumberDiv = document.createElement("div");
        tableNumberDiv.classList.add("editor-table-code");
        tableNumberDiv.textContent = (table?.number + 1) || "X"; // TODO REMOVE
        formLine.appendChild(tableNumberDiv);

        const tableNameDiv = document.createElement("div");
        tableNameDiv.innerHTML = table?.name || "";
        formLine.appendChild(tableNameDiv);

        // const tableNameInput = document.createElement("input");
        // tableNameInput.classList.add("editor-input");
        // tableNameInput.type = "text";
        // tableNameInput.id = "tableName";
        // tableNameInput.name = "tableName";
        // tableNameInput.value = table.name || "";
        // tableNameInput.disabled = this.roomEditor?.mode == RoomEditorMode.READ_ONLY ? true : false;

        // this.formElements.name = tableNameInput;
        // formLine.appendChild(tableNameInput);

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
        // col2.appendChild(groupBtn);

        const drawTable = document.createElement("div");
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
        // row3.appendChild(notesDiv);

        const notesTextarea = document.createElement("textarea");
        notesTextarea.id = "notes";
        notesTextarea.classList.add("editor-input");
        notesTextarea.name = "notes";
        notesTextarea.rows = "4";
        notesTextarea.cols = "50";
        notesTextarea.maxLength = "200";
        notesTextarea.textContent = table.notes || "";
        notesTextarea.disabled = this.roomEditor?.mode == RoomEditorMode.READ_ONLY ? true : false;
        this.formElements.notes = notesTextarea;
        // row3.appendChild(notesTextarea);

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
            // TODO THE WORLD :o
            this.miniTable = new TableTypes[this.subjectTable.tableType]({
                roomPlan: {
                    spaceBetweenTables: 0,
                }
            });
            this.miniTable.x = ((bounding.width - this.miniTable.width) / 2) - this.miniTable.halfWidth;
            this.miniTable.y = 60 - this.miniTable.halfHeigh;
            this.miniTable.rotate = this.subjectTable.rotate || 0;
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
            this.miniTable.updateTablePurpose(this.subjectTable.tablePurpose);

        }

    }

    initializeSeats(seatDiv, table) {
        this.formElements.seats = [];

        for (const seat of table.seats) {
            this.formElements.seats[seat.number] = {};

            const formLineDiv = document.createElement("div");
            // formLineDiv.classList.add("editor-form-line");
            formLineDiv.classList.add("editor-preview-line");
            formLineDiv.classList.add("editor-seat");
            formLineDiv.id = `editor-seat-${seat.number}`;

            // Preview only
            const seatNumberDiv = document.createElement("div");
            seatNumberDiv.classList.add("editor-seat-code");
            seatNumberDiv.innerHTML = seat.number + 1;
            formLineDiv.appendChild(seatNumberDiv);

            const guestNameDiv = document.createElement("div");
            guestNameDiv.classList.add("editor-seat-name");
            guestNameDiv.style.marginLeft = '4px';
            guestNameDiv.innerHTML = seat.guestName || '';
            guestNameDiv.onclick = () => {
                if (this.miniTable) {
                    this.miniTable.seats[seat.number].guestName = guestNameInput.value;
                    this.miniTable.updateSeats();
                }
            }
            formLineDiv.appendChild(guestNameDiv);

            const guestAge = seat?.guestAge && seat?.guestAge == 'CHILD'
                ? this.translationSystem.getTranslation("CHILD_AGE")
                : seat?.guestAge && seat?.guestAge == 'BABY'
                    ? this.translationSystem.getTranslation("BABY_AGE")
                    : seat?.guestAge && seat?.guestAge == 'NEWBORN'
                        ? this.translationSystem.getTranslation("NEWBORN_AGE")
                        : '';
            const guestAgeDiv = document.createElement("div");
            guestAgeDiv.classList.add("editor-form-select");
            guestAgeDiv.style.lineHeight = '14px';
            guestAgeDiv.style.marginLeft = '4px';
            guestAgeDiv.innerHTML = guestAge || '';
            formLineDiv.appendChild(guestAgeDiv);

            const guestRestrictionDiv = document.createElement("div");
            guestRestrictionDiv.classList.add("editor-form-select");
            guestRestrictionDiv.style.marginLeft = '4px';
            guestRestrictionDiv.style.lineHeight = '14px';
            this.setSelectedResctrictions(seat, guestRestrictionDiv);
            formLineDiv.appendChild(guestRestrictionDiv);

            // const guestNameInput = document.createElement("input");
            // guestNameInput.classList.add("editor-input");
            // guestNameInput.classList.add("editor-seat-name");
            // guestNameInput.type = "text";
            // guestNameInput.id = `guestName-${seat.number}`;
            // guestNameInput.name = `guestName-${seat.number}`;
            // guestNameInput.value = seat.guestName || '';
            // guestNameInput.disabled = this.roomEditor?.mode == RoomEditorMode.READ_ONLY ? true : false;
            // guestNameInput.onblur = () => {
            //     if (this.miniTable) {
            //         this.miniTable.seats[seat.number].guestName = guestNameInput.value;
            //         this.miniTable.updateSeats();
            //         this.updateTotals();
            //     }
            // }
            // this.formElements.seats[seat.number].guestName = guestNameInput;
            // formLineDiv.appendChild(guestNameInput);

            // const guestAgeInput = document.createElement("select");
            // guestAgeInput.classList.add("selectAge")
            // guestAgeInput.classList.add(`editor-select-age-${seat.number}`)
            // guestAgeInput.name = `guestAge-${seat.number}`;
            // //this.formElements.seats[seat.number].guestAge = guestAgeInput;
            // formLineDiv.appendChild(guestAgeInput);

            // const guestRestrictionDiv = document.createElement("div");
            // guestRestrictionDiv.classList.add("editor-form-select-restriction");

            // this.formElements.seats[seat.number].foodRestrictions = [...seat.foodRestrictions] || [];
            // this.checkChefChoice();
            // const guestRestrictionInput = document.createElement("div");
            // guestRestrictionInput.classList.add("editor-input");
            // guestRestrictionInput.classList.add("editor-form-select-multiple");
            // guestRestrictionInput.classList.add(`editor-form-select-restriction-${seat.number}`);
            // if (this.roomEditor?.mode == RoomEditorMode.READ_ONLY) {
            //     guestRestrictionInput.classList.add(`editor-form-select-multiple-disabled`);
            // } else guestRestrictionInput.classList.remove(`editor-form-select-multiple-disabled`);
            // guestRestrictionInput.attributes.multiple = true;
            // guestRestrictionInput.name = `foodRestrictions-${seat.number}`;
            // guestRestrictionInput.id = `foodRestrictions${seat.number}`;
            // guestRestrictionInput.onclick = () => {
            //     if (this.roomEditor?.mode == RoomEditorMode.READ_ONLY) return;
            //     this.createRestrictionModal(guestRestrictionDiv, guestRestrictionInput, seat);
            // }
            // this.setSelectedResctrictions(seat, guestRestrictionInput);
            // // this.formElements.seats[seat.number].foodRestrictions = guestRestrictionInput;
            // guestRestrictionDiv.appendChild(guestRestrictionInput);
            // formLineDiv.appendChild(guestRestrictionDiv);

            seatDiv.appendChild(formLineDiv);
        }

        // for (let seat of table.seats) {
        //     this.initializeSeatInputs(seat, this.roomEditor?.mode);
        // }

        // this.updateTotals();
        this.updateTotalsPreview(table);
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
        const elemsSelected = this.foodRestrictions?.length > 0
            ? this.foodRestrictions?.filter(f => this.formElements.seats[seat.number].foodRestrictions?.findIndex(f2 => f2 == f.id) > -1)
            : [];
        input.innerHTML = elemsSelected?.map(m => m?.text).join(', ') || '';
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

    initializeSeatInputs(seat, mode) {
        this.formElements.seats[seat.number].guestAge = $(`.editor-select-age-${seat.number}`).select2({
            minimumResultsForSearch: -1,
            placeholder: ' ',
            allowClear: true,
            data: [
                // { id: 'ADULT', text: this.translationSystem.getTranslation("ABOVE_8_YEARS") },
                { id: 'CHILD', text: this.translationSystem.getTranslation("CHILD_AGE") },
                { id: 'BABY', text: this.translationSystem.getTranslation("BABY_AGE") },
                { id: 'NEWBORN', text: this.translationSystem.getTranslation("NEWBORN_AGE") },
            ],
            templateResult: (table) => {
                let textTranslation = table.text;
                if (table?.text != 'ADULT')
                    textTranslation = this.translationSystem.getTranslation(table.text);

                return textTranslation;
            },
            val: seat?.guestAge || null,
            disabled: mode == RoomEditorMode.READ_ONLY ? true : false
        });
        if (seat?.guestAge) $(`.editor-select-age-${seat.number}`).val(seat.guestAge).trigger('change');
        $(`.editor-select-age-${seat.number}`).on("select2:select", () => { this.updateTotals(); });
        $(`.editor-select-age-${seat.number}`).prop("disabled", mode == RoomEditorMode.READ_ONLY ? true : false);
        $(`.editor-select-age-${seat.number}`).on("select2:unselect", (e) => {
            $(`.editor-select-age-${seat.number}`).val('ADULT').trigger('select2:select');
        });

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

    open(table, roomEditor) {
        this.roomEditor = roomEditor;

        this.createModalBody(table);
        this.modalElement.style.display = "block";
        this.translationSystem.reviewPage();

        const btnSubmit = document.getElementById('btnSubmitGuest');
        if (btnSubmit) {
            btnSubmit.style.display = roomEditor?.mode == RoomEditorMode.READ_ONLY ? 'none' : 'inline-flex';
        }

        const btnClose = document.getElementById('btnCloseGuest');
        if (btnClose) {
            btnClose.setAttribute('translation-key', "CLOSE");
            btnClose.innerText = 'Fechar'
        }
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
                seat.guestAge = this.formElements.seats[i].guestAge.select2('data')?.[0]?.id || 'ADULT';
                seat.foodRestrictions = this.formElements.seats[i].foodRestrictions;
                const restrictions = this.foodRestrictions.filter(f => seat.foodRestrictions.includes(f?.id));
                seat.foodRestrictionsLabel = restrictions.join(', ');
            }

            this.subjectTable.updateSeats();

            if (this.onAfterSave) {
                this.onAfterSave();
            }

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
        //     document.getElementById("tableName").setCustomValidity(this.translationSystem.getTranslation('INPUT_ERROR_REQUIRED'))
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
            document.getElementById("notes").setCustomValidity(this.translationSystem.getTranslation('INPUT_ERROR_REQUIRED'))
            document.getElementById("notes").reportValidity();
            return false;
        } else {
            document.getElementById("notes").setCustomValidity("");
            isValid = true;
        }

        return isValid;

        // You can add more functionality as needed.
    }

    updateTotalsPreview(table) {

        let totalAdult = 0;
        if (document.getElementById('totalAdult')) {
            totalAdult = table?.seats?.filter(s => s.guestName?.trim() != '').filter(s => s.guestAge == 'ADULT' || !s?.guestAge).length;
            document.getElementById('totalAdult').innerHTML = totalAdult;
        }

        let totalChild = 0;
        if (document.getElementById('totalChild')) {
            totalChild = table.seats.filter(s => s.guestName?.trim() != '').filter(s => s.guestAge == 'CHILD').length;
            document.getElementById('totalChild').innerHTML = totalChild;
        }

        let totalBaby = 0;
        if (document.getElementById('totalBaby')) {
            totalBaby = table?.seats.filter(s => s.guestName?.trim() != '').filter(s => s.guestAge == 'BABY').length;
            document.getElementById('totalBaby').innerHTML = totalBaby;
        }

        let totalNewborn = 0;
        if (document.getElementById('totalNewborn')) {
            totalNewborn = table?.seats.filter(s => s.guestName?.trim() != '').filter(s => s.guestAge == 'NEWBORN').length;
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

    updateTotals() {

        let totalAdult = 0;
        if (document.getElementById('totalAdult')) {
            totalAdult = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')?.[0] ? s.guestAge.select2('data')[0]?.id == 'ADULT' : true).length;
            document.getElementById('totalAdult').innerHTML = totalAdult;
        }

        let totalChild = 0;
        if (document.getElementById('totalChild')) {
            totalChild = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')?.[0] && s.guestAge.select2('data')[0]?.id == 'CHILD').length;
            document.getElementById('totalChild').innerHTML = totalChild;
        }

        let totalBaby = 0;
        if (document.getElementById('totalBaby')) {
            totalBaby = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')?.[0] && s.guestAge.select2('data')[0]?.id == 'BABY').length;
            document.getElementById('totalBaby').innerHTML = totalBaby;
        }

        let totalNewborn = 0;
        if (document.getElementById('totalNewborn')) {
            totalNewborn = this.formElements.seats.filter(s => s.guestName.value).filter(s => s.guestAge.select2('data')?.[0] && s.guestAge.select2('data')[0]?.id == 'NEWBORN').length;
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
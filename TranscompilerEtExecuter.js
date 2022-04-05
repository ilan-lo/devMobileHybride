var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Déclaration d'une fonction en typeScript
function bonjour(qui) {
    console.log("Bonjour " + qui);
    var Etablissement;
    (function (Etablissement) {
        Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
        Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
        Etablissement[Etablissement["College"] = 2] = "College";
        Etablissement[Etablissement["Lyc\u00E9e"] = 3] = "Lyc\u00E9e";
        Etablissement[Etablissement["Faculte"] = 4] = "Faculte";
    })(Etablissement || (Etablissement = {}));
    ;
    console.log(Etablissement);
    // Declaration de classe en TS
    var Sport = /** @class */ (function () {
        // constructor attribut description est créé comme avec public dans les parametre cosntructor
        function Sport(nom, description) {
            this.description = description;
            this.nom = nom;
            this.prive = "valeur caché mise par defaut";
        }
        //methode afficher
        Sport.prototype.afficher = function () {
            console.log("Class sport - afficher()");
            console.log(this.nom + " " + this.description);
        };
        return Sport;
    }());
    var sport = new Sport("Squash", "un sport de raquete");
    sport.afficher();
    //heritage
    var SportDeCompetition = /** @class */ (function (_super) {
        __extends(SportDeCompetition, _super);
        function SportDeCompetition(nom, description, niveau) {
            var _this = 
            //appel au contruscteur parent
            _super.call(this, nom, description) || this;
            _this.niveau = niveau;
            return _this;
        }
        SportDeCompetition.prototype.afficher = function () {
            //appel methode parent
            _super.prototype.afficher.call(this);
            console.log("Classe SportDeCompetition - afficher()");
            console.log("niveau : " + this.niveau);
        };
        return SportDeCompetition;
    }(Sport));
    console.log("####compet");
    var sport2Compet = new SportDeCompetition("Tennis", "un sport de pro", "pro");
    sport2Compet.afficher();
    var SportJouable = /** @class */ (function (_super) {
        __extends(SportJouable, _super);
        function SportJouable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // je dois implementer la methode jouer
        SportJouable.prototype.jouer = function (joueur1, joueur2) {
            var vainqueur = joueur1;
            if (Math.floor(Math.random() * Math.floor(2)) == 0) {
                vainqueur = joueur2;
            }
            // cette fct doit renvoyer un string
            return vainqueur;
        };
        return SportJouable;
    }(Sport));
    var sportJouable = new SportJouable("badminton", "fatiguant");
    var vainqueur = sportJouable.jouer("Batman", "Superman");
    console.log(vainqueur);
    var jouerAuBadminton = function (joueur1, joueur2) {
        console.log(joueur1 + " et " + joueur2 + "jouent au bad");
        return joueur1;
    };
    console.log("le vainqueur est " + jouerAuBadminton("Brivael", "wayan"));
}
bonjour("Kevin");

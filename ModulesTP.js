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
var TP;
(function (TP) {
    // ...
    var Auteur = /** @class */ (function () {
        function Auteur(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        return Auteur;
    }());
    TP.Auteur = Auteur;
    var Oeuvre = /** @class */ (function () {
        function Oeuvre(titre, annee, auteur) {
            this.titre = titre;
            this.annee = annee;
            this.auteur = auteur;
        }
        Oeuvre.prototype.afficher = function () {
            console.log(this.titre + " " + this.annee + " " + this);
        };
        return Oeuvre;
    }());
    TP.Oeuvre = Oeuvre;
    var Sculpture = /** @class */ (function (_super) {
        __extends(Sculpture, _super);
        function Sculpture(matiere, nom, annee, auteur) {
            var _this = _super.call(this, nom, annee, auteur) || this;
            _this.matiere = matiere;
            return _this;
        }
        return Sculpture;
    }(Oeuvre));
    TP.Sculpture = Sculpture;
    var Livre = /** @class */ (function (_super) {
        __extends(Livre, _super);
        function Livre() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Livre;
    }(Oeuvre));
    TP.Livre = Livre;
    var Peinture = /** @class */ (function (_super) {
        __extends(Peinture, _super);
        function Peinture() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Peinture;
    }(Oeuvre));
    TP.Peinture = Peinture;
})(TP || (TP = {}));
var ilan = new TP.Auteur("loore", "ilan");
var sculp = new TP.Sculpture("beton", "le mur", 2022, ilan);
sculp.afficher();
console.log(sculp);

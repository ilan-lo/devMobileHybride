"use strict";
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
exports.__esModule = true;
exports.VenteAuxEncheres = void 0;
var VenteAuxEncheres;
(function (VenteAuxEncheres) {
    // ##########
    // Classes
    // ##########
    var Acheteur = /** @class */ (function () {
        function Acheteur(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        return Acheteur;
    }());
    VenteAuxEncheres.Acheteur = Acheteur;
    // Classe Auteur qui implémente Affichable
    // Doit donc contenir une méthode afficher(): string
    var Auteur = /** @class */ (function () {
        // Constructeur qui définit les attributs
        function Auteur(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        // On implémente Affichable, on doit avoir cette méthode
        Auteur.prototype.afficher = function () {
            // Renvoie une string
            return this.nom + " " + this.prenom;
        };
        return Auteur;
    }());
    VenteAuxEncheres.Auteur = Auteur;
    var Oeuvre = /** @class */ (function () {
        // Attributs sont déclarés et initialisés dès le constructeur
        function Oeuvre(annee, titre, auteurs) {
            this.annee = annee;
            this.titre = titre;
            this.auteurs = auteurs;
        }
        // On pourra instancier une oeuvre ainsi:
        /*
            let oeuvreGeniale: Oeuvre = new Oeuvre(
                2022,
                "CESI Brest",
                [ new Auteur("Lansonneur", "David"), new Auteur("Perchirin", "Loan"), new Auteur("Queron", "Mathéo" )]
            );
        */
        // Implémente Affichable
        Oeuvre.prototype.afficher = function () {
            // Variable qui contiendra la liste des auteurs sous forme de string
            var stringAuteurs;
            // Parcours du tableau des auteurs
            if (this.auteurs != undefined) {
                // Initialise la string a vide
                stringAuteurs = "";
                // Expression lambda de parcours du tableau en une seule ligne
                this.auteurs.forEach(function (value) { return stringAuteurs += (stringAuteurs == "" ? "" : ", ") + value.afficher(); });
                // Sur plusieurs lignes, ça ferait:
                /*
                    this.auteurs.forEach(
                        function (auteurEnCours, index, tableauComplet ){
                            // Concaténation de stringAuteurs
                            if ( stringAuteurs == "" )
                            {
                                stringAuteurs += "";
                            }else{
                                stringAuteurs +=  ", ";
                            }
                            // Dans tous les cas, on ajoute le contenu de l'auteur
                            stringAuteurs +=  auteurEnCours.afficher();
                        }
                    );
                */
            }
            // Renvoi final
            return "[annee : " + this.annee +
                ", titre : " + this.titre +
                ", auteurs : [" + stringAuteurs + "]" +
                (this.meilleureEnchere != undefined ? (", meilleure enchère : " + this.meilleureEnchere) : "") +
                (this.acheteur != undefined ? (", acheteur : " + this.acheteur.nom + " " + this.acheteur.prenom) : "") +
                "]";
        };
        // Methode encherir exigée par Vendable
        Oeuvre.prototype.encherir = function (nouvelleEnchere, acheteur) {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        };
        return Oeuvre;
    }());
    VenteAuxEncheres.Oeuvre = Oeuvre;
    // Sculpture hérite de Oeuvre
    var Sculpture = /** @class */ (function (_super) {
        __extends(Sculpture, _super);
        // Même constructeur que le parent, mais en plus, on a la matière
        function Sculpture(annee, titre, auteurs, matiere) {
            var _this = 
            // Appel au constructeur parent
            _super.call(this, annee, titre, auteurs) || this;
            _this.matiere = matiere;
            return _this;
        }
        return Sculpture;
    }(Oeuvre));
    VenteAuxEncheres.Sculpture = Sculpture;
    var Livre = /** @class */ (function (_super) {
        __extends(Livre, _super);
        function Livre(annee, titre, auteurs) {
            return _super.call(this, annee, titre, auteurs) || this;
        }
        return Livre;
    }(Oeuvre));
    VenteAuxEncheres.Livre = Livre;
    var Peinture = /** @class */ (function (_super) {
        __extends(Peinture, _super);
        function Peinture(annee, titre, auteurs) {
            return _super.call(this, annee, titre, auteurs) || this;
        }
        return Peinture;
    }(Oeuvre));
    VenteAuxEncheres.Peinture = Peinture;
})(VenteAuxEncheres = exports.VenteAuxEncheres || (exports.VenteAuxEncheres = {}));

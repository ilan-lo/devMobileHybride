"use strict";
exports.__esModule = true;
// creation module voir l 133
var BusinessObject;
(function (BusinessObject) {
    // ...
    var Sport = /** @class */ (function () {
        function Sport(nom, description) {
            this.nom = nom;
            this.description = description;
        }
        Sport.prototype.afficher = function () {
            console.log(this.nom + " " + this.description);
        };
        return Sport;
    }());
    BusinessObject.Sport = Sport;
})(BusinessObject || (BusinessObject = {}));
// ##########les modules
// creation d'un module voir l1 (module doit etre tout en haut)
var sportModule = new BusinessObject.Sport("Foot", "messi");
sportModule.afficher();
//import d'un module depuis un autre fichier
var Validator_1 = require("./Validator");
var classStringValidator = Validator_1.Validator.StringValidator;
var newSV = new classStringValidator("une chaine");
newSV.afficher();

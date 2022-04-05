"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Validator;
(function (Validator) {
    var StringValidator = /** @class */ (function () {
        function StringValidator(contenu) {
            this.contenu = contenu;
        }
        StringValidator.prototype.afficher = function () {
            console.log("contenu: " + this.contenu);
        };
        return StringValidator;
    }());
    Validator.StringValidator = StringValidator;
})(Validator = exports.Validator || (exports.Validator = {}));

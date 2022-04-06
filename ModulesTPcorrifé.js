"use strict";
exports.__esModule = true;
var VenteAuxEncheres_1 = require("./VenteAuxEncheres");
// Création des oeuvres
var oeuvres = [];
oeuvres.push(new VenteAuxEncheres_1.VenteAuxEncheres.Sculpture(1925, "Le penseur de rodin", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Rodin", "Auguste")
], "bronze"));
oeuvres.push(new VenteAuxEncheres_1.VenteAuxEncheres.Peinture(1995, "David", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("papa", "de david"),
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("maman", "de david")
]));
oeuvres.push(new VenteAuxEncheres_1.VenteAuxEncheres.Livre(1998, "Coupe du monde", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Zidane", "Zinedine"),
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Barthez", "Fabien")
]));
//Encheres
oeuvres.forEach(function (oeuvre) {
    oeuvre.encherir(Math.floor(Math.random() * 10000), new VenteAuxEncheres_1.VenteAuxEncheres.Acheteur("Bara", "Morgane"));
});
console.log(oeuvres);
//Parcours et affichage des oeuvres
oeuvres.forEach(function (oeuvres) { return console.log(oeuvres.afficher()); });

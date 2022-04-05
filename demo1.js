// creer et manipuler des objets en js

//declarer
let sport = { nom : "Handall", description : "un jeu de ballon"};

//manipuler
console.log(sport);
console.log(sport.nom);

//modifier
sport.nom = "Football";
console.log(sport);
console.log(sport.nom);

// ajout d'un attribut
sport.nombreNoueurs = 11;
console.log(sport);

//un objet peut avoir des methodes
var sport2 = {
    nom:"Badminton",
    description:"ca vole",
    afficher: function () {
        console.log(`${this.nom.toUpperCase()} ${this.description}`);
    }
};
sport2.afficher();

let sports = [sport, sport2, {nom:"PADEL", description: "raquette"}];

console.log(sports);

sports.push({nom:"Tennis", description:"ca claque"});
console.log(sports);
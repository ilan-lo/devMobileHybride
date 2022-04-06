import { VenteAuxEncheres} from "./VenteAuxEncheres";
// Création des oeuvres

let oeuvres : VenteAuxEncheres.Oeuvre[] = [];

oeuvres.push(
    new VenteAuxEncheres.Sculpture(
        1925,
        "Le penseur de rodin",
        [
            new VenteAuxEncheres.Auteur(
                "Rodin",
                "Auguste"
            )
        ],
        "bronze"
    )
);

oeuvres.push(
    new VenteAuxEncheres.Peinture(
        1995,
        "David",
        [
            new VenteAuxEncheres.Auteur(
                "papa",
                "de david"
            ),
            new VenteAuxEncheres.Auteur(
                "maman",
                "de david"
            )
        ],
    )
);
oeuvres.push(
    new VenteAuxEncheres.Livre(
        1998,
        "Coupe du monde",
        [
            new VenteAuxEncheres.Auteur(
                "Zidane",
                "Zinedine"
            ),
            new VenteAuxEncheres.Auteur(
                "Barthez",
                "Fabien"
            )
        ],
    )
);


//Encheres
oeuvres.forEach(
    (oeuvre) => {
        oeuvre.encherir(
            Math.floor(Math.random() * 10000),
            new VenteAuxEncheres.Acheteur(
                "Bara", "Morgane"
            )
        )
    }
)
console.log(oeuvres);
//Parcours et affichage des oeuvres
oeuvres.forEach(
    (oeuvres)=>console.log(oeuvres.afficher())
);
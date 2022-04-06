module TP {
    // ...


    export class Auteur{
        constructor(public nom: string, public prenom: string) {
        }
    }
    export class Oeuvre {
        constructor(public titre: string, public annee: number, public auteur: Auteur) {
        }

        public afficher(): void {
            console.log(this.titre + " " + this.annee + " " + this);
        }
    }

    export class Sculpture extends Oeuvre {
        constructor(public matiere: string, nom: string, annee: number, auteur: Auteur) {
            super(nom, annee, auteur);
        }
    }

    export class Livre extends Oeuvre {

    }

    export class Peinture extends Oeuvre {

    }

}
let ilan: TP.Auteur = new TP.Auteur("loore", "ilan");
let sculp: TP.Sculpture = new TP.Sculpture("beton", "le mur", 2022,ilan);
sculp.afficher();
console.log(sculp);
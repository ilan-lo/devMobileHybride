// creation module voir l 133
module BusinessObject {
    // ...
    export class Sport {
        constructor(public nom: string, public description: string) {
        }
        public afficher(): void {
            console.log(this.nom + " " + this.description);
        }
    }
}
// ##########les modules

// creation d'un module voir l1 (module doit etre tout en haut)

let sportModule: BusinessObject.Sport = new BusinessObject.Sport("Foot", "messi");
sportModule.afficher();

//import d'un module depuis un autre fichier
import{Validator} from "./Validator";
let classStringValidator = Validator.StringValidator;

let newSV = new classStringValidator("une chaine");
newSV.afficher();
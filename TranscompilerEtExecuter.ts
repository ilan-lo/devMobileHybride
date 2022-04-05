// Déclaration d'une fonction en typeScript
function bonjour( qui:string ){
    console.log("Bonjour " + qui);
    enum Etablissement{Maternelle, Primaire, College, Lycée, Faculte};
    console.log(Etablissement);

    // Declaration de classe en TS
    class Sport {
        // Attributs
        public nom : string;
        private prive : string;
        // constructor attribut description est créé comme avec public dans les parametre cosntructor
        constructor(nom : string, public description : string){
            this.nom = nom;
            this.prive = "valeur caché mise par defaut";
        }
        //methode afficher
        public afficher() : void {
            console.log("Class sport - afficher()")
            console.log(this.nom+" "+this.description);
        }

    }
    let sport : Sport = new Sport("Squash", "un sport de raquete");
    sport.afficher();

    //heritage
    class SportDeCompetition extends Sport {
        constructor( nom : string, description : string, public niveau : string) {
            //appel au contruscteur parent
            super(nom, description);
        }
        public afficher():void {
            //appel methode parent
            super.afficher();
            console.log("Classe SportDeCompetition - afficher()");
            console.log("niveau : " + this.niveau);
        }
    }
    console.log("####compet");
    let sport2Compet : SportDeCompetition = new SportDeCompetition("Tennis", "un sport de pro", "pro");
    sport2Compet.afficher();

    // interface de class
    interface Jouable {
        // propriété optionnelle
        score?: string;

        // methode obligatoire a definir
        jouer( joueur1: string, joueur2: string): string;
    }
    class SportJouable extends Sport implements Jouable {
        // je dois implementer la methode jouer
        jouer(joueur1: string, joueur2: string):string {
            let vainqueur = joueur1;
            if(Math.floor(Math.random() * Math.floor(2)) == 0) {
                vainqueur = joueur2;
            }
            // cette fct doit renvoyer un string
            return vainqueur;
        }
    }
    let sportJouable: SportJouable = new SportJouable("badminton", "fatiguant");
    let vainqueur: string = sportJouable.jouer("Batman", "Superman");
    console.log(vainqueur);

    // ##### interface de methode
    interface jouer {
        (joueur1: string, joueur2: string): string;
    }
    let jouerAuBadminton: jouer = function (joueur1:string, joueur2): string{
        console.log(joueur1 + " et " + joueur2 + " jouent au bad");
        return joueur1;
    }
    console.log("le vainqueur est " + jouerAuBadminton("Brivael", "wayan"));
}
bonjour("Kevin");
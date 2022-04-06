export module VenteAuxEncheres
{
    // ############
    // Interfaces
    // ############
    export interface Affichable
    {
        // On oblige les classes (ou objets) de contenir (de définir) une méthode afficher qui doit renvoyer du string
        afficher() : string;
    }
    export interface Vendable
    {
        // Attribut attendu
        meilleureEnchere : number;
        // Attribut de liaison (0..1)
        acheteur ?: Acheteur;
        // Méthode encherir
        encherir ( nouvelleEnchere : number, acheteur : Acheteur );
    }
    // ##########
    // Classes
    // ##########
    export class Acheteur
    {
        constructor( public nom : string, public prenom : string ){}
    }
    // Classe Auteur qui implémente Affichable
    // Doit donc contenir une méthode afficher(): string
    export class Auteur implements Affichable
    {
        // Constructeur qui définit les attributs
        constructor(public nom : string, public prenom : string){}
        // On implémente Affichable, on doit avoir cette méthode
        afficher(): string
        {
            // Renvoie une string
            return this.nom + " " + this.prenom;
        }
    }
    export class Oeuvre implements Affichable, Vendable
    {
        // Attributs exigés par Vendable
        meilleureEnchere : number;
        acheteur ?: Acheteur;
        // Attributs sont déclarés et initialisés dès le constructeur
        constructor(
            public annee : number,
            public titre : string,
            public auteurs : Auteur[]
        ){}
        // On pourra instancier une oeuvre ainsi:
        /*
            let oeuvreGeniale: Oeuvre = new Oeuvre(
                2022,
                "CESI Brest",
                [ new Auteur("Lansonneur", "David"), new Auteur("Perchirin", "Loan"), new Auteur("Queron", "Mathéo" )]
            );
        */
        // Implémente Affichable
        afficher() : string
        {
            // Variable qui contiendra la liste des auteurs sous forme de string
            let stringAuteurs : string;
            // Parcours du tableau des auteurs
            if( this.auteurs!=undefined )
            {
                // Initialise la string a vide
                stringAuteurs = "";
                // Expression lambda de parcours du tableau en une seule ligne
                this.auteurs.forEach((value)=>stringAuteurs+=(stringAuteurs==""?"":", ") + value.afficher());
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
                ( this.meilleureEnchere!=undefined?(", meilleure enchère : " + this.meilleureEnchere) : "") +
                ( this.acheteur!= undefined? (", acheteur : " + this.acheteur.nom+" " + this.acheteur.prenom):"") +
                "]";
        }
        // Methode encherir exigée par Vendable
        encherir( nouvelleEnchere : number, acheteur : Acheteur ) : void
        {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        }
    }
    // Sculpture hérite de Oeuvre
    export class Sculpture extends Oeuvre
    {
        // Même constructeur que le parent, mais en plus, on a la matière
        constructor(annee : number, titre : string, auteurs : Auteur[], public matiere : string)
        {
            // Appel au constructeur parent
            super(annee, titre, auteurs);
        }
        // Pour un instance de sculpture, on aura:
        /*
            let sculpture = new Sculpture(2021, "CESI", [ new Auteur("Fer", "Brivael") ], "fer" );
        */
    }
    export class Livre extends Oeuvre
    {
        constructor(annee : number, titre : string, auteurs : Auteur[])
        {
            super(annee, titre, auteurs);
        }
    }
    export class Peinture extends Oeuvre
    {
        constructor(annee : number, titre : string, auteurs : Auteur[])
        {
            super(annee, titre, auteurs);
        }
    }
}
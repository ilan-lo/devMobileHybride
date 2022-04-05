let indice = 0;
let i = 0;


class Savoir{
    constructor(savoir, auteur, date){
        this.savoir = savoir;
        this.auteur = auteur;
        this.date = date;
    }
    //methode pour avouter dans le dom
    ajouterDansleDom(){

        if(this.auteur === "" || this.savoir === "" || this.auteur === "auteur"|| this.savoir === "savoir"|| this.date === ""){

        } else {
            let nouv = new Savoir(this.savoir, this.auteur, this.date);

            console.log(allSavoir);

            // si format date .valueAsDate
            let elrendu = document.createElement("li");
            let id = indice;
            elrendu.setAttribute("id", "rendu" + indice);

            let elbuttondelete = document.createElement("button");
            elbuttondelete.innerHTML = "Suprimer";
            elbuttondelete.setAttribute("id", "bu" + indice);
            elbuttondelete.setAttribute("onclick", "deleter(" + id + ");");

            //on rajoute le contenue
            elrendu.innerHTML = this.savoir + "<br>" + " de : " + this.auteur + "<br>" + " le : " + this.date;
            document.getElementById("liste").appendChild(elrendu);
            //document.getElementById("titre").insertAdjacentElement("afterend", elrendu);
            document.getElementById("rendu" + indice).insertAdjacentElement("afterend", elbuttondelete);
            indice++;
        }
    }
    ajouterDansleLocal() {
        let auteur = document.getElementById("auteur").value;
        let savoir = document.getElementById("savoir").value;
        let dates = document.getElementById("date").value;
        let objet = {auteur: `${auteur}`,savoir: `${savoir}`, date: `${dates}`};
        localStorage.setItem("objet"+i++,JSON.stringify(objet));
        let objetLu = localStorage.getItem("objet");
        let objetobjetLu = JSON.parse(objetLu);
        console.log(objetobjetLu);
    }
}

let allSavoir =[];
while (localStorage.getItem("objet"+i)!=null) {
    i++;
    let nouv1 = localStorage.getItem("objet"+i);
    let nouv2 = JSON.parse(nouv1);
    console.log(nouv2);
    let nouv = new Savoir(nouv2.savoir, nouv2.auteur, nouv2.date);
    nouv.ajouterDansleDom();
    allSavoir.push(nouv);
    nouv.ajouterDansleLocal();
}
    function chargerContenu() {
        console.log("coucou, la fonction chargerContenu() est exécutée");

        document.title = "Mon titre sur l'onglet";


        //document.getElementsByTagName("h1")[0].innerText = "Ceci est mon vrai titre";
        document.getElementById("titre").innerText = "Ceci est vraiment le bon titre";

        let elInput = document.createElement("input");
        let attValue = document.createAttribute("value");
        attValue.value = "une zone de saisie";
        elInput.setAttributeNode(attValue);
        elInput.setAttribute("value", "auteur");
        elInput.setAttribute("id", "auteur");

        let elInput2 = document.createElement("input");
        let attValue2 = document.createAttribute("value");
        attValue2.value = "une zone de saisie";
        elInput2.setAttributeNode(attValue2);
        elInput2.setAttribute("value", "savoir");
        elInput2.setAttribute("id", "savoir");

        let elInput3 = document.createElement("input");
        let attValue3 = document.createAttribute("value");
        elInput3.setAttributeNode(attValue3);
        elInput3.setAttribute("value", "04/04/22");
        elInput3.setAttribute("id", "date");

        let elbutton = document.createElement("button");
        let attValueB = document.createAttribute("innerHTML");
        attValueB.value = "Ajouter";
        elbutton.setAttributeNode(attValueB);
        elbutton.innerHTML = "Ajouter";
        elbutton.setAttribute("onclick", "addlist();");


        //afterend, beforebegin, afterbegin, beforerend
        document.getElementById("titre").insertAdjacentElement("afterend", elInput);
        document.getElementById("titre").insertAdjacentElement("afterend", elInput2);
        document.getElementById("titre").insertAdjacentElement("afterend", elInput3);
        document.getElementById("titre").insertAdjacentElement("afterend", elbutton);
    }

    function addlist() {
        let auteur = document.getElementById("auteur").value;
        let savoir = document.getElementById("savoir").value;
        let date = document.getElementById("date").value;
        if(auteur === "" || savoir === "" || auteur === "auteur"|| savoir === "savoir"|| date === ""){

        } else {
            let nouv = new Savoir(savoir, auteur, date);
            nouv.ajouterDansleDom();
            allSavoir.push(nouv);
            nouv.ajouterDansleLocal();
        }

    }
    function deleter(id) {
        console.log("rendu"+id);
        document.getElementById("rendu"+id).remove();
        document.getElementById("bu"+id).remove();
    }


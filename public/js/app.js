class Objet {
  constructor(nom,prix){
      this.nom = nom;
      this.prix = prix;
  }
}

let objet1 = new Objet('homer',99);
let objet2 = new Objet('bart',19);

let boite = [objet1,objet2];

console.log(boite);

class Personnage {
  constructor(nom,sac,argent){
      this.nom = nom;
      this.sac = sac;
      this.argent = argent;
  }
  prendre(objet) {
    this.sac.push(objet);
  }
  acheter(vendeur, objet) {
    if (this.argent < objet.prix) {
      console.log("Vous n'avez pas assez d'argent pour acheter cet objet");
      return;
    }
    this.argent -= objet.prix;
    this.sac.push(objet);
  }
}

let homer = new Personnage("Homer", [], 100);
let bart = new Personnage("Bart", [], 50);

homer.prendre(objet1);
bart.prendre(objet2);

homer.acheter(bart, objet2);

console.log(homer);
console.log(bart);

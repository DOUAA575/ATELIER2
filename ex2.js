
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
    
    this.etudier = function() {
        console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
    };
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;

    this.enseigner = function() {
        console.log(`${this.nom} enseigne un cours.`);
    };
}


let etudiant1 = new Etudiant("Dupont", "Alice", 20, "CNE123");
let etudiant2 = new Etudiant("Bernard", "Paul", 22, "CNE456");
let professeur1 = new Professeur("Martin", 40, "CIN789");


let etudiants = [etudiant1, etudiant2];

etudiants.sort((a, b) => {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom); 
    }
    return a.nom.localeCompare(b.nom); 
});


console.log("Etudiants triés par ordre alphabétique :");
etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
});


etudiant1.etudier();
professeur1.enseigner();


class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    
    afficher() {
      console.log(`Vecteur2D: x = ${this.x}, y = ${this.y}`);
    }
  
    ajouter(vecteur) {
      return new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
    }
  }
  
  // Programme principal
  const vecteur1 = new Vecteur2D(); // Sans paramètres
  const vecteur2 = new Vecteur2D(5, 7); // Avec paramètres
  
  vecteur1.afficher();
  vecteur2.afficher();
  
  // Addition des deux vecteurs
  const vecteur3 = vecteur1.ajouter(vecteur2);
  vecteur3.afficher();

  // Classe Rectangle avec constructeur et méthode surface
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = "rectangle"; // Attribut par défaut
    }
  
    // Méthode d'affichage
    afficher() {
      console.log(`${this.nom}: Longueur = ${this.longueur}, Largeur = ${this.largeur}`);
    }
  
    // Méthode pour calculer la surface
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  // Classe Carre héritant de Rectangle et surcharge du nom
  class Carre extends Rectangle {
    constructor(cote = 1) {
      super(cote, cote); // Appel du constructeur de Rectangle avec la même valeur pour longueur et largeur
      this.nom = "carré"; // Surcharge de l'attribut nom
    }
  }
  
  // Programme principal
  const rectangle1 = new Rectangle(4, 5);
  const carre1 = new Carre(3);
  
  rectangle1.afficher();
  console.log("Surface du rectangle:", rectangle1.surface());
  
  carre1.afficher();
  console.log("Surface du carré:", carre1.surface());

  // Classe Point avec des coordonnées par défaut
class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  }
  
  // Classe Segment composée de deux instances de Point
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1); // Origine du segment
      this.extrem = new Point(x2, y2); // Extrémité du segment
    }
  
    
    afficher() {
      console.log(`Segment: Origine = (${this.orig.x}, ${this.orig.y}), Extrémité = (${this.extrem.x}, ${this.extrem.y})`);
    }
  }
  
  
  const point1 = new Point(1, 2);
  const point2 = new Point(4, 6);
  const segment1 = new Segment(1, 2, 4, 6);
  
  point1.afficher();
  point2.afficher();
  segment1.afficher();
  
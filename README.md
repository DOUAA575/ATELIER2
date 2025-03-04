# GestionVoituresJS

Un projet en JavaScript pour gérer des voitures
c'est une application simple en JavaScript permettant la gestion et l'affichage de voitures avec un tri basé sur l'année de fabrication. Le code exploite les concepts de la programmation orientée objet, notamment l'héritage, pour structurer les différentes catégories de véhicules.

L'application est constituée de plusieurs parties :
•	Définition de la classe Voiture : Cette classe mère contient les attributs communs aux voitures, tels que le modèle, la marque, l'année, le type et le carburant.
•	Définition des sous-classes Hyundai et Ford : Ces classes héritent de Voiture et ajoutent des attributs spécifiques.
o	Hyundai possède un attribut serie et un booléen hybride, ainsi qu'une méthod e alarmer().
o	Ford possède un attribut options sous forme de tableau.
•	Création et tri d'une liste de voitures : Plusieurs objets de type Hyundai et Ford sont instanciés et ajoutés à une liste. Cette liste est ensuite triée par année de fabrication en ordre croissant.
•	Affichage des résultats dans une page HTML : Les voitures triées sont affichées dynamiquement sur une page web.

Résultats Attendus Lorsque l'application est exécutée dans un navigateur :
•	Une liste triée des voitures est affichée sur la page.
•	La méthode alarmer() affiche un message de test dans la console pour une Hyundai hybride.
•	Les tests de tri et d'affichage confirment le bon fonctionnement du programme.

# Gestion des Étudiants et Professeurs
Ce projet implémente une gestion simple des étudiants et des professeurs en JavaScript, comprenant des objets et des méthodes de tri et d'affichage.
 
 Le projet consiste à créer des objets représentant des étudiants et des professeurs. Chaque objet possède des propriétés spécifiques, et des méthodes sont ajoutées pour interagir avec ces objets. Un système de tri des étudiants par nom et prénom est également inclus.

 Création d'objets :

Etudiant : Un étudiant avec les propriétés nom, prenom, age, et cne.
Professeur : Un professeur avec les propriétés nom, age, et cin.
Méthodes :

Méthode etudier() pour l'objet Etudiant qui affiche un message lorsque l'étudiant est en train d'étudier.
Méthode enseigner() pour l'objet Professeur qui affiche un message lorsque le professeur est en train d'enseigner.
Tri des étudiants :

Les étudiants sont triés par ordre alphabétique, d'abord par leur nom, puis par leur prénom en cas d'égalité.

# Gestion de Vecteurs, Rectangles et Segments

Ce projet implémente une série de classes en JavaScript pour modéliser des objets géométriques, incluant des vecteurs, des rectangles, des carrés, des points, et des segments. Le projet permet de calculer des propriétés géométriques comme la somme de vecteurs ou la surface d'un rectangle, et d'afficher les informations pertinentes.

Le projet contient les classes suivantes :

Vecteur2D : Modélise un vecteur dans un plan 2D avec des méthodes pour additionner deux vecteurs et afficher leurs coordonnées.
Rectangle : Représente un rectangle avec un attribut longueur, largeur, et une méthode pour calculer sa surface.
Carre : Hérite de la classe Rectangle et surcharge l'attribut nom pour représenter un carré.
Point : Représente un point dans un plan avec des coordonnées par défaut.
Segment : Un segment défini par deux points (origine et extrémité) et une méthode d'affichage


Vecteur2D :

Création d'un vecteur 2D avec des coordonnées par défaut.
Addition de deux vecteurs.
Affichage des coordonnées du vecteur.
Rectangle :

Création d'un rectangle avec longueur et largeur par défaut.
Calcul de la surface du rectangle.
Carre :

Hérite de la classe Rectangle, mais avec des côtés égaux (carré).
Surcharge de l'attribut nom pour "carré".
Point :

Création d'un point avec des coordonnées par défaut (x = 0, y = 0).
Segment :

Représente un segment défini par deux points (origine et extrémité).

# Mini Blog
Ce projet est un blog simple où les utilisateurs peuvent s'inscrire, se connecter, créer des posts et lister les posts existants.

Fonctionnalités
Inscription : Permet aux utilisateurs de créer un compte avec un nom d'utilisateur et un mot de passe.
Connexion : Permet aux utilisateurs de se connecter avec leurs identifiants.
Créer un post : Une fois connecté, l'utilisateur peut créer un post en ajoutant un titre et une description.
Lister les posts : L'utilisateur peut voir la liste des posts créés sur le blog.
Technologies utilisées
HTML : Pour structurer la page web.
CSS : Pour le style (le style est simple et peut être amélioré si nécessaire).
JavaScript : Pour la gestion de la logique du blog (inscription, connexion, création et affichage des posts).
Classes principales
User : Représente un utilisateur du blog avec un nom d'utilisateur et un mot de passe.
Méthodes :
toJSON() : Convertit un utilisateur en format JSON.
fromJSON(json) : Crée un utilisateur à partir d'un JSON.
Post : Représente un post créé sur le blog avec un titre, une description et l'utilisateur qui l'a créé.
Méthodes :
toJSON() : Convertit un post en format JSON.
fromJSON(json) : Crée un post à partir d'un JSON.
Blog : Gère les utilisateurs et les posts.
Méthodes :
signup(username, password) : Inscrit un nouvel utilisateur.
login(username, password) : Permet à un utilisateur de se connecter.
addPost(title, description, user) : Ajoute un nouveau post au blog.
listPosts() : Affiche tous les posts du blog.



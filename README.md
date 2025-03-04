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



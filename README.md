<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Projet 1 : Backend - REST API - NestJS - MongoDB
Mise en place d'un serveur backend utilisant le framework NestJS (https://docs.nestjs.com/). On a utilisé MongoDB (https://www.mongodb.com/) comme base de données(BD). Le backend comporte deux modèles avec leurs contrôleurs et services :

  - Un modèle **user** qui permet de gérer les utilisateurs
  - Un modèle **product** qui permet de gérer les produits.
  
Le modèle **user** a les champs suivants : **_id**, **firstname**, **lastname**, **address**

Le modèle **produit** a les champs suivants : **_id**, **name**, **price**, **quantity**, **image**

## EndPoints

### User
    GET - /users       :  récupère l’ensemble des utilisateurs enregistrés

    GET - /user/:id    :  récupère un utilisateur par son id(identifiant)

    POST - /user       :  enregistre un utilisateur sur la base de données

    PATCH - /user/:id  :  modifie un utilisateur par son id

    DELETE - /user/:id :  supprime un utilisateur par son id

### Product
    GET - /products       :   récupère l’ensemble des produits enregistrés

    GET - /product/:id    :   récupère un produit par son id(identifiant)

    POST - /product       :   enregistre un produit sur la base de données

    PATCH - /product/:id  :   modifie un produit par son id

    DELETE - /product/:id :   supprime un produit

-----------

## Project Status 
      Complete 

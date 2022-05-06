---
title: Apibook 
description: Application web en Symfony pour les apiculteurs !
slug: apibook 
img: apibook-logo.png 
period: 5 janvier - 18 février 2022 
---

## Présentation

Ce projet est un site que j'ai réalisé durant mon stage de 2ème année. C'est un site qui permet aux apiculteurs de gérer
leurs ruchers et leurs ruches, avec tout ce qui va avec :

- ToDoList
- Suivi sanitaire
- Suivi colonial
- Suivi des reines
- Suivi des ruches
- Suivi des floraisons
- Suivi de la pression du frelon
- Affichage d'une carte montrant les points de floraisons et de pression du frelon en assemblant les données de tous les
  apiculteurs.

## Description

La première étape de ce projet a été de créer un wireframe du site. Pour ce faire j'ai utilisé l'outil en
ligne [Balsamiq](https://balsamiq.com/wireframes/).

Une fois le wireframe validé, j'ai créé un schéma de la structure de la base de données à l'aide de
l'application [DBSchema](https://dbschema.com/index_fr.html).

J’ai ensuite pu commencer le développement de l’application web. J’ai d’abord commencé par créer un nouveau projet symfony en local lié à une une base de données Postgres que j’ai créé aussi en local, puis j’ai installé les composants nécessaires à l’application. Parmi eux, Webpack Encore qui permet de gérer la compilation du SASS et mettre tout le contenu statique (css, js, images) dans un dossier accessible à l’application.

Une fois que tout était installé, j’ai dû créer toutes les entités à partir du schéma de données que j’avais créé,

Puis, j'ai mis en place des fixtures qui sont un jeu de fausses données générées grâce à un module additionnel de symfony (https://github.com/zenstruck/foundry) et qui permettent de donner vie à l’application et faciliter les tests.

J'ai ensuite créé les routes de l'application et les formulaires symfony dont j’ai besoin pour le développement de l’application. (Connexion, inscription, ajout/édition de ruchers, de ruche, de suivis…)

Enfin, j'ai développé les différentes parties de l'application, fonctionnalité par fonctionnalité.
## Conception

![DBSchema](/images/apibook/dbschema.png)

## Extraits de code

//TODO

## Technologies utilisées

- Frameword PHP Symfony (Doctrine, twig..)
- PostgresSQL
- Bootstrap
- JQuery
- Axios (pour l'ajax)

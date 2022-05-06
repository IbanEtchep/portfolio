---
title: EasyFood
description: Application de commande de plats en Symfony !
slug: easyfood
img: apibook-logo.png
---

## Présentation

La société EasyFood souhaite mettre en place un service de livraison de plats préparés par
des restaurateurs. Les plats ne seraient pas préparés par EasyFood, mais par les
restaurateurs partenaires.
L'organisation souhaite toucher le public des restaurants qui livrent à domicile (pizzeria,
japonais...), tout en proposant une bonne qualité gustative et des plats variés.
Pour développer son activité, EasyFood se base sur des partenariats avec des restaurants
déjà existants en leur proposant de gérer toute la partie commande-livraison. En échange, le
restaurateur accepte de proposer les plats à un tarif inférieur à ceux pratiqués en salle. De
cette manière EasyFood peut proposer la livraison des plats à un coût intéressant pour le
consommateur, tout en générant un profit. Easyfood nous a alors contacté afin de construire
LA solution clé en main de site internet permettant de satisfaire ce besoin.
Nous avons été missionné pour participer à la conception et la réalisation de cette solution.
Plusieurs fonctions nous ont été confiées :
- Inscription et identification
- Commande de client
- Proposition de plats sur la plateforme
- Evaluation des restaurants et de la plateforme EasyFood (commentaires + notes sur
5)
- Modération des commentaires et des plats

## Conception

![Diagramme](/images/easyfood/diagramme.png)

## Extraits de code 

### Recherchen de plats


Fonction pour filtrer les résultats selon plusieurs critères optionnels :
```php
public function search(?string $nomPlat, ?string $nomVille, ?string $nomTypePlat, ?int $minPrice, ?int $maxPrice) 
{
    $dql = "SELECT plat FROM App:Plat plat "
    . "JOIN plat.leTypePlat type "
    . "JOIN plat.leResto resto "
    . "WHERE plat.platVisible=true ";
    
    if(isset($nomPlat)){
    $dql = $dql. "AND plat.nomP LIKE :nomPlat ";
    }
    if(isset($nomTypePlat)){
    $dql =  $dql. "AND type.libelleType LIKE :nomTypePlat ";
    }
    if(isset($nomVille)){
    $dql =  $dql. "AND resto.villeR LIKE :nomVille ";
    }
    
    if(isset($minPrice)){
    $dql = $dql. "AND plat.prixClientP >= :minPrice ";
    }
    
    if(isset($maxPrice)){
    $dql =  $dql. "AND plat.prixClientP <= :maxPrice ";
    }
    
    $req = $this->getEntityManager()->createQuery($dql);
    
    if(isset($nomPlat)){
    $req->setParameter(":nomPlat", "%$nomPlat%");
    }
    if(isset($nomTypePlat)){
    $req->setParameter(":nomTypePlat", "%$nomTypePlat%");
    }
    if(isset($nomVille)){
    $req->setParameter(":nomVille", "%$nomVille%");
    }
    if(isset($minPrice)){
    $req->setParameter(":minPrice", $minPrice);
    }
    if(isset($maxPrice)){
    $req->setParameter(":maxPrice", $maxPrice);
    }
    
    return $req->getResult();
}
```

## Technologies utilisées

- Framework PHP Symfony (Doctrine, twig..)
- MariaDB
- Bootstrap

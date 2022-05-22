---
title: Maison des ligues
description: Exercice de création d'un site pour la ligue de Lauraine
slug: maison-des-ligues
img: mdl-thumb.png
---

## Présentation

La Maison des Ligues de Lorraine (M2L) est un établissement du Conseil Régional. Elle a pour mission de fournir des 
espaces et des services aux différentes ligues sportives régionales et à d’autres structures hébergées.

## Technologies utilisées

- PHP orienté objet
- SQL
- HTML - CSS
- Pattern MVC

## Modèle Entité-Association

![MCD](/images/maison-des-ligues/mea.png)

## Script création des tables

```mariadb
CREATE TABLE LIGUE
(
  idL             integer AUTO_INCREMENT,
  nomLigue        varchar(255),
  siteLigue       varchar(255),
  descriptifLigue varchar(255),
  PRIMARY KEY (idL)
);

CREATE TABLE CLUB
(
  idCl        integer AUTO_INCREMENT,
  nomClub     varchar(255),
  adresseClub varchar(255),
  idL         integer,
  PRIMARY KEY (idCl),
  FOREIGN KEY (idL) REFERENCES LIGUE (idL)
);

CREATE TABLE FORMATION
(
  idFo                  integer AUTO_INCREMENT,
  descriptif            varchar(255),
  dateDebut             date,
  ouvertureInscriptions date,
  clotureInscriptions   date,
  duree                 integer,
  effectifMax           integer,
  PRIMARY KEY (idFo)
);

CREATE TABLE FONCTION
(
  idF      integer AUTO_INCREMENT,
  libelleF varchar(255),
  PRIMARY KEY (idf)
);

CREATE TABLE INTERVENANT
(
  idI    integer AUTO_INCREMENT,
  nom    varchar(255),
  prenom varchar(255),
  statut varchar(255),
  idf    integer,
  email  varchar(150) UNIQUE,
  mdp    varchar(50),
  PRIMARY KEY (idI),
  FOREIGN KEY (idF) REFERENCES FONCTION (idF)
);

CREATE TABLE ETAT_DEMANDE
(
  idED      integer,
  libelleED varchar(50),
  PRIMARY KEY (idED)
);

CREATE TABLE PARTICIPATION_FORMATION
(
  idFo integer,
  idI  integer,
  idED integer,
  PRIMARY KEY (idFo, idI, idED),
  FOREIGN KEY (idFo) REFERENCES FORMATION (idFo),
  FOREIGN KEY (idI) REFERENCES INTERVENANT (idI),
  FOREIGN KEY (idED) REFERENCES ETAT_DEMANDE (idED)
);

CREATE TABLE CONTRAT
(
  idC         integer AUTO_INCREMENT,
  dateDebut   date,
  dateFin     date,
  typeContrat varchar(255),
  idI         integer,
  PRIMARY KEY (idC),
  FOREIGN KEY (idI) REFERENCES INTERVENANT (idI)
);

CREATE TABLE BULLETIN
(
  idB         integer AUTO_INCREMENT,
  mois        date,
  annee       date,
  bulletinPDF varchar(255),
  idC         integer,
  PRIMARY KEY (idB),
  FOREIGN KEY (idC) REFERENCES CONTRAT (idc)
);

CREATE TABLE DEPARTEMENT
(
  codeDepartement varchar(10),
  nomDepartement  varchar(50),
  PRIMARY KEY (codeDepartement)
);

CREATE TABLE VILLE
(
  codePostal      varchar(10),
  nomVille        varchar(50),
  codeDepartement varchar(10),
  PRIMARY KEY (codePostal),
  FOREIGN KEY (codeDepartement) REFERENCES DEPARTEMENT (codeDepartement)
);

CREATE TABLE BATIMENT
(
  codeBat  varchar(10),
  ageBat   smallint,
  nbEtages smallint,
  PRIMARY KEY (codeBat)
);

CREATE TABLE TYPE_ESPACE
(
  idTE      integer,
  libelleTE varchar(50),
  PRIMARY KEY (idTE)
);

CREATE TABLE ESPACE_MUTUALISE
(
  codeSalle     varchar(10),
  nbPlaces      smallint,
  libelleEspace varchar(50),
  idTE          integer,
  codeBat       varchar(10),
  PRIMARY KEY (codeSalle),
  FOREIGN KEY (idTE) REFERENCES TYPE_ESPACE (idTE),
  FOREIGN KEY (codeBat) REFERENCES BATIMENT (codeBat)
);

CREATE TABLE BUREAU
(
  codeBureau varchar(10),
  idL        integer,
  codeBat    varchar(10),
  PRIMARY KEY (codeBureau),
  FOREIGN KEY (idL) REFERENCES LIGUE (idL),
  FOREIGN KEY (codeBat) REFERENCES BATIMENT (codeBat)
);
```

## Extraits de code

Demande : Pouvoir stocker les ligues des différents sports et les afficher. 

### Modèle :
Classe métier Ligue :
```php 
class Ligue
{

    private int $idL;
    private string $nomLigue;
    private string $descriptifLigue;
    private string $siteLigue;

    public function __construct(array $data)
    {
        $this->hydrate($data);
    }

    /*
    * Permet de remplir les attributs de la classe à partir d'un tableau associatif.
    */
    public function hydrate(array $data){
        foreach ($data as $key => $value){
            $method = 'set'.ucfirst($key);
            if(method_exists($this, $method)){
                $this->$method($value);
            }
        }
    }

    public function getClubs(){
        $clubManager = new ClubManager();
        return $clubManager->getLigueClubs($this->getIdL());
    }
    
    //Getters et setters

}
```

Manager ayant pour rôle d'effectuer des opérations de lecture et d'écriture sur les tables.
```php
class LigueManager extends Model
{

    public function getLigues(): array
    {
        return $this->getAll('LIGUE', 'Ligue');

    }

    public function getLigueByName(string $ligueName): ?Ligue {
        $ligue = null;
        $req = $this->getBdd()->prepare('SELECT * FROM LIGUE WHERE nomLigue=:ligueName;');
        $req->bindValue(':ligueName', $ligueName, PDO::PARAM_STR);
        $req->execute();
        if($data = $req->fetch(PDO::FETCH_ASSOC)){
            $ligue = new Ligue($data);
        }
        return $ligue;
        $req->closeCursor();
    }

    public function getLigueById(int $id): ?Ligue {
        $ligue = null;
        $req = $this->getBdd()->prepare('SELECT * FROM LIGUE WHERE idL=:idL;');
        $req->bindValue(':idL', $id, PDO::PARAM_STR);
        $req->execute();
        if($data = $req->fetch(PDO::FETCH_ASSOC)){
            $ligue = new Ligue($data);
        }
        return $ligue;
        $req->closeCursor();
    }

    public function updateLigue(Ligue $ligue){
        $req = $this->getBdd()->prepare('UPDATE LIGUE SET nomLigue=? , descriptifLigue=?, siteLigue=? WHERE idL=?');
        $req->execute(Array($ligue->getNomLigue(), $ligue->getDescriptifLigue(), $ligue->getSiteLigue(), $ligue->getIdL()));
        $req->closeCursor();
    }

    public function deleteLigue(Ligue $ligue){
        $req = $this->getBdd()->prepare('DELETE FROM LIGUE WHERE idL=?');
        $req->execute(Array($ligue->getIdL()));
        $req->closeCursor();
    }

    public function addLigue(string $name, string $desc, string $site){
        $req = $this->getBdd()->prepare('INSERT INTO LIGUE (nomLigue, siteLigue, descriptifLigue) VALUES (?, ? ,?)');
        $req->execute(Array($name, $desc, $site));
        $req->closeCursor();
    }

}
```

### Vue

Affichage des ligues
```html
<?php $this->_t = 'Ligues M2L'; ?>

<h1>Liste des ligues</h1>

<table>

    <thead>
    <tr>
        <td>Nom</td>
        <td>Description</td>
        <td>Clubs</td>
        <td>Site</td>

    </tr>
    </thead>

    <tbody>
    <?php if(isset($ligues)): ?>
        <?php foreach ($ligues as $ligue) : ?>
            <tr>
                <td><?=$ligue->getNomLigue()?></td>
                <td><?=$ligue->getDescriptifLigue()?></td>

                <td>
                    <?php $clubs = $ligue->getClubs(); ?>

                    <?php if ($clubs != null) : ?>
                        <?php foreach ($clubs as $club) : ?>
                            <a>- <?=$club->getNomClub() ?></a><br>
                        <?php endforeach ?>
                    <?php else: ?>
                        <a>Aucun</a>
                    <?php endif;?>
                </td>

                <td><a href="<?=$ligue->getSiteLigue()?>"><?=$ligue->getSiteLigue()?></a> </td>
            </tr>
        <?php endforeach ?>
    <?php else: ?>
        <div class="error">Aucune ligue n'a été trouvée.</div>
    <?php endif;?>
    </tbody>

</table>
```

### Controller

```php
<?php
require_once ('views/View.php');

class ControllerLigues
{

    private $_liguesManager;
    private $_view;

    public function __construct($url)
    {
        if(isset($url) && count( array($url) ) > 1){
            throw new Exception("Page introuvable");
        }else {
            $this->ligues();
        }
    }

    private function ligues(){
        $this->_liguesManager = new LigueManager();
        $ligues = $this->_liguesManager->getLigues();
        $this->_view = new View('Ligues');
        $this->_view->generate(Array('ligues' => $ligues));
    }

}
```

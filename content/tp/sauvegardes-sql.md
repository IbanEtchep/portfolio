---
title: Sauvegardes d'une base de données
description: TP de sauvegarde d'une base de données mysql.
slug: sauvegardes-sql
---

## Introduction

Ce TP nous a appris à faire des *sauvegardes automatiques* d'une base de données mariadb ou mysql en *local* et sur un serveur *distant*.   

Le TP consiste à planifier l'exécution d'un script shell à l'intervalle voulu. Ce script créer un 
dump de la base de données dans le répertoire local /var/backups, le compresse, puis l'envoi au serveur distant avec 
le protocole de transfert sécurisé SCP.


## Procédure

### Prérequis
Installer le packet sshpass qui permet de lancer une commande qui nécessite la saisie d'un mot de 
passe en indiquant le mot de passe directement dans la commande.
```shell
apt install sshpass
```

### Création du script

Création et ouverture du script.
```shell
nano /usr/bin/sauvegarde-bdd.sh
```
```shell
#!/bin/bash

######################################################################
# Nom: Sauvegarde de la base de données joomla.                      #
# Auteur: Iban                                                       #
# Email: iban.etchepareborde@gmail.com                               #
# Version: 1.0                                                       #
######################################################################

DB_NAME="joomladb"
DB_USER="utilisateur"
DB_PASS="MDP"

SSH_HOST="IP serveur distant"
SSH_USER="Utilisateur SSH"
SSH_PASS="MDP SSH"

#Dossiers qui vont contenir les backups.
LOCAL_PATH="/var/backups/sauvegardes_bdd_local/"
REMOTE_PATH="/var/backups/sauvegardes_bdd_remote/"

CURRENT_DATE=$(date +"%Y%m%d") 
DUMP_NAME=${DB_NAME}-${CURRENT_DATE}.sql
COMPRESSED_DUMP_NAME=${DUMP_NAME}.tar.gz

#Création du dump
mysqldump -u $DB_USER -p{$DB_PASS} --databases ${DB_NAME} > ${LOCAL_PATH}/${DUMP_NAME}

#Compression du dump
tar zcvf ${COMPRESSED_DUMP_NAME} ${LOCAL_PATH}

#Envoi du fichier au serveur distant.
sshpass -p ${SSH_PASS} scp ${LOCAL_PATH}${COMPRESSED_DUMP_NAME} ${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}
```

### Planification de l'exécution du script

Pour cela, nous avons utilisé le celebre outil *cron* déjà disponible
dans la plupart des systèmes linux.

```cron
#commande d'édition des tâches cron.
crontab -e
```

Voici comment on crée une tâche cron.
```shell
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  *  user command to be executed
```

Pour faire une sauvegarde tous les jours à 5h du matin, 
la tâche à ajouter serait donc :
```shell
00 05 * * * /usr/bin/sauvegarde-bdd.sh
```


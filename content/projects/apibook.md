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

## Technologies utilisées

- Frameword PHP Symfony (Doctrine, twig..)
- PostgresSQL
- Bootstrap
- JQuery
- Axios (pour l'ajax)

## Mode projet

Pour réaliser ce projet, on faisait un compte rendu à chaque étape du projet
avec mon tuteur de stage, mais sans vraiment définir de durée pour la réalisation
des étapes.

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

Utilisation de l'api adresse.data.gouv.fr pour récupérer les coordonnées GPS des villes des apiculteurs afin d'afficher
les points sur les cartes.
```php
<?php

namespace App\Service;

use App\Entity\Address;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class LocationFinder
{

    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getLocation($city): ?array
    {
        $url = 'https://api-adresse.data.gouv.fr/search/?q=' . $city . '&type=municipality&autocomplete=0';
        try {
            $response = $this->client->request(
                'GET',
                $url
            );
            $content = $response->toArray();
            if (count($content['features']) > 0) {
                $cityFeature = $content['features'][0];
                $coords = $cityFeature['geometry']['coordinates'];
                $cityCode = $cityFeature['properties']['citycode'];
                return [
                    'latitude' => $coords[1],
                    'longitude' => $coords[0],
                    'cityCode' => $cityCode
                ];
            }
        } catch (TransportExceptionInterface $e) {
        }

        return null;
    }

    public function fillAddressGeoInfo(Address $address)
    {
        $cityCoords = $this->getLocation($address->getCity());
        if ($cityCoords !== null) {
            $address->setCityLatitude($cityCoords['latitude']);
            $address->setCityLongitude($cityCoords['longitude']);
            $address->setCityCode($cityCoords['cityCode']);
        }
    }
}
```

```php
    /**
     * Dashboard général
     * @Route ("/dashboard", name="app_home")
     */
    public function index(Request $request, EntityManagerInterface $entityManager, LocationFinder $locationFinder): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $addApiaryForm = $this->createForm(ApiaryType::class);
        $addApiaryForm->handleRequest($request);
        if ($addApiaryForm->isSubmitted() && $addApiaryForm->isValid()) {
            /** @var Apiary $apiary */
            $apiary = $addApiaryForm->getData();
            $apiary->setOwner($user);
            $apiary->setHornetPressureLevel(0);
            $address = $apiary->getAddress();
            $locationFinder->fillAddressGeoInfo($address);
            $entityManager->persist($apiary);
            $entityManager->flush();
            return $this->redirectToRoute('app_apiary_view', [
                'id' => $apiary->getId()
            ]);
        }

        $tasks = $entityManager->getRepository(Task::class)->findToDo($user);
        $followUps = $entityManager->getRepository(FollowUp::class)->findByUser($user);
        $apiaries = $entityManager->getRepository(Apiary::class)->findBy([
            'archived' => false,
            'owner' => $user
        ]);

        return $this->render('home/index.html.twig', [
            'apiaries' => $apiaries,
            'addApiaryForm' => $addApiaryForm->createView(),
            'tasks' => $tasks,
            'followUps' => $followUps,
        ]);
    }
```

Edition du niveau d'une floraison en AJAX.

```php
/**
 * Editer une floraison
 * @Route ("/flowering/editlevel/{id}/{newLevel}", name="app_flowering_edit")
 */
public function editLevel(Flowering $flowering, int $newLevel)
{
    $entityManager = $this->entityManager;
    /** @var User $user */
    $user = $this->getUser();
    if (!$user || $flowering->getApiary()->getOwner() !== $user) {
        return $this->json([
            'message' => 'Unauthorized'
        ], 403);
    }

    if ($newLevel !== $flowering->getFloweringLevel()) {
        $floweringLog = $entityManager->getRepository(FloweringLog::class)->findByDate(new \DateTime('NOW'), $flowering);

        if ($floweringLog === null) {
            $floweringLog = new FloweringLog();
            $flowering->addChangeLog($floweringLog);
        }

        $floweringLog
            ->setLevel($flowering->getFloweringLevel())
            ->setDateFrom($flowering->getFloweringUpdatedAt());
        $flowering->setFloweringUpdatedAt(new \DateTime());
        $flowering->setFloweringLevel($newLevel);
        $entityManager->flush();
    }

    return $this->json(['level' => $newLevel]);
}
```

````html
{% for i in 1..5 %}
    {% if i <= flowering.floweringLevel %}
        <a class="js-star" href="{{ path('app_flowering_edit', {id: flowering.id, newLevel: i }) }}">
          <i class="fas fa-star fa-xs""></i>
        </a>
    {% else %}
        <a class="js-star" href="{{ path('app_flowering_edit', {id: flowering.id, newLevel: i }) }}">
          <i class="far fa-star fa-xs"></i>
        </a>
    {% endif %}
{% endfor %}
````

```javascript
document.querySelectorAll('a.js-star').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const url = this.href;
    const parent = this.parentElement

    axios.post(url).then(function (response) {
      const newLevel = response.data.level
      for (let i = 0; i < parent.children.length; i++) {
        let child = parent.children[i].firstElementChild;
        if (i + 1 <= newLevel) {
          if (child.classList.contains('far')) {
            child.classList.replace('far', 'fas')
          }
        } else if (child.classList.contains('fas')) {
            child.classList.replace('fas', 'far')
        }
      }
    })
  })
})
```

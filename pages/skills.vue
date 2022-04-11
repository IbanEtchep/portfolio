<template>
  <section class="skills">
    <h1 class="text-center">Compétences BTS</h1>

    <p class="text-center">Cette page recense les compétences que j'ai acquis durant mes 2 années de BTS SIO. </p>

    <div class="skills">

      <Skill v-for="(skill, i) in skills" :skill="skill" :key="i"/>

    </div>

  </section>
</template>

<script>
export default {
  name: "skills.vue",
  data() {
    return {
      skills: [
        {
          title: 'Gérer le patrimoine informatique',
          subSkills: [
            '▸ Recenser et identifier les ressources numériques',
            '▸ Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
            '▸ Mettre en place et vérifier les niveaux d’habilitation associés à un service',
            '▸ Vérifier les conditions de la continuité d’un service informatique',
            '▸ Vérifier le respect des règles d’utilisation des ressources numériques',
            '▸ Recenser et identifier les ressources numériques',
            '▸ Gérer des sauvegardes'
          ],
        },
        {
          title: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
          subSkills: [
            '▸Collecter, suivre et orienter des demandes',
            '▸Traiter des demandes concernant les services réseau et système, applicatifs',
            '▸Traiter des demandes concernant les applications',
          ],
        },
        {
          title: 'Développer la présence en ligne de l’organisation',
          subSkills: [
            '▸Collecter, suivre et orienter des demandes',
            '▸Traiter des demandes concernant les services réseau et système, applicatifs',
            '▸Traiter des demandes concernant les applications',
          ],
        },
        {
          title: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
          subSkills: [
            '▸Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du\n cadre juridique et des enjeux économiques',
            '▸Référencer les services en ligne de l’organisation et mesurer leur visibilité.',
            '▸Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
          ],
        },
        {
          title: 'Travailler en mode projet',
          subSkills: [
            '▸Analyser les objectifs et les modalités d’organisation d’un projet',
            '▸Planifier les activités',
            '▸Évaluer les indicateurs de suivi d’un projet et analyser les écarts',
          ],
        },
        {
          title: 'Mettre à disposition des utilisateurs un service informatique',
          subSkills: [
            '▸Réaliser les tests d’intégration et d’acceptation d’un service',
            '▸Déployer un service',
            '▸Accompagner les utilisateurs dans la mise en place d’un service',
          ],
        },
        {
          title: 'Organiser son développement professionnel',
          subSkills: [
            '▸Mettre en place son environnement d’apprentissage personnel',
            '▸Mettre en œuvre des outils et stratégies de veille informationnelle',
            '▸Gérer son identité professionnelle',
            '▸Développer son projet professionnel'
          ],
        },
      ],
    }
  }
}

</script>

<style lang="scss">

.skill {
  margin-top: 3rem;

  li {
    margin-top: 0.5rem;
  }
}

//.sub-skills {
//  display: none;
//}

</style>

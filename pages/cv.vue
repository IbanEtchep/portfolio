<template>

  <section id="curriculum">
    <h1 class="text-center">Curriculum vitæ</h1>

    //TODO Bouton de téléchargement pdf

    <section>
      <h2>Formation</h2>

      <ul>
        <li>2015-2018 : Baccalauréat scientifique - Lycée Bernat Etxepare - Bayonne</li>
        <li>2018-2020 : Biologie - Université de Bordeaux</li>
        <li>2020-Aujourd'hui : BTS SIO Option SLAM - Lycée Louis de Foix – Bayonne</li>
      </ul>
    </section>

    <section>
      <h2>Expériences professionnelles</h2>

      <ul>
        <li>2020 : Emploi saisonnier à la Ville d'Anglet (service espaces verts)</li>
        <li>2021 : Stage de 5 semaines dans l'entreprise <a href="https://bab-radiokom.fr/" target="_blank">BAB-Radiokom</a> (création de leur site web)</li>
        <li>2022 : Stage de 7 semaines à <a href="https://medialeads.fr/" target="_blank">Medialeads</a> </li>
        <li>Avril 2021 - Aujourd'hui : Auto-entreprise</li>
      </ul>
    </section>

    <section>
      <h2>Compétences</h2>

      <div class="languages">
        <h3>Langues</h3>

        <ul>
          <li>Basque - Niveau C2 (Certification EGA)</li>
          <li>Français - Niveau Baccalauréat</li>
          <li>Anglais - B2</li>
          <li>Espagnol : A2</li>
        </ul>
      </div>

      <div class="informatique">
        <h3>Langues</h3>
      </div>

    </section>
  </section>

</template>

<script>
export default {
  name: "cv",
  head() {
    return {
      title: "Curriculum vitæ"
    };
  },
}
</script>

<style lang="scss">
#curriculum {
  section {
    margin-top: 3rem;
  }

  li {
    margin-top: 0.5rem;
  }
}
</style>

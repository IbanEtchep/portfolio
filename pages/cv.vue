<template>

  <section id="curriculum">
    <h1 class="text-center">Curriculum vitæ</h1>

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

      <div class="flex">

        <div class="w-50">
          <h3>Informatique</h3>

          <ul>
            <li>Java</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS - SCSS</li>
            <li>JavaScript</li>
            <li>VueJS</li>
            <li>NuxtJS</li>
            <li>Python</li>
            <li>Symfony</li>
            <li>Android</li>
            <li>SQL</li>
            <li>Redis</li>
            <li>Administration systèmes Linux</li>
          </ul>
        </div>

        <div class="w-50">
          <h3>Langues</h3>

          <ul>
            <li>Basque - Niveau C2 (Certification EGA)</li>
            <li>Français - Niveau Baccalauréat</li>
            <li>Anglais - B2</li>
            <li>Espagnol : A2</li>
          </ul>
        </div>
      </div>

    </section>

    <div class="center-button-wrapper">
      <a href="/documents/CV.pdf" target="_blank">
        <div class="button">
          Ouvrir en pdf
        </div>
      </a>
    </div>
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

    svg {
      height: 16px;
    }
  }

  section > div {
    margin-bottom: 1.5rem;
  }

  .w-50 {
    display: inline-block;
    align-items: center;
    width: 50%;
    margin: 0;
  }

  .flex {
    display: flex;
  }
}
</style>

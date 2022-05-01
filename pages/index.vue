<template>
  <div>
    <header id="about-header" class="wrapper">

      <h1 class="text-center">Bonjour, je suis <span class="colored">Iban</span>.<br>
        Un étudiant en <span class="colored">développement</span>.
      </h1>
      <p class="text-center">Je suis actuellement en 2ème année de BTS SIO option SLAM à Bayonne.</p>

    </header>

    <section id="about">
      <h2 class="text-center">A propos de moi</h2>
      <p>Je m'appelle Iban, j'ai 22 ans et je suis Basque.</p>
      <p>
        Je suis passionné par l'informatique depuis que
        j'ai commencé à apprendre le language JAVA pour créer des plugins sur le jeu Minecraft
        quand j'étais au Lycée. J'ai dans la même période été emmené à apprendre les bases de pour
        créer un site web (HTML-CSS-PHP-SQL) et l'administration système pour héberger mon serveur minecraft,
        mariadb et apache sur un serveur dédié sous Debian.
      </p>

      <p>Mais l'informatique n'est pas mon seul centre d'intérêt, il y a aussi la pelote basque, les randonnées à la montagne et le surf et j'ai un intérêt particulier pour la biologie.</p>

    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss">

#about-header {
  background-color: var(--bg-secondary);
  margin: 5rem 0;
  box-shadow: none;

  .colored {
    color: var(--text-color-terciary);
  }

  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
    color: var(--text-color-secondary);
  }
}

#about {

  h2 {
    font-size: 2rem;
  }
}

</style>

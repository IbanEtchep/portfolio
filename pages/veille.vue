<template>

  <div>
    <h1 class="text-center">Veille technologique</h1>

    <p class="text-center">J'organises ma veille technologique à l'aide de différents outils.</p>

    <div class="wrapper">
      <h2>Feedly</h2>
      <p>Feedly est une application mobile qui permet de suivre des sources RSS. Je consultes régulièrement l'application quand je ne suis pas chez moi et que je dois attendre quelque chose.</p>
      <img :src="require(`~/assets/ressources/feedly.png`)" />

      <h2 class="mt-1rem">Réseaux sociaux</h2>
      <p>Les réseaux sociaux me permettent également d'entretenir une veille technologique. Notamment discord, dans lequel je suis sur plusieurs serveurs où les gens débattent ou s'entraident sur les différentes technologies, ou encore Twitter ou bien Youtube dans lequel je suis abonné à des créateurs de contenu comme Underscore_, Benjamin Code, Fireship...</p>
      <img :src="require(`~/assets/ressources/fireship.png`)" />
    </div>
  </div>

</template>

<script>
export default {
  name: "veille"
}
</script>

<style lang="scss">
.mt-1rem {
  margin-top: 1rem;
}
</style>

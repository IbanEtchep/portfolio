<template>
  <section>
    <h1 class="text-center">Compétences BTS</h1>

    <p class="text-center">Cette page recense les compétences que j'ai acquis durant mes 2 années de BTS SIO. </p>

    <div class="skills">

      <Skill v-for="(skill, i) in skills" :skill="skill" :key="i"/>

    </div>

    <div class="center-button-wrapper">
      <a href="/documents/TableauSynthese.pdf" target="_blank">
        <div class="button">
          Accéder au tableau
        </div>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  name: "skills.vue",
  head() {
    return {
      title: "Compétences BTS"
    };
  },
  async asyncData({$content, params}) {
    return await $content('skills').only(['skills']).fetch();
  },
}

</script>

<style lang="scss">

.skills {
  margin-top: 4rem;

  button {
    margin-top: 1rem;
  }
}

.center .button {
  margin-left: auto;
  margin-right: auto;
}

.skill {
  margin-top: 3rem;

  li {
    margin-top: 0.5rem;
  }
}

</style>

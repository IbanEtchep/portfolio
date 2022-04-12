<template>
  <section>
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
  head() {
    return {
      title: "Compétences BTS"
    };
  },
  async asyncData({$content, params}) {
    const skills = await $content('skills').only(['skills']).fetch()
    console.log(skills)

    return skills;
  },
}

</script>

<style lang="scss">

.skills {
  margin-top: 4rem;
}

.skill {
  margin-top: 3rem;

  li {
    margin-top: 0.5rem;
  }
}

</style>

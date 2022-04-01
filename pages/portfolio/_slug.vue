<template>
  <div>
    <article>
      <nuxt-content :document="article" />
      
      <h2>Projects associés</h2>
    </article>
    <div>
      <nuxt-link to=""></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params}) {
    const article = await $content('projects', params.slug).fetch();

    return  { article }
  }
}
</script>

<style scoped>
</style>

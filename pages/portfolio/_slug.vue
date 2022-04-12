<template>
  <div>
    <article>
      <nuxt-content :document="article" />
    </article>
    <div class="other-projects">
        <h2>Projets associés</h2>
      <nuxt-link to=""></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title
    };
  },
  async asyncData ({ $content, params}) {
    const article = await $content('projects', params.slug).fetch();

    return  { article }
  }
}
</script>

<style lang="scss">
    .other-projects {
        margin-top: 3rem;

        h2 {
           font-size: 2em;
        }
    }
</style>

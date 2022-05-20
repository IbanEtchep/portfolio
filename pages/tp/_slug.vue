<template>
  <div>
    <article>
      <div class="article-title">
        <h1>{{ article.title }}</h1>
        <span class="period">{{ article.period }}</span>
      </div>

      <nuxt-content :document="article"/>
    </article>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title
    };
  },
  async asyncData({$content, params}) {
    const article = await $content('tp', params.slug).fetch();
    return {article}
  },
}
</script>

<style lang="scss">
.other-projects, .related-skills {
  margin-top: 3rem;
}

.article-title {
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0.5rem;
  }

  .period {
    color: var(--text-color-secondary);
    font-style: italic;
    font-size: 1em;
  }
}

</style>

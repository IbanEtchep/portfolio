<template>
  <div>
    <article>
      <div class="article-title">
        <h1>{{ article.title }}</h1>
        <span class="period">{{ article.period }}</span>
      </div>

      <Slider></Slider>

      <nuxt-content :document="article"/>
    </article>
    <div class="other-projects">
      <h2>Projets associés</h2>
      <nuxt-link to=""></nuxt-link>
    </div>

    <div v-if="relatedSkills.length !== 0" class="related-skills">
      <h2>Compétences associés</h2>
      <ul>
        <li v-for="relatedSkill in relatedSkills">{{ relatedSkill.title }}</li>
      </ul>
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
  async asyncData({$content, params}) {
    const article = await $content('projects', params.slug).fetch();
    const skills = await $content('skills').only(['skills']).fetch()
    const relatedSkills = []

    for (let i = 0; i < skills.skills.length; i++) {
      let skill = skills.skills[i]
      if (skill.projects !== undefined) {
        skill.projects.forEach(project => {
          if (project === article.slug) {
            relatedSkills.push(skill)
          }
        })
      }
    }

    return {article, relatedSkills}
  }
}
</script>

<style lang="scss">
.other-projects, .related-skills {
  margin-top: 3rem;

  h2 {
    font-size: 2em;
  }
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

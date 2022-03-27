<template>
  <div>
    <h2>Les projets</h2>

    <div class="articles">
      <div class="article" v-for="article of articles" :key="article.slug">
        <nuxt-link :to="'/portfolio/' + article.slug">
          <div class="project-wrapper">
            <img :src="require(`~/assets/ressources/${article.img}`)" alt="thumb du projet">
            <div class="details">
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('projects', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {articles};
  }
}
</script>

<style lang="scss">

.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .article {
    width: 30%;
  }
}

@media (max-width: 1024px) {
  .articles .article {
    width: 49%;
  }
}

@media (max-width: 640px) {
  .articles .article {
    width: 100%;
  }
}

.project-wrapper {
  background-color: var(--bg-primary);
  border-radius: 10px;
  width: 100%;
  margin: 1rem 0;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;

  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: auto;
  }

  h3 {
    text-align: center;
  }

  .details {
    padding: 2rem;
  }
}

.project-wrapper:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0px 2px 4px rgb(46 41 51 / 8%), 0px 5px 10px rgb(71 63 79 / 16%);;
}

</style>

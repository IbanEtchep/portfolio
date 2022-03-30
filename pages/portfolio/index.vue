<template>
  <div>
    <h1 class="text-center">Les projets</h1>

    <div class="project-filter">
      <div class="search-wrapper">
              <span class="filter-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.95 487.95"
                   style="enable-background:new 0 0 487.95 487.95" xml:space="preserve"><path d="m481.8 453-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"/></svg>
      </span>
        <input class="filter-item" type="search" aria-label="rechercher">
      </div>
      <span class="filter-item">Categories</span>
    </div>

    <div class="projects">
      <div class="project" v-for="article of articles" :key="article.slug">
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

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .project {
    width: 30%;
  }
}

@media (max-width: 1024px) {
  .projects .project {
    width: 49%;
  }
}

@media (max-width: 640px) {
  .projects .project {
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

.project-filter {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 4rem 0 1rem;

  input {
    border: 0;
    color: var(--text-color-primary);
    font-size: 1.125rem;

    ::-webkit-search-cancel-button {
      color: white;
    }
  }
}

.filter-item {
  background-color: var(--bg-primary);
  display: block;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;

  svg {
    fill: var(--text-color-primary);
    height: 100%;
    width: auto;
  }
}

.search-wrapper {
  display: flex;
  gap: 0.5rem;
}

</style>

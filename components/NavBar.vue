<template>
  <header>
    <div class="wrapper">

      <div class="logo">
        <span>Iban</span> <span>Etchepareborde</span>
      </div>

      <nav :class="isOpen ? 'block' : 'hidden-mobile'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <nuxt-link to="/about">A propos</nuxt-link>
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>

      <theme-switcher/>

      <div class="burger">
        <button v-on:click="isOpen = !isOpen" type="button" aria-label="Menu toggle">
          <svg viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss">

header {
  background-color: var(--bg-primary);
  padding: 3rem 0;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: center;
    width: 60%;
  }

  a {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.25rem;
    color: var(--text-color-primary);
  }

}

.burger {
  display: none;
  margin-left: 1rem;
}

.hidden-mobile {
  display: block;
}

.logo {
  font-size: 1.5rem;
  font-weight: bolder;

  span {
    display: inline-block;
  }

  span:first-letter {
    display: block;
    color: var(--text-color-terciary);
  }
}

@media (max-width: 640px) {
  header {
    align-items: center;
    padding: 1.5rem 0;

    .wrapper {
      margin: 0;
      display: flex;

      .theme-switcher {
        align-self: center;
        justify-self: center;
      }
    }
  }

  .burger {
    display: block;

    button {
      display: block;
      color: var(--text-color-primary);

      svg {
        fill: var(--text-color-primary);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  nav {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .hidden-mobile {
    display: none;
  }
}

.nuxt-link-exact-active {
  color: var(--text-color-terciary);

}
</style>

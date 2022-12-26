<template>
  <footer>
    <div class="wrapper">
      © Iban Etchepareborde 2022
      <div class="link-icon">
        <a href="https://github.com/IbanEtchep" target="_blank">
          <span class="visually-hidden">Visitez mon github !</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </a>
      </div>

      <div class="link-icon">
        <a href="https://www.linkedin.com/in/iban-etchepareborde-277118224/" target="_blank">
          <span class="visually-hidden">Visitez mon linkedin !</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512">
            <path d="M192 192h88.553v45.391h1.266c12.32-22.097 42.479-45.391 87.421-45.391 93.473 0 110.76 58.188 110.76 133.867v154.133h-92.305v-136.639c0-32.592-0.667-74.513-48.014-74.513-48.074 0-55.41 35.493-55.41 72.146v139.006h-92.271v-288z"/>
            <path d="M32 192h96v288h-96v-288z"/>
            <path d="M128 112c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style lang="scss">
footer {
  background-color: var(--bg-primary);
  padding: 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 115px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link-icon {
    margin-left: 1rem;
    svg {
      color: var(--text-color-primary);
    }

    svg:hover {
      color: var(--text-link-color);
    }
  }

}
</style>

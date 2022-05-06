<template>


  <div class="wrapper">
    <h1 class="text-center">Me contacter</h1>
    <p class="text-center">Vous pouvez me contacter par les moyens suivants :</p>
    <div class="contact-wrapper">

      <div class="contact-element">
        <svg class="contact-icon" viewBox="0 0 32 32">
          <path
            d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z"></path>
        </svg>
        <span class="contact-text">iban.etchepareborde@gmail.com</span>
      </div>

      <div class="contact-element">
        <svg class="contact-icon" viewBox="0 0 32 32">
          <path
            d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
        </svg>
        <span class="contact-text">07 81 65 39 24</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "contact",
  head() {
    return {
      title: "Contact"
    };
  },
}
</script>

<style lang="scss">

.contact-wrapper {
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
}

.contact-element {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  svg {
    fill: var(--text-color-primary);
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }
}

.contact-text {
  font-size: 1.25rem;
  color: var(--text-color-primary);
}

</style>

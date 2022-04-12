<template>
  <div>
    <NavBar/>

    <main>
      <div class="wrapper">
        <Nuxt/>
      </div>
    </main>

    <Footer/>

  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss">

main .wrapper {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

</style>

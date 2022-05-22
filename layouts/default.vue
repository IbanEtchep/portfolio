<template>
  <div>
    <NavBar/>

    <main>
      <div class="wrapper">
        <Transition name="fade" mode="out-in">
          <Nuxt/>
        </Transition>
      </div>
    </main>

    <Footer/>

    <BackToTop />

  </div>
</template>

<script>
export default {
  name: "default",
}
</script>

<style lang="scss">

main .wrapper {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.4s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

</style>

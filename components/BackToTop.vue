<template>
  <!-- Scroll to top -->
  <transition name="fade">
    <div class="scrollToTopButton" v-show="isScrolled" @click="backToTop">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userScrollPosition: 0,
    };
  },
  computed: {
    isScrolled() {
      return this.userScrollPosition > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollPosition);
  },
  updated() {
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollPosition);
  },
  methods: {
    updateScrollPosition() {
      this.userScrollPosition = window.scrollY;
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollToTopButton {
  display: block;
  z-index: 50;
  right: 0;
  bottom: 0;
  position: fixed;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 0 2rem 2rem 0;
  transition: 0.3s;
  background-color: var(--text-color-terciary);
  color: #ffffff;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    margin: 0 1rem 1rem 0;
  }
}
</style>

<template>
  <div class="swiper">

    <div class="swiper-wrapper">
      <div v-for="(image, i) in images" :key="i" class="swiper-slide">
        <div class="slider-content">
          <img :src="image.pathLong">
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>

<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  props: [
    'folder'
  ],
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.importAll(require.context('~/assets/ressources/', true, /\.png$/));

    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      observer: true,
      observeParents: true,
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // Configure other options. Not tested
    })
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => {
        if(key.includes('./'+this.folder+'/'))
        this.images.push({ pathLong: r(key), pathShort: key })
      });
    },
  },
}
</script>

<style scoped>
.swiper {
  height: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>

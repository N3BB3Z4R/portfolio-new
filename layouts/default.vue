<template>
  <div class="centered">
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'>

      <Header />
      <MainText />
      <Navbar />
      <transition name="nuxt" mode="out-in">
        <Nuxt />
      </transition>
      <!-- <Gallery :images="front" />
      <Gallery :images="cgi" />
      <Gallery :images="video" /> -->
      <a class="top" href="#" >&#8593;</a>
      <Footer />
      
    </div>
  </div>
</template>

<script>
import { IMAGES_3D, IMAGES_VIDEOVFX, IMAGES_FRONTEND } from '../constants/images.js'
export default {
  data() {
    return { front: IMAGES_FRONTEND, cgi: IMAGES_3D, video: IMAGES_VIDEOVFX }
  }
}
</script>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  /* margin: 0px; */
}

.centered {
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  /* min-height: 100vh; */
}

</style>

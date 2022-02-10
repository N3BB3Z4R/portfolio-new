<template>
  <div class="centered">
    <Header />
    
    <!-- <transition name="nuxt" mode="out-in">
      <Nuxt />
    </transition> -->
    <!-- <Swiper /> :images="IMAGES3D" -->
    <MainText />
    <!-- <a href="#" class="top">Back to Top &#8593;</a> -->
    <Footer />    
  </div>
</template>

<script>
import IMAGES3D from '../constants/images'
export default {
  props: {
    images: Array,
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
  min-height: 100vh;
}

</style>

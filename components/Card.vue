<template>
    <div class="images-container">
        <div class="image-card" v-for="image in IMAGES" :key="image.title">
          <div class="image-container">
          <img :src="image.path" />
          <h3>{{ image.title }}</h3>
          <h4>{{ image.category }}</h4>
          </div>
        </div>
    </div>
</template>

<script>
import IMAGES from '~/constants/images.js'
export default {
  data() {
      return {
          IMAGES,
      };
  }
}
</script>

<style>
.images-container {
  display: flex;
  flex-flow: row wrap;
}
.image-card {
  flex: 1 1 33%;
  transition: 300ms;
  cursor: pointer;
  transform: scale(1);
}

.image-card:hover {
  box-shadow: 4px 4px 10px black;
  transform: scale(1.05);
  z-index: 5;
}

.image-card:not(:hover) {
  box-shadow: 0 0 0 black;
  z-index: auto;
}

.image-container {
  position: relative;
}

.image-card h3 {
  position: absolute;
  top: 0;
  left: 20px;
  text-shadow: 2px 2px 0 #000;
}

.image-card h4 {
    position: absolute;
    top: 250px;
    right: 20px;
}
.image-card img {
  width: 100%;
  object-fit: cover;
}
</style>
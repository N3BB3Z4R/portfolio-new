<template>
    <div class="images-container">
        <div class="image-card" v-for="image in images" :key="image.title">
          <a v-bind:href="image.path" target="_self">
            <div class="image-container">
              <img :src="image.path" />
              <h3>{{ image.title }}</h3>
              <p>{{ image.desc }}</p>
              <h4>{{ image.category }}</h4>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    images: Array,
  }
}
</script>

<style>
.images-container {
  display: flex;
  flex-flow: row wrap;
  height: auto;
  padding: 0;
  margin: 0;
  max-width: 1100px;
  /* filter: invert(1); */
}

.image-card {
  margin: 1rem 0;
  flex: 1 1 33%;
  transition: 500ms;
  cursor: pointer;
  transform: scale(1);
  box-shadow: 0px 0px 0px black;
}
.image-card a,
.image-card * {
  color: rgba(255, 255, 255, 0);
  /* text-shadow: 2px 2px 3px #000; */
  transition: 300ms ease-in-out;
  font-size: 1.1em;
  text-align: center;
  bottom: 0;

  font-weight: 600;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}
  .image-card:hover {
    /* box-shadow: 0px 0px 20px black; */
    z-index: 5;
  }
  .image-card:hover img {
    transform: scale(1.05);
  }

.image-container {
  position:relative;
  transition: 300ms ease-in-out;
}
  .image-container:hover h4 {
    display: block;
  }
  .image-container:not(:hover) {
    z-index: auto;
    box-shadow: 0px 0px 0px black;
    transition: 700ms ease-in-out;
  }

.image-container h3 {
  /* text-shadow: 2px 2px 3px #000; */
  position:absolute;
  top: 20%;
  left: 10%;
  font-size: 20px;
  font-size: 0.90rem;
  transform: scale(1);
  text-transform: uppercase;
}
  /* h3::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(0);
    transition: 300ms ease-in-out;
  } */
  .image-container:hover h3 {
    color: var(--alter3);
    /* font-weight: 700; */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    -webkit-text-stroke: 1px var(--alter);
    font-weight: bold;
    transform: scale(1.25);
    left: 6%;
    z-index:80;
    transition: all 300ms ease-in-out;
    /* font-size: 22px;
    font-size: 1.6vw; */
  }

.image-container h4 {
    position: absolute;
    font-size: 18px;
    font-size: 0.8rem;
    top: 80%;
    right: 10%;
    display: hidden;
    transition: 500ms;
}
  .image-container:hover h4 {
    color: var(--primary);
    text-shadow: 2px 2px 3px #000;
    bottom: 5px;
    letter-spacing: 0.20rem;
  }

.image-container p {
  position: absolute;
  top: -10%;
  left: 10%;
  font-size: 14px;
  float:left;
  width: 80%;
  z-index: 70;
}

.image-container img {
  width: 100%;
  object-fit: cover;
  
  position: relative;
  overflow: hidden;
  /* width: 100%; */
  background-image: inherit;
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
  filter: grayscale(60%);
  transform: scale(0.9);
  border-radius: 10px;
  transition: 200ms ease-in-out;
}
  .image-container:hover img {
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
    background-size:contain;
    /* border-radius: 10%; */
    transform: rotate3d(0, 10, 1, 20deg);
    filter: grayscale(0%);
    box-shadow: 30px 30px 10px hsla(0, 0%, 0%, 0.5);
  }



</style>
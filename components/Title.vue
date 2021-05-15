<template>
  <NuxtLink class="linkhome" to="/">
    <div>
      <h1 class="title">
        OSCAR ABAD
        <!-- <div class="neon">
          <span class="text" data-text="Oscar Abad">Oscar Abad</span>
          <span class="gradient"></span>
          <span class="spotlight"></span>
        </div> -->
      </h1>
      <h2 class="subtitle">I'm Audiovisual Generalist Creative Artist.</h2>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@700&display=swap');
  h1 {
    text-shadow: 0px 0px 70px var(--secondary);
    font-weight: 900;
    margin-bottom: 30px;
    margin-top: 50px;
  }

  h2 {
    text-shadow: 0 0 20px white;
  }

  .linkhome {
    text-decoration: none;
  }
  .linkhome:hover h1, 
  .linkhome:hover h2 {
    /* transform: scale(0.97); */
    transition: 100ms;
    font-weight: 800;
    text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
  }
  .linkhome:not(:hover) h1,
  .linkhome:not(:hover) h2 {
    transform: scale(1);
    transition: 100ms;
    animation: flashing 10s ease-in-out infinite;
  }

.title {
  color: var(--secondary);
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Oswald,
    Arial,
    sans-serif;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  /* font-family: 'Signika', sans-serif; */
  display: block;
  font-weight: 500;
  font-size: 125px;
  color: var(--primary);
  letter-spacing: 13px;
  margin-top: 60px;
}
.title::before {
  height: 20px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: var(--white);
  word-spacing: 5px;
  padding-bottom: 15px;
}

/* .neon {
    position: relative;
    overflow: hidden;
    filter: brightness(200%);
}

.text {
    background-color: black;
    color: white;
    font-size: 180px;
    font-weight: bold;
    font-family: sans-serif;
    text-transform: uppercase;
    position: relative;
    user-select: none;
}

.text::before {
    content: attr(data-text);
    position: absolute;
    color: white;
    filter: blur(0.02em);
    mix-blend-mode: difference;
}

.gradient {
    position: absolute;
    background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode:overlay;
}

.spotlight {
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(
            circle,
            white,
            transparent 25%
        ) center / 25% 25%,
        radial-gradient(
            circle,
            white,
            black 25%
        ) center / 12.5% 12.5%;
    animation: light 5s linear infinite;
    mix-blend-mode: color-dodge;
}

@keyframes light {
    to {
        transform: translate(50%, 50%);
    }
} */
  
</style>

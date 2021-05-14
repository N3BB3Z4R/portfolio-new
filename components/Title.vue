<template>
  <NuxtLink class="linkhome" to="/">
    <div>    
      <h1 class="title">Oscar 'Nebe' Abad</h1>
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
  h1 {
    text-shadow: 0px 0px 70px var(--secondary);
    animation: flashing 10s ease-in-out infinite;
    font-family: 'Oswald', sans-serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Goblin+One&family=Oswald:wght@200;400&display=swap');

  h2 {
    text-shadow: 0 0 20px white;
  }

  .linkhome {
    text-decoration: none;
    
  }
  .linkhome:hover h1, 
  .linkhome:hover h2 {
    transform: scale(0.95);
    transition: 200ms;
  }
  .linkhome:not(:hover) h1,
  .linkhome:not(:hover) h2 {
    transform: scale(1);
    transition: 800ms;
  }

  @keyframes flashing {
    0% {
      filter: blur(0px);
    }
    5% {
      filter: blur(4px);
    }
    12% {
      filter: blur(3px);
    }
    15% {
      filter: blur(1px);
    }
    18% {
      filter: blur(4px);
    }
    20% {
      filter: blur(2px);
    }
    30% {
      filter: blur(1px);
    }
    100% {
      filter: blur(0px);
    }
  }
  
</style>

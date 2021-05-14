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
    text-shadow: 0px 70px 60px var(--secondary);
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
  
</style>

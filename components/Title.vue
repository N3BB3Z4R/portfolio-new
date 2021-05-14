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
    font-family: 'Vollkorn', serif;
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
    transform: scale(0.97);
    transition: 200ms;
    animation: flashing 10s ease-in-out infinite;
  }
  .linkhome:not(:hover) h1,
  .linkhome:not(:hover) h2 {
    transform: scale(1);
    transition: 800ms;
  }


  
</style>

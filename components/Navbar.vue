<template>
  <nav id="gallery" class="navbar is-transparent is-fixed-top">
    <ul>
      <li><NuxtLink class-active="active" to="/frontend">FRONT-END</NuxtLink></li>
      <li><NuxtLink class-active="active" to="/videovfx">VIDEO & VFX</NuxtLink></li>
      <li><NuxtLink class-active="active" to="/3ddesign">3D DESIGN</NuxtLink></li>
      <!-- <li><NuxtLink class-active="active" to="/contact">CONTACT</NuxtLink></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nuxt-link-active {
  background-color: var(--alterA);
  backdrop-filter: blur(2px);
  color: white;
  font-weight: 900;
  text-shadow: 0 0 5px var(--secondary);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}
li {
  display: inline-flex;
  margin: 0 15px;
}
a {
  display: inline-block;
  border-radius: 6px;
  margin: 20px 10px;
  padding: 10px 20px;
  width: 100%;
  color: var(--primary);
  text-decoration: none;
  border: 1px solid var(--primary);
  letter-spacing: 0.3rem;
  transition: 300ms;
  /* font-family: 'Fjalla One', sans-serif; */
  font-weight: 100;
}
a:hover {
  color: var(--alter);
  background-color: var(--primary);
  letter-spacing: 0.23rem;
  animation: pulse 1.5s ease-in-out infinite;
  font-weight: 800;
  border-radius: 2px;
  transition: all 200ms ease-in-out;
}
a:not(:hover) {
  animation: release 1.2s;
}

</style>

<template>
  <nav id="nav" class="navbar is-transparent is-fixed-top">
    <ul>
      <li><NuxtLink class-active="active" to="/videovfx">VIDEO & VFX</NuxtLink></li>
      <li><NuxtLink class-active="active" to="/3ddesign">3D DESIGN</NuxtLink></li>
      <li><NuxtLink class-active="active" to="/frontend">FRONT-END</NuxtLink></li>
      <li><NuxtLink class-active="active" to="/contact">CONTACT</NuxtLink></li>
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
  background-color: var(--alter);
  color: white;
  text-shadow: 0 0 5px var(--secondary);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
}
a {
  display: inline-block;
  border-radius: 6px;
  margin: 20px 6px;
  padding: 10px 10px;
  width: 100%;
  color: var(--primary);
  text-decoration: none;
  border: 1px solid var(--primary);
  letter-spacing: 0.3rem;
  transition: 500ms;
  font-family: 'Fjalla One', sans-serif;
  font-weight: 100;
}
a:hover {
  color: white;
  background-color: var(--primary);
  letter-spacing: 0.5rem;
  padding: 10px 10px;
  animation: pulse 1.5s infinite;
  font-weight: 600;
  border-radius: 2px;
}
a:not(:hover) {
  animation: release 1s;
}
@keyframes pulse {
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 var(--secondary);
	}

	70% {
		transform: scale(1.1);
		box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
@keyframes release {
	0% {
		box-shadow: 0 0 0 0 var(--secondary);
    transform: scale(1.1);
	}

	70% {
		box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

</style>

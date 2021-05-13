<template>
  <nav>
    <ul>
      <li><a href="">VIDEO PROD</a></li>
      <li><a href="">3D DESIGN</a></li>
      <li><a href="">FRONT END</a></li>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  display: inline-block;
  border-radius: 6px;
  margin: 20px 0px;
  padding: 10px 30px;
  width: 100%;
  color: var(--primary);
  text-decoration: none;
  border: 1px solid var(--primary);
  letter-spacing: 0.6rem;
  transition: 500ms;
  font-weight: normal;
}
a:hover {
  color: white;
  background-color: var(--primary);
  letter-spacing: 1rem;
  padding: 10px 10px;
  animation: pulse 2s infinite;
  font-weight: 600;
}
a:not(:hover) {
  animation: release 1s;
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--secondary);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
@keyframes release {
	0% {
		box-shadow: 0 0 0 0 var(--secondary);
	}

	70% {
		box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

</style>

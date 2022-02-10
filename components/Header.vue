<template>
  <div id="header">
    <Title />
    
    <Social />
    <a class="more" href="#maintext">more</a>
    <!-- <Navbar /> -->
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 0vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
h3 {
  margin: 40px 0 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--primary);
}

</style>

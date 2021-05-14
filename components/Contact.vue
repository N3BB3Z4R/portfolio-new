<template>
  <div class="contact">
    <h2>CONTACT ME</h2>
    <input type="text" />
    <input type="text" />
    <textarea type="text" />
    <a class="button" href="#">Send</a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  margin: 0 auto;
  padding: 30px 0;
  width: 50%;
  border-top: 0px solid var(--secondary);
}
.contact input, .contact textarea {
  width: 100%;
  border-radius: 8px;
  padding: 6px;
  margin:20px 0 0 0;
  border: 1px solid var(--primary);
  background-color: var(--secondary);
}
.contact input:hover, .contact textarea:hover {
  box-shadow: 0 0 10px var(--secondary);
  transition: 100ms;
}
.contact input:not(:hover), .contact textarea:not(:hover) {
  transition: 800ms;
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
  margin: 0 10px;
}
a {
  color: var(--primary);
}
</style>

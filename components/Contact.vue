<template>
  <div class="contact">
    <h2>SAY HELLO!</h2>
    <p>Hi! Don't hesitase to contact me to hire me for your company or any project what you want, ask me any question related. I'll answer you A.S.A.P.</p>
    <input type="text" />
    <input type="text" />
    <textarea type="text" />
    <a class="button" href="#">SEND</a>
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

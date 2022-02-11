<template>
  <div class="footer">
    <!-- <Logo /> -->
    <h4>{{ msg }}</h4>
    <h5>Made with ❤️ by
      <a
        href="https://nebe.bio.link"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        Óscar 'Nebe' Abad
      </a>
      © 2022</h5>
    <!-- <div class="links">
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.footer {
  margin: 20px auto;
  padding: 0px auto;
  padding-bottom: 40px;
  /* border-top: 1px solid var(--gray); */
  color: var(--gray);
}
h4 {
  margin: 10px auto;
}
h5 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-weight: 200;
  font-size: 1rem;
  color: var(--primary);
  cursor: default;
  /* color: var(--secondary); */
}
a {
  color: var(--primary);
  text-decoration:none;
  border-bottom:  1px dotted;
  padding: 0.1rem 0;
  transition: 60ms;
}
a:hover {
  font-weight: 500;
  transition: 60ms;
}
</style>

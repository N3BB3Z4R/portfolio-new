<template>
  <div class="footer">
    <Logo />
    <h4>{{ msg }}</h4>
    <h5>Made with ❤️ in Vue & NuXT and handcrafted CSS © 2021</h5>
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
  margin: 100px auto;
  padding: 0px auto;
  /* border-top: 1px solid var(--gray); */
  color: var(--gray);
}
h4 {
  margin: 10px auto;
}
h5 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-weight: 200;
  font-size: 14px;
  color: var(--secondary);
}
a {
  color: var(--primary);
}
</style>

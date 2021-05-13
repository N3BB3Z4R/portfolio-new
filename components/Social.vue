<template>
  <div class="social-icons">
      <!-- <a href=""></a> -->
      <a href=""><i class="fab fa-github" alt="Github"></i></a>
      <a href=""><i class="fab fa-youtube" alt="Github"></i></a>
      <a href=""><i class="fab fa-artstation" alt="Github"></i></a>
      <a href=""><i class="fab fa-instagram" alt="Github"></i></a>
      <a href=""><i class="fab fa-twitter" alt="Github"></i></a>
      <a href=""><i class="fab fa-500px" alt="Github"></i></a>
      <a href=""><i class="fab fa-twitch" alt="Github"></i></a>
      <a href=""><i class="fab fa-vimeo" alt="Github"></i></a>
      <a href=""><i class="fab fa-behance" alt="Github"></i></a>
      <a href=""><i class="fab fa-facebook" alt="Github"></i></a>
      <a href=""><i class="fab fa-soundcloud" alt="Github"></i></a>
      <a href=""><i class="fab fa-linkedin" alt="Github"></i></a>
      <a href=""><i class="fab fa-imdb" alt="Github"></i></a>
  </div>
</template>

<script>
export default {
  name: 'Social',
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
  .social-icons {
    width: 100%;
  }
  i {
    color: var(--gray);
    width: 51px;
    height: 60px;
    transform: scale(1);
    transition: 200ms;
    font-size: 30px;
  }
  i:not(:hover) {
    transition: 900ms;
  }
  i:hover {
    color: var(--secondary);
    transform: scale(1.2);
  }
</style>
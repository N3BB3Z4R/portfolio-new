<template>
  <div class="social-icons">
      <!-- <a href=""></a> -->
      <a href="https://github.com/N3BB3Z4R" target="_blank" alt="Github"><i class="fab fa-github"></i></a>
      <a href="https://www.youtube.com/c/OscarNebeAbad" target="_blank" alt="Youtube"><i class="fab fa-youtube"></i></a>
      <a href="https://www.artstation.com/nebe" target="_blank" alt="Artstation"><i class="fab fa-artstation"></i></a>
      <a href="https://www.instagram.com/oscarnebeabad/" target="_blank" alt="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://twitter.com/OscarNebeAbad" target="_blank" alt="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://500px.com/p/n3bb3z4r" target="_blank" alt="500px"><i class="fab fa-500px"></i></a>
      <a href="https://www.twitch.tv/nebegameplays" target="_blank" alt="Twitch"><i class="fab fa-twitch"></i></a>
      <a href="https://vimeo.com/nebeworks" target="_blank" alt="Vimeo"><i class="fab fa-vimeo"></i></a>
      <a href="https://www.behance.net/NebeDesign" target="_blank" alt="Behance"><i class="fab fa-behance"></i></a>
      <a href="https://www.facebook.com/NebeGetsDone" target="_blank" alt="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="https://soundcloud.com/realnebe" target="_blank" alt="SoundCloud"><i class="fab fa-soundcloud"></i></a>
      <a href="https://www.linkedin.com/in/oscar-nebe-abad/" target="_blank" alt="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.imdb.com/name/nm5643050/" target="_blank" alt="iMDB"><i class="fab fa-imdb"></i></a>
      <a href="https://opensea.io/accounts/n3bb3z4r" target="_blank" alt="iMDB"><i class="fas fa-anchor"></i></a>
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
    margin-top: 40px;
    vertical-align: middle;
  }
  i {
    color: var(--primary);
    width: 75px;
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
<template>
  <div class="main">
    <h2>{{ msg }}</h2>
    <p>
      I've been working in some of the design and audiovisual roles for 20 years.
      Always developing a career over the different departments of the
      media & entertainment creation industry.
    </p>
    <p>
      Always trying to understand all the parts
      of the media production process. I started with photo editing,
      2D design and 3D design, through front-end web dev and UI/UX for some years.
      After that I become to do photography, and then switch to cameraman
      and videoeditor/compositor for TV and films, doing often some vfxs
      and foley audio production, also doing 3d animation and simulations,
      and in my spare time I produce music. I like video-game asset creation,
      video-game and film screenplay writting and game mechanics.
    </p>
    <p>
      Always is a good moment to learn something.
      I've been working for big and small media companies,
      traveling around the world filming and photographing,
      but also doing in-house work like front-end developing,
      3D and 2D design, video production filming and editing,
      lifestyle and product photography and branding media
      for companies like Mediaset, TVE, CEU, AECID, AECC,
      Amanita Films, Pearson, McGrawHill, Universia or UNED,
      as well as other small freelance works.
      <a href="https://www.linkedin.com/in/oscar-nebe-abad/" target="_blank" rel="noopener">Check my LinkedIn</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 30px 0;
  border-top: 0px solid var(--secondary);
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
p {
  margin: 10px auto;
  width: 50%;
}
</style>

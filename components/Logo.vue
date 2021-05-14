<template>
  <NuxtLink class="linkhome" to="/">
    <img class="Logo" src="./../assets/nebe.png" alt="Nebe Logo">
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String,
  }
}
</script>

<style>
.Logo, .Logo:visited {
  z-index: -1;
  margin: 0px auto;
  margin-top: 10px;
  /* position:absolute; */
  width: 300px;
  transition: 500ms;
  animation: shake 12s ease-in-out infinite;
}
.Logo:hover {
  animation: shake 2s ease-in-out infinite;
}
</style>

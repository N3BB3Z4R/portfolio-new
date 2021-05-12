<template>
  <img class="Logo" src="https://www.nebeworks.com/user/themes/hola/images/logo/logo.png" alt="">
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
.Logo {
  animation: 1s appear;
  margin: 0px auto;
  width: 400px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

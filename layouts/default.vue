<template>
  <div class="centered">
    <Header />
    <transition name="nuxt" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  /* margin: 0px; */
}

.centered {
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}


</style>

<template>
  <div>
    <div>
      <!-- <Header /> -->
      <Container class="container" msg="ABOUT ME"/>
      <!-- <Contact /> -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

.container {
  animation: fade 0.4s ease-in-out;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 75px;
  color: var(--primary);
  letter-spacing: 1px;
  margin-top: 40px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: var(--white);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

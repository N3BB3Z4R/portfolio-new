<template>
  <div class="centered">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #024737;
  color: #024737;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #008528;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.centered {
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}


</style>

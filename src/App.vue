<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="container animate__animated animate__fadeIn animate__slow" >
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  position: relative;
}
html{
  background-image: url('@/assets/background/wave_background (1).svg') ;
  -webkit-background-size: 100% 800%;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% 800%;
  scroll-behavior: smooth; ///плавная прокрутка по ссылке по стр
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  width: 1140px;
  margin: auto;
}
</style>

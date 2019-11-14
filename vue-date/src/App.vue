<template>
  <div id="app">
    <div id="nav">
      <About/>
      <home/>
    </div>
    
  </div>
</template>
<script>
import About from './views/About'
import Home from './views/Home'
export default {
  components:{
    About,
    Home
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

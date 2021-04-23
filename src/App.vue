<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>
  <script>
import 'bootstrap/dist/css/bootstrap.min.css'  
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavMenu/NavBar'
export default {
  name:'App',
  components:{
        NavBar
      }
    }  
    </script>
<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%
}
body{
  height: 100%;
}

i{
  cursor:pointer
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
canvas{
  width: 100%;
  height: 100%;
}

</style>

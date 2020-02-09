<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      age: 20,
      data: ''
    }
  },
  mounted() {
    let url = 'https://www.imooc.com/common/adver-getadver'
    // axios.get(url, val => {
    //   console.log(val)
    // })
    jsonp(url, (err, res) => {
      let result = res
      this.data = result
      console.log(result)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>Hi, my name is Dino Perovic.</h1>
    <p>I'm a Full-Stack Web Developer.</p>
    <p><a href="mailto:dino.perovic@gmail.com">dino.perovic@gmail.com</a></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
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
  margin-top: 50vh;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>

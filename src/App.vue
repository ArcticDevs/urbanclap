<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('http://fonts.cdnfonts.com/css/axiforma');
#app {
  font-family: 'Axiforma',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container{
  max-width:1400px !important;
}
</style>

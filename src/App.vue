<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}



</script>

<template>
  <div class="wrapper">
    
    <NavBar/>

    <RouterView />
  </div>
</template>

<style scoped>

.wrapper {
  /* display: grid;
  height: 100vh;
  width: 100wv; */

}



</style>

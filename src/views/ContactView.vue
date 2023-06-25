<template>
  <!-- <NavBar/> -->
  <div class="about">
    <h1>This is a contact page</h1>
  </div>
</template>

<script>
// import NavBar from '../components/NavBar.vue';
export default {
  name: 'ContactView',
  components: {
    // NavBar
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

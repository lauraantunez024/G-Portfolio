<template>
  <div>
      <AboutMe/>
      <ServicesList/>

      <MyTestimonials/>

  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import MyTestimonials from '../components/MyTestimonials.vue';
import ServicesList from '../components/ServicesList.vue';

  export default {
    components: {
    AboutMe,
    MyTestimonials,
    ServicesList
}
  }
</script>

<style scoped>


</style>
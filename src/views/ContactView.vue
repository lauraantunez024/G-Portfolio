<template>
  <div class="contact">
    <h1>Yo whats up give grace all your money she rocks</h1>
    <ContactForm/>

  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
export default {
  name: 'ContactView',
  components: {
    ContactForm
  
  }
}

</script>

<style scoped>
h1 {
  margin-top: 5vh;
  margin-bottom: 2vh;
}

</style>

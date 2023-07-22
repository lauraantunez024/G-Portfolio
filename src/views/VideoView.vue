<template>
    <div>
       <BackgroundCarousel>
        <template #default>
            <h1> this is a video page</h1>
        </template>
       </BackgroundCarousel>


    </div>
</template>

<script>
import BackgroundCarousel from '../components/BackgroundCarousel.vue';
    export default {
        name: 'VideoView',
        components: {
            BackgroundCarousel
        }
        
    }
</script>

<style scoped>

</style>
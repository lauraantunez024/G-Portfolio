<template>
    <div class="caroussel-container" height="100%">
       <slot/> 
    </div>
</template>

<script>
export default {

    name: 'BackgroundCarousel',
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
}
</script>

<style scoped>
.caroussel-container {
    position: relative;
    width: 100%;
}
</style>
<template>
    <div class="container">
        <div class="content" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">

            <h1> {{ title }}</h1>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'TransitionSlide',
        props: ['title']
    }
</script>

<style scoped>
.container {
    display: grid;
    height: 100vh;
    grid-template-rows: repeat(5, 20%);
    background-color: gainsboro;
}

h1 {
    text-align: center;
    margin: auto;
    font-size: 10rem;
}
.content {
    width: 100vw;
    display: grid;
    grid-row-start: 3;

}



</style>
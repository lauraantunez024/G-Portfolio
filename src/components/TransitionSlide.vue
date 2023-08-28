<template>
    <div class="container">
        <div class="content">

            <h1 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000"> {{ splitTitle.firstHalf }}</h1> <h1 data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000"> {{ splitTitle.secondHalf }}</h1> 
                

        </div>

    </div>
</template>

<script>
    export default {
        name: 'TransitionSlide',
        props: ['title'],
        computed: {
            splitTitle() {
                const words = this.title.split(' ');
                const middleIndex = Math.floor(words.length / 2);
                const firstHalf = words.slice(0, middleIndex).join(' ');
                const secondHalf = words.slice(middleIndex).join(' ');

                return {
                    firstHalf, secondHalf
                }
            }
        }
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
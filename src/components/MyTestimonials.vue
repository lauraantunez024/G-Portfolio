<template>
    <div class="container">
        <h1 id="main-header"> Testimonials!</h1>
        <button class="btn-prev btn" @click="changeCard('prev')">Prev</button>

        <div class="testimonial-container">
            <div class="testimonial-content">
                <p> {{ testimonialContent }} </p>
            </div>
            <img src="https://picsum.photos/200" alt="testimonial headshot">
            <div class="testimonial-footer">
                <h1 id="name">Alfred Rolfe</h1>
                <p>Long-time intern</p>
             </div>
        </div>
        <button class="btn-next btn" @click="changeCard('next')">next</button>

    </div>
</template>

<script>
    export default {
            name: 'MyTestimonials',
            data() {
                return {
                    testimonialContent: 'Id volutpat lacus laoreet non curabitur gravida arcu ac. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. At in tellus integer feugiat scelerisque varius morbi. A diam maecenas sed enim. Sit amet est placerat in egestas erat imperdiet. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. In aliquam sem fringilla ut. Odio ut sem nulla pharetra. Mauris cursus mattis molestie a iaculis at erat. Interdum velit euismod in pellentesque massa. Gravida arcu ac tortor dignissim convallis. Etiam erat velit scelerisque in dictum non consectetur a. Facilisi morbi tempus iaculis urna. In nulla posuere sollicitudin aliquam ultrices. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Facilisis volutpat est velit egestas dui. '
                }
            }
        
    }
</script>

<style scoped>

.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 10% 10% 20% 10% 10% 20% ;
    grid-template-rows: repeat(4, 20%) 10% 10%;
    background-color: bisque;
}

#main-header {
    margin: auto;
    grid-column-start: 4;
    font-size: 4rem;
}
img {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    border-radius: 50%;
    justify-self: center;
    max-height: 100%;
}
.testimonial-container {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 6;
    border-radius: 5%;
    border: 2px black solid;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 10% 50% 25% 15%;
    max-width: 100%;
    max-height: 100%;
    background-color: white;
}

.testimonial-content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}

p {
    text-align: center;
}

.testimonial-footer {
    grid-row-start: 4;
    grid-column-start: 2;
    grid-column-end: 3;
}

.btn-prev {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 40%;
    width: 75%;
    justify-self: right;
    margin-top: 50%;
}
.btn-next {
    grid-column-start: 7;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 40%;
    width: 75%;
    justify-self: left;
    margin-top: 50%;
}

#name {
    text-align: center;
}
</style>
<template>
    <div class="container">
        <!-- <h1 id="main-header"> Testimonials!</h1> -->
        <button class="btn-prev btn" @click="changeCard('prev')">Prev</button>

        <div class="testimonial-container">
            <div class="testimonial-content">
                <p> {{ currentTestimonial }} </p>
            </div>
            <img :src="currentImage" alt="testimonial headshot">
            <div class="testimonial-footer">
                <h1 id="name"> {{ currentName }}</h1>
                <p> {{ currentTitle }}</p>
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
                    testimonials: [
                        {
                            name: 'Alfred Rolfe',
                            coverPhoto: "http://placekitten.com/300/300",
                            title: 'Long time coworker',
                            testimonialContent: 'Id volutpat lacus laoreet non curabitur gravida arcu ac. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. At in tellus integer feugiat scelerisque varius morbi. A diam maecenas sed enim. Sit amet est placerat in egestas erat imperdiet. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. In aliquam sem fringilla ut. Odio ut sem nulla pharetra. Mauris cursus mattis molestie a iaculis at erat. Interdum velit euismod in pellentesque massa. Gravida arcu ac tortor dignissim convallis. Etiam erat velit scelerisque in dictum non consectetur a. Facilisi morbi tempus iaculis urna. In nulla posuere sollicitudin aliquam ultrices. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Facilisis volutpat est velit egestas dui.'
                        },
                        {
                            name: 'Korra Rolfe',
                            coverPhoto: "http://placekitten.com/g/300/300",
                            title: 'Questionable manager',
                            testimonialContent: "Risus ultricies tristique nulla aliquet. Sit amet massa vitae tortor condimentum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Et ligula ullamcorper malesuada proin libero nunc. Dui faucibus in ornare quam. Non odio euismod lacinia at quis risus. Eget nunc scelerisque viverra mauris in aliquam sem. Convallis convallis tellus id interdum velit laoreet id donec. Sed id semper risus in hendrerit gravida rutrum quisque non. Eget mi proin sed libero enim sed faucibus turpis in. Enim ut sem viverra aliquet eget sit amet tellus cras. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae congue mauris rhoncus aenean vel elit. Tincidunt ornare massa eget egestas purus. Amet est placerat in egestas erat imperdiet sed."
                        }
                    ],
                    currentSlideIndex: 0
                }
            },
            methods: {
                changeCard(action) {
                    if (action ==='prev') {
                        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length
                    } else if (action === 'next') {
                        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length
                    }
                }
            },
            computed: {
                currentName() {
                    return this.testimonials[this.currentSlideIndex].name
                },
                currentTitle() {
                    return this.testimonials[this.currentSlideIndex].title
                },
                currentImage() {
                    return this.testimonials[this.currentSlideIndex].coverPhoto
                },
                currentTestimonial() {
                    return this.testimonials[this.currentSlideIndex].testimonialContent
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
    grid-template-rows: 10% 15% 25% 25% 15% 10%;
    background-color: rgb(238, 234, 234);
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

.btn {
    border-radius: 3%;
    font-size: 2rem;
}
#name {
    text-align: center;
}
</style>
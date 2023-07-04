<template>
    <div class="caroussel-container" height="100%">
        <button class="btn-prev btn" @click="changeVideo('prev')">prev</button>
        <!-- <transition-group name="slide-fade"> -->
            <div class="video-container" ref="scrollContainer" :style="currentBackground">
                <span><img :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                <iframe width="1500" height="800" :src="currentVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <!-- <video width='1500' :src='currentVideo' ref=videoPlayer controls> </video> -->
                <div class="caption">
                    <h2> {{ currentTitle }}</h2>
                    <p> {{ currentDescription }}</p>
                </div>
            </div>
        <!-- </transition-group> -->
        <button class="btn-next btn" @click="changeVideo('next')">next</button>
    </div>
</template>

<script>
import cowboy from '../assets/Cowboy_Bebop.svg.png'
import spencer from '../assets/Spencer_(film)_Logo.png'
import sweetThing from '../assets/sweet_thing_temp.png'
export default {

    name: 'BackgroundCarousel',
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    data() {
        return {
            videos: [
                {
                    title: "Cowboy Bebop ft. Kaylan | AUG Media Production Club Podcast Ep. 2",
                    description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                    path: 'https://www.youtube.com/embed/Ay1J_ht3iEc',
                    style: {
                        backgroundColor: '#3430A8',
                        color: '#CFCF39',
                    },
                    titleImage: cowboy,
                    titleImageStyle: {
                        left: '29%',
                        backgroundColor: 'rgba(155, 31, 31, 1)',
                    }
                },
                {
                    title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
                    description: "Grace and Sarah discuss Princess Diana's life and Kristen Stewart's portrayal of the late royal in Spencer (2021).",
                    path: 'https://www.youtube.com/embed/B-PcelcFqRA',
                    style: {
                        backgroundColor: 'rgba(60, 24, 18)',
                        color: 'rgba(224, 184,  62)',
                    },
                    titleImage: sweetThing,
                    titleImageStyle: {
                        left: '36%'
                    }
                },
                {
                    title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: 'https://www.youtube.com/embed/JFBBSCHGFwg',
                    style: {
                        backgroundColor: '#4A5275',
                        color: '#FDF5AA',
                    },
                    titleImage: spencer,
                    titleImageStyle: {
                        left: '36%'
                    }
                }

            ],
            currentVideoIndex: 0
        }
    },
    methods: {
        changeVideo(action) {
            if (action === 'prev') {

                this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length
            } else if (action === 'next') {
             
                this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length
            }
            this.$refs.videoPlayer.currentTime = 0;
            this.$refs.videoPlayer.play()
        },




    },

    computed: {
        currentVideo() {
            return this.videos[this.currentVideoIndex].path;
        },
        currentBackground() {
            return this.videos[this.currentVideoIndex].style;
        },
        currentTitle() {
            return this.videos[this.currentVideoIndex].title;
        },
        currentDescription() {
            return this.videos[this.currentVideoIndex].description;
        },
        currentTitleImage() {
            return this.videos[this.currentVideoIndex].titleImage;
        },
        currentTitleImageStyle() {
            return this.videos[this.currentVideoIndex].titleImageStyle;
        }

    }
}
</script>

<style scoped>
.caroussel-container {
    position: relative;
    width: 100%;

}

.video-container {
    position: relative;
    top: 169px;
    width: 100vw;
    margin: auto;
    height: 100vh;
}

iframe {
    position: relative;
    left: 25%;
    top: 5%;

}

.btn-prev {
    position: absolute;
    left: 10%;
    z-index: 100;
}

.btn-next {
    position: absolute;
    right: 10%;
}

.btn {
    font-size: 3rem;
    top: 60%;
    border-radius: 12px;
    padding: 15px;
}


.btn-next:hover {
    background-color: black;
    color: red;
}
img {
    height: 20%;
    display: block;
    top: 3%;
    position: relative;
}
.btn-prev:hover {
    background-color: black;
    color: red;
}



.caption {
    text-align: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    left: 25.5%;
    top: 83%;
    max-width: 1500px;
}

h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 2.5rem;
    display: block;
}

p {
    padding-bottom: 10px;
    z-index: 100;

    font-size: 1.75rem;
    
}

/* 
.slide-fade-enter-active {
    transition: all .5s linear;
}

.slide-fade-leave-action {
    transition: all .5s linear;
}

.slide-fade-enter-form {
    transform: translate(v-bind(appear));
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(v-bind(leave));
    opacity: 0;
} */
</style>
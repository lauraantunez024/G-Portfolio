<template>
    <div>
        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->
        <h1> Podcasts </h1>

        <BackgroundCarousel>
            <template #default> 
                <button class="btn-prev btn" @click.prevent="changeSlide('prev')">prev</button>
                <div class="video-container" ref="scrollContainer" :style="currentBackground">
                    <span><img :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                    <img class="thumbnail" src="../assets/podcast-thumbnail.png" alt="thumbnail">
                    <audio controls>
                        <source :src="currentAudio" type="audio/mpeg">
                        Your browser not cool enough for this audio file :(
                    </audio>
                    <div class="caption" :style="currentCaptionStyle">
                        <h2 :style="currentHeaderStyle"> {{ currentTitle }}</h2>
                        <p :style="currentPStyle"> {{ currentDescription }}</p>
                    </div>
                </div>
                <button class="btn-next btn" @click.prevent="changeSlide('next')">next</button>
            </template>
        </BackgroundCarousel>

    </div>
</template>

<script>
import cowboy from '../assets/Cowboy_Bebop.svg.png'
import spencer from '../assets/Spencer_(film)_Logo.png'
import sweetThing from '../assets/sweet_thing_temp.png'
import '../assets/sass/style.scss'
import BackgroundCarousel from '../components/BackgroundCarousel.vue';
import cowboyAudio from '../assets/cowboy-bebop-podcast.mp3'
import sweetThingAudio from '../assets/sweet-thing-audio.mp3'
import spencerAudio from '../assets/spencer-audio.mp3'
export default {
    name: 'AudioView',
    components: { 
        BackgroundCarousel
    },
    data() {
        return {
            podcasts: [
                {
                    title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
                    description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                    path: cowboyAudio,
                    style: {
                        backgroundColor: '#3430A8',
                        color: '#CFCF39',
                    },
                    titleImage: cowboy,
                    titleImageStyle: {
                        left: '29%',
                        backgroundColor: 'rgba(155, 31, 31, 1)',
                    },
                    captionStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        left: '24.5%',
                        top: '82%',
                        maxWidth: '53%'
                    },
                    headerStyle: {
                        left: '25%',
                        fontSize: '2.75rem',
                        maxWidth: '2000px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        fontFamily: 'Cheltenham Condensed',

                    },
                    pStyle: {
                        font: '2rem',
                        marginTop: '10px',
                        padding: '5px',
                        maxWidth: '1500px',
                    }
                },
                {
                    title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: sweetThingAudio,
                    style: {
                        backgroundColor: 'rgba(60, 24, 18)',
                        color: 'rgba(224, 184,  62)',
                    },
                    titleImage: sweetThing,
                    titleImageStyle: {
                        left: '42%',
                        height: '22%'

                    },
                    captionStyle: {
                        top: '82%',
                        left: '25%',
                        backgroundColor: 'rgba(82, 104, 46, 0.6)',
                        maxWidth: '1500px'

                    },
                    headerStyle: {
                        fontFamily: 'Morgen'

                    },
                    pStyle: { 

                    }
                },
                {
                    title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: spencerAudio,
                    style: {
                        backgroundColor: '#4A5275',
                        color: '#FDF5AA',
                    },
                    titleImage: spencer,
                    titleImageStyle: {
                        left: '38%'
                    },
                    headerStyle: {
                        fontFamily: 'Aviano Flare',
                        left: '13%',
                        height: '15%'


                    },
                    captionStyle: {
                        left: '25%',
                        maxWidth: '1500px',
                        top: '82%'
                    },
                    pStyle: {

                    }
                }
            ],
            currentSlideIndex: 0

        }
    },
   
    computed: {
        currentAudio() {
            return this.podcasts[this.currentSlideIndex].path;
        },
        currentBackground() {
            return this.podcasts[this.currentSlideIndex].style;
        },
        currentTitle() {
            return this.podcasts[this.currentSlideIndex].title;
        },
        currentDescription() {
            return this.podcasts[this.currentSlideIndex].description;
        },
        currentTitleImage() {
            return this.podcasts[this.currentSlideIndex].titleImage;
        },
        currentTitleImageStyle() {
            return this.podcasts[this.currentSlideIndex].titleImageStyle;
        },
        currentHeaderStyle() {
            return this.podcasts[this.currentSlideIndex].headerStyle
        },
        currentPStyle() {
            return this.podcasts[this.currentSlideIndex].pStyle
        },
        currentCaptionStyle() {
            return this.podcasts[this.currentSlideIndex].captionStyle
        }

    },
    methods: {
        changeSlide(action) {
            if (action === 'prev') {
                this.currentSlideIndex = (this.currentSlideIndex - 1 + this.podcasts.length) % this.podcasts.length
            } else if (action === 'next') {
       
                this.currentSlideIndex = (this.currentSlideIndex + 1) % this.podcasts.length
            }
        },
    },
    

}
</script>

<style scoped>
.video-container {
    position: relative;
    top: 169px;
    width: 100vw;
    margin: auto;
    height: 100vh;
}

audio {
    position: absolute;
    left: 26%;
    bottom: 20%;
    width: 50%;
    color: red;   
}

audio::-webkit-media-controls-play-button,
     audio::-webkit-media-controls-panel {
     background-color:rgb(155, 31, 31);
     color: #000;
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

img.thumbnail {
    height: 50%;
    left: 33%;
    padding: 20px;
    margin: 10px;
    position: absolute;
    top: 24%;
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
    padding: 15px;


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


</style>
<template>
   
    <div class="container">
        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->
        <button  v-if="currentData[currentSlideIndex].type !== 'Podcasts' " class="nav-button" id="podcast" @click="chooseData('podcast')">
                    Check out the Podcasts
                </button>
     
                <button v-if="currentData[currentSlideIndex].type !== 'Soundscapes'" class="nav-button" id="soundscape" @click="chooseData('soundscape')">
                    Enter the Soundscapes
                </button>

        <div>
            <BackgroundCarousel>
                <template #default>
                    <h1> {{ currentType }} </h1>
                    <button class="btn-prev btn" @click="changeVideo('prev')">⬅️</button>
                    <div class="video-container" ref="scrollContainer" :style="currentBackground">
                        <span><img :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                        <img v-if="currentData[currentSlideIndex].type === 'Podcasts'" class="thumbnail" src="../assets/podcast-thumbnail.png" alt="thumbnail">
                        <img v-else-if="currentData[currentSlideIndex].type === 'Soundscapes'" class="thumbnail" src="../assets/cover-to-cover.png" alt="thumbnail" style="left:30%">
                        <audio :src="currentAudio" type="audio/mpeg" controls>
                            Your browser not cool enough for this audio file :(
                        </audio>
                        <div class="caption" :style="currentCaptionStyle">
                            <h2 :style="currentHeaderStyle"> {{ currentTitle }}</h2>
                            <p :style="currentPStyle"> {{ currentDescription }}</p>
                        </div>
                    </div>
                    <button class="btn-next btn" @click="changeVideo('next')">➡️</button>
                </template>
            </BackgroundCarousel>
        </div>

    </div>
</template>

<script>
import cowboy from '../assets/Cowboy_Bebop.svg.png'
import spencer from '../assets/Spencer_(film)_Logo.png'
import sweetThing from '../assets/sweet_thing_temp.png'
import '../assets/sass/style.scss'
import BackgroundCarousel from '../components/BackgroundCarousel.vue'
import cowboyAudio from '../assets/cowboy-bebop-podcast.mp3'
import spencerAudio from '../assets/spencer-audio.mp3'
import sweetThingAudio from '../assets/sweet-thing-audio.mp3'
import ninaAudio from '../assets/nina-audio.mp3'
import timewarAudio from '../assets/timewar-audio.mp3'
import timeWarHeader from '../assets/time-war-header.jpeg'
import ninaHeader from '../assets/ninaLacour.png'

export default {
    name: 'AudioView',
    components: {
        BackgroundCarousel
    },
  
    data() {
        return {
            currentData: [
                {
                    title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
                    type: 'Podcasts',
                    description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                    path: cowboyAudio,
                    style: {
                        backgroundColor: '#3430A8',
                        color: '#CFCF39',
                    },
                    titleImage: cowboy,
                    titleImageStyle: {
                        left: '33%',
                        top: '6%',
                        height: '17%',
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
                    type: 'Podcasts',
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: sweetThingAudio,
                    style: {
                        backgroundColor: 'rgba(60, 24, 18)',
                        color: 'rgba(224, 184,  62)',
                    },
                    titleImage: sweetThing,
                    titleImageStyle: {
                        left: '40%',
                        height: '22%',
                        top: '5%'

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
                    type: 'Podcasts',
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
            return this.currentData[this.currentSlideIndex].path;
        },
        currentBackground() {
            return this.currentData[this.currentSlideIndex].style;
        },
        currentTitle() {
            return this.currentData[this.currentSlideIndex].title;
        },
        currentDescription() {
            return this.currentData[this.currentSlideIndex].description;
        },
        currentTitleImage() {
            return this.currentData[this.currentSlideIndex].titleImage;
        },
        currentTitleImageStyle() {
            return this.currentData[this.currentSlideIndex].titleImageStyle;
        },
        currentHeaderStyle() {
            return this.currentData[this.currentSlideIndex].headerStyle
        },
        currentPStyle() {
            return this.currentData[this.currentSlideIndex].pStyle
        },
        currentCaptionStyle() {
            return this.currentData[this.currentSlideIndex].captionStyle
        },
        currentType() {
            return this.currentData[this.currentSlideIndex].type
        }

    },
    methods: {
        changeVideo(action) {
            if (action === 'prev') {

                this.currentSlideIndex = (this.currentSlideIndex - 1 + this.currentData.length) % this.currentData.length
            } else if (action === 'next') {

                this.currentSlideIndex = (this.currentSlideIndex + 1) % this.currentData.length
            }
        },

        chooseData(data) {
            if (data === 'podcast') {
                this.currentData = [        
                    {  
                        title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
                        type: 'Podcasts',
                        description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                        path: cowboyAudio,
                        style: {
                            backgroundColor: '#3430A8',
                            color: '#CFCF39',
                        },
                        titleImage: cowboy,
                        titleImageStyle: {
                            left: '33%',
                            top: '6%',
                            height: '17%',
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
                        type: 'Podcasts',
                        description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                        path: sweetThingAudio,
                        style: {
                            backgroundColor: 'rgba(60, 24, 18)',
                            color: 'rgba(224, 184,  62)',
                        },
                        titleImage: sweetThing,
                        titleImageStyle: {
                            left: '42%',
                            height: '22%',
                            top: '5%'

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
                        type: 'Podcasts',
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
            window.scrollTo(0, document.body.scrollHeight);
            } else if (data === 'soundscape') {
                this.currentData = [
                {
                    title: "Cover to Cover Ep. 1 - We Are Okay by Nina LaCour",
                    type: 'Soundscapes',
                    description: "Cover to Cover is a soundscape podcast about books. This is a sample episode covering (hehe) We Are Okay by Nina LaCour.",
                    path: ninaAudio,

                    style: {
                        backgroundColor: 'rgba(91, 153, 166)',
                        color: 'rgba(0, 0, 0)'
                    },
                    titleImage: ninaHeader,
                    titleImageStyle: {
                        left: '36%',
                        top: '10%',
                        height: '10%'
                    },
                    headerStyle: {
                        fontFamily: 'Aviano Flare',
                        left: '13%',
                        
                        
                        
                    },
                    captionStyle: {
                        left: '25%',
                        backgroundColor: 'rgba(236, 178, 169, 0.8)',
                        maxWidth: '1500px',
                        top: '82%',


                    },
                    pStyle: {

                    }
                },
                {
                    title: "Cover to Cover Ep. 2 - This is How You Lose the Time War by Amal El-Mohtar and Max Gladstone",
                    type: 'Soundscapes',
                    description: "Cover to Cover is a soundscape podcast about books. This is a sample episode covering (hehe) This is How You Lose the Time War by Amal El-Mohtar and Max Gladstone.",
                    path: timewarAudio,

                    style: {
                        backgroundColor: 'rgba(183, 66, 61)',
                        color: 'white',
                    },
                    titleImage: timeWarHeader,
                    titleImageStyle: {
                        left: '40%',
                        top: '7%',
                        height: '17%',
                    },
                    headerStyle: {
                        fontFamily: 'Aviano Flare',
                        left: '13%',
                        height: '15%'


                    },
                    captionStyle: {
                        left: '25%',
                        maxWidth: '1500px',
                        top: '82%',
                        backgroundColor: 'rgba(60, 103, 170, 0.8)',



                    },
                    pStyle: {

                    }
                }


                ],
                window.scrollTo(0, document.body.scrollHeight);

            }
        }
        
    },




}
</script>

<style scoped>
.video-container {
    position: relative;
    top: 100px;
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

audio::-webkit-media-controls-panel {
    background-color: gray;
}

audio::-webkit-media-controls-timeline {
    background-color: #B1D4E0;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
}

.btn-prev {
    position: absolute;
    left: 15%;
    z-index: 100;
}

.btn-next {
    position: absolute;
    right: 15%;
}

img.thumbnail {
    height: 50%;
    left: 33%;
    padding: 20px;
    margin: 10px;
    position: absolute;
    top: 24%;
}

button {
    font-size: 4rem;
    top: 60%;
    border-radius: 12px;
    padding: 15px;
    display: inline-block;
    border: 0.1em solid #000000;
    margin: 0 0.2em 0.2em 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    background-color: #FFFFFF;
    text-align: center;
    transition: all 0.15s;
}

.btn {
    width: 200px;
}

.btn-next:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    border-color: #FFFFFF;
}

img {
    height: 20%;
    display: block;
    top: 3%;
    position: relative;
}

.btn-prev:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    border-color: #FFFFFF;
}

.nav-button {
    z-index: 150;
    background-color: white;
    font-size: 1.5rem;
    top: 240px;
    position: absolute;
    left: 46%; 
    padding: 15px;
    margin-bottom: 10px;
}

#soundscape:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    border-color: #FFFFFF;
}


#podcast:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    border-color: #FFFFFF;
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

h1 {
    text-align: right;
    margin-right: 5%;
    font-size: 5rem;
    top: 23px;
    position: relative;
}

p {
    padding-bottom: 10px;
    z-index: 100;

    font-size: 1.75rem;

}
</style>
<template>
   
    <div class="container">
        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->
        
        
        <BackgroundCarousel>
            <template #default>
                <div class="button-container">
                    <button  v-if="currentData[currentSlideIndex].type !== 'Podcasts' " class="nav-button" id="podcast" @click="chooseData('podcast')">
                                Check out the Podcasts
                            </button>
                 
                            <button v-if="currentData[currentSlideIndex].type !== 'Soundscapes'" class="nav-button" id="soundscape" @click="chooseData('soundscape')">
                                Enter the Soundscapes
                            </button>
                </div>
                    <h1> {{ currentType }} </h1>
                    <button class="btn-prev btn" @click="changeVideo('prev')">⬅️</button>
                    <div class="video-container" ref="scrollContainer" :style="currentBackground">
                        <span><img class='title-image' :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
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
                        margin: 'auto',
                        maxHeight: '17%',
                        backgroundColor: 'rgba(155, 31, 31, 1)',
                    },
                    captionStyle: {
                        // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        maxHeight: '25%',
                        marginTop: '15px'
                      
                    },
                    headerStyle: {
                        fontSize: '1.75rem',
                        maxHeight: '25%',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        fontFamily: 'Cheltenham Condensed',


                    },
                    pStyle: {
                        font: '1rem',
                        padding: '5px',
                        maxWidth: '100%',
                        borderLeft: '#CFCF39 3px solid'

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
                        margin: 'auto',
                        height: '22%',
                        

                    },
                    captionStyle: {
                  
                        // backgroundColor: 'rgba(82, 104, 46, 0.6)',

                    },
                    headerStyle: {
                        fontFamily: 'Morgen'

                    },
                    pStyle: {
                        borderLeft: 'rgba(224, 184,  62) 3px solid',
                        paddingLeft: '15px'



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
                        margin: 'auto',
                    },
                    headerStyle: {
                        fontFamily: 'Aviano Flare',
                        height: '15%'


                    },
                    captionStyle: {
                        maxHeight: '25%',
                        marginBottom: '10px'

                    },
                    pStyle: {
                        borderLeft: '#FDF5AA 3px solid',
                        paddingLeft: '25px'



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
                            margin: 'auto',
                        maxHeight: '15%',
                        backgroundColor: 'rgba(155, 31, 31, 1)',
                        },
                        captionStyle: {
                            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            maxHeight: '25%',
                        marginTop: '15px'

                    
                        },
                        headerStyle: {
                            fontSize: '1.5rem',
                            maxWidth: '50%',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            fontFamily: 'Cheltenham Condensed',

                        },
                        pStyle: {
                            font: '1.5rem',
                            padding: '5px',
                            borderLeft: '#CFCF39 3px solid'

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
                            height: '22%',

                        },
                        captionStyle: {
                  
                            // backgroundColor: 'rgba(82, 104, 46, 0.6)',
                            

                        },
                        headerStyle: {
                            fontFamily: 'Morgen'
                        },
                        pStyle: {
                            borderLeft: 'rgba(224, 184,  62) 3px solid'
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
                            height: '15%'


                        },
                        captionStyle: {
                            maxWidth: '100%',
                            marginBottom: '15px'
                        },
                        pStyle: {
                            borderLeft: '#FDF5AA 3px solid'


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
                        fontSize: '1.5rem'
                    },
                    captionStyle: {
                        backgroundColor: 'rgba(236, 178, 169)',
                        maxWidth: '100%',
                        marginTop: '20px'
                    },
                    pStyle: {
                        borderLeft: 'black 3px solid',
                        paddingLeft: '20px'


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
                        height: '15%',
                        fontSize: '1.25rem',
                        paddingRight: '10px'


                    },
                    captionStyle: {
                        left: '25%',
                        maxWidth: '100%',
                        top: '82%',
                        backgroundColor: 'rgba(60, 103, 170, 0.8)',



                    },
                    pStyle: {
                        fontSize: '1rem',
                        borderLeft: 'white 3px solid',


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

.container {
display: inline-grid;

  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  /* grid-template-areas: 
  ". title ."
  ". main ."
  "caption caption caption"; */
  grid-gap: 3px;
  

}
.video-container {
    width: 100vw;
    height: 70vh;
    bottom: 40%;


}

.button-container {
    display: flex;
    flex-wrap: wrap;
}



audio {
    width: 50%;
    color: red;
    margin: auto;
    margin-left: 25%;
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
    z-index: 100;
    position: absolute;
    left: 10%;
}

.btn-next {
z-index: 100;
position: absolute;
right: 10%;
}

.btn-next, .btn-prev {
    top: 50%;
}

img.thumbnail {
    height: 50%;
    padding: 20px;
    margin: 10px;
    grid-area: main;
    display: flex;
    margin: auto;

}


button {
    font-size: 1rem;
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
    margin: auto;
    display: block;
}

.btn-prev:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    border-color: #FFFFFF;
}

.title-image {
    display: flex;

}

.nav-button {
    z-index: 150;
    background-color: white;
    font-size: 1rem;
    padding: 15px;
    margin-bottom: 10px;
    position: absolute;
    display: flex;
    margin: auto;
    left: 45%;
    top: 9%;
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
    padding: 15px;
    grid-area: caption;
    display: flex;
    margin: auto;

    /* margin-top: 15px; */


}

h2 {
    font-weight: 600;
    display: block;
}

h1 {
    text-align: right;
    margin-right: 5%;
    font-size: 3rem;
    margin-top: 50px;
}

p {
    padding-bottom: 10px;
    z-index: 100;


    font-size: 1.5rem;

}
</style>
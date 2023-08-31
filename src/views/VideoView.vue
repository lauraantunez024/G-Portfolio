<template>
    <div class="container">
        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->


        <!-- 
                    <h1> {{ currentType }} </h1>
                    <button class="btn-prev btn" @click="changeVideo('prev')">⬅️</button>
                    <div class="video-container" ref="scrollContainer" :style="currentBackground">
                        <span><img class='title-image' :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                      
                        <div class="caption" :style="currentCaptionStyle">
                            <h2 :style="currentHeaderStyle"> {{ currentTitle }}</h2> 
                            <p :style="currentPStyle"> {{ currentDescription }}</p>
                        </div>
                    </div>
                    <button class="btn-next btn" @click="changeVideo('next')">➡️</button> -->

    </div>
</template>

<script>

import '../assets/sass/style.scss'


export default {
    name: 'VideoView',

    data() {
        return {
            // currentData: [
            //     {
            //         title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
            //         type: 'Podcasts',
            //         description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
            //         path: cowboyAudio,
            //         style: {
            //             backgroundColor: '#3430A8',
            //             color: '#CFCF39',
            //         },
            //         titleImage: cowboy,
            //         titleImageStyle: {
            //             margin: 'auto',
            //             maxHeight: '17%',
            //             backgroundColor: 'rgba(155, 31, 31, 1)',
            //         },
            //         captionStyle: {
            //             // backgroundColor: 'rgba(0, 0, 0, 0.6)',
            //             maxHeight: '25%',
            //             marginTop: '15px'

            //         },
            //         headerStyle: {
            //             fontSize: '1.75rem',
            //             maxHeight: '25%',
            //             paddingLeft: '15px',
            //             paddingRight: '15px',
            //             fontFamily: 'Cheltenham Condensed',


            //         },
            //         pStyle: {
            //             font: '1rem',
            //             padding: '5px',
            //             maxWidth: '100%',
            //             borderLeft: '#CFCF39 3px solid'

            //         }
            //     },
            //     {
            //         title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
            //         type: 'Podcasts',
            //         description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
            //         path: sweetThingAudio,
            //         style: {
            //             backgroundColor: 'rgba(60, 24, 18)',
            //             color: 'rgba(224, 184,  62)',
            //         },
            //         titleImage: sweetThing,
            //         titleImageStyle: {
            //             margin: 'auto',
            //             height: '22%',


            //         },
            //         captionStyle: {

            //             // backgroundColor: 'rgba(82, 104, 46, 0.6)',

            //         },
            //         headerStyle: {
            //             fontFamily: 'Morgen'

            //         },
            //         pStyle: {
            //             borderLeft: 'rgba(224, 184,  62) 3px solid',
            //             paddingLeft: '15px'



            //         }
            //     },
            //     {
            //         title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
            //         type: 'Podcasts',
            //         description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
            //         path: spencerAudio,

            //         style: {
            //             backgroundColor: '#4A5275',
            //             color: '#FDF5AA',
            //         },
            //         titleImage: spencer,
            //         titleImageStyle: {
            //             margin: 'auto',
            //         },
            //         headerStyle: {
            //             fontFamily: 'Aviano Flare',
            //             height: '15%'


            //         },
            //         captionStyle: {
            //             maxHeight: '25%',
            //             marginBottom: '10px'

            //         },
            //         pStyle: {
            //             borderLeft: '#FDF5AA 3px solid',
            //             paddingLeft: '25px'



            //         }
            //     }
            // ],
            currentSlideIndex: 0

        }
    },

    // computed: {
    //     currentAudio() {
    //         return this.currentData[this.currentSlideIndex].path;
    //     },
    //     currentBackground() {
    //         return this.currentData[this.currentSlideIndex].style;
    //     },
    //     currentTitle() {
    //         return this.currentData[this.currentSlideIndex].title;
    //     },
    //     currentDescription() {
    //         return this.currentData[this.currentSlideIndex].description;
    //     },
    //     currentTitleImage() {
    //         return this.currentData[this.currentSlideIndex].titleImage;
    //     },
    //     currentTitleImageStyle() {
    //         return this.currentData[this.currentSlideIndex].titleImageStyle;
    //     },
    //     currentHeaderStyle() {
    //         return this.currentData[this.currentSlideIndex].headerStyle
    //     },
    //     currentPStyle() {
    //         return this.currentData[this.currentSlideIndex].pStyle
    //     },
    //     currentCaptionStyle() {
    //         return this.currentData[this.currentSlideIndex].captionStyle
    //     },
    //     currentType() {
    //         return this.currentData[this.currentSlideIndex].type
    //     }

    // },
    // methods: {
    //     changeVideo(action) {
    //         if (action === 'prev') {

    //             this.currentSlideIndex = (this.currentSlideIndex - 1 + this.currentData.length) % this.currentData.length
    //         } else if (action === 'next') {

    //             this.currentSlideIndex = (this.currentSlideIndex + 1) % this.currentData.length
    //         }
    //     },

    // },



}
</script>

<style scoped> 

.container {

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    width: 100vh;
    height: 100vw;
}
</style>
<!-- 
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

.btn-next,
.btn-prev {
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
    top: 8%;
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
</style> -->
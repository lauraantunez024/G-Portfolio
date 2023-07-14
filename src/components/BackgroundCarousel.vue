<template>
    <div class="caroussel-container" height="100%">
        <slot/>
    </div>
</template>

<script>

import '../assets/sass/style.scss'
export default {

    name: 'BackgroundCarousel',
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    data() {
        return {
 
            // videos: [
            //     {
            //         title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
            //         description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
            //         path: 'https://www.youtube.com/embed/Ay1J_ht3iEc',
            //         style: {
            //             backgroundColor: '#3430A8',
            //             color: '#CFCF39',
            //         },
            //         titleImage: cowboy,
            //         titleImageStyle: {
            //             left: '29%',
            //             backgroundColor: 'rgba(155, 31, 31, 1)',
            //         },
            //         captionStyle: {
            //             backgroundColor: 'rgba(0, 0, 0, 0.6)',
            //             left: '24.5%',
            //             top: '78%'


            //         },
            //         headerStyle: {
            //             left: '25%',
            //             fontSize: '2.75rem',
            //             maxWidth: '2000px',
            //             paddingLeft: '15px',
            //             paddingRight: '15px',
            //             fontFamily: 'Cheltenham Condensed',

            //         },
            //         pStyle: {
            //             font: '2rem',
            //             marginTop: '10px',
            //             padding: '5px',
            //             maxWidth: '1500px',
            //         }
            //     },
            //     {
            //         title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
            //         description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
            //         path: 'https://www.youtube.com/embed/JFBBSCHGFwg',
            //         style: {
            //             backgroundColor: 'rgba(60, 24, 18)',
            //             color: 'rgba(224, 184,  62)',
            //         },
            //         titleImage: sweetThing,
            //         titleImageStyle: {
            //             left: '42%',
            //             height: '22%'

            //         },
            //         captionStyle: {
            //             top: '80%',
            //             left: '25%',
            //             backgroundColor: 'rgba(82, 104, 46, 0.6)',
            //             maxWidth: '1500px'

            //         },
            //         headerStyle: {
            //             fontFamily: 'Morgen'


            //         },
            //         pStyle: {

            //         }
            //     },
            //     {
            //         title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
            //         description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
            //         path: 'https://www.youtube.com/embed/B-PcelcFqRA',

            //         style: {
            //             backgroundColor: '#4A5275',
            //             color: '#FDF5AA',
            //         },
            //         titleImage: spencer,
            //         titleImageStyle: {
            //             left: '38%'
            //         },
            //         headerStyle: {
            //             fontFamily: 'Aviano Flare',
            //             left: '13%',
            //             height: '15%'


            //         },
            //         captionStyle: {
            //             left: '25%',
            //             maxWidth: '1500px',
            //             top: '77%'


            //         },
            //         pStyle: {

            //         }
            //     }

            // ],
            // currentVideoIndex: 0
        }
    },


    // computed: {
    //     currentVideo() {
    //         return this.videos[this.currentVideoIndex].path;
    //     },
    //     currentBackground() {
    //         return this.videos[this.currentVideoIndex].style;
    //     },
    //     currentTitle() {
    //         return this.videos[this.currentVideoIndex].title;
    //     },
    //     currentDescription() {
    //         return this.videos[this.currentVideoIndex].description;
    //     },
    //     currentTitleImage() {
    //         return this.videos[this.currentVideoIndex].titleImage;
    //     },
    //     currentTitleImageStyle() {
    //         return this.videos[this.currentVideoIndex].titleImageStyle;
    //     },
    //     currentHeaderStyle() {
    //         return this.videos[this.currentVideoIndex].headerStyle
    //     },
    //     currentPStyle() {
    //         return this.videos[this.currentVideoIndex].pStyle
    //     },
    //     currentCaptionStyle() {
    //         return this.videos[this.currentVideoIndex].captionStyle
    //     }

    // }
}
</script>

<style scoped>
.caroussel-container {
    position: relative;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);

}

.video-container {
    position: relative;
    top: 169px;
    width: 100vw;
    margin: auto;
    height: 40vh;
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


.slide-fade-enter-active {
  transition: all 10s ease-out;
}

.slide-fade-leave-active {
  transition: all 10s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
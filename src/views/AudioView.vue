<template>
    <div class="container">
        <div class="content">

            <div class="title-container">
                <span class="title-text">
                    <!-- <img :src="currentData.titleImage" /> -->
                    <h2> {{ currentData.title }} </h2>

                </span>

            </div>

            <div class="desc-container">
                <p>
                    {{ currentData.description }}
                </p>
            </div>

            <div class="photo-container">
                <img src="../assets/podcast-thumbnail.png" />

            </div>
            <div class="audio-container">

                <audio :src="currentData.path" type="audio/mpeg" controls>
                    Your browser not cool enough for this audio file :(
                </audio>
            </div>

            <div class="button-area">
                <div class="soundscape-buttons">

                </div>
                <div class="podcast-buttons" >
                    <button id="cowboy-bebop" v-if="currentData.name !== 'Cowboy Bebop'"
                        @click="chooseData('cowboy-bebop')">Cowboy Bebop</button>
                    <button id="sweet-thing" v-if="currentData.name !== 'Sweet Thing'"
                        @click="chooseData('sweet-thing')">Sweet Thing</button>
                    <button id="spencer" v-if="currentData.name !== 'Spencer'"
                        @click="chooseData('spencer')">Spencer</button>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import cowboy from '../assets/Cowboy_Bebop.svg.png'
import spencerAudio from '../assets/spencer-audio.mp3'
import spencer from '../assets/Spencer_(film)_Logo.png'
import sweetThing from '../assets/sweet_thing_temp.png'
import '../assets/sass/style.scss'
import cowboyAudio from '../assets/cowboy-bebop-podcast.mp3'
import sweetThingAudio from '../assets/sweet-thing-audio.mp3'

export default {
    name: 'AudioView',
    data() {
        return {
            currentData:
            {
                name: 'Cowboy Bebop',
                title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
                type: 'Podcasts',
                description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                path: cowboyAudio,
                titleImage: cowboy,
            }


        }
    },
    methods: {
        chooseData(name) {
            if (name === 'sweet-thing') {
                this.currentData = {
                    name: 'Sweet Thing',
                    title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
                    type: 'Podcasts',
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: sweetThingAudio,
                    titleImage: sweetThing,
                }
            } else if (name === 'cowboy-bebop') {
                this.currentData = {
                    name: 'Cowboy Bebop',
                    title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
                    type: 'Podcasts',
                    description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
                    path: cowboyAudio,
                    titleImage: cowboy,

                }
            } else if (name === 'spencer') {
                this.currentData = {
                    name: 'Spencer',
                    title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
                    type: 'Podcasts',
                    description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
                    path: spencerAudio,
                    titleImage: spencer,
                }
            }
        }
    },
    computed: {
        currentAudio() {
            return this.currentData.path
        },
        currentTitle() {
            return this.currentData.title
        }
    }
}
</script>

<style scoped>
.container {
    display: grid;
    height: 100vh;
    width: 100vw !important;
    grid-template-rows: repeat(5, 1fr);
}

.content {
    display: grid;
    width: 100vw !important;
    grid-row-start: 2;
    grid-row-end: 6;
    grid-template-columns: 5% 45% 5% 40% 5%;
    grid-template-rows: repeat(10, 1fr);
}

h1 {
    text-align: center;
    font-size: 5rem;
}

.photo-container img {
    height: 100%;
    margin-left: 20%;
}

#sweet-thing {
    margin: auto;
}

.title-text {
    -webkit-transform: skew(50deg);
    margin-bottom: 15px;
    transform: skew(50deg);
    justify-content: center;
}

.title-container h2 {

    max-height: 100%;
    transform: skew(50deg);
    -webkit-transform: skew(50deg);
    margin-left: 10%;
    text-align: center;
    font-size: 1.75rem;
    font-family: 'Cheltenham Condensed';

}

.desc-container p {
    text-align: center;
    margin-top: 10%;
    font-size: 1.5rem;
}

.photo-container {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 7;
    border: 3px black solid;
    border-radius: 2%;


}

.podcast-buttons {
    /* grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 9;
    grid-row-end: 10; */
    display: flex;

}

.title-container {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 4;
    width: 80%;
    height: 100px;
    transform: skew(-50deg);
    background-color: blanchedalmond;
}


.desc-container {
    grid-row-start: 4;
    grid-row-end: 7;
    grid-column-start: 3;
    grid-column-end: 5;
    /* border: green solid 3px; */

}

.audio-container {
    grid-row-start: 8;
    grid-row-end: 10;
    grid-column-start: 2;
    grid-column-end: 5;
}

audio {
    width: 90%;
    color: red;
    margin-left: 5%;
}
button {
    height: 100%;
}

.button-area {
    grid-row-start: 9;
    grid-row-end: 10;
    grid-column-start: 2;
    grid-column-end: 5;
    display: block;
    justify-self: center;

}

#cowboy-bebop, #spencer, #sweet-thing {
    margin: auto;
}

audio::-webkit-media-controls-panel {
    background-color: gray;
}

audio::-webkit-media-controls-timeline {
    background-color: #B1D4E0;
    border-radius: 25px;
    /* margin-left: 10px; */
    /* margin-right: 10px; */
}</style>
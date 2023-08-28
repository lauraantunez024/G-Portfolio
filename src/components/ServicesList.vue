<template>
    <div class="container">

        <div class="title">

            <!-- Can make a v-if ton change the font size of social media marketing to an h2 tag -->

            <h1 class="animate__animated animate__bounce"> {{ title }} </h1>
            <!-- <button @click="showLine"> test button </button> -->
            
        </div>
        <div id="top">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg" xmnls:xlink="http://www.w3.org/1999/xlink"> 
               <line class="line" x1="-40" y1="100" x2="170" y2="0" style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;"> 

               </line>

            </svg>
        </div>
        <div id="middle">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg" xmnls:xlink="http://www.w3.org/1999/xlink"> 
               <line class="line" x1="-45" y1="50" x2="200" y2="50" style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;"> 

               </line>

            </svg>
        </div>
        <div id="bottom">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg" xmnls:xlink="http://www.w3.org/1999/xlink"> 
               <line class="line" x1="-40" y1="0" x2="300" y2="150" style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;"> 
               </line>
            </svg>
        </div>

        <div class="first-bullet">
            <h2 id="first-title"> {{ firstBullet }}</h2>
            <ul v-for="(tile, index) in Services[0].descriptionTiles">
                <li v-for="(detail, index) in tile.details" :key="index"> {{ detail }}</li>
            </ul>

        </div>
        <div class="second-bullet">
            <h2 id="second-title"> {{ secondBullet }}</h2>
            <!-- <ul>
                <li v-for="(detail, index) in Services[1].descriptionTiles.details "></li>
            </ul> -->



        </div>
        <div class="third-bullet">
            <h2 id="third-title"> {{ thirdBullet }}</h2>
            <!-- <ul>
                <li v-for="(detail, index) in Services[2].descriptionTiles.details "> </li>
            </ul> -->


        </div>



    </div>
</template>

<script>
export default {
    name: 'ServicesList',
    data() {
        return {
            // showLine: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        firstBullet: {
            type: String,
            // required: true
        },
        secondBullet: {
            type: String,
            // required: true
        },
        thirdBullet: {
            type: String,
            // required: true
        },
        details: {
            type: Array
        }

    },
    methods: {
        createTimeline() {
            const timeline = this.$anime.timeline({
                duration: 2000,
                easing: '   '
            })
        }
    }
    // methods: {
    //     drawLine() {
    //         this.showLine = true;
    //     },

    //     enter(el, done) {
    //         const line = this.$refs.line;
    //         const length = line.getTotalLength();
    //         line.style.strokeDasharray = length + ' ' + length;
    //         line.style.strokeDashoffset = length;
    //         line.getBoundingClientRect();
    //         line.style.transition = 'stroke-dashoffset 2s ease-in-out';
    //         line.style.strokeLinecap = 'round';
    //         line.style.strokeLinejoin = 'round';
    //         line.style.strokeDashoffset = '0';
    //         setTimeout(done, 2000);
    //     },
    //     leave(el, done) {
    //         const line = this.$refs.line;
    //         line.style.strokeDashoffset = line.getTotalLength();
    //         setTimeout(done, 2000);
    //     }
    // }

}



</script>

<style scoped>
.container {
    display: grid;
    height: 100vh;
    grid-template-rows: repeat(5, 20%);
    grid-template-columns: 10% 30% 25% 25% 10%;
    background-color: gray;
}



/* .line {
    position: absolute;
    top: 20%;
    left: 0;
    height: 2px;
    background: transparent;
    border-bottom: 2px dashed black;
    width: 0;
    transition: width 1s ease-out;
} */

.title {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    margin: auto;
    color: whitesmoke;
    display: flex;
}

h1 {
    font-size: 5rem;
}

.line {
    animation: top-line 10s linear forwards; 
    stroke-dasharray: 500;
  stroke-dashoffset: 500;


}

h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;
    
}

#top{
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

#middle {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

}

#bottom {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;

}

.first-bullet {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
}
#first-title {
    grid-row-start: 2;
}
.second-bullet {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
}
.third-bullet {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
}

#third-title {
    grid-row-start: 4;
}




@keyframes top-line {

    /* from {
        stroke-dashoffset: 500;
    } */

    to {
        stroke-dashoffset: 0;
    }
    

}



</style>
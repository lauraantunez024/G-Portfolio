<template>
    <div class="container">

        <div class="title">

            <h1> {{ title }} </h1>
            <button @click="showLine"> test button </button>
            
        </div>
        <div class="animated-line" id="top">
            <span id="line"></span>
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
            // required: true
        },
        descriptionTiles: {
            type: Array,
            // required: true
        },
        detail: {
            type: Object,

        }

    },
    methods: {
        createTimeline() {
            const timeline = this.$anime.timeline({
                duration: 2000,
                easing: ''
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
    background-color: aqua;
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
}

h1 {
    font-size: 5rem;
}

.animated-line {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    /* width: 100%;
    height: 100%; */
    /* background-size: 20px 20px; */
    width: 100%;
    height: 5px;
    background: repeating-linear-gradient(
        to right,
        black,
        black 10px,
        transparent 1px,
        transparent 10px
        );
        background-size: 20px 2px;
        animation: top-line 5s forwards;
    
}


@keyframes top-line {
    from {
        background-position: -20px 0;
    }
    to {
        position: 0 50;
    }
    

}



/* .c-dashed-line__path {
    animation: c-dashed-line-path 3s ease-in-out infinite alternate;
    fill: none;
    stroke: #31cc89;
    stroke-dasharray: 940;
    stroke-dashoffset: 940;
    stroke-width: 10;
}

.c-dashed-line__dash {
    fill: none;
    stroke: aqua;
    stroke-dasharray: 16 10;
    stroke-width: 12;
}

@keyframes c-dashed-line-path {
    from {
        stroke-dashoffset: 940;
    }
    to {
        stroke-dashoffset: 0;
    }
} */

/* .dotted-line-enter-active, .dotted-line-leave-active {
    transition: width 1s ease-out;
}

.dotted-line-enter-to {
    width: 100%;
}

.dotted-line-leave-to {
    width: 0; */
</style>
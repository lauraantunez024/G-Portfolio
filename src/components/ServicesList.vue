<template>
    <div class="container">

        <div class="title">

            <!-- Can make a v-if ton change the font size of social media marketing to an h2 tag -->

            <h1 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-duration="3000"> {{
                splitTitle.firstHalf }} </h1>

            <h1 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-duration="3000"> {{
                splitTitle.secondHalf }} </h1>
            <!-- <button @click="showLine"> test button </button> -->

        </div>
        <div id="top">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg"
                xmnls:xlink="http://www.w3.org/1999/xlink">
                <line class="line" x1="-40" y1="100" x2="170" y2="0"
                    style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;">
                </line>
            </svg>
        </div>
        <div id="middle">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg"
                xmnls:xlink="http://www.w3.org/1999/xlink">
                <line class="line" x1="-45" y1="50" x2="200" y2="50"
                    style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;">

                </line>

            </svg>
        </div>
        <div id="bottom">
            <svg width='100%' height='100%' viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg"
                xmnls:xlink="http://www.w3.org/1999/xlink">
                <line class="line" x1="-40" y1="0" x2="300" y2="150"
                    style=" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;">
                </line>
            </svg>
        </div>

        <div class="first-bullet">
            <h2 id="first-title" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="500" data-aos-delay="500" data-aos-easing="cubic belzier"> {{ firstBullet }}</h2>
            <ul class="first-detail">
                <li v-for="(detail, index) in firstDetails" :key="index" data-aos="fade-down" data-aos-easing="cubic belzier" data-aos-duration="2000" data-aos-delay="1500"> {{ detail }}</li>
            </ul>

        </div>
        <div class="second-bullet">
            <h2 id="second-title" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="500" data-aos-delay="500" data-aos-easing="cubic belzier"> {{ secondBullet }}</h2>
            <ul class="second-detail">
                <li v-for="(detail, index) in secondDetails" :key="index" data-aos="fade-down" data-aos-easing="cubic belzier" data-aos-duration="2000" data-aos-delay="1500"> {{ detail }} </li>
            </ul>
        </div>
        <div class="third-bullet">
            <h2 id="third-title" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500" data-aos-easing="cubic belzier"> {{ thirdBullet }}</h2>
        </div>
        <ul class="third-detail">
            <li v-for="(detail, index) in thirdDetails" :key="index" data-aos="fade-down" data-aos-easing="cubic belzier" data-aos-duration="2000" data-aos-delay="1500"> {{ detail }}</li>
        </ul>



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
        firstDetails: {
            type: Array
        },
        secondDetails: {
            type: Array
        },
        thirdDetails: {
            type: Array
        }

    },
    computed: {
        splitTitle() {
            const words = this.title.split(' ');
            const middleIndex = Math.floor(words.length / 2);
            const firstHalf = words.slice(0, middleIndex). join(' ');
            const secondHalf = words.slice(middleIndex).join(' ');
            
            return {
                firstHalf, secondHalf
            }
        }
    }


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



.title {

    grid-column-start: 1;
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
    animation: top-line 5s linear forwards;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;


}

h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;

}

#top {
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
    grid-template-rows: 10% 20% 10% 60%;
}

#first-title {
    grid-row-start: 2;
    margin-top: 10px;
}

.first-detail {
    grid-row-start: 4;
    margin-top: 20px;
}

.second-bullet {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
}

.second-detail {
    margin-top: 20px;
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

.third-detail {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 5;
    margin-top: 20px;

}




@keyframes top-line {


    to {
        stroke-dashoffset: 0;
    }


}</style>
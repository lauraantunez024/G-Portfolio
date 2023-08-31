<template>
    <div class="container">
        <div class="content">
            <div class="title-container">

                <h1> {{ currentTitle }}</h1>
            </div>

            <button class="btn-prev btn" @click="changeVideo('prev')">prev</button>
            <div class="video-container">
                <video controls>
                    <source :src="currentVideo" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <span id="caption">
                <p> {{ currentCaption }}</p>
            </span>

            <button class="btn-next btn" @click="changeVideo('next')">next</button> 

        </div>


        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->


        <!-- 
                    <h1> {{ currentType }} </h1>
                    <div class="video-container" ref="scrollContainer" :style="currentBackground">
                        <span><img class='title-image' :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                      
                        <div class="caption" :style="currentCaptionStyle">
                            <h2 :style="currentHeaderStyle"> {{ currentTitle }}</h2> 
                            <p :style="currentPStyle"> {{ currentDescription }}</p>
                        </div>
                    </div>
                -->

    </div>
</template>

<script>

// import '../assets/sass/style.scss'


export default {
    name: 'VideoView',

    data() {
        return {
            videos: [
                {
                    name: 'First Video',
                    path: '../assets/dmmy-vidoe.mp4',
                    caption: 'This is the first video weeeeeee',
                    titleImage: '',
                    style: ''
                },
                {
                    name: 'Second Video',
                    path: '../assets/video_preview_h264.mp4',
                    caption: 'Second Video RAAAAAAAAH',
                    titleImage: '',
                    style: ''
                },
            ],
            currentSlideIndex: 0
           
            

        }
    },

    methods: {
        changeVideo(action) {
            if (action === 'prev') {

                this.currentSlideIndex = (this.currentSlideIndex - 1 + this.videos.length) % this.videos.length
            } else if (action === 'next') {

                this.currentSlideIndex = (this.currentSlideIndex + 1) % this.videos.length
            }
        },

    },
    computed: {
        currentVideo() {
            return this.videos[this.currentSlideIndex].path;
        },
     
        currentTitle() {
            return this.videos[this.currentSlideIndex].name;
        },
        currentCaption() {
            return this.videos[this.currentSlideIndex].caption;
        },
        currentTitleImage() {
            return this.videos[this.currentSlideIndex].titleImage;
        },
    
       
    },



}
</script>

<style scoped> 

.container {

     display: grid;
     grid-template-rows: repeat(5, 1fr);
     /* grid-template-columns: repeat(5, 1fr); */
     width: 100vw;
     height: 100vh;
 }

 .content {
     grid-row-start: 2;
     grid-row-end: 6;
     display: grid;
     grid-template-columns: 10% 10% 60% 10% 10%;
     grid-template-rows: repeat(5, 1fr);
     width: 100vw;
     height: 80vh;
 }

 .video-container {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 5;
    display: flex;
    justify-content: center;
 }

 .title-container {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: center;
    margin: auto;
 }

 h1 {
    font-size: 5vw;
 }

 video {
    height: 100%;
 }

 .btn {
    height: 5vh;
    width: 6vw;
    margin: auto;
    font-size: 2vw;
 }



 button:hover {
    background-color: bisque;


 }

 .btn-prev {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
 }
 .btn-next {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 4;
    grid-column-end: 5;

}
#caption {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: center;
    margin: auto;
    font-size: 1.5vw;
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
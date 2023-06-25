<template>
        <div class="caroussel-container">
            <button class="btn-prev" @click="changeVideo('prev')">prev</button>
            <transition-group name="slide-fade">
                <div class="video-container" :style="currentBackground">
                    <video height='600' width='1000' :src='currentVideo' ref=videoPlayer controls> </video>
                    <h2> {{ currentTitle }}</h2>
                    <p> {{ currentDescription }}</p>
                </div>
            </transition-group>
            <button class="btn-next" @click="changeVideo('next')">next</button>
        </div>
</template>

<script>
import video1 from '../assets/Lorem-ipsum-video-Dummy-video-for-your-website.mp4'
import video2 from '../assets/video_preview_h264.mp4'
export default {

    name: 'BackgroundCarousel',
    data() {
        return {
            videos: [
                {
                    title: 'Woot woot mothman',
                    description: 'WV representin',
                    path: video1,
                    style: {
                        backgroundColor: 'orange',
                        color: 'black',


                    }
                },
                {
                    title: 'UHhhh gay?',
                    description: 'gayyyyyyyyy',
                    path: video2,
                    style: {
                        backgroundColor: 'gray',
                        color: 'white',
                    }
                }

            ],
            currentVideoIndex: 0
        }
    },

    methods: {
        changeVideo(action) {
            if (action === 'prev') {
                this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length
            } else if (action === 'next') {
                this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length
            }
            this.$refs.videoPlayer.currentTime = 0;
            this.$refs.videoPlayer.play()
        }

    },

    computed: {
        currentVideo() {
            return this.videos[this.currentVideoIndex].path;
        },
        currentBackground() {
            return this.videos[this.currentVideoIndex].style;
        },
        currentTitle() {
            return this.videos[this.currentVideoIndex].title;
        },
        currentDescription() {
            return this.videos[this.currentVideoIndex].description;
        }
    }
}
</script>

<style scoped>


.caroussel-container {
    position: relative;
    width: 100%;
    height: 70vh;
}

.video-container {
    position: relative;
    width: 100vw;
    margin: auto;
}

video {
    position: relative;
    left: 33%;
    top: 22px;
}

.btn-prev {
    left: 10%;
}

.btn-next {
    right: 10%;
}

.btn-prev,
.btn-next {
    font-size: 2rem;
    top: 50%;
}

p, h2 {
    text-align: center;
}

h2 {
    padding: 10px;
    margin-top: 10px;
}

p {
   padding-bottom: 10px;
}


.slide-fade-enter-active {
    transition: all .5s linear;
}

.slide-fade-leave-action {
    transition: all .5s linear;
}

.slide-fade-enter-form {
    transform: translate(v-bind(appear));
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(v-bind(leave));
    opacity: 0;
}
</style>
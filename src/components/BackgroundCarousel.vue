<template>
    <div class="caroussel-container" :style="currentBackground">
        <button class="btn-prev" @click="changeVideo('prev')">prev</button>
        <transition-group name="slide-fade">
    
                <div class="video-container">
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
                        backgroundColor: 'red',
                        color: 'yellow'


                    }
                },
                {
                    title: 'UHhhh gay?',
                    description: 'gayyyyyyyyy',
                    path: video2,
                    style: {
                        backgroundColor: 'blue',
                        color: 'white'

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
            } else if (action === 'next')  {
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
    caroussel-container {
        width: 80vw;
        height: 80vh;
    }

    .btn-prev, .btn-next {
        font-size: 2rem;
        margin: auto;
    }
</style>
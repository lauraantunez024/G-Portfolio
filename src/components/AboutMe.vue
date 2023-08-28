<template>
    <div class="container">
        <div class="content">
            <span class="headshot-image" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                <img src="../assets/alfred.jpg" alt="Alfred">
            </span>

            <div class="aboutme-content" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
                <p>
                    I went with you up to the place you grew up
                    And we spent a week in the cold
                    Just long enough to Walden it with you
                    Any longer, it would've got old
                    Singin' "Ace of Spades" when Lemmy died
                    But nothing's changed, L.A.'s alright
                    I'm sleepin' in my bed again
                    And gettin' in my head and then
                    Walk around the reservoir
                    You
                    You must've been lookin' for me
                    Sendin' smoke signals
                    Pelicans circling
                    Burnin' trash out on the beach
                    One of your eyes is always half-shut
                    Somethin' happened when you were a kid
                    I didn't know you then and I'll never understand
                    Why it feels like I did
                    "How Soon Is Now" in an eighties sedan
                    You slept inside of it because your dad
                    Lived in a campground in the back of a van
                    You said that song'll creep you out until you're dead
                    And you
                    Must've been lookin' for me
                    Sendin' smoke signals
                    Pelicans circling
                    Burnin' trash out on the beach
                    I wanna live at the Holiday Inn
                    Where somebody else makes the bed
                    We'll watch TV while the lights on the street
                    Put all the stars to death
                    It's been on my mind since Bowie died
                    Just checking out to hide from life
                    And all of our problems, I'm gonna solve 'em
                    With you ridin' shotgun
                    Speeding 'cause fuck the cops
                    And you
                    You must've been lookin' for me
                    Sendin' smoke signals
                    Pelicans circling
                    Burnin' trash out on the beach
                    Mm-mm
                    <!-- Grace is the best! You should hire her cause she's cute, funny, smart, a good friend, good with cars,
                    and bonus: has the most precious smile. Oh yeah and she's good at like a million things, so :). Plus
                    she's
                    a great cat mom and girlfriend. -->
                 
         

                </p>
            </div>
            <div class="contactme-btn">
                <span id="btn-container">
                    <router-link id="button" to="/contact">Contact Me</router-link>
                </span>

            </div>

            <h1 id="linkedin">
                <a href="https://www.linkedin.com/in/grace-rolfe-40320223b/" target="_blank"> LinkedIn</a>
            </h1>
            <h1 id="resume">
                <a href="https://www.linkedin.com/in/grace-rolfe-40320223b/" target="_blank"> Resume</a>
            </h1>


        </div>

    </div>
</template>

<script>
export default {
    name: 'AboutMe'


}
</script>

<style scoped>
.container {
    /* display: grid; */
    height: 100vh;
    /* grid-template-rows: repeat(5, 20%); */
}

.headshot-image {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 5;
    display: flex;
}

.content {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-row-start: 2;
    grid-template-columns: 10% 50% 5% 25% 10%;
    grid-template-rows: repeat(4, 20%) 10% 10%;
    background-color: rgb(238, 234, 234);

}

.aboutme-content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    margin: auto;
    margin-top: 10px;
    /* border: 2px rgb(61, 0, 61) solid; */
    padding: 20px;
}

#btn-container {

    grid-row-start: 3;
    grid-row-end: 5;
    justify-self: center;
    border-radius: 25%;
}

#button {
    font-size: 1.5rem;
    border-radius: 50%;
    border: 3px black purple;
    padding: 30px;
    background-color: rgba(61, 0, 61, 0.8);
}




#linkedin {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 6;
    display: flex;
    margin: auto;
}

#resume {
    display: flex;
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 2;
    grid-column-end: 3;
    /* left: 80%; */
    margin: auto;


}

.contactme-btn {
    display: grid;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    /* grid-template-columns: repeat(5, 20%); */
    grid-template-rows: repeat(5, 20%);
}

img {
    border-radius: 50%;
    width: 100%;
}
</style>
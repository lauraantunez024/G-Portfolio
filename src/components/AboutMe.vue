<template>
    <div class="container">
        <div class="content">
            <span class="headshot-image">
                <img src="../assets/alfred.jpg" alt="Alfred">
            </span>

            <div class="aboutme-content">
                <p>
                    Grace is the best! You should hire her cause she's cute, funny, smart, a good friend, good with cars,
                    and bonus: has the most precious smile. Oh yeah and she's good at like a million things, so :). Plus
                    she's
                    a great cat mom and girlfriend.
                    <!-- It's gonna be me
                    Ooh, yeah
                    You might been hurt, babe
                    That ain't no lie
                    You've seen them all come and go, oh
                    I remember you told me
                    That it made you believe in
                    No man, no cry
                    Maybe that's why
                    Every little thing I do
                    Never seems enough for you
                    You don't want to lose it again
                    But I'm not like them
                    Baby, when you finally
                    Get to love somebody
                    Guess what
                    It's gonna be me
                    You've got no choice, babe
                    But to move on, and you know
                    There ain't no time to waste
                    You're just too blind to see
                    But in the end, ya know it's gonna be me
                    You can't deny
                    So just tell me why Every little thing I do
                    Never seems enough for you
                    You don't want to lose it again
                    But I'm not like them
                    Baby, when you finally
                    Get to love somebody (somebody)
                    Guess what (guess what)
                    It's gonna be me
                    It's gonna be me
                    Ooh, yeah yeah
                    There comes a day
                    When I'll be the one, you'll see
                    It's gonna gonna gonna gonna
                    It's gonna be me
                    All that I do is not enough for you
                    I don't want to lose it
                    But I'm not like that
                    When finally (finally)
                    You get to love
                    Guess what? (guess what?)
                    It's gonna be me
                   -->

                </p>
            </div>
            <div class="contactme-btn">
                <span id="btn-container"> 
                    <router-link id="button" to="/contact">Contact Me</router-link>
                </span>
                
            </div>

            <h1 id="linkedin">
                <a  href="https://www.linkedin.com/in/grace-rolfe-40320223b/" target="_blank"> LinkedIn</a>
            </h1>
                <h1  id="resume">
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
    display: grid;
    height: 100vh;
    grid-template-rows: repeat(5, 20%);
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
    height: 80vh;
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
    background-color:rgba(61, 0, 61, 0.8);
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
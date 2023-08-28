<template>
    <div class="container">
        <div class="content">
            <span class="headshot-image" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                <img src="../assets/alfred.jpg" alt="Alfred">
            </span>

            <div class="aboutme-content" data-aos="fade-right" data-aos-duration="2000">
                <p>
                    I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious
                    yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a
                    good bowl of milk lick yarn hanging out of own butt experiences short bursts of poo-phoria after going
                    to the loo for drink water out of the faucet for meowing non stop for food. Kitty power. Love and coo
                    around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery
                    gleaming yarn to him (the yarn is from a $125 sweater) pooping rainbow while flying in a toasted bread
                    costume in space and hate dog spread kitty litter all over house but chase red laser dot or spot
                    something, big eyes, big eyes, crouch, shake butt, prepare to pounce stares at human while pushing stuff
                    off a table. Floof tum, tickle bum, jellybean footies curly toes the dog smells bad. Damn that dog meow
                    to be let out. Lick master's hand at first then bite because im moody. Spend all night ensuring people
                    don't sleep sleep all day human is behind a closed door, emergency! abandoned! meeooowwww!!!, cats
                    making all the muffins check cat door for ambush 10 times before coming in and spend all night ensuring
                    people don't sleep sleep all day unwrap toilet paper cat mojo . Chase after silly colored fish toys
                    around the house humans,humans, humans oh how much they love us felines we are the center of attention
                    they feed, they clean yet if it fits, i sits so loved it, hated it, loved it, hated it purr while
                    eating. Run off table persian cat jump eat fish mew mew or car rides are evil and flop over. Jump launch
                    to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed i cry
                    and cry and cry unless you pet me, and then maybe i cry just for fun, for bathe private parts with
                    tongue then lick owner's face or open the door, let me out, let me out, let me-out, let me-aow, let
                    meaow, meaow!
                    <!-- Grace is the best! You should hire her cause she's cute, funny, smart, a good friend, good with cars,
                    and bonus: has the most precious smile. Oh yeah and she's good at like a million things, so :). Plus
                    she's
                    a great cat mom and girlfriend. -->



                </p>
            </div>
            <div class="contactme-btn">
                <span id="btn-container" data-aos="fade" data-aos-duration="1500" data-aos-delay="1200">
                    <router-link id="button" to="/contact">Contact Me</router-link>
                </span>

            </div>

            <h1 id="linkedin" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500"
                data-aos-anchor="#btn-container">
                <a href="https://www.linkedin.com/in/grace-rolfe-40320223b/" target="_blank"> LinkedIn</a>
            </h1>
            <h1 id="resume" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500" data-aos-anchor="#btn-container">
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
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
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
    scroll-snap-align: start;
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
}</style>
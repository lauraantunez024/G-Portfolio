<template>
    <nav class="navbar">
        <div class="mobile-menu">

        </div>
        <div class="desktop-menu">

            <div class="links">
                <router-link id="home" to="/">Home</router-link>
                <span class="dropdown">
                    <a class="project-button" @mouseover="showDropdown = true">
                        Projects </a>
                    <ul class="dropdown-items" v-if="showDropdown" @mouseleave="showDropdown = false">
                        <li><router-link to="/projects/videos">Videos</router-link></li>
                        <li><router-link to="/projects/audio">Audio</router-link></li>
                        <!-- <li><router-link to="/projects/graphic-design">Visual</router-link></li> -->
                    </ul>
                </span>
                <router-link id="contact" to="/contact">Contact</router-link>
            </div>
            <img src="../assets/mothman_cute.png" alt="cute mothman icon">
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            showDropdown: false

        }
    },


}
</script>

<style scoped>

.navbar {
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    height: 15vh;
    background-image: linear-gradient(rgb(61, 0, 61) 90%, gainsboro);
    top: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: center;
    margin: auto;
}

ul {
    list-style-type: none;
    background-color: white;
    padding: 0; 
    margin: 0;
    text-align: center;
    
}

li {
    opacity: 1;
    
}

img {
    position: absolute;
    max-height: calc(10vh * (7/5));
    top: -4vh;
    margin-top: 3vh;
    margin-left: -30vw;
    /* background-color: seagreen; */

    display: wrap;
}

.links {
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 1rem;
    display: flex;
    gap: 20px;
    margin-left: 2vw;
    margin-top: 2.5vh;
}

li:hover {
    background-image: radial-gradient(gray, gainsboro 70%);
}


a {
    border: none;
    color: hsla(160, 100%, 37%, 1);
    background: none;
    font-size: 4rem;

}
</style>

<!-- <style scoped>


#home, .project-button {
    /* display: flex; */
    align-self: start;
    

}


#contact, #home {
    color: seagreen;
}

#contact {
    grid-column-start: 3;
    grid-column-end: 4;
}

button, .links {
    font-size: 3rem;
}

ul {
    position: fixed;
    z-index: 100;
    left: 10%;
    background-color: white;
    border: 3px solid black;
    list-style-type: none;
    padding: 0; 
    margin: 0;
}


.links {
    /* position: relative; */
    z-index: 100;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-wrap: wrap;
}   

li {
    margin-left: 15px;
}
.links a {
    padding: 10px;
    color: seagreen;
}

li.dropdown-items {
    padding: 0px;
}

.dropdown {
    display: inline;
   
    
}

.dropdown-items {
    left: 7%;
    width: 10%;
    display: grid;
}

#home {
    margin-left: 20px;
}
</style> -->
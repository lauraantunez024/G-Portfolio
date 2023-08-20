<template>
    <nav class="navbar">
            <div class="links">
                <router-link id="home" to="/">Home</router-link>
                <span class="dropdown">
                    <button class="project-button" @mouseover="showDropdown = true">
                        Projects </button>
                    <ul class="dropdown-items" v-if="showDropdown" @mouseleave="showDropdown = false">
                        <li><router-link to="/projects/videos">Visual</router-link></li>
                        <li><router-link to="/projects/audio">Audio</router-link></li>
                        <!-- <li><router-link to="/projects/graphic-design">Visual</router-link></li> -->
                    </ul>
                </span>
                <router-link id="contact" to="/contact">Contact</router-link>
            </div>
            <img height='250' src="../assets/mothman_cute.png" alt="cute mothman icon">
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
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 20vh;
    background-color: rgb(61, 0, 61);
    top: 0;
    display: inline-grid;
    grid-template-columns: repeat(3, 33.33333%);
    justify-self: center;
    margin: auto;
    grid-template-rows: auto;
}

img {
    margin: auto;
    position: absolute;
    max-height: 70%;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;
    margin-top: 5%;
    background-color: seagreen;

    display: wrap;
}

button {
    border: none;
    color: seagreen;
    background: none;
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
    margin: auto;
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
    position: relative;
    
    z-index: 100;
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
</style>
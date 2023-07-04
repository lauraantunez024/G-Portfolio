<template>
    <nav class="navbar">
            <div class="links">
                <router-link to="/">Home</router-link>
                <span class="dropdown">
                    <button class="project-button" @mouseover="showDropdown = true">
                        Projects </button>
                    <ul class="dropdown-items" v-if="showDropdown" @mouseleave="showDropdown = false">
                        <li><router-link to="/projects/videos">Video</router-link></li>
                        <li><router-link to="/projects/audio">Audio</router-link></li>
                        <li><router-link to="/projects/graphicDesign">Graphic Design</router-link></li>
                    </ul>
                </span>
                <router-link to="/contact">Contact</router-link>
            </div>
            <img height='150' src="../assets/mothman_cute.png" alt="cute mothman icon">
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
    height: 15vh;
    background-color: gray;
    top: 0;
}

img {
    margin: auto;
    position: absolute;
    left: 48%;
    top: -10%;
    margin-top: 15px;
}

button {
    border: none;
    color: orange;
    background: none;
}

button, .links {
    font-size: 3rem;
}

ul {
    position: fixed;
    z-index: 100;
    left: 8%;
    background-color: white;
    border: 3px solid black;
    list-style-type: none;
    padding: 0;
    margin: 0;
}


.links {
    position: relative;
    top: 24%;
    z-index: 100;
}

li {
    left: 5%;
}
.links a {
    padding: 10px;
    color: orange;
}

li.dropdown-items {
    padding: 0px;
}

.dropdown {
    position: relative;
    z-index: 100;
}

.dropdown-items {
    left: 5%;
}
</style>
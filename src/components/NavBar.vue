<template>
    <nav class="navbar">
            <div class="links">
                <router-link id="home" to="/">Home</router-link>
                <span class="dropdown">
                    <button class="project-button" @mouseover="showDropdown = true">
                        Projects </button>
                    <ul class="dropdown-items" v-if="showDropdown" @mouseleave="showDropdown = false">
                        <li><router-link to="/projects/videos">Video</router-link></li>
                        <li><router-link to="/projects/audio">Audio</router-link></li>
                        <li><router-link to="/projects/graphic-design">Visual</router-link></li>
                    </ul>
                </span>
                <router-link to="/contact">Contact</router-link>
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
    height: 15vh;
    background-color: gray;
    top: 0;
    display: grid;
    grid-template-rows: auto auto;
}

img {
    margin: auto;
    position: absolute;
    max-height: 90%;
    left: 46.5%;

    margin-top: 15px;
    display: flex;
}

button {
    border: none;
    color: orange;
    background: none;
}

button, .links {
    font-size: 3rem;
    margin-top: 15px;
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
    top: 24%;
    z-index: 100;
}

li {
    margin-left: 15px;
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
    left: 7%;
    width: 10%;
}

#home {
    margin-left: 20px;
}
</style>
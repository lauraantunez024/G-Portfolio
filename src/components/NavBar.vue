<template>
    <nav class="navbar">
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
    left: 0;
    width: 100%;
    display: flex;
    height: 20vh;
    background-color: rgb(61, 0, 61);
    top: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 33.333333%);
    justify-self: center;
    margin: auto;
    /* grid-template-rows: auto; */   
}

ul {
    list-style-type: none;
    background-color: white;
    border: 3px solid black;
    padding: 0; 
    margin: 0;
    text-align: center;
    
}

img {
    margin: auto;
    position: absolute;
    max-height: 70%;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;
    margin-top: 3vh;
    background-color: seagreen;

    display: wrap;
}

.links {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 3vw;
    display: flex;
    gap: 20px;
    margin-left: 2vw;
}

li:hover {
    background-color: gray;
}

/* #contact {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
    display: flex;
} */


a {
    border: none;
    color: hsla(160, 100%, 37%, 1);
    background: none;
    font-size: 3vw;
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
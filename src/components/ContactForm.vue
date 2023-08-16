<template>
    <div class="contact-form">
        <form @submit.prevent="submitForm"> 
            <div>
                <label>Name: </label>
                <input type="text" v-model="form.name" required>
            </div>

            <div>
                <label>How do you want to talk</label> <br>
                <input type="radio" id="phone" value="phone" v-model="form.contactMethod">
                <label for="phone"> Phone</label> <br>
                <input type="radio" id="email" value="email" v-model="form.contactMethod">
                <label for="email"> Email</label>
            </div>

            <div v-if="form.contactMethod === 'phone'">
                <label>Phone: </label>
                <input type="tel" v-model="form.phone" required>
            </div>

            <div v-if="form.contactMethod === 'email'">
                <label>Email: </label>
                <input type="email" v-model="form.email" required>
            </div>

            <div>
                <label>what it do </label>
                <input type="text" v-model="form.message" style="width: 200px" required>
            </div>

            <button type="submit">Submit</button>
        </form>

    </div>

</template>

<script>

import axios from 'axios';

export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                name: '',
                contactMethod: '',
                phone: '',
                email: '',
                message: ''
        
            }
        }
    },
    methods: {
        async submitForm() {
            // Validation goes here
            if (!this.name || !(this.email || this.phone) || !this.message) {
                this.error = "All fields are required.";
                return;
            }
            const formData = {
                name: this.name,
                contact: this.email || this.phone,
                message: this.message
            };

            try {
                const response = await axios.post('http://localhost:3000/contact', formData);
                console.log(response.data);

                this.name = '';
                this.email = '';
                this.phone = '';
                this.message = '';
                this.error = '';
            } catch (error) {
                console.error(error);
                this.error = 'An error occurred while submitting the form'
            }
   
        }
    }
}

</script>

<style scoped>


.contact-form {
    display: grid;
    gap: 1rem;
    font-size: 3rem;
}

input {
    height: 30px;
}
    


</style>

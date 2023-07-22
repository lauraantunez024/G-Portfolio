<template>
    <div class="contact-form">
        <form @submit.prevent="submitForm"> 
            <div>
                <label>Name:</label>
                <input type="text" v-model="form.name" required>
            </div>

            <div>
                <label>How do you want to talk</label>
                <input type="radio" id="phone" value="phone" v-model="form.contactMethod">
                <label for="phone">Phone</label>
                <input type="radio" id="email" value="email" v-model="form.contactMethod">
                <label for="email">Email</label>
            </div>

            <div v-if="form.contactMethod === 'phone'">
                <label>Phone:</label>
                <input type="tel" v-model="form.phone" required>
            </div>

            <div v-if="form.contactMethod === 'email'">
                <label>Email:</label>
                <input type="email" v-model="form.email" required>
            </div>

            <div>
                <label>Briefly tell me what's up</label>
            </div>
        </form>

    </div>

</template>

<script>

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
        submitForm() {
            // Validation goes here
            console.log(this.form)
            this.form = {
                name: '',
                contactMethod: '',
                phone: '',
                email: '',
                message: ''
            }
        }
    }
}

</script>

<style scoped>
    
</style>

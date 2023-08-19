<template>
    <div class="contact-form">
        <form @submit.prevent="submitForm"> 
            <div>
                <label>Name: </label>
                <input type="text" v-model="name" required>
            </div>

            <div>
                <label>Come get these services baby girl!!!</label>
                <br>
                <input type="radio" id="phone" value="phone" v-model="contactMethod">
                <label for="phone"> Phone Number:</label>
                <br>
                <input type="radio" id="email" value="email" v-model="contactMethod">
                <label for="email"> Email:</label>
            </div>

            <div v-if="contactMethod === 'phone'">
                <label>Phone: </label>
                <input type="tel" v-model="phone" required>
            </div>

            <div v-if="contactMethod === 'email'">
                <label>Email: </label>
                <input type="email" v-model="email" required>
            </div>

            <div >
                <label>what it do </label>
                <input type="text" v-model="message" style="width: 200px" required>
            </div>

            <button type="submit">Submit</button>
        </form>

    </div>

</template>

<script>


export default {
    name: 'ContactForm',
    data() {
        return {
           
                name: '',
                contactMethod: '',
                email: '',
                phone: '',
                message: ''
        
            
        }
    },
 

    methods: {
    async submitForm() {
        try {
            const response = await fetch('https://gracer.vercel.app/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    message: this.message,
                    email: this.email,
                    phone: this.phone

                })
            });
            const data = await response.json();
            if(data.success) {
                alert('Message sent!');
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            alert('Failed to send message.');
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

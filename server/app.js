const express = require('express');
const cors = require('cors');
require('dotenv').config();
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const bodyParser = require('body-parser');
const client = twilio(accountSid, authToken);
const { MessagingResponse } = twilio.twiml
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'You got the server running congrats!'})
});

// app.get('/api/contact', async (req, res) => {
//     res.send('the get request for /api/contact is working')

// })

// app.post('/contact', async(req, res) => {
//     const twiml = new MessagingResponse()
//     twiml.message('The Robots are coming! Head for the hills!');
//     res.type('text/xml').send(twiml.toString());
//     console.log('Received POST request at /contact');     
//     const form = req.body;

//     try {
//         await client.messages
//         .create({
//             body: `New contact form submission from ${form.name} - ${form.message}`,
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: process.env.MY_PHONE_NUMBER
//         })
//         .then(message => console.log(message.sid))
//         .done();
       
//     } catch (error) {
//         console.error('An error occurred while sending SMS:', error);
//         res.status(500).json({ error: 'An error occurred while sending a message'});
//     } 
// })


app.post('/send-message', (req, res) => {
    const { name, message, phone, email } = req.body;

    client.messages.create({
        to: process.env.MY_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: `Good news! Someone used your contact form :). The message is from ${name}: ${message}. They want to be reached out at ${phone} ${email}`,
    })
    .then((message) => res.json({ success: true}))
    .catch((error) => res.json({ success: false, error }));
});

app.listen(3000, () => console.log("Server is running on port 3000"))

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const bodyParser = require('body-parser');
const client = twilio(accountSid, authToken);
const { MessagingResponse } = twilio.twiml
const app = express();

const proxy = createProxyMiddleware({
    target: 'http://www.gracer.vercel.app/',
    changeOrigin: true
})
app.use(cors())
app.use(bodyParser.json());

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'You got the server running congrats!'})
});

app.use('/', proxy)



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

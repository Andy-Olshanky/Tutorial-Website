const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const PORT = 4000

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "expresstesting174@gmail.com",
        pass: "ilxduxgctcipgdep"
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailOptions = {
    from: "expresstesting174@gmail.com",
    to: "aolshans@temple.edu",
    subject: "Testing",
    text: "text Testing Pog2"
}

transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
        console.log(err)
    } else {
        console.log("Email sent", res)
    }
})

app.get('/', (req, res) => {
    res.send("heyyo!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

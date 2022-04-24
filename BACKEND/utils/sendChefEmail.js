//email services goes here
//using gmail API

const nodemailer = require("nodemailer");

const sendEmail = (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.FOOD_EMAIL_USERNAME,
            pass : process.env.FOOD_EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.FOOD_EMAIL_FROM,
        to : options.to,
        subject : options.subject,
        html : options.text
    }

    transporter.sendMail(mailOptions , function(err , info){
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })
}

module.exports = sendEmail;
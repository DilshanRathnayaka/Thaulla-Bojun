//email services goes here
//using gmail API

const nodemailer = require("nodemailer");

const sendEmail = (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.CUSTOMER_EMAIL_USERNAME,
            pass : process.env.CUSTOMER_EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.CUSTOMER_EMAIL_FROM,
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
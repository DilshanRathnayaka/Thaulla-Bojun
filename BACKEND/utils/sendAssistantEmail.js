//email services goes here
//using gmail API

const nodemailer = require("nodemailer");

const sendEmail = (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        secure: false,
        port: 25,
        auth: {
            user: process.env.ASSISTANT_EMAIL_USERNAME,
            pass : process.env.ASSISTANT_EMAIL_PASSWORD

            
        },
        tls: {
            rejectUnauthorized: false
        }

    })

    const mailOptions = {
        from: process.env.ASSISTANT_EMAIL_FROM,
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
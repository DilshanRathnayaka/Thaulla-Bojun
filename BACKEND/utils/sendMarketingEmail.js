
//email services goes here
//using gmail API

const nodemailer = require("nodemailer");

const sendMarketingEmail = (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.MARKETING_EMAIL_USERNAME,
            pass : process.env.MARKETING_EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.MARKETING_EMAIL_FROM,
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

module.exports = sendMarketingEmail;
//email services goes here
//using gmail API

const nodemailer = require("nodemailer");

const sendEmail = (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        secure: false,
        port: 25,
        auth: {
            user: process.env.EMAIL_BRANCHUSERNAME,
            pass : process.env.EMAIL_BRANCHPASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }

    })

    const mailOptions = {
        from: process.env.EMAIL_BRANCH_FROM,
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
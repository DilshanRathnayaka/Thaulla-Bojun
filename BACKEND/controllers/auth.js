//JWT authentication goes here
const User = require("../models/user");
const Staff = require("../models/staff");

const chefStaff = require("../models/chefStaff");

 
const deliveryStaff = require("../models/deliveryStaff");
 

const marketingStaff = require("../models/marketingStaff");


const supplierStaff= require("../models/supplierStaff");


const assistantStaff = require("../models/assistantStaff");
const branchStaff = require("../models/branchStaff");

const orderStaff = require("../models/orderStaff");

const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

const sendSupplierEmail = require("../utils/sendSupplierEmail");

const crypto = require("crypto");


const sendAssistantEmail = require("../utils/sendAssistantEmail")

const sendMarketingEmail = require("../utils/sendMarketingEmail");


const sendCustomerEmail = require("../utils/sendCustomerEmail");

const sendChefEmail = require("../utils/sendChefEmail");

const sendCustomerPromotionEmail = require("../utils/sendCustomerPromotionEmail");

const sendDeliveryEmail = require("../utils/sendDeliveryEmail");

const sendBranchEmail = require("../utils/sendBranchEmail");





//when we use asynchrones function we need try catch block
exports.register = async (req , res , next) =>{  
   
    const {username , email , password} = req.body; //destructure method

    try {
        const user = await User.create({
            username , email , password //this.password filed of user.js in models
        })
        sendToken(user , 200 , res);

    } catch (error) {
       next(error);
    }
}


exports.login = async (req , res , next) =>{
   const {email , password} = req.body;

   if(!email || !password){ //backend validation
       return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
   }                                                                           //400 Bad Request

   try {
    
        const user = await User.findOne({email}).select("+password");

        if(!user){ //true
            return next(new ErrorResponse("Invalid Credentials" , 401));
        }

        const isMatch = await user.matchPasswords(password); //matching the passwords from the received from request and from the db
        
        if(!isMatch){
            return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
        }

        sendToken(user , 200 , res);

   } catch (error) {
        res.status(500).json({ // 500 internal server error
            success:false,
            error:error.message
    })       
   }
}

exports.forgotpassword = async (req , res , next) =>{
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user){
            return next(new ErrorResponse("Email could not be sent") , 404);
        }

        const resetToken = user.getResetPasswordToken();
        
        await user.save();

        const resetURL = `http://localhost:3000/passwordreset/${resetToken}`; //this is a frontend route

        const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this URL to reset password</p>
        <a href=${resetURL} clicktracking=off>${resetURL}</a>
         `
        try {
            await sendEmail({
                to : user.email,
                subject : "Password Reset Request",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }
}

exports.resetpassword = async (req , res , next) =>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt : Date.now()}
        })

        if(!user){
            return next(new ErrorResponse("Invalid Reset Token") , 400)
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({success : true , data : "Password reset success"});

    } catch (error) {
        next(error);
    }
}

const sendToken = (user , statusCode , res)=>{ //JWT get
    const token = user.getSignedToken();
    res.status(200).json({success:true , token});
}


//-------------------------------------------Staff Section------------------------------------------------

exports.registerStaffCustomerM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await Staff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffCustomerM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await Staff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }
 exports.registerStaffBranchM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await branchStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffBranchM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await branchStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

//Thamali stock register
 exports.registerStaffStockM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await assistantStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}
//Thamali stock login
exports.loginStaffStockM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await assistantStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 
 exports.registerStafffoodM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await chefStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}


exports.loginStafffoodM = async (req , res , next) =>{

    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await chefStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }


 //chandima
 exports.registerStaffDeliveryM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await deliveryStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffDeliveryM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await deliveryStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 exports.registerStaffSupplierM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await supplierStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffSupplierM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await supplierStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 exports.registerStaffMarketingM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await marketingStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffMarketingM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await marketingStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 const sendStaffToken = (staff , statusCode , res)=>{ //JWT get
    const token = staff.getStaffSignedToken();
    res.status(200).json({success:true , token});
}

//order Managment
exports.registerStafforderM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await orderStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStafforderM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await orderStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }
  

 
   
 
 
//Stock Management

exports.sendAssistantEmail = async (req , res , next) =>{

    const {email , description} = req.body;
    try {
        const message = `
        <h1>${description}</h1>

        <p>If any concerns , please contact : 0770113437 </p>
         `
        try {
            await sendAssistantEmail({
                to : email,
                subject : "About Assitant Informations",
                text : message
            })
            res.status(200).json({ success : true , data : "Email Sent"});
        } catch (error) {

            res.status(500).json({ success : false , data : "Email could not be sent"});

            return next(new ErrorResponse("Email could not be sent") , 500);
        }
    } catch (error) {

        next(error);
    }
}




 
//--------------------------Email Sending Section--------------------------------------------

//Marketing Management
exports.sendMarketingEmail = async (req , res , next) =>{

    const {email , description} = req.body;



    try {



        const message = `
        <h1>${description}</h1>
        <p>If any concerns , please contact : 0776135690 </p>
         `

        try {

            await sendMarketingEmail({

                to : email,

                subject : "About Campaigns",

                text : message

            })



            res.status(200).json({ success : true , data : "Email Sent"});



        } catch (error) {

            res.status(500).json({ success : false , data : "Email could not be sent"});

            return next(new ErrorResponse("Email could not be sent") , 500);



        }

    } catch (error) {

        next(error);

    }

}


//---------------------------------------Email Sending Section------------------------------------------

//Customer Management
exports.sendCustomerEmail = async (req , res , next) =>{
    const {email , description} = req.body;

    try {

        const message = `
        <h1>${description}</h1>
        <p>If any concerns , please contact : 0776135690 </p>
         `
        try {
            await sendCustomerEmail({
                to : email,
                subject : "About Complaints",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }
}

exports.sendCustomerPromotionEmail = async (req , res , next) =>{
    const {email , description} = req.body;

    try {

        const message = `
        <h1>${description}</h1>
        <p>If any concerns , please contact : 0776135690 </p>
         `
        try {
            await sendCustomerEmail({
                to : email,
                subject : "About Promotions",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }

}

//Supplier Management
exports.sendSupplierEmail = async (req , res , next) =>{

    const {email , description} = req.body;



    try {

        const message = `
         <h1>${description}</h1>
        <p>Feel free to contact : 0764477674 </p>

         `

        try {
            await sendSupplierEmail({
                to : email,
                subject : "About Complaints",
                text : message

            })

            res.status(200).json({ success : true , data : "Email Sent"});



        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }

    } catch (error) {

        next(error);

    }

}




  
//---------------------------------------Email Sending Section------------------------------------------

//Food Management
exports.sendChefEmail = async (req , res , next) =>{
    const {email , description} = req.body;

    try {

        const message = `
        <h1>${description}</h1>
        <p>If any concerns , please contact : 0774458521 </p>
         `
        try {
            await sendChefEmail({
                to : email,
                subject : "About work",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }
} 

//----------------Email sending section--------------------

 //chandima-delivery

 //-----------------------delivery email sending ---------------

 exports.sendDeliveryEmail = async (req , res , next) =>{



    const {email , description} = req.body;

     try {

     const message = `

    

    <h1>${description}</h1>

    

    <p>If any concerns , please contact : 0703945048 </p>

    

    `

    

    try {

    

    await sendDeliveryEmail({

    

    to : email,

    

    subject : "About Delivery",

    

    text : message

    

    })

    

    res.status(200).json({ success : true , data : "Email Sent"});

  } catch (error) {

    

    res.status(500).json({ success : false , data : "Email could not be sent"});

    

    return next(new ErrorResponse("Email could not be sent") , 500);

    

     }

    

    } catch (error) {

    

    next(error);

    

    }

    

    }

    //----------------------------------------------------------------//
    //----------------Branch Email sending section--------------------
    exports.sendBranchEmail = async (req , res , next) =>{
        const {email , description} = req.body;
    
        try {
    
            const message = `
            <h1>${description}</h1>
            <p>If any concerns , please contact : 0711888933 </p>
             `
            try {
                await sendBranchEmail({
                    to : email,
                    subject : "About Promotions",
                    text : message
                })
    
                res.status(200).json({ success : true , data : "Email Sent"});
    
            } catch (error) {
                res.status(500).json({ success : false , data : "Email could not be sent"});
                return next(new ErrorResponse("Email could not be sent") , 500);
    
            }
        } catch (error) {
            next(error);
        }
    
    }

//import dependencies
//seems like import packages and assigned to varibles such as Java , C , C++
//ESC6 Standard

const express = require("express"); //Fast, unopinionated, minimalist web framework for node.

const mongoose = require("mongoose");

const cors = require("cors"); /*CORS is a node.js package for providing a Connect/Express 
                                middleware that can be used to enable CORS with various options.*/

const dotenv = require("dotenv"); /*Dotenv is a zero-dependency module that loads environment variables from a
                                 .env file into process.env. Storing configuration in the environment separate 
                                 from code is based on The Twelve-Factor App methodology. */

const errorHandler = require("./middleware/error");

require("dotenv").config();  //these line is necessary for configuration .env file

const URL = process.env.MONGODB_URL;

mongoose.connect(URL , {  //define connection
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
    
const connection = mongoose.connection; //assign database connection for a constant variable

connection.once("open" , () => { //open connection for one time
    console.log("MongoDB connection was successful"); //display message in console when the connection was successful
});

const app = express();

//define a port for server
const PORT = process.env.PORT || 8070; //accually process.env.PORT is inbuilt 

app.use((cors()));
app.use(express.json()); //parse various different custom JSON types as JSON



app.listen(PORT , () => {
    console.log(`Server is up and running on port number ${PORT}`);
});

const customerRouter = require("./routes/customer.js"); //import 

app.use("/users" , customerRouter);
//chandima
const DeliveryPersonRouter = require("./routes/DeliveryPerson.js"); //import 

app.use("/deliveryperson" , DeliveryPersonRouter);

 
const AssignDeliveriesRouter = require("./routes/AssignDeliveries.js"); //import 

app.use("/assigndeliveries" , AssignDeliveriesRouter);

const assignbranches = require("./routes/ViewBranches.js"); //import 

app.use("/assignbranches" , assignbranches);
//View orders route
const  vieworders = require("./routes/ViewOrders.js"); //import 

app.use("/orderchats" , vieworders);
 
//kavi
 
const foodRouter = require("./routes/food.js"); //import 

app.use("/chefs" , foodRouter);

const shortComingRouter = require("./routes/shortcomings.js"); //import 

app.use("/shortcomings" , shortComingRouter);

const ViewUpdateRouter = require("./routes/updatefoodview.js"); //import 

app.use("/viewupdates" , ViewUpdateRouter);

const updateRouter = require("./routes/updatefood.js"); //import 

app.use("/updatefood" , updateRouter);

const viewFoodOrdRouter = require("./routes/viewfoodorders.js"); //import 

app.use("/orderchats" , viewFoodOrdRouter);



const branchRouter = require("./routes/branch.js"); //import 

app.use("/branches" , branchRouter);
//chandima edited
const AssignDeliveries = require("./routes/AssignDeliveries.js"); //import 

app.use("/AssignDeliveries" , AssignDeliveries);

const assignbranchRouter = require("./routes/assignbranch.js"); //import 

app.use("/assignbranches" , assignbranchRouter);

const branchOdersRourer = require("./routes/seeOrders.js"); //import 

app.use("/orders" , branchOdersRourer);




//
//Thmali assistant route
const assistantRouter = require("./routes/assistant.js"); //import 

app.use("/stocks" , assistantRouter);

//Thamali inventory route
const inventoryRouter = require("./routes/inventory.js")

app.use("/inventories" , inventoryRouter)

//Thamali Shortcomings route
const shortcomingRoutes = require("./routes/shortcomingViews.js")

app.use("/viewShortComings" , shortcomingRoutes)

//Thamali Request route
const requestRoute = require("./routes/request.js")

app.use("/request" , requestRoute)



const supplierRouter = require("./routes/supplier.js"); //import 
const returnsRouter = require("./routes/returns.js"); 
const displayNeedsRouter = require("./routes/displayNeeds.js")

app.use("/suppliers" , supplierRouter);
app.use("/returns" , returnsRouter);
app.use("/displayNeeds" , displayNeedsRouter);



//Raveena Promotions
const marketingRouter = require("./routes/marketing.js"); //import 

app.use("/promotions" , marketingRouter);



//Raveena New Food
const marketingfoodRouter = require("./routes/marketingfood.js"); //import 

app.use("/marketingfood" , marketingfoodRouter);

//Raveena Campaigns
const marketingcampaignRouter = require("./routes/campaign.js"); //import 

app.use("/marketingcampaign" , marketingcampaignRouter);

//Raveena displayfoods
const marketingDisplayfoodRouter = require("./routes/displayfood.js"); //import 

app.use("/status" , marketingDisplayfoodRouter);

const complaintRouter = require("./routes/complaintView");

app.use("/complaints" , complaintRouter);

const promotionViewRouter = require("./routes/promotionView");

app.use("/promotionView" , promotionViewRouter);


const orderRouter = require("./routes/order.js");//import 

app.use("/ordercomplaint" , orderRouter ); 

const orderRegisterRouter = require("./routes/orderRegister.js");//import 

app.use("/orderManager" , orderRegisterRouter ); 

const orderChatRouter = require("./routes/orderChat.js");//import 

app.use("/orderchat" , orderChatRouter ); 
//
app.use("/deliveryscreen" , require("./routes/deliveryscreen"));


//this catches front-end URL
/* http://localhost/8070/student */

app.use("/api/auth" , require("./routes/auth"));
app.use("/products" , require("./routes/product"));

//Error Handler (Should be the last piece of middleware)
app.use(errorHandler);




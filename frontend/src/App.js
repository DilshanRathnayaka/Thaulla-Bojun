import React from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

import StaffLogin from "./components/staff/StaffLogin";

import PrivateCustomerStaffRoute from "./components/routes/PrivateCustomerStaffRoute";




//Customer part

import Header from "./components/staff/customerM/Header";
import AddCustomer from "./components/staff/customerM/AddCustomer";
import Home from "./components/staff/customerM/Home";
import Footer from "./components/staff/Footer";
import DisplayCustomers from "./components/staff/customerM/DisplayCustomers"
import SocialMedia from "./components/staff/SocialMedia";
import List from "./components/staff/customerM/List"
import Edit from "./components/staff/customerM/Edit";
import CustomerLogin from "./components/staff/customerM/login/CustomerLogin";
import PrivateCustomerStaff from "./components/staff/customerM/login/PrivateCustomerStaff";
import Complaints from "./components/staff/customerM/Complaints";
import PromotionButton from "./components/staff/customerM/PromotionButton";
import PromotionButton1 from "./components/staff/customerM/PromotionButton";
import PromotionButton2 from "./components/staff/customerM/PromotionButton";
import PromotionButton3 from "./components/staff/customerM/PromotionButton";
import PromotionButton4 from "./components/staff/customerM/PromotionButton";
import PromotionButton5 from "./components/staff/customerM/PromotionButton";
import chatBot from "./components/staff/customerM/chatBot";
import chatBotPromo from "./components/staff/customerM/chatBotPromo";
import PromotionView from "./components/staff/customerM/Promotions";
import CustomerReportGenerator from "./components/staff/customerM/Customers";

//Supplier part
import PrivateSupplierManagerStaffRoute from "./components/routes/PrivateSupplierManagerStaffRoute";

import HeaderSupplier from "./components/staff/supplierM/Header";
import AddSupplier from "./components/staff/supplierM/AddSupplier";
import HomeSupplier from "./components/staff/supplierM/Home";
//import Footer from "./components/staff/Footer";
import DisplaySuppliers from "./components/staff/supplierM/DisplaySuppliers";
//import SocialMedia from "./components/staff/SocialMedia";
import Returns from "./components/staff/supplierM/Returns"
import ListSupplier from "./components/staff/supplierM/List"
import EditSupplier from "./components/staff/supplierM/Edit";
import SupplierLogin from "./components/staff/supplierM/login/SupplierLogin";
import PayButton from "./components/staff/supplierM/PayButton"
import ReqButton from "./components/staff/supplierM/RequirementsButton";
import ReqButton1 from "./components/staff/supplierM/RequirementsButton";
import ReqButton2 from "./components/staff/supplierM/RequirementsButton";
import ReqButton3 from "./components/staff/supplierM/RequirementsButton";
import ReqButton4 from "./components/staff/supplierM/RequirementsButton";
import ReqButton5 from "./components/staff/supplierM/RequirementsButton";
import ReturnsChatBot from "./components/staff/supplierM/ChatBot";
import PrivateSupplierManagerStaff from "./components/staff/supplierM/login/PrivateSupplierManagerStaff";
import DisplayNeeds from "./components/staff/supplierM/DisplayNeeds";
import SupplierReportGenerator from "./components/staff/supplierM/Suppliers";
import SupplierPayment from "./components/staff/supplierM/Payments";

 
//Chandima-Delivery Manager
import PrivateDeliveryStaffRoute from "./components/routes/PrivateDeliveryStaffRoute";

import Header_dm from "./components/staff/deliveryM/Header";
import AddDeliveryPerson from "./components/staff/deliveryM/AddDeliveryPerson";
import Home_dm from "./components/staff/deliveryM/Home";
 
import DisplayDeliveryPerson from "./components/staff/deliveryM/DisplayDeliveryPerson"
 
import List_dm from "./components/staff/deliveryM/List"
import Edit_dm from "./components/staff/deliveryM/Edit";
import AssignDeliveries from "./components/staff/deliveryM/AssignDeliveries"
import DeliveryPersonLogin from "./components/staff/deliveryM/login/DeliveryPersonLogin";
import PrivateDeliveryStaff from "./components/staff/deliveryM/login/PrivateDeliveryStaff";
import deliveryChatbot from "./components/staff/deliveryM/Chatbot";
import ViewBranches from "./components/staff/deliveryM/ViewBranches";
import ViewOrders from "./components/staff/deliveryM/ViewOrders";
import DeliveryReportGenerator from "./components/staff/deliveryM/Deliveries";
  
 

//kavi's section
import PrivateFoodManagerStaffRoute from "./components/routes/PrivateFoodManagerStaffRoute";
import Header_fm from "./components/staff/foodM/Header";
import AddChef from "./components/staff/foodM/AddChef";
import Home_fm from "./components/staff/foodM/Home";
import DisplayChefs from "./components/staff/foodM/DisplayChefs"
import List_fm from "./components/staff/foodM/List"
import Edit_fm from "./components/staff/foodM/Edit";
import FoodManagerLogin from "./components/staff/foodM/login/FoodManagerLogin";
import PrivateFoodManagerStaff from "./components/staff/foodM/login/PrivateFoodManagerStaff";
import fchatBot from "./components/staff/foodM/chatBot";
import fchatBot2 from "./components/staff/foodM/chatBot2";
import AddShortcoming from "./components/staff/foodM/AddShortcomings";
import UpdateFood from "./components/staff/foodM/UpdateFood";
import ViewFoodOrders from "./components/staff/foodM/ViewFoodOrders";
import ChefReportGenerator from "./components/staff/foodM/Chefs";

//Mithila section
import PrivateBranchStaffRoute from "./components/routes/PrivateBranchStaffRoute";

import Headerb from "./components/staff/branchM/Header";
import AddBranch from "./components/staff/branchM/AddBranch";
import ChatBotB from "./components/staff/branchM/ChatBotB";
import AssignBranch from "./components/staff/branchM/AssignBranch";
import Homeb from "./components/staff/branchM/Home";
import DisplayBranches from "./components/staff/branchM/DisplayBranches"
import Listb from "./components/staff/branchM/List"
import Editb from "./components/staff/branchM/Edit";
import BranchLogin from "./components/staff/branchM/login/BranchManagerLogin";
import emailSendingB from "./components/staff/branchM/emailSendingB"
import managers from "./components/staff/branchM/managers"
import PrivateBranchManagerStaff from "./components/staff/branchM/login/PrivateBranchManagerStaff";

//Thamali part
import PrivateAssistantStaffRoute from "./components/routes/PrivateCustomerStaffRoute";

import HeaderStock from "./components/staff/stockM/Header";
import AddAssistant from "./components/staff/stockM/AddAssistant";
import AddInventory from "./components/staff/stockM/AddInventory";
import HomeAssistant from "./components/staff/stockM/Home";
import DisplayAssistant from "./components/staff/stockM/DisplayAssistant"
import DisplayInventory from "./components/staff/stockM/DisplayInventory"
import ListAssistant from "./components/staff/stockM/List";
import ListInventory from "./components/staff/stockM/InventoryList";
import EditAssistant from "./components/staff/stockM/Edit";
import EditeInventory from "./components/staff/stockM/InventoryEdit";
import AssistantLogin from "./components/staff/stockM/login/AssistantLogin";
import PrivateAssistantStaff from "./components/staff/stockM/login/PrivateAssistantStaff";
import chatBotS from "./components/staff/stockM/chatBot";
import chatBotR from "./components/staff/stockM/chatBotS";
import ShortcomeButton from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton1 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton2 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton3 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton4 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton5 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton6 from "./components/staff/stockM/ShortcomeButton";
import ShortcomeButton7 from "./components/staff/stockM/ShortcomeButton";
import ShortcomingView from "./components/staff/stockM/shortcoming";
import AssistantReportGenerator from "./components/staff/stockM/Assistants"
import InventoryReportGenerator from "./components/staff/stockM/Inventories"





//Raveena - Marketing Manager

import PrivateMarketingManagerStaffRoute from "./components/routes/PrivateMarketingManagerStaffRoute";
import Header_MM from "./components/staff/MarketingM/Header";
import AddPromotions_MM from "./components/staff/MarketingM/AddPromotions";
import AddNewFoods_MM from "./components/staff/MarketingM/AddNewFoods";
import Campaigns_MM from "./components/staff/MarketingM/Campaigns";
import Home_MM from "./components/staff/MarketingM/Home";
import DisplayPromotions_MM from "./components/staff/MarketingM/DisplayPromotions"
import DisplayNewFood_MM from "./components/staff/MarketingM/DisplayNewFood"
import List_MM from "./components/staff/MarketingM/List"
import Edit_MM from "./components/staff/MarketingM/Edit";
import MarketingLogin from "./components/staff/MarketingM/login/MarketingLogin";
import PrivateMarketingStaff from "./components/staff/MarketingM/login/PrivateMarketingStaff";
import CampaignsButton from  "./components/staff/MarketingM/CampaignsButton";
import CampaignsButton1 from  "./components/staff/MarketingM/CampaignsButton";
import CampaignsButton2 from  "./components/staff/MarketingM/CampaignsButton";
import CampaignsButton3 from  "./components/staff/MarketingM/CampaignsButton";
import CampaignsButton4 from  "./components/staff/MarketingM/CampaignsButton";
import CampaignsButton5 from  "./components/staff/MarketingM/CampaignsButton";
import promochatBot from"./components/staff/MarketingM/chatBot";
import StatusButton from  "./components/staff/MarketingM/StatusButton";
import MarketingReportGenerator from "./components/staff/MarketingM/Marketings";



//Order part

import PrivateOrderManagerStaffRoute from "./components/routes/PrivateOrderManagerStaffRoute";
import Header_OM from "./components/staff/orderM/Header";
import AddComplaint from "./components/staff/orderM/AddComplaint";
import Home_OM from "./components/staff/orderM/Home";
import DisplayOrders_OM from "./components/staff/orderM/DisplayOrders"
import List_OM from "./components/staff/orderM/List"
import Edit_OM from "./components/staff/orderM/Edit";
import OrderManagerLogin from "./components/staff/orderM/login/orderManagerLogin";
import PrivateOrderManagerStaff from "./components/staff/orderM/login/PrivateOrderManagerStaff";
import chatbotOrder from "./components/staff/orderM/chatbotOrder";
 

//user section
import PrivateRoute from "./components/routes/PrivateRoute";


import LoginScreen from "./components/screens/Login";
import RegisterScreen from "./components/screens/Register";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";
import PrivateScreen from "./components/screens/Private";
 
 
//import AddChef from "./components/staff/foodM/AddChef";
 

//Thaulla Bojun
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import PromotionScreen from "./components/screens/PromotionScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import DeliveryScreen from "./components/screens/DeliveryScreen";

//component

 

export default function App() {
  return (
  
    <Router>
          <div>
            
            <main>
              <Switch>

                <PrivateRoute path = "/" exact component = {PrivateScreen} />
                <PrivateRoute path = "/product/:id" exact component = {ProductScreen} />
                <PrivateRoute path = "/cart" exact component = {CartScreen} />
                <PrivateRoute path = "/promotions" exact component = {PromotionScreen} />
                <PrivateRoute path = "/profiles" exact component = {ProfileScreen} />
                <PrivateRoute path = "/delivery" exact component = {DeliveryScreen} />



                <Route path="/login" exact component = {LoginScreen} />
                <Route path="/register" exact component = {RegisterScreen} />
                <Route path="/forgotpassword" exact component = {ForgotPasswordScreen} />
                <Route path="/passwordreset/:resetToken" exact component = {ResetPasswordScreen} />


              </Switch>

            </main>

            

            <SocialMedia />
            <Route path="/staff-login" exact component={StaffLogin} />
            <Route path="/staff-login-customerM" exact component={CustomerLogin} />
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {Header} /> 
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {PrivateCustomerStaff} /> 
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {Home} /> 
            <PrivateCustomerStaffRoute path = "/add-customerM" exact component = {AddCustomer} /> 
            <PrivateCustomerStaffRoute path = "/display-customerM" exact component = {DisplayCustomers} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM" exact component = {List} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM/:id/:name/:age/:gender/:address/:phone/:email" exact component = {Edit} /> 
            <PrivateCustomerStaffRoute path = "/complaints-customerM" exact component = {Complaints} />
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {PromotionButton} /> 
            <PrivateCustomerStaffRoute path = "/add-customerM" exact component = {PromotionButton1} /> 
            <PrivateCustomerStaffRoute path = "/display-customerM" exact component = {PromotionButton2} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM" exact component = {PromotionButton3} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM/:id/:name/:age/:gender/:address/:phone/:email" exact component = {PromotionButton4} /> 
            <PrivateCustomerStaffRoute path = "/complaints-customerM" exact component = {PromotionButton5} />
            <PrivateCustomerStaffRoute path = "/complaints-customerM" exact component = {chatBot} /> 
            <PrivateCustomerStaffRoute path = "/promotion-customerM" exact component = {chatBotPromo} /> 
            <PrivateCustomerStaffRoute path = "/promotion-customerM" exact component = {PromotionView} />
            <PrivateCustomerStaffRoute path = "/generate-pdf" exact component = {CustomerReportGenerator} /> 


 

             {/*chandima-Delivery Management*/} 
           { /*<Route path="/staff-login" exact component={StaffLogin} />*/}
            <Route path="/staff-login-deliveryM" exact component={DeliveryPersonLogin} />
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {Header_dm} /> 
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {PrivateDeliveryStaff} /> 
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {Home_dm} /> 
            <PrivateDeliveryStaffRoute path = "/add-deliveryM" exact component = {AddDeliveryPerson} /> 
            <PrivateDeliveryStaffRoute path = "/display-deliveryM" exact component = {DisplayDeliveryPerson} />
            <PrivateDeliveryStaffRoute path = "/assigndeliveries-deliveryM" exact component = {AssignDeliveries} />
            <PrivateDeliveryStaffRoute path = "/edit-deliveryM" exact component = {List_dm} /> 
            <PrivateDeliveryStaffRoute path = "/edit-deliveryM/:id/:name/:age/:workdate/:birthdate/:address/:phonenumber/:emailaddress/:branchcode/:photo" exact component = {Edit_dm} /> 
            <PrivateDeliveryStaffRoute path = "/assigndeliveries-deliveryM" exact component = {deliveryChatbot} />
            <PrivateDeliveryStaffRoute path = "/viewbranches-deliveryM" exact component = {ViewBranches} /> 
            <PrivateDeliveryStaffRoute path = "/vieworders-deliveryM" exact component = {ViewOrders} />
            <PrivateDeliveryStaffRoute path = "/generatedelivery-pdf" exact component = {DeliveryReportGenerator} />

 
            {/*kavi's frontend routes*/}
            <Route path="/staff-login-foodM" exact component={FoodManagerLogin} />
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Header_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {PrivateFoodManagerStaff} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Home_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/add-foodM" exact component = {AddChef} /> 
            <PrivateFoodManagerStaffRoute path = "/addSC-foodM" exact component = {AddShortcoming} /> 
            <PrivateFoodManagerStaffRoute path = "/display-foodM" exact component = {DisplayChefs} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM" exact component = {List_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM/:id/:chefid/:name/:address/:phone/:email/:exp" exact component = {Edit_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/update-foodM" exact component = {UpdateFood} />
            <PrivateFoodManagerStaffRoute path = "/update-foodM" exact component = {fchatBot}/>
            <PrivateFoodManagerStaffRoute path = "/display-foodM" exact component = {fchatBot2}/>
            <PrivateFoodManagerStaffRoute path = "/view-foodM" exact component = {ViewFoodOrders}/> 
            <PrivateFoodManagerStaffRoute path = "/generatechef-pdf" exact component = {ChefReportGenerator} />


             {/*mithila's frontend routes*/}
            <Route path="/staff-login-branchM" exact component={BranchLogin} />
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Headerb} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {PrivateBranchManagerStaff} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Homeb} /> 
            <PrivateBranchStaffRoute path = "/add-branchM" exact component = {AddBranch} /> 
            <PrivateBranchStaffRoute path = "/assign-branchM" exact component = {ChatBotB} />
            <PrivateBranchStaffRoute path = "/assign-branchM" exact component = {AssignBranch} /> 
            <PrivateBranchStaffRoute path = "/display-branchM" exact component = {DisplayBranches} /> 
            <PrivateBranchStaffRoute path = "/display-branchM" exact component = {emailSendingB} /> 
            <PrivateBranchStaffRoute path = "/GenerateReportB-branchM" exact component = {managers} />
            <PrivateBranchStaffRoute path = "/edit-branchM" exact component = {Listb} /> 
            <PrivateBranchStaffRoute path = "/edit-branchM/:id/:name/:city/:branchID/:address/:contactNo/:email/:photo" exact component = {Editb} />

             {/*Thamali - Stock Management - Assistant Route*/}

             <Route path="/staff-login-stockM" exact component={AssistantLogin} />
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {HeaderStock} /> 
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {PrivateAssistantStaff} /> 
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {HomeAssistant} /> 
            <PrivateAssistantStaffRoute path = "/add-stockM" exact component = {AddAssistant} />
            <PrivateAssistantStaffRoute path = "/addInven-stockM" exact component = {AddInventory} />
            <PrivateAssistantStaffRoute path = "/display-stockM" exact component = {DisplayAssistant} /> 
            <PrivateAssistantStaffRoute path = "/displayInven-stockM" exact component = {DisplayInventory} /> 
            <PrivateAssistantStaffRoute path = "/edit-stockM" exact component = {ListAssistant} /> 
            <PrivateAssistantStaffRoute path = "/editInven-stockM" exact component = {ListInventory} /> 
            <PrivateAssistantStaffRoute path = "/edit-stockM/:id/:name/:age/:gender/:birthdate/:address/:phone/:email/:photo" exact component = {EditAssistant} /> 

            <PrivateAssistantStaffRoute path = "/editInven-stockM/:id/:itemId/:itemName/:stock/:stockIn/:stockOut/:unitPrice/:date/:photo" exact component = {EditeInventory} /> 
            <PrivateAssistantStaffRoute path = "/display-stockM" exact component = {chatBotS} />
            <PrivateAssistantStaffRoute path = "/shortcomingViews-stockM" exact component = {chatBotR} />
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {ShortcomeButton} />
            <PrivateAssistantStaffRoute path = "/addInven-stockM" exact component = {ShortcomeButton1} />
            <PrivateAssistantStaffRoute path = "/display-stockM" exact component = {ShortcomeButton2} />
            <PrivateAssistantStaffRoute path = "/displayInven-stockM" exact component = {ShortcomeButton3} />
            <PrivateAssistantStaffRoute path = "/edit-stockM" exact component = {ShortcomeButton4} />
            <PrivateAssistantStaffRoute path = "/add-stockM" exact component = {ShortcomeButton5} />
            <PrivateAssistantStaffRoute path = "/edit-stockM/:id/:name/:age/:gender/:birthdate/:address/:phone/:email/:photo" exact component = {ShortcomeButton6} /> 
            <PrivateAssistantStaffRoute path = "/editInven-stockM/:id/:itemId/:itemName/:stock/:stockIn/:stockOut/:unitPrice/:date/:photo" exact component = {ShortcomeButton7} /> 
            <PrivateAssistantStaffRoute path = "/shortcomingViews-stockM" exact component = {ShortcomingView} /> 
            <PrivateAssistantStaffRoute path = "/generate-pdfA" exact component = {AssistantReportGenerator} /> 
            <PrivateAssistantStaffRoute path = "/generate-pdfInven" exact component = {InventoryReportGenerator} />
            

 

          {/*Supplier - Routes*/}

            <Route path="/staff-login-supplierM" exact component={SupplierLogin} />
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {HeaderSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {PrivateSupplierManagerStaff} /> 
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {HomeSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {ReqButton} /> 
            <PrivateSupplierManagerStaffRoute path = "/add-supplierM" exact component = {AddSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/add-supplierM" exact component = {ReqButton1} /> 
            <PrivateSupplierManagerStaffRoute path = "/display-supplierM" exact component = {DisplaySuppliers} /> 
            <PrivateSupplierManagerStaffRoute path = "/display-supplierM" exact component = {PayButton} />
            <PrivateSupplierManagerStaffRoute path = "/display-supplierM" exact component = {ReqButton2} />
            <PrivateSupplierManagerStaffRoute path = "/return-supplierM" exact component = {Returns} /> 
            <PrivateSupplierManagerStaffRoute path = "/return-supplierM" exact component = {ReqButton3} /> 
            <PrivateSupplierManagerStaffRoute path = "/return-supplierM" exact component = {ReturnsChatBot} />
            <PrivateSupplierManagerStaffRoute path = "/add-supplierM" exact component = {ReqButton4} /> 
            <PrivateSupplierManagerStaffRoute path = "/add-supplierM" exact component = {ReqButton5} /> 
            <PrivateSupplierManagerStaffRoute path = "/edit-supplierM" exact component = {ListSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/edit-supplierM/:id/:supplierID/:fullName/:address/:priorExperiance/:itemsPurchased" exact component = {EditSupplier} /> 
             <PrivateSupplierManagerStaffRoute path = "/displayNeeds-supplierM" exact component = {DisplayNeeds} /> 
             <PrivateSupplierManagerStaffRoute path = "/generateSuppliers-pdf" exact component = {SupplierReportGenerator} />
             
             <PrivateSupplierManagerStaffRoute path = "/payment-supplierM" exact component = {SupplierPayment} />

             {/*Raveena -Routes*/}
            
            <Route path="/staff-login-MarketingM" exact component={MarketingLogin} />
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {Header_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {PrivateMarketingStaff} /> 
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {Home_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/add-MarketingM" exact component = {AddPromotions_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/addcampaign-MarketingM" exact component = {Campaigns_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/addfood-MarketingM" exact component = {AddNewFoods_MM} />
            <PrivateMarketingManagerStaffRoute path = "/display-MarketingM" exact component = {DisplayPromotions_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/displayfood-MarketingM" exact component = {DisplayNewFood_MM }/> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM" exact component = {List_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM/:id/:Food_Item_Name/:Quantity/:Description/:Discount_Rate/:Prior_Price/:Present_Price" exact component = {Edit_MM} />
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {CampaignsButton} /> 
            <PrivateMarketingManagerStaffRoute path = "/add-MarketingM" exact component = {CampaignsButton1} /> 
            <PrivateMarketingManagerStaffRoute path = "/display-MarketingM" exact component = {CampaignsButton2} /> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM" exact component = {CampaignsButton3} /> 
            <PrivateMarketingManagerStaffRoute path = "/addfood-MarketingM" exact component = {CampaignsButton4} /> 
            <PrivateMarketingManagerStaffRoute path = "/addcampaign-MarketingM" exact component = {CampaignsButton5} /> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM/:id/:Food_Item_Name/:Quantity/:Description/:Discount_Rate/:Prior_Price/:Present_Price"  exact component = {CampaignsButton4} /> 
            <PrivateMarketingManagerStaffRoute path = "/addcampaign-MarketingM" exact component = {promochatBot} />
            <PrivateMarketingManagerStaffRoute path = "/addfood-MarketingM" exact component = {StatusButton} /> 
            <PrivateMarketingManagerStaffRoute path = "/generatePromotion-pdf" exact component = {MarketingReportGenerator} />

            
             {/*Chathura -Routes*/}
            
             <Route path="/staff-login-OrderM" exact component={OrderManagerLogin} />
            <PrivateOrderManagerStaffRoute path = "/staff-OrderM" exact component = {Header_OM} /> 
            <PrivateOrderManagerStaffRoute path = "/staff-OrderM" exact component = {PrivateOrderManagerStaff} /> 
            <PrivateOrderManagerStaffRoute path = "/staff-OrderM" exact component = {Home_OM} /> 
            <PrivateOrderManagerStaffRoute path = "/add-OrderM" exact component = {AddComplaint} />
            <PrivateOrderManagerStaffRoute path = "/display-OrderM" exact component = {chatbotOrder} />
            <PrivateOrderManagerStaffRoute path = "/display-OrderM" exact component = {DisplayOrders_OM} /> 
            <PrivateOrderManagerStaffRoute path = "/edit-OrderM" exact component = {List_OM} /> 
            <PrivateOrderManagerStaffRoute path = "/edit-OrderM/:id/:orderId/:category/:itemNumber/:customerName/:address/:contactNumber" exact component = {Edit_OM} /> 
           

            <Footer/>

          </div>

    </Router>

  
  );
}

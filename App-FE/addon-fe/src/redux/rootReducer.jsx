import { combineReducers } from "redux";
import accountReducer from "./account/accountReducer";
import loginReducer from "./auth/loginReducer";
import colorReducer from "./color/colorReducer";
import customerReducer from "./customer/customerReducer";
import customiseReducer from "./customise/customiseReducer";
import groupReducer from "./group/groupReducer";
import permissionReducer from "./permission/permissionReducer";
import sizeReducer from "./size/sizeReducer";
import productReducer from "./product/productReducer";
import invoiceReducer from "./invoice/invoiceReducer";

const rootReducer = combineReducers({
  customise: customiseReducer,
  account : accountReducer,
  color: colorReducer,
  size: sizeReducer,
  group: groupReducer,
  customer: customerReducer,
  permission: permissionReducer,
  loginAuth: loginReducer,
  product: productReducer,
  invoice: invoiceReducer,
});

export default rootReducer;
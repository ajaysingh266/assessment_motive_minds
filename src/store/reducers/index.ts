import { combineReducers } from "redux";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  products: productSlice,
});

export default rootReducer;

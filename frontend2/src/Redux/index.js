import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import dataReducer from "./Datas/reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
export const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

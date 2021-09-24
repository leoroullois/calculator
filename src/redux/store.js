import {combineReducers, createStore} from "redux";
import printReducer from "../redux/cell/reducer";
import displayReducer from "./display/reducer";


const rootReducer=combineReducers({
    print:printReducer,
    display:displayReducer
})
const store = createStore(rootReducer);
export default store;
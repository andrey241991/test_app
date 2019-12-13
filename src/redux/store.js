import { createStore, combineReducers } from "redux";
import officeReducer from "./office-reducer";

let reducers = combineReducers({
    officePage: officeReducer,
});

let store = createStore(reducers);

export default store;
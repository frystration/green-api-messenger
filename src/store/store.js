import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chatReducer from "./reducers/ChatSLice";

const rootReducer = combineReducers({
    chatReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store

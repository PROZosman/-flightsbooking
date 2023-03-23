
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import InfoSlice from "../InfoSlice/InfoSlice";

const reducer = combineReducers({
    infoUser: InfoSlice,
})


export const store = configureStore({
    reducer,
});

export default store;
















// export default Store;

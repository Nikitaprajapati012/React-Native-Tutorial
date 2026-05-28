import { configureStore } from "node_modules/@reduxjs/toolkit/dist/index.mjs";
import { counterReducer } from "src/redux/slice/CounterSlice";


export const store = configureStore({
    reducer : {
            counter:counterReducer,
    },
})
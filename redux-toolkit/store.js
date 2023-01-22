import { configureStore} from "@reduxjs/toolkit";
import bookReducer from '../redux-toolkit/counterSlice'

export const store = configureStore({
    reducer:{
        book:bookReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
})
import { createSlice} from "@reduxjs/toolkit";
import data from "../data";

const initialState = {
    data,
}

const bookSlice = createSlice({
    name:'bookmark',
    initialState,
    reducers:{
        bookmarked : (state=initialState, action) => {
        const bookmark = state.data.find((item) => item.title === action.payload)
        if(bookmark){
            bookmark.isBookmarked = !bookmark.isBookmarked
        }
            
           }
           
        },
    },
)

export const {bookmarked} = bookSlice.actions
export default bookSlice.reducer
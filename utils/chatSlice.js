import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        setChat: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const resposeSlice = createSlice({
    name: 'response',
    initialState: null,
    reducers: {
        setResponse: (state, action) => {
            return action.payload;
        },
    }
})

export const { setResponse } = resposeSlice.actions;
export default resposeSlice.reducer;

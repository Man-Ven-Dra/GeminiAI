import { createSlice } from "@reduxjs/toolkit";

const promptSlice = createSlice({
    name: 'prompt',
    initialState: null,
    reducers: {
        setPrompt: (state, action) => {
            return action.payload
        },
    }
})

export const { setPrompt } = promptSlice.actions;
export default promptSlice.reducer; 
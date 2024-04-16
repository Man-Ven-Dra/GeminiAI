import { createSlice } from "@reduxjs/toolkit";

const recentSlice = createSlice({
    name: 'recents',
    initialState: [],
    reducers: {
        setRecents: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const { setRecents } = recentSlice.actions;
export default recentSlice.reducer;
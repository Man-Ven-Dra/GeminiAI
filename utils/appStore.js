import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import responseSlice from "./responseSlice";
import promptSlice from "./promptSlice";
import recentSlice from "./recentSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        response: responseSlice,
        prompt: promptSlice,
        recents: recentSlice,
        chat: chatSlice,
    },
});

export default appStore;
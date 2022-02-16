import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "Drake Ramoray",
        email: "drakeboi@gmail.com"
    },
    reducers: {
        update: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;
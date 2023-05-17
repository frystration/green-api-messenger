import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    token: '',
    number: ''
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.id = action.payload.id
            state.token = action.payload.token
            state.number = action.payload.number
        }
    },
    extraReducers: {}
})

export default chatSlice.reducer
export const {setChat} = chatSlice.actions


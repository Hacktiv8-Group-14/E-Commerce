import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: localStorage.getItem("user"),
    admin: localStorage.getItem("admin")
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // action.payload = user token
        setUser: (state, action) => {
            localStorage.setItem("user", action.payload);
            state.user = localStorage.getItem("user")
        },
        setAdmin: (state) => {
            localStorage.setItem("admin", "isAdmin");
            state.admin = localStorage.getItem("admin")
        },
        removeLogin: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("admin");
            state.user = localStorage.getItem("user")
            state.admin = localStorage.getItem("admin")
        }
    }
})

export const { setUser, setAdmin, removeLogin } = loginSlice.actions
export default loginSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: localStorage.getItem("user"),
    userName: localStorage.getItem("username"),
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
        // action.payload = username
        setUserName: (state, action) => {
            localStorage.setItem("username", action.payload);
            state.userName = localStorage.getItem("username")
        },
        setAdmin: (state) => {
            localStorage.setItem("admin", "isAdmin");
            state.admin = localStorage.getItem("admin")
        },
        removeLogin: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("username");
            localStorage.removeItem("admin");
            state.user = null
            state.user = null
            state.admin = null
        }
    }
})

export const { setUser, setUserName, setAdmin, removeLogin } = loginSlice.actions
export default loginSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: {},
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        // action.payload = {id, username}
        addCart: (state, action) => {
            let isNotFirstUser = state.items[action.payload.username] ? true : false
            if(isNotFirstUser){
                let toggle = false
                state.items[action.payload.username].forEach(item => {
                    if(item.id === action.payload.id){
                        item.total += 1
                        toggle = true
                    }
                })
                if(!toggle){
                    state.items[action.payload.username] = [
                        ...state.items[action.payload.username], 
                        {
                            id: action.payload.id,
                            total: 1,
                            isChecked: false
                        }
                    ]
                }
            } else{
                state.items[action.payload.username] = [{
                    id: action.payload.id, 
                    total: 1, 
                    isChecked: false
                }]
            }
        },
        minCart: (state, action) => {
            state.items[action.payload.username].forEach(item => {
                if(item.id === action.payload.id){
                    item.total -= 1
                }
            })
            const filterCartItems = state.items[action.payload.username].filter(item => item.total !== 0)
            state.items[action.payload.username] = filterCartItems
            if(state.items[action.payload.username].length === 0) {
                delete state.items[action.payload.username]
            }
        },
        changeIsChecked: (state, action) => {
            state.items[action.payload.username].forEach((item) => {
                if(item.id === action.payload.id){
                    item.isChecked = !item.isChecked
                }
            })
        },
        deleteItem: (state, action) => {
            const filterCartItems = state.items[action.payload.username].filter((item) => item.id !== action.payload.id)
            state.items[action.payload.username] = filterCartItems
            if(state.items[action.payload.username].length === 0) {
                delete state.items[action.payload.username]
            }
        },
    }
})

export const { addCart, minCart, changeIsChecked, deleteItem } = cartSlice.actions
export default cartSlice.reducer
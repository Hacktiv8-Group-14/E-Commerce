import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        // action.payload = {id, username}
        addCart: (state, action) => {
            let isNotFirstUser = state.items.some(item => item.username === action.payload.username)

            if(isNotFirstUser){
                let userIndex = state.items.findIndex(item => item.username === action.payload.username)
                let toggle = false
                state.items[userIndex].cartItems.forEach(item => {
                    if(item.id === action.payload.id){
                        item.total += 1
                        toggle = true
                    }
                })
                if(!toggle){
                    state.items[userIndex].cartItems = [
                        ...state.items[userIndex].cartItems, 
                        {
                            id: action.payload.id, 
                            total: 1, 
                            isChecked: false
                        }
                    ]
                }
            } else{
                state.items = [
                    ...state.items, 
                    {
                        username: action.payload.username, 
                        cartItems: [{
                            id: action.payload.id, 
                            total: 1, 
                            isChecked: false
                        }]
                    }
                ]
            }
        },
        minCart: (state, action) => {
            let userIndex = state.items.findIndex(item => item.username === action.payload.username)
            state.items[userIndex].cartItems.forEach(item => {
                if(item.id === action.payload.id){
                    item.total -= 1
                }
            })
            const filterCartItems = state.items[userIndex].cartItems.filter(item => item.total !== 0)
            state.items[userIndex].cartItems = [...filterCartItems]
            const filterUser = state.items.filter(item => item.cartItems.length > 0)
            state.items = [...filterUser]
        },
        changeIsChecked: (state, action) => {
            state.items.forEach((item) => {
                if(item.id === action.payload){
                    item.isChecked = !item.isChecked
                }
            })
        },
        deleteItem: (state, action) => {
            const filterItems = state.items.filter((item) => item.id !== action.payload)
            state.items = [...filterItems]
        },
        // action.payload = {id: , total: }
        changeItemTotalBy: (state, action) => {
            state.items.forEach(item => {
                if(item.id === action.payload.id){
                    item.total = action.payload.total
                }
            })
        }
    }
})

export const { addCart, minCart, changeIsChecked, deleteItem, changeItemTotalBy } = cartSlice.actions
export default cartSlice.reducer
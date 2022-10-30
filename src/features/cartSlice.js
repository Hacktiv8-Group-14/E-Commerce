import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        // action.payload = id product
        addCart: (state, action) => {
            let toggle = false
            state.items.forEach((item) => {
                if(item.id === action.payload){
                    item.total += 1
                    toggle = true
                }
            })
            if(!toggle){
                state.items = [...state.items, {id: action.payload, total: 1, isChecked: false}]
            }
        },
        minCart: (state, action) => {
            state.items.forEach((item) => {
                if(item.id === action.payload){
                    item.total -= 1
                }
            })
            const filterItems = state.items.filter((item) => item.total !== 0)
            state.items = [...filterItems]
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
        }
    }
})

export const { addCart, minCart, changeIsChecked, deleteItem } = cartSlice.actions
export default cartSlice.reducer
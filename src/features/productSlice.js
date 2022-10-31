import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isPending: false,
    isSuccess: false,
    errorMessage: '',
    products: [],
    categories: []
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/')
        const responseCategories = await axios.get('https://fakestoreapi.com/products/categories')
        return [response.data, responseCategories.data]
    } catch (e) {
        throw(e)
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // action.payload = {id: , total: (total item di cart)}
        soldProduct: (state, action) => {
            state.products.forEach((product) => {
                if(product.id === action.payload.id){
                    product.productSold += action.payload.total
                    product.stock -= action.payload.total
                }
            })
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isPending = true
            state.isSuccess = false
            state.errorMessage = ''
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isPending = false
            state.isSuccess = false
            state.errorMessage = action.error.message
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            const [products, categories] = action.payload
            products.forEach((i) => {
                i.stock = 20
                i.productSold = 0
            })
            state.products = products
            state.categories = ["all category", ...categories]
            state.isSuccess = true
            state.isPending = false
            state.loading = false
            state.errorMessage = ''
        })
    }
})
export const { soldProduct } = productSlice.actions
export default productSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import productReducer from './features/ProductSlice'
export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
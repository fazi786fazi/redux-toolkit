import { configureStore } from '@reduxjs/toolkit'
import { customReducer } from './Reducter'


export const store = configureStore({
  reducer: {
    customer: customReducer,
  },
})
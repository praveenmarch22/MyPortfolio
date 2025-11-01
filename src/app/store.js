import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// Use the combined root reducer so all feature slices are available on state.
export const store = configureStore({
  reducer: rootReducer,
})
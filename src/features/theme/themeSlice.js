import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light', // 'light' | 'dark'
  platform: 'mac', // 'mac' | 'ios'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setPlatform(state, action) {
      state.platform = action.payload
    },
    setMode(state, action) {
      state.mode = action.payload
    },
  },
})

export const { toggleMode, setPlatform, setMode } = themeSlice.actions
export default themeSlice.reducer

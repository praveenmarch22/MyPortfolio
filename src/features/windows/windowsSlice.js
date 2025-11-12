import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  windows: {}, // keyed by instanceId: { x,y,w,h,zIndex }
}

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    createWindow(state, action) {
      const { instanceId, rect } = action.payload
      state.windows[instanceId] = { ...rect }
    },
    updateWindow(state, action) {
      const { instanceId, rect } = action.payload
      if (!state.windows[instanceId]) return
      state.windows[instanceId] = { ...state.windows[instanceId], ...rect }
    },
    removeWindow(state, action) {
      const instanceId = action.payload
      delete state.windows[instanceId]
    },
  },
})

export const { createWindow, updateWindow, removeWindow } = windowsSlice.actions
export default windowsSlice.reducer

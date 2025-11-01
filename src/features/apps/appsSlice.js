import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openApps: [], // array of {id, name, instanceId}
  minimized: {},
  maximized: {},
  zIndexCounter: 1,
}

const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    openApp(state, action) {
      const app = action.payload
      state.openApps.push(app)
      state.zIndexCounter += 1
    },
    closeApp(state, action) {
      const instanceId = action.payload
      state.openApps = state.openApps.filter(a => a.instanceId !== instanceId)
      delete state.minimized[instanceId]
      delete state.maximized[instanceId]
    },
    minimizeApp(state, action) {
      const instanceId = action.payload
      state.minimized[instanceId] = true
    },
    maximizeApp(state, action) {
      const instanceId = action.payload
      state.maximized[instanceId] = true
    },
    bringToFront(state, action) {
      state.zIndexCounter += 1
      const instanceId = action.payload
      const win = state.openApps.find(a => a.instanceId === instanceId)
      if (win) win.zIndex = state.zIndexCounter
    },
  },
})

export const { openApp, closeApp, minimizeApp, maximizeApp, bringToFront } = appsSlice.actions
export default appsSlice.reducer

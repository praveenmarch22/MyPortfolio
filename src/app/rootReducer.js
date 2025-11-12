import { combineReducers } from 'redux'
import counterReducer from '../features/counter/counterSlice'
import appsReducer from '../features/apps/appsSlice'
import themeReducer from '../features/theme/themeSlice'
import windowsReducer from '../features/windows/windowsSlice'
import deviceReducer from '../features/device/deviceSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  apps: appsReducer,
  theme: themeReducer,
  windows: windowsReducer,
  device: deviceReducer,
})

export default rootReducer

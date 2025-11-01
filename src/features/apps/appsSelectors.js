export const selectOpenApps = state => state.apps.openApps
export const selectIsMinimized = (state, instanceId) => !!state.apps.minimized[instanceId]
export const selectZIndexCounter = state => state.apps.zIndexCounter

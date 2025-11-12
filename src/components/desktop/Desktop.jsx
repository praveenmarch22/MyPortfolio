import React from 'react'
import Wallpaper from '../shared/Wallpaper'

export default function Desktop({ children }) {
  return (
    <div className="desktop-root">
      <Wallpaper />
      {children}
    </div>
  )
}

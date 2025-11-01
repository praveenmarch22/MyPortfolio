import React from 'react'
import './wallpaper.css'

export default function Wallpaper(){
  // Full-bleed background used by both desktop (macOS) and mobile (iOS) modes.
  // The visual is implemented in CSS to keep markup minimal and performant.
  return (
    <div className="wallpaper" aria-hidden>
      <div className="wallpaper__layer wallpaper__layer--base" />
      <div className="wallpaper__layer wallpaper__layer--accent" />
      <div className="wallpaper__noise" />
    </div>
  )
}

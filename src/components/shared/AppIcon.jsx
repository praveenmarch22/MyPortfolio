import React from 'react'

export default function AppIcon({ name, onClick }){
  return (
    <button className="app-icon" onClick={onClick}>{name}</button>
  )
}

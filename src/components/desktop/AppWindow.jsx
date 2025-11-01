import React from 'react'

export default function AppWindow({ children, title }) {
  return (
    <div className="app-window">
      <div className="titlebar">{title}</div>
      <div className="content">{children}</div>
    </div>
  )
}

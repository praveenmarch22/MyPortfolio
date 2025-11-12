import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from '../../features/theme/themeSlice'
import { selectThemeMode } from '../../features/theme/themeSelectors'

export default function ThemeToggle(){
  const mode = useSelector(selectThemeMode)
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(toggleMode())}>
      Theme: {mode}
    </button>
  )
}

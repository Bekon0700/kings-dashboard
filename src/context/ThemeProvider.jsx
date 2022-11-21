import React, { useEffect } from 'react'
import { useState } from 'react'

export const themeContext = React.createContext()

const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('')

    useEffect(() => {
      const m = localStorage.getItem('modeKey')
      setMode(m)
      m == 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [])

    useEffect(() => {
      mode == 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [mode])
    
    

    const setModeLocalStorage = (modeName) => {
        setMode(modeName)
        localStorage.setItem('modeKey', modeName)
    }

    const value = {
        mode, 
        setModeLocalStorage
    }

  return (
    <themeContext.Provider value={value}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
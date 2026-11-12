import { useState, createContext, useContext } from 'react'
import './App.css'

const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext value={{ theme, toggle }}>
      <Page />
    </ThemeContext>
  )
}

function Page() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme}>
      <h1>My Site</h1>
      <Toolbar />
    </main>
  )
}

function Toolbar() {
  return (
    <nav>
      <ThemeButton />
    </nav>
  )
}

function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <button onClick={toggle}>
      Theme: {theme}
    </button>
  )
}

export default App

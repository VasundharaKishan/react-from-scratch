import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
    </ThemeProvider>
  )
}

export default App

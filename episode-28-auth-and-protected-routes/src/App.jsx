import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  Outlet,
} from 'react-router'
import { useAuth } from './AuthContext.jsx'

function Home() {
  return <h1>Home</h1>
}

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    login('Asha')
    navigate('/dashboard')
  }

  return (
    <button onClick={handleLogin}>Log in as Asha</button>
  )
}

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Log out</button>
    </>
  )
}

function Protected() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" />
  return <Outlet />
}

function App() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

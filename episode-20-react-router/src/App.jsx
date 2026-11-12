import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About us</h1>
}

function User() {
  const { id } = useParams()
  return <h1>User number {id}</h1>
}

function NotFound() {
  return <h1>404: Page not found</h1>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/7">User 7</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

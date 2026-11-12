import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const unread = 0

  return (
    <>
      <h1>My App</h1>
      {isLoggedIn ? (
        <p>Welcome back, Kishan!</p>
      ) : (
        <p>Please log in.</p>
      )}
      {unread > 0 && <p>{unread} new messages</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  )
}

export default App

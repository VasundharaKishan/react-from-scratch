import { useState, useEffect } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function loadUsers() {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error('Server error')
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) {
    return (
      <>
        <p>Something went wrong: {error}</p>
        <button onClick={loadUsers}>Try again</button>
      </>
    )
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App

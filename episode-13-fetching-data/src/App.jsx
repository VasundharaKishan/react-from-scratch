import { useState, useEffect } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(URL)
      const data = await response.json()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return (
    <>
      <h1>Users</h1>
      <p>{users.length} users loaded</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App

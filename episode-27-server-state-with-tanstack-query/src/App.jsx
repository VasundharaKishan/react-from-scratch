import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const URL = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers() {
  const response = await fetch(URL)
  if (!response.ok) throw new Error('Server error')
  return response.json()
}

function Users() {
  const { data, isPending, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

function App() {
  const [show, setShow] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Users</h1>
      <button onClick={() => setShow(!show)}>
        Show / hide
      </button>
      {show && <Users />}
    </QueryClientProvider>
  )
}

export default App

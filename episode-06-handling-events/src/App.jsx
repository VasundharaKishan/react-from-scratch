import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const [name, setName] = useState('')

  function handleLike() {
    setLikes(likes + 1)
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <>
      <h1>Events</h1>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={() => setLikes(0)}>Reset</button>
      <input onChange={handleChange} />
      <p>Hello, {name}</p>
    </>
  )
}

export default App

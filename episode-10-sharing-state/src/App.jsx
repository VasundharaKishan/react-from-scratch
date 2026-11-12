import { useState } from 'react'
import Header from './Header.jsx'
import LikeButton from './LikeButton.jsx'

function App() {
  const [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  return (
    <>
      <Header likes={likes} />
      <LikeButton likes={likes} onLike={handleLike} />
      <LikeButton likes={likes} onLike={handleLike} />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [following, setFollowing] = useState(false)

  return (
    <div className="card">
      <h2 style={{ color: following ? 'green' : 'black' }}>
        Asha
      </h2>
      <p>Designer</p>
      <button
        className={following ? 'btn active' : 'btn'}
        onClick={() => setFollowing(!following)}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default App

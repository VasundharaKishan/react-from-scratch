import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const clicks = useRef(0)

  function addRef() {
    clicks.current = clicks.current + 1
  }

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {clicks.current}</p>
      <button onClick={() => setCount(count + 1)}>
        State +1
      </button>
      <button onClick={addRef}>Ref +1</button>
    </>
  )
}

export default App

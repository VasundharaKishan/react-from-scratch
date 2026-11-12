import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function addOne() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={addOne}>Add one</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

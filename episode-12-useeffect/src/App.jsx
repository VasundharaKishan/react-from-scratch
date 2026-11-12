import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count])

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <>
      <h1>Timer: {seconds}s</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </>
  )
}

export default App

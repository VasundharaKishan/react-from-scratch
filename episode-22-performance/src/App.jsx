import { useState, memo, useCallback } from 'react'

function slowTotal() {
  let total = 0
  for (let i = 0; i < 300000000; i++) total++
  return total
}

function Report({ onClear }) {
  console.log('Report rendered')

  return (
    <>
      <p>Total: {slowTotal()}</p>
      <button onClick={onClear}>Clear name</button>
    </>
  )
}

const MemoReport = memo(Report)

function App() {
  const [name, setName] = useState('')

  const handleClear = useCallback(() => {
    setName('')
  }, [])

  return (
    <>
      <input
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
      <MemoReport onClear={handleClear} />
    </>
  )
}

export default App

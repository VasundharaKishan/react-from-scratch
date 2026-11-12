import { useState, type ChangeEvent } from 'react'

type CardProps = {
  name: string
  years: number
  role?: string
}

function Card({ name, years, role = 'Member' }: CardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <small>Next year: {years + 1} years</small>
    </div>
  )
}

function App() {
  const [likes, setLikes] = useState(0)
  const [query, setQuery] = useState('')

  function handleChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setQuery(e.target.value)
  }

  return (
    <>
      <Card name="Asha" years={8} role="Designer" />
      <Card name="Liam" years={2} />
      <button onClick={() => setLikes(likes + 1)}>
        Likes: {likes}
      </button>
      <input value={query} onChange={handleChange} />
    </>
  )
}

export default App

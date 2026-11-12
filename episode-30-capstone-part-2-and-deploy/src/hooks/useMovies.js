import { useEffect, useState } from 'react'

function useMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch('/movies.json')
        if (!response.ok) {
          throw new Error('Could not load movies')
        }
        setMovies(await response.json())
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { movies, loading, error }
}

export default useMovies

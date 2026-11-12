import { useState } from 'react'
import useMovies from '../hooks/useMovies.js'
import MovieCard from '../components/MovieCard.jsx'

function Browse() {
  const { movies, loading, error } = useMovies()
  const [search, setSearch] = useState('')

  if (loading) return <p>Loading movies...</p>
  if (error) return <p>{error}</p>

  const visible = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1>Browse</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies"
      />
      {visible.length === 0 && <p>No movies match.</p>}
      <div className="grid">
        {visible.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default Browse

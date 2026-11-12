import { useParams, useNavigate } from 'react-router'
import useMovies from '../hooks/useMovies.js'
import { useWatchlist } from '../context/WatchlistContext.jsx'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movies, loading } = useMovies()
  const { ids, toggle } = useWatchlist()

  if (loading) return <p>Loading...</p>

  const movie = movies.find((m) => m.id === Number(id))
  if (!movie) return <p>Movie not found.</p>

  const saved = ids.includes(movie.id)

  return (
    <>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{movie.title}</h1>
      <p>{movie.year} · {movie.genre}</p>
      <p>{movie.about}</p>
      <button onClick={() => toggle(movie.id)}>
        {saved ? 'Remove from my list' : 'Add to my list'}
      </button>
    </>
  )
}

export default MovieDetail

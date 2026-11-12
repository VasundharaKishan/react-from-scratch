import { useParams, useNavigate } from 'react-router'
import useMovies from '../hooks/useMovies.js'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movies, loading } = useMovies()

  if (loading) return <p>Loading...</p>

  const movie = movies.find((m) => m.id === Number(id))
  if (!movie) return <p>Movie not found.</p>

  return (
    <>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{movie.title}</h1>
      <p>{movie.year} · {movie.genre}</p>
      <p>{movie.about}</p>
    </>
  )
}

export default MovieDetail

import { Link } from 'react-router'

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="card">
      <h3>{movie.title}</h3>
      <p>{movie.year} · {movie.genre}</p>
    </Link>
  )
}

export default MovieCard

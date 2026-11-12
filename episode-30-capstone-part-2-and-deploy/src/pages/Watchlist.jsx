import { Link } from 'react-router'
import useMovies from '../hooks/useMovies.js'
import { useWatchlist } from '../context/WatchlistContext.jsx'
import MovieCard from '../components/MovieCard.jsx'

function Watchlist() {
  const { movies, loading } = useMovies()
  const { ids } = useWatchlist()

  if (loading) return <p>Loading...</p>

  const saved = movies.filter((movie) => ids.includes(movie.id))

  if (saved.length === 0) {
    return (
      <>
        <h1>My list</h1>
        <p>Your list is empty.</p>
        <Link to="/">Find something to watch</Link>
      </>
    )
  }

  return (
    <>
      <h1>My list</h1>
      <div className="grid">
        {saved.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default Watchlist

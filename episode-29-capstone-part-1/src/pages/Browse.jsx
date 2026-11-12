import useMovies from '../hooks/useMovies.js'
import MovieCard from '../components/MovieCard.jsx'

function Browse() {
  const { movies, loading, error } = useMovies()

  if (loading) return <p>Loading movies...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <h1>Browse</h1>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default Browse

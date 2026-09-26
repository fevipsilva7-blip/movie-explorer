import MovieCard from './MovieCard.jsx';

export default function MovieGrid({ movies, loading, error, onSelect }) {
  if (loading) {
    return <p className="state-message">Carregando filmes...</p>;
  }

  if (error) {
    return <p className="state-message state-message--error">{error}</p>;
  }

  if (movies.length === 0) {
    return <p className="state-message">Nenhum filme encontrado. Tente outra busca.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}

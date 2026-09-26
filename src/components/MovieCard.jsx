import { IMAGE_BASE } from '../api/tmdb.js';

export default function MovieCard({ movie, onSelect }) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—';

  return (
    <button className="movie-card" onClick={() => onSelect(movie.id)}>
      {movie.poster_path ? (
        <img src={`${IMAGE_BASE}${movie.poster_path}`} alt={`Pôster de ${movie.title}`} loading="lazy" />
      ) : (
        <div className="movie-card__placeholder">Sem imagem</div>
      )}
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        <span>{year} · ⭐ {movie.vote_average?.toFixed(1) ?? '—'}</span>
      </div>
    </button>
  );
}

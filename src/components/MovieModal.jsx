import { useEffect, useState } from 'react';
import { getMovieDetails, BACKDROP_BASE } from '../api/tmdb.js';

export default function MovieModal({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getMovieDetails(movieId)
      .then((data) => {
        if (!cancelled) setMovie(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [movieId]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">✕</button>

        {error && <p className="state-message state-message--error">{error}</p>}

        {!error && !movie && <p className="state-message">Carregando detalhes...</p>}

        {movie && (
          <>
            {movie.backdrop_path && (
              <img
                className="modal__backdrop"
                src={`${BACKDROP_BASE}${movie.backdrop_path}`}
                alt=""
              />
            )}
            <div className="modal__body">
              <h2>{movie.title}</h2>
              <p className="modal__meta">
                {movie.release_date?.slice(0, 4)} · {movie.runtime} min · ⭐ {movie.vote_average?.toFixed(1)}
              </p>
              <p className="modal__genres">
                {movie.genres?.map((g) => g.name).join(' · ')}
              </p>
              <p>{movie.overview || 'Sem sinopse disponível.'}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

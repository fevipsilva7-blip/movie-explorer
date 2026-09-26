import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import MovieModal from './components/MovieModal.jsx';
import { useDebounce } from './hooks/useDebounce.js';
import { searchMovies, getTrendingMovies } from './api/tmdb.js';

export default function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const request = debouncedQuery.trim()
      ? searchMovies(debouncedQuery.trim())
      : getTrendingMovies();

    request
      .then((data) => setMovies(data.results ?? []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Descubra filmes em alta ou busque pelo título que quiser.</p>
        <SearchBar value={query} onChange={setQuery} />
      </header>

      <main>
        <h2 className="section-title">
          {debouncedQuery.trim() ? `Resultados para "${debouncedQuery}"` : 'Em alta esta semana'}
        </h2>
        <MovieGrid movies={movies} loading={loading} error={error} onSelect={setSelectedId} />
      </main>

      {selectedId && (
        <MovieModal movieId={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
}

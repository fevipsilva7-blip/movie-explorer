const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const IMAGE_BASE = 'https://image.tmdb.org/t/p/w342';
export const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w780';

async function request(path) {
  if (!TOKEN || TOKEN === 'cole_seu_token_aqui') {
    throw new Error(
      'Token do TMDB não configurado. Copie .env.example para .env e cole seu token (veja o README).'
    );
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro na API do TMDB: ${response.status}`);
  }

  return response.json();
}

export function searchMovies(query, page = 1) {
  const params = new URLSearchParams({ query, page, language: 'pt-BR', include_adult: 'false' });
  return request(`/search/movie?${params}`);
}

export function getTrendingMovies() {
  const params = new URLSearchParams({ language: 'pt-BR' });
  return request(`/trending/movie/week?${params}`);
}

export function getMovieDetails(id) {
  const params = new URLSearchParams({ language: 'pt-BR', append_to_response: 'credits' });
  return request(`/movie/${id}?${params}`);
}

#  Movie Explorer

App em React que consome a **API pública do TMDB** (The Movie Database) para buscar filmes e ver detalhes: sinopse, gêneros, duração e nota.

##  Funcionalidades

- Lista de filmes em alta na semana (carregada automaticamente)
- Busca por título com debounce (não dispara uma requisição a cada tecla)
- Modal de detalhes com sinopse, gêneros, duração e nota
- Estados de carregamento, erro e "nenhum resultado"
- Tratamento de erro se o token da API não estiver configurado

##  Configurando a API (obrigatório)

1. Crie uma conta gratuita em [themoviedb.org/signup](https://www.themoviedb.org/signup)
2. Vá em **Configurações → API** e copie o **"API Read Access Token"** (token v4, começa com `eyJ...`)
3. Copie o arquivo `.env.example` para `.env`
4. Cole o token na variável `VITE_TMDB_TOKEN`

## 🔗 Demo

Veja o projeto funcionando: [movie-explorer2-seven.vercel.app](https://movie-explorer2-seven.vercel.app/)

## Como rodar localmente

1. Clone o repositório
2. Rode `npm install`
3. Configure o `.env` com seu token da TMDB (veja `.env.example`)
4. Rode `npm run dev`
5. Acesse http://localhost:5173 no navegador

##  Tecnologias

- React 18 (hooks: `useState`, `useEffect`, hook customizado `useDebounce`)
- Vite
- Fetch API + variáveis de ambiente (`import.meta.env`)
- TMDB API v3

##  Estrutura

```
movie-explorer/
├── src/
│   ├── api/
│   │   └── tmdb.js
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── MovieModal.jsx
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## 💡 Próximos passos

- Paginação nos resultados de busca
- Filtro por gênero
- Lista de favoritos salva no localStorage

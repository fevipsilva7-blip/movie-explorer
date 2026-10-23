# Movie Explorer

> App em React para descobrir filmes em alta e buscar por título, com sinopse, gêneros, duração e nota, usando a API pública do TMDB.

[![Demo](https://img.shields.io/badge/Demo-ao%20vivo-00C2B8?style=for-the-badge&logo=vercel&logoColor=white)](https://movie-explorer2-seven.vercel.app/)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-007BFF?style=for-the-badge)

<!-- Quando tiver um print ou GIF, salve em docs/preview.png e descomente a linha abaixo:
![Preview do Movie Explorer](docs/preview.png)
-->

---

##  Sobre o projeto

Projeto criado para praticar o consumo de uma API REST externa com React: requisições assíncronas, busca com debounce, tratamento de estados (carregando, erro, sem resultados) e componentização da interface.

###  Funcionalidades

- Lista de filmes em alta na semana, carregada automaticamente
- Busca por título com **debounce** (não dispara uma requisição a cada tecla)
- Modal de detalhes com sinopse, gêneros, duração e nota
- Estados de carregamento, erro e "nenhum resultado"
- Tratamento de erro quando o token da API não está configurado

---

##  Tecnologias

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB_API-01B4E4?style=flat-square&logo=themoviedatabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

- **React 18** com hooks (`useState`, `useEffect`) e hook customizado `useDebounce`
- **Vite** como bundler e servidor de desenvolvimento
- **Fetch API** e variáveis de ambiente (`import.meta.env`)
- **TMDB API v3**

---

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [Git](https://git-scm.com/)
- Uma conta gratuita no TMDB (passo 1 abaixo)

### Passo a passo

**1. Obtenha o token da API**

1. Crie uma conta gratuita em [themoviedb.org/signup](https://www.themoviedb.org/signup)
2. Vá em **Configurações → API** e copie o **"API Read Access Token"** (token v4, começa com `eyJ...`)

**2. Rode o projeto**

```bash
# Clone o repositório
git clone https://github.com/fevipsilva7-blip/movie-explorer.git

# Entre na pasta
cd movie-explorer

# Instale as dependências
npm install

# Crie o .env a partir do exemplo
cp .env.example .env
```

**3. Configure o token**

Abra o arquivo `.env` e cole o token:

```env
VITE_TMDB_TOKEN=cole_seu_token_aqui
```

**4. Inicie o app**

```bash
npm run dev
```

Acesse **http://localhost:5173** no navegador.

> **Sobre segurança:** como o app roda inteiro no navegador (sem back-end), o token de leitura do TMDB fica visível no código enviado ao navegador. Ele só permite consultar dados públicos, mas por isso use um token criado só para este projeto. Uma evolução possível é colocar uma função serverless entre o app e a API para esconder o token.

### Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |

---

## Estrutura de pastas

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

---

## Próximos passos

- [ ] Paginação nos resultados de busca
- [ ] Filtro por gênero
- [ ] Lista de favoritos salva no `localStorage`
- [ ] Migrar para TypeScript

---

## Autor

**Felipe Rodrigues**
[LinkedIn](https://www.linkedin.com/in/felipe-rodrigues-da-silvaa) · [Portfólio](https://portfolio-site-five-jet-79.vercel.app/) · [GitHub](https://github.com/fevipsilva7-blip)

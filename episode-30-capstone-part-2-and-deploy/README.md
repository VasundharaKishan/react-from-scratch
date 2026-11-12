# Episode 30: Capstone, Part 2 and Deploy

Final code from this episode of React from Scratch.

Capstone, part 2: the finished app. Copy both `src` and `public`. `public/_redirects` is the single-page-app fallback for Netlify; `vercel.json` is the same for Vercel and goes in the project root.

## Run it

```
npm create vite@latest watchlist -- --template react
cd watchlist
npm install
npm install react-router
```

Copy the files from this folder over the ones in the new project, then run `npm run dev`.

## Files

- `public/_redirects`
- `public/movies.json`
- `src/App.jsx`
- `src/components/Layout.jsx`
- `src/components/MovieCard.jsx`
- `src/context/WatchlistContext.jsx`
- `src/hooks/useLocalStorage.js`
- `src/hooks/useMovies.js`
- `src/index.css`
- `src/main.jsx`
- `src/pages/Browse.jsx`
- `src/pages/MovieDetail.jsx`
- `src/pages/NotFound.jsx`
- `src/pages/Watchlist.jsx`
- `vercel.json`

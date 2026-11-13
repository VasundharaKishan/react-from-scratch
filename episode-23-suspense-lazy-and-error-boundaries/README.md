# Episode 23: Suspense, lazy and Error Boundaries

Final code from this episode of React from Scratch.

The page shows "Profile failed." on purpose: `user` is set to `null` so that Profile crashes and the error boundary catches it, as in the episode. The browser console logs that error; that is expected. Change `user` to `{ name: 'Asha' }` to see the working profile.

## Run it

```
npm create vite@latest my-first-app -- --template react
cd my-first-app
npm install
npm install react-error-boundary
```

Copy the files from this folder over the ones in the new project, then run `npm run dev`.

## Files

- `src/App.jsx`
- `src/Chart.jsx`
- `src/Profile.jsx`

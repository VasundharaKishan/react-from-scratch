# Episode 26: Testing Components

Final code from this episode of React from Scratch.

Copy `vite.config.js` to the project root and the `src` files into `src`. Add `"test": "vitest"` to the scripts in package.json, then run `npm test`.

## Run it

```
npm create vite@latest my-first-app -- --template react
cd my-first-app
npm install
npm install -D vitest jsdom @testing-library/react
npm install -D @testing-library/jest-dom @testing-library/user-event
```

Copy the files from this folder over the ones in the new project, then run `npm run dev`.

## Files

- `src/App.jsx`
- `src/Counter.jsx`
- `src/Counter.test.jsx`
- `src/setupTests.js`
- `vite.config.js`

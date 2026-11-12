import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const WatchlistContext = createContext(null)

export function WatchlistProvider({ children }) {
  const [ids, setIds] = useLocalStorage('watchlist', [])

  function toggle(id) {
    setIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    )
  }

  return (
    <WatchlistContext value={{ ids, toggle }}>
      {children}
    </WatchlistContext>
  )
}

export function useWatchlist() {
  return useContext(WatchlistContext)
}

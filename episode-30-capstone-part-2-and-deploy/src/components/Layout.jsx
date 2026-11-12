import { NavLink, Outlet } from 'react-router'
import { useWatchlist } from '../context/WatchlistContext.jsx'

function Layout() {
  const { ids } = useWatchlist()

  return (
    <>
      <nav>
        <strong>Watchlist</strong>
        <NavLink to="/" end>Browse</NavLink>
        <NavLink to="/watchlist">
          My list ({ids.length})
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

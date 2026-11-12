import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <nav>
        <strong>Watchlist</strong>
        <NavLink to="/" end>Browse</NavLink>
        <NavLink to="/watchlist">My list</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

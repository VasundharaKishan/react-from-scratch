import { useState, lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Profile from './Profile.jsx'

const Chart = lazy(() => import('./Chart.jsx'))

const user = null

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Dashboard</h1>
      <ErrorBoundary fallback={<p>Profile failed.</p>}>
        <Profile user={user} />
      </ErrorBoundary>
      <button onClick={() => setShow(true)}>
        Show chart
      </button>
      {show && (
        <Suspense fallback={<p>Loading chart...</p>}>
          <Chart />
        </Suspense>
      )}
    </>
  )
}

export default App

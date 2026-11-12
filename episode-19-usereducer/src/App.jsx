import { useReducer } from 'react'

function cartReducer(cart, action) {
  switch (action.type) {
    case 'added':
      if (cart.length >= 5) return cart
      return [...cart, action.name]
    case 'removed':
      return cart.filter((n) => n !== action.name)
    case 'cleared':
      return []
    default:
      throw new Error('Unknown action: ' + action.type)
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, [])

  function add(name) {
    dispatch({ type: 'added', name })
  }

  function remove(name) {
    dispatch({ type: 'removed', name })
  }

  function clear() {
    dispatch({ type: 'cleared' })
  }

  return (
    <>
      <h1>Cart ({cart.length})</h1>
      <button onClick={() => add('Apple')}>
        + Apple
      </button>
      <button onClick={() => add('Bread')}>
        + Bread
      </button>
      <button onClick={() => remove('Apple')}>
        - Apple
      </button>
      <button onClick={clear}>Clear</button>
      <p>{cart.join(', ')}</p>
    </>
  )
}

export default App

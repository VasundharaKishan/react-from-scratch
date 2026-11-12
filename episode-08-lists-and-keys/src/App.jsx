function App() {
  const items = [
    { id: 1, name: 'Milk', qty: 2 },
    { id: 2, name: 'Bread', qty: 1 },
    { id: 3, name: 'Eggs', qty: 12 },
  ]

  return (
    <>
      <h1>Shopping List</h1>
      {items.length === 0 && <p>Your list is empty</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

function App() {
  const name = 'Kishan'
  const age = 30
  const hint = 'Your name here'

  return (
    <>
      <h1 style={{ color: 'purple' }}>My Profile</h1>
      <hr />
      {/* my details */}
      <p className="tagline">Learning React</p>
      <p>Name: {name.toUpperCase()}</p>
      <p>Next year I will be {age + 1}</p>
      <input placeholder={hint} />
    </>
  )
}

export default App

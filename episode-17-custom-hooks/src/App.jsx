import useLocalStorage from './useLocalStorage.js'
import useToggle from './useToggle.js'

function App() {
  const [dark, toggleDark] = useToggle(false)
  const [open, toggleOpen] = useToggle(false)
  const [name, setName] = useLocalStorage('name', '')

  return (
    <>
      <h1>{dark ? 'Dark mode' : 'Light mode'}</h1>
      <button onClick={toggleDark}>Switch theme</button>
      <button onClick={toggleOpen}>Details</button>
      {open && <p>Here are the details.</p>}
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </>
  )
}

export default App

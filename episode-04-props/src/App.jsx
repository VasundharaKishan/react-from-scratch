import Header from './Header.jsx'
import Card from './Card.jsx'

function App() {
  return (
    <>
      <Header>Dream Team</Header>
      <Card name="Kishan" role="Tech Lead" years={8} />
      <Card name="Asha" role="Designer" years={5} />
      <Card name="Liam" years={2} />
    </>
  )
}

export default App

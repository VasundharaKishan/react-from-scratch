function Card({ name, role = 'Team member', years }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <small>Next year: {years + 1} years</small>
    </div>
  )
}

export default Card

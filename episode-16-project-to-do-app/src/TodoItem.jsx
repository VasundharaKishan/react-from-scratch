function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.done ? 'done' : ''}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>x</button>
    </li>
  )
}

export default TodoItem

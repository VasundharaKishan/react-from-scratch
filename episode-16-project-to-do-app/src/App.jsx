import { useState, useEffect } from 'react'
import './App.css'
import AddTodo from './AddTodo.jsx'
import TodoItem from './TodoItem.jsx'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    const todo = { id: Date.now(), text, done: false }
    setTodos([...todos, todo])
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const doneCount = todos.filter((t) => t.done).length

  return (
    <>
      <h1>My To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      {todos.length === 0 && <p>Nothing to do. Enjoy!</p>}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      <p>{doneCount} of {todos.length} done</p>
    </>
  )
}

export default App

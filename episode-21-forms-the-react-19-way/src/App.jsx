import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

async function subscribe(prevState, formData) {
  const email = formData.get('email')
  await new Promise((r) => setTimeout(r, 1000))
  if (!email.includes('@')) {
    return { error: 'Please enter a valid email' }
  }
  return { message: 'Thanks, ' + email + '!' }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending}>
      {pending ? 'Sending...' : 'Subscribe'}
    </button>
  )
}

function App() {
  const [state, formAction] = useActionState(
    subscribe,
    {}
  )

  return (
    <form action={formAction}>
      <h1>Newsletter</h1>
      <input name="email" placeholder="Email" />
      <SubmitButton />
      {state.error && <p>{state.error}</p>}
      {state.message && <p>{state.message}</p>}
    </form>
  )
}

export default App

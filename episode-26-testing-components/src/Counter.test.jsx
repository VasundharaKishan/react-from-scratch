import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter.jsx'

test('starts at zero', () => {
  render(<Counter />)
  expect(screen.getByText('Count: 0')).toBeInTheDocument()
})

test('adds one when the button is clicked', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  await user.click(screen.getByRole('button', { name: 'Add one' }))

  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})

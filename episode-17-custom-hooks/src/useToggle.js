import { useState } from 'react'

function useToggle(initial) {
  const [on, setOn] = useState(initial)

  function toggle() {
    setOn(!on)
  }

  return [on, toggle]
}

export default useToggle

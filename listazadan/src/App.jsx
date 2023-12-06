import { useState } from 'react'
import Title from './Title'
import Welcome from './Welcome'

function App() {
  const [start, setStart] = useState(false)
  return (
    <>
        {
          !start && <Welcome startOnClick={setStart} />
        }
        {
          start && <Title></Title>
        }
    </>
  )
}

export default App

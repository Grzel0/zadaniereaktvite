import { useState } from 'react'
import Welcome from './Welcome'
import TaskList from './Tasklist'

function App() {
  const [start, setStart] = useState(false)
  return (
    <>
        {
          !start && <Welcome startOnClick={setStart} />
        }
        {
          start && <TaskList />
        }
        
    </>
  )
}

export default App

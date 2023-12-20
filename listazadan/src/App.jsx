import { useState } from 'react'
import Welcome from './Welcome'
import TaskList from './Tasklist'
import './styles.css';

function App() {
  const [start, setStart] = useState(false)
  return (
    <div className='container'>
        {
          !start && <Welcome startOnClick={setStart} />
        }
        {
          start && <TaskList />
        }
        
    </div>
  )
}

export default App

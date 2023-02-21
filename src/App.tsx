import { useEffect, useState } from 'react'
import './App.css'
import { useFlag } from '@unleash/proxy-client-react';

function App() {
  const [count, setCount] = useState(0)
  const [multiply, setMultiply] = useState(1)
  const [multiplyEnabled, setMultiplyEnabled] = useState(false)
  
  const multiply_by_2_enabled = useFlag('multiply_by_2');

  useEffect(() => {
    setMultiplyEnabled(multiply_by_2_enabled)
  }, [multiply_by_2_enabled])

  return (
    <div className="App">      
      <h1>Feature Toggling</h1>
      <div className="card">
        {
          !multiplyEnabled && 
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>        
        }
        {
          multiplyEnabled &&
            <button onClick={() => setMultiply((multiply) => multiply * 2)}>
            multiply by 2 is {multiply}
          </button>
        }
      </div>
    </div>
  )
}

export default App

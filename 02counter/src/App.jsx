
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {

    if (counter < 20) {
      return setCounter(counter + 1)  
    }
    else if(counter > 20){
      return setCounter(20)
    }
    
    }

    const removeValue = () => {

      if (counter > 0) {
        setCounter(counter - 1)  
      }
      else if(counter < 0){
        setCounter(0)
      }
      
    }
  
    return (
      <>
      <h1>New Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button><br/><br/>
      <button onClick={removeValue}>Remove Value</button>
      </>
    )
}

export default App

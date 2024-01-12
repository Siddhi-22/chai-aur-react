import { useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username: "Witch",
    age: 100
  };
  let arr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-lg text-lg mb-5'>TailWind Test</h1>
      <Card title="React-hindi" />    
    </>
    
  )
}

export default App

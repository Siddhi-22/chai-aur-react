import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App





// const [color, setColor] = useState('green');

//   return (
//     <div className='page w-full h-screen duration-200'style={{backgroundColor:color}}>
//       <div className='page1 fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='page2 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
//           <button onClick={() => setColor('red')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}>Red</button>
//           <button onClick={() => setColor('blue')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}>Blue</button>
//           <button onClick={() => setColor('yellow')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "yellow"}}>Yellow</button>
//           <button onClick={() => setColor('lavender')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "lavender"}}>Lavender</button>
//           <button onClick={() => setColor('olive')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "olive"}}>Olive</button>
//           <button onClick={() => setColor('black')} className='btn outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "black"}}>Black</button>
//           <button onClick={() => setColor('brown')} className='btn outline-none px-4 py-1 rounded-full text-whte shadow-sm' style={{backgroundColor: "brown"}}>Brown</button>
//         </div>
//       </div> 
//     </div>
  
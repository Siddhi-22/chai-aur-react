import React from 'react';
import { useState } from 'react';
import './App.css'

const App = () => {
  
  const [color, setColor] = useState('black');

  return (
    <div className='page'style={{backgroundColor:color}}>
      <div className='page1'>
        <div className='page2 '>
          <button onClick={() => setColor('red')} className='btn' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor('blue')} className='btn ' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor('yellow')} className='btn' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor('purple')} className='btn' style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor('olive')} className='btn' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor('black')} className='btn' style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor('brown')} className='btn' style={{backgroundColor: "brown"}}>Brown</button>
          <button onClick={() => setColor('orange')} className='btn' style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor('pink')} className='btn' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor('lightblue')} className='btn' style={{backgroundColor: "lightblue"}}>sky-Blue</button>
          <button onClick={() => setColor('grey')} className='btn' style={{backgroundColor: "grey"}}>Grey</button>
        </div>
      </div>
    </div>
  );
};

export default App;
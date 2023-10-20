import { useState } from "react";

function App() {

  const [color, setColor] = useState("lightblue");

  return (
    <div className="flex w-screen h-screen duration-200 align-bottom" 
      style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">Test
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("red")}  style={{backgroundColor: "red"}}>Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("olive")} style={{backgroundColor: "olive"}}>Olive
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("lavender")} style={{backgroundColor: "lavender"}}>Lavender
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-md"onClick={() => setColor("cyan")} style={{backgroundColor: "cyan"}}>Cyan
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

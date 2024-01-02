import { useState } from "react";
import "./assets/style.css";

function App() {

  const [color, setColor] = useState("lightblue");

  return (
    <div className="page"> 
      <div className="btn">Test
        <div classNam="btn">
          <button className="btn" onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red
          </button>
          <button className="btn" onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green
          </button>
          <button className="btn" onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue
          </button>
          <button className="btn" onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink
          </button>
          <button className="btn" onClick={() => setColor("olive")} style={{backgroundColor: "olive"}}>Olive
          </button>
          <button className="btn" onClick={() => setColor("lavender")} style={{backgroundColor: "lavender"}}>Lavender
          </button>
          <button className="btn" onClick={() => setColor("cyan")} style={{backgroundColor: "cyan"}}>Cyan
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

import Chai from "./chai"

function App() {

  const user_name = "Siddhi"
  
  return (
    <>
    <Chai />
    console.log(<Chai />);
    
    
    <h4>Get your Chai | {user_name}</h4> //{username} is evaluated expression
    </>
    
  )
}

export default App;


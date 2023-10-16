import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
    <h1>Custom Apps!!</h1>
    </div>
  )
}

 const anotherElement = (
   <a href="https://google.com" target='_blank'>Visit 
   to google</a>

 )

 const anotherUser = "Siddhi Maharana";

 const reactElement = React.createElement(
  'a',   //element-type
  {href:"https://google.com", target:'_blank'}, //properties
  'Visit to Google',  //children
  anotherUser //evaluated expression (variables)
)

ReactDOM.createRoot(document.getElementById('root')).render(
      reactElement
)

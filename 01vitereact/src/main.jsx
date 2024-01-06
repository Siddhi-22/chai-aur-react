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

 /*
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
 */
// this is how react accepts an element

 const reactElement = React.createElement(
  'a',   //element-type (tag)
  {href:"https://google.com", target:'_blank'}, //properties (attributes)
  'Visit to Google',  //children
  anotherUser //evaluated expression (variables)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) =>{
    console.log(props)
    return(
       <div><p>Hellow {props.name}, you are {props.age} years old</p></div>  
      )
    
}
const App = () =>{

  const friends = [
      'Peter',  'Maya'
    ]

    return(
      <div>
        <p>{friends}</p>
      </div>
      )
}

export default App

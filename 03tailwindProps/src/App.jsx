import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    myId: "Bibek7555",
    age:21
  }
 let newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1 className="bg-green-500 text-black">Hello</h1>
      <Card userName="Bibek" someObj={myObj} btnText="Fuck You" /> 
      <Card userName="Swain" someObj={myObj} btnText="Fuck Off"/>
    </>
  )
}

export default App

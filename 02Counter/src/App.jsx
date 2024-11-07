import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [value,setValue]=useState(15);
 const addValue=()=>{
  if(value<20)
  {
    setValue(value+1);
  }
 }
 const removeValue=()=>{
  if(value>=1)
  {value--;
  setValue(value);
} }
  return (
    <>
      <div><h1>Counter Game</h1></div>
      <button onClick={addValue}>Add Value {value}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random()*10)+1;
function App() {
  const [inputs,setInputs]=useState(''); //temp memory
  const handleChanged = (e)=>{ setInputs(e.target.value)}
  return (
    <div className="Container">
  
        <div className='Header'> 
        <label htmlFor='inputs'>Guess the number between 1 to 10</label>
        </div>
        <input id="inputs" type="text" name="inputs" onChange={handleChanged}/>
        <Result secretNum={secretNum} inputs={inputs}/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import DynamicImportedImage from "./components/image/dynamicImportedImage";
function App() {
  const [text, setText] = useState('');
  const [animal,setAnimal] = useState('dog');

  return (
    <div className="App">
      <h1> type the animal name</h1>
      <textarea onChange={event => setText(event.target.value)}/>
      <button onClick={()=> {(text !== 'cat') ? setAnimal('dog') : setAnimal(text); console.log(text)}}>search animal</button>
      <DynamicImportedImage animal={animal} />
      <h1>{animal}</h1>
    </div>
  );
}

export default App;

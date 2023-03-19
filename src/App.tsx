import React, { useState } from 'react';

function App() {

  const [val,setVal]=useState(0);//initializam variabila

  let x=7;

  let test=()=>{

      x++;

      setVal(val+1);      


      console.table(x);
      console.table(val);
  }

  return (
    <div className="App">
      <p>Fara {x}</p>
      <p>State {val}</p>

      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;

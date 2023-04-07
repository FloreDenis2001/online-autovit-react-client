import React, { useEffect, useState } from 'react';

import ServiceCar from "./services/Api";

function Ciorna() {

  const [val,setVal]=useState(0);



  useEffect(()=>{

    getAllCars();

  
  },[val]);


  let serviceCar= new ServiceCar();

  let test=()=>{

      

      setVal(val+1);      


     
      console.table(val);
  }


  let getAllCars= async ():Promise<void>=>{

      
    let data= await serviceCar.getAllCars();



    console.table(data);


  }

  return (
    <div className="App">
    
      <p>State {val}</p>

      <button onClick={test}>Test</button>
    </div>
  );
}

export default Ciorna;

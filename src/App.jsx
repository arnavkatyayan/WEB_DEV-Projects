import './App.css'
import React, { useEffect, useState } from "react";
export default function App() {

//lets code digital stop watch.

  let t = new Date().toLocaleTimeString();
  const[Time,setTime] = useState(t);
  function Update(){
    let t1 = new Date().toLocaleTimeString();
    setTime(t1);
   
  }
setInterval(Update,1000);
 
  return (
    <div class = "container">
    <div class = "head">
    <h1 class="t1">Digital Clock</h1>
    
      </div>
  <div>
    <h1 class = "Output">{Time}</h1>
  </div>
    
    </div>
  )
}

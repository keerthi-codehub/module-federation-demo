import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer";

function App() {
  const [localStoreData, setLocalStoreData] = useState('Not fount')
  const [customEventData, setCustomEventData] = useState('NF')
  const handleReadLocalStorage=()=>{
    const data = localStorage.getItem('mf-data');
    setLocalStoreData(data)
    dispatchEvent({detail: "Hello"})
  }

  useEffect(()=>{
    window.addEventListener('customEventShareData', (event) => {
      const eventData = event.detail;
      // Use the received data
      setCustomEventData(eventData)
  });

  },[])

  return (
    <div className="App">
      <p>This is my Remote app</p>
      <button onClick={handleReadLocalStorage}>Read local storage</button>
      local store Data: {localStoreData}
      <div>Cutom event Data: {JSON.stringify(customEventData) }</div>
      <Footer />
    </div>
  );
}

export default App;

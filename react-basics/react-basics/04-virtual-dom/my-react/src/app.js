import React, {useState, useEffect} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(null);

  useEffect(() => {
    console.log("App Mounted");
  },[]);

  useEffect(() => {
    if(isShowing !== null) {
      console.log("App Updated");
    }
  },[isShowing]);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
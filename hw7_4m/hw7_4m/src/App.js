import { useState } from "react";
import Home from "./Home";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>{
        setShow(!show)
      }}>show/hide</button>
    {
      show
      ? <Home setShow={setShow} />
      : ''
    }


    </div>
  );
}

export default App;
import Router from '../src/components/router';
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Router />
     <></>
    </>
  )
}

export default App;

import Login from "./Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Success.js";


function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Login/>  }/>
      <Route path="/success" element={<Success/>}/>
      </Routes> 
      </BrowserRouter>
  );
}

export default App;

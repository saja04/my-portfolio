import About from "./views/About/About";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path='/' element={<Home />}/>
    </Routes>
  </div>
  );
}

export default App;

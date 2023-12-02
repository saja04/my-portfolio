import About from "./views/About/About";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./views/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;

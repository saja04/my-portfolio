import About from "./views/About/About";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./views/Portfolio/Portfolio";
import CodeCarProject from './components/PortfolioComponents/IndividualPages/codeCar/CodeCarPortfolio'
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/carcode" element={<CodeCarProject/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

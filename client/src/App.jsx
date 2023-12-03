import About from "./views/About/About";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./views/Portfolio/Portfolio";
import CodeCarProject from './components/PortfolioComponents/IndividualPages/codeCar/CodeCarPortfolio'
import PortfolioPortfolio from "./components/PortfolioComponents/IndividualPages/portfolio/PortfolioPortfolio";
import PokedexPortfolio from "./components/PortfolioComponents/IndividualPages/pokedex/PokedexPortfolio";
import RyMPortfolio from "./components/PortfolioComponents/IndividualPages/rym/RyMPortfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/carcode" element={<CodeCarProject/>}/>
        <Route path="/portfolio/portfolio" element={<PortfolioPortfolio/>}/>
        <Route path="/portfolio/pokedex" element={<PokedexPortfolio/>}/>
        <Route path="/portfolio/rym" element={<RyMPortfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;

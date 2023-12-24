import style from "./Portfolio.module.css";
import NavBar from "../../components/NavBar/navBar";
import Projects from "../../components/PortfolioComponents/Projects";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <div className={style.mainDivPortfolio}>
        <h1 className={style.title1}>
          Mis <span className={style.span1}>Proyectos</span>
        </h1>
      </div>
      {/* <div className={style.projectsContainer}> */}
        <Projects />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Portfolio;

import style from "./PortfolioPreview.module.css";
import codeCar from "../../../assets/codecar.png";
import pokemon from "../../../assets/pokemon.png";
import arrow from "../../../assets/arrow2.png";
import { NavLink } from "react-router-dom";

const PortfolioPreview = () => {
  return (
    <div className={style.portPrevMainDiv}>
      <h2 className={style.expTitle}>
        Experiencia <span className={style.expTitle2}>Pasada</span>
      </h2>

      <div className={style.cardsContainer}>
        <h2 className={style.goToTitle}>
          Ir al <span className={style.title2}>portfolio!</span>
        </h2>

        <div className={style.imagesContainer}>
          <span className={style.carCodeText}>carCode</span>
          <img
            src={codeCar}
            alt="federico saa portfolio"
            className={style.codeCarImg}
          />
          <span className={style.pokemonText}>The Pokedex</span>
          <img
            src={pokemon}
            alt="federico saa portfolio"
            className={style.pokemonImg}
          />
        </div>
        <div className={style.goToPortContainer}>
          <img
            src={arrow}
            alt="federico saa portfolio"
            className={style.goToArrow}
          />
          <NavLink to="/portfolio" className={style.portfolioNavLink} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;

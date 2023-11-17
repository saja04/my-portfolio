import style from "./PortfolioPreview.module.css";
import codeCar from "../../../assets/codecar.png";
import pokemon from "../../../assets/pokemon.png";

const PortfolioPreview = () => {
  return (
    <div className={style.portPrevMainDiv}>
      <h2 className={style.expTitle}>
        Experiencia <span className={style.expTitle2}>Pasada</span>
      </h2>
      
      <div className={style.cardsContainer}>
        <div className={style.codeCarContainer}>
          <img
            src={codeCar}
            alt="federico saa portfolio"
            className={style.codeCarImg}
          />
        </div>
        <div className={style.pokemonContainer}>
          <img
            src={pokemon}
            alt="federico saa portfolio"
            className={style.pokemonImg}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;

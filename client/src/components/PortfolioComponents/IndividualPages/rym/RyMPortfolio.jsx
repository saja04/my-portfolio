import NavBar from "../../../NavBar/navBar";
import style from "./RyMPortfolio.module.css";

const RymPortfolio = () => {
  return (
    <div>
      <NavBar />
      <div className={style.mainDivRyM}>
        <h2>THIS IS THE RyM</h2>
      </div>
    </div>
  );
};

export default RymPortfolio;

import NavBar from "../../../NavBar/navBar";
import style from "./CodeCarPortfolio.module.css";
import redirectImg from "../../../../assets/redirect-icon.png";
import { NavLink } from "react-router-dom";

const CodeCarPortfolio = () => {
  return (
    <div>
      <NavBar />
      <div className={style.mainDivCodeCar}>
        <NavLink
          to="https://code-car-41a-pf-7u9q.vercel.app/"
          className={style.navLinkTitle1}
        >
          <h1 className={style.title1}>
            car<span className={style.span1}>Code</span>
            <img
              src={redirectImg}
              alt="carCode redirect"
              className={style.redirectImg}
            />
          </h1>
        </NavLink>


        <h2 className={style.title2}>Tecnologías utilizadas</h2>

      </div>
    </div>
  );
};

export default CodeCarPortfolio;

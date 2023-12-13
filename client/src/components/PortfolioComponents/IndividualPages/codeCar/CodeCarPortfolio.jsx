import NavBar from "../../../NavBar/navBar";
import style from "./CodeCarPortfolio.module.css";
import redirectImg from "../../../../assets/redirect-icon.png";
import { NavLink } from "react-router-dom";
import TechnologiesCodeCar from "./TechnologiesCodeCar/TechnologiesCodeCar";
import FunctionalitiesCarCode from "./FunctionalitiesCodeCar/FunctionalitiesCarCode";
import MyParticipationsCarCode from "./MyParticipationsCodeCar/MyParticipationsCodeCar";

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

        <div className={style.technologiesContainer}>
          <h2 className={style.title2}>Tecnologías utilizadas</h2>
          <TechnologiesCodeCar />
        </div>
        <div className={style.functionalitiesContainer}>
          <h2 className={style.title3}>Funcionalidades</h2>
          <FunctionalitiesCarCode />
        </div>

        <div className={style.participationsContainer}>
          <h2 className={style.title4}>Mis participaciones</h2>
          <MyParticipationsCarCode />
        </div>
      </div>

      <h2 className={style.title5}>Recorrido por la <span className={style.span2}>pagina web</span></h2>

      <iframe
        src="https://www.youtube.com/embed/KmPVvh21pFQ?si=k5pft4YN9XY9QJfN"
        title="carCode Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className={style.carCodeVideo}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CodeCarPortfolio;

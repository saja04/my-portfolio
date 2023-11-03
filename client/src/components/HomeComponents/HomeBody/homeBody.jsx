import React from "react";
import style from "./homeBody.module.css";

const HomeBody = () => {
  return (
    <div>
      <div className={style.mainDiv}>
        <h2>¡Hola! Yo soy</h2>
        <div className={style.name}>
          <h1 className={style.federico}>Federico</h1>
          <h1 className={style.saa}>Saa</h1>
        </div>
        <div className={style.description}>
          <h3 className={style.normalText}>
            Un <span className={style.fullStack}>Full-Stack Web Developer</span>{" "}
            orientado a <span className={style.fullStack}>BackEnd</span>{" "}
            interesado en ampliar y aprender nuevas habilidades como
            desarrollador.
          </h3>
        </div>
      </div>
    </div>
  );
};
export default HomeBody;

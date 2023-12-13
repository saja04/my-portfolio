import style from "./Projects.module.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className={style.projectsMainDiv}>
      <div className={style.projectsDiv}>
        <NavLink to="./carcode" target="_blank" className={style.links}>
          <div className={style.projectCarCode}>
            <h2 className={style.titles}>carCode</h2>
          </div>
        </NavLink>
        <NavLink to="https://github.com/saja04/my-portfolio" target="_blank" className={style.links}>
          <div className={style.projectPortfolio}>
            <h2 className={style.titles}>Portfolio</h2>
          </div>
        </NavLink>
        <NavLink to="https://github.com/saja04/pokemon-PI" target="_blank" className={style.links}>
          <div className={style.projectPokedex}>
            <h2 className={style.titles}>The Pokedex</h2>
          </div>
        </NavLink>
        <NavLink to="https://github.com/saja04/rick-and-morty" target="_blank" className={style.links}>
          <div className={style.projectRyM}>
            <h2 className={style.titles}>Rick & Morty</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;

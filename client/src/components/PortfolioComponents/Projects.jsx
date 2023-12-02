import style from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={style.projectsMainDiv}>
      <div className={style.projectsDiv}>
        <div className={style.projectCarCode}>
          <h2 className={style.titles}>carCode</h2>
        </div>
        <div className={style.projectPortfolio}>
          <h2 className={style.titles}>Portfolio</h2>
        </div>
        <div className={style.projectPokedex}>
          <h2 className={style.titles}>The Pokedex</h2>
        </div>
        <div className={style.projectRyM}>
          <h2 className={style.titles}>Rick & Morty</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;

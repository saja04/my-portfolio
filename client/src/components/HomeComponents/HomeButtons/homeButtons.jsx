import style from "./homeButton.module.css";
import linkedinLogo from "../../../assets/linkedin.png";
import githubLogo from "../../../assets/github.png";
import henryLogo from "../../../assets/henry.png";

const HomeButtons = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.buttonsDiv}>
        <button className={style.curriculumButton}>
          <a
            href="https://drive.google.com/file/d/1UH4I9JOKhItHjzS2j9fXVLEgksl5DBoX/view?usp=sharing"
            className={style.curriculumLink}
            rel="noreferrer"
            target="_blank"
          >
            Curriculum
          </a>
        </button>
        <a
          href="https://www.linkedin.com/in/federico-saa-4ab74b297/"
          className={style.mainLinks}
        >
          <img src={linkedinLogo} alt="linkedin" className={style.logos} />
        </a>
        <a href="https://github.com/saja04" className={style.mainLinks}>
          <img src={githubLogo} alt="github" className={style.logos} />
        </a>
        <a
          href="https://www.talent.soyhenry.com/candidate/16305"
          className={style.mainLinks}
        >
          <img src={henryLogo} alt="soy henry" className={style.logoHenry} />
        </a>
      </div>
      <h4 className={style.jobTitle}>Estoy Buscando Empleo!</h4>
    </div>
  );
};

export default HomeButtons;

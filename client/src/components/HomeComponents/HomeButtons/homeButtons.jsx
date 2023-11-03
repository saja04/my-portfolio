import style from "./homeButton.module.css";
import linkedinLogo from "../../../assets/linkedin.png";
import githubLogo from "../../../assets/github.png";
import henryLogo from "../../../assets/henry.png";

const HomeButtons = () => {
  const handlePopUp = () => {
    const newSpan = document.createElement("span");
    newSpan.textContent = "Estoy buscando empleo!";
    const button = document.getElementById("myButton");
    // button.appendChild(newSpan);
  };
  return (
    <div className={style.mainDiv}>
      <h4 className={style.jobTitle}>Estoy Buscando Trabajo!</h4>
      <div className={style.buttonsDiv}>
        <button className={style.curriculumButton} id="myButton">
          <a
            href="https://www.linkedin.com/in/federico-saa-4ab74b297/"
            className={style.curriculumLink}
            onMouseOver={handlePopUp()}
          >
            Curriculum
          </a>
        </button>

        <a
          href="https://www.linkedin.com/in/federico-saa-4ab74b297/"
          className={style.mainLinks}
          onMouseOver={handlePopUp()}
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
          <img src={henryLogo} alt="soy henry" className={style.logos} />
        </a>
      </div>
    </div>
  );
};

export default HomeButtons;

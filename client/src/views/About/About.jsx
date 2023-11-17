import NavBar from "../../components/NavBar/navBar";
import style from "./About.module.css";
import AboutBody from "../../components/AboutComponents/AboutBody/AboutBody";
import AboutImage from "../../components/AboutComponents/AboutImage/AboutImage";
import AboutInformation from "../../components/AboutComponents/AboutInformation/AboutInformation";
import PortfolioPreview from "../../components/AboutComponents/PortfolioPreview/PortfolioPreview";

const About = () => {
  return (
    <>
      <NavBar />
      <div className={style.mainDiv}>
        <div className={style.texts}>
          <h1 className={style.aboutMe}>Acerca de</h1>
          <h1 className={style.me}>mí</h1>
        </div>
        <AboutImage />
        <AboutBody />
        <AboutInformation />
        <PortfolioPreview />
      </div>
    </>
  );
};

export default About;

import NavBar from "../../components/NavBar/navBar";
import style from "./About.module.css";
import AboutBody from "../../components/AboutComponents/AboutBody/AboutBody";
import AboutImage from "../../components/AboutComponents/AboutImage/AboutImage";

const About = () => {
  return (
    <div className={style.mainDiv}>
      <NavBar />
      <h1 className={style.aboutMe}>Acerca de mí</h1>
      <AboutImage />
      <AboutBody />
    </div>
  );
};

export default About;

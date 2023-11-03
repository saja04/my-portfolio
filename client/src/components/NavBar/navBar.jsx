import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import logo from "../../assets/LOGO-FS.png";
import home from "../../assets/hogar (1).png";
import profile from "../../assets/usuario (1).png";
import briefcase from "../../assets/maletin.png";
import contact from "../../assets/telefono.png";

const NavBar = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.logoContainer}>
        <img src={logo} alt="federico-saa" className={style.logo} />
      </div>
      <div className={style.buttonContainer}>
        <NavLink to="/" className={style.NavLink}>
          <img src={home} alt="home" className={style.buttonLogo} />
        </NavLink>
        <NavLink to="/about" className={style.NavLink}>
          <img src={profile} alt="profile-info" className={style.buttonLogo} />
        </NavLink>
        <NavLink to="/contact" className={style.NavLink}>
          <img src={briefcase} alt="portfolio" className={style.buttonLogo} />
        </NavLink>
        <NavLink to="/contact" className={style.NavLink}>
          <img src={contact} alt="contact-me" className={style.buttonLogo} />
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;

import style from "./Contact.module.css";
import NavBar from "../../components/NavBar/navBar";
import { NavLink } from "react-router-dom";
import redirectLogo from "../../assets/redirect-icon.png";
import ContactForm from "../../components/ContactComponents/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className={style.contactMainDiv}>
        <h1 className={style.contactTitle1}>Contactame</h1>
        <ContactForm/>
        <NavLink
          className={style.whatsappLink}
          to="https://wa.me/5492966692490?text=Hi%20Fede!%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20chat%20with%20you!"
          target="_blank"
        >
          Escribeme por <span className={style.contactSpan1}>WhatsApp!</span> {' '}
          <img src={redirectLogo} alt="my whatsapp" className={style.redirectImg}/>
        </NavLink>
        <h2 className={style.mailTitle}>(o a mi correo saajamilf@gmail.com)</h2>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

import style from "./ContactForm.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: 1,
    mail: 1,
    subject: 1,
    message: 1,
  });

  const formValidation = () => {
    if (contactForm.name.length > 0 && contactForm.name.length <= 50) {
      setFormErrors({
        ...formErrors,
        name: 0,
      });
    }
    if (contactForm.name.length > 50) {
      setFormErrors({
        ...formErrors,
        name: 2,
      });
    }
    if (contactForm.mail.length > 0) {
      setFormErrors({
        ...formErrors,
        mail: 0,
      });
    }
    const check = /^[^\s@]{1,100}@[^\s@]{1,50}\.[^\s@]{1,20}$/.test(
      contactForm.mail
    );
    if (!check) {
      setFormErrors({
        ...formErrors,
        mail: 2,
      });
    }
    if (contactForm.subject.length > 0) {
      setFormErrors({
        ...formErrors,
        subject: 0,
      });
    }
    if (contactForm.subject.length > 100) {
      setFormErrors({
        ...formErrors,
        subject: 2,
      });
    }
    if (contactForm.message.length > 0) {
      setFormErrors({
        ...formErrors,
        message: 0,
      });
    }
    if (contactForm.message.length > 750)
      setFormErrors({
        ...formErrors,
        message: 2,
      });
    console.log(formErrors);
  };

  const handleInputsChange = (e) => {
    formValidation();
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/sendContactEmail`, {
        userName: contactForm.name,
        userEmail: contactForm.mail,
        subject: contactForm.subject,
        message: contactForm.message,
      });
      if (response.data === "email sent correctly") {
        setContactForm({
          name: "",
          mail: "",
          subject: "",
          message: "",
        });
        toast.success("Mensaje enviado");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error al enviar email");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={style.contactFormMainDiv}>
      <Toaster />
      <h2 className={style.contactFormTitle1}>Mandame un mensaje</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.contactFormLabels}>Tu nombre completo</label>
        <input
          type="text"
          value={contactForm.name}
          name="name"
          onChange={handleInputsChange}
        />

        <label className={style.contactFormLabels}>
          Tu direccion de correo electronico
        </label>
        <input
          type="text"
          value={contactForm.mail}
          name="mail"
          onChange={handleInputsChange}
        />

        <label className={style.contactFormLabels}>Asunto</label>
        <input
          type="text"
          value={contactForm.subject}
          name="subject"
          onChange={handleInputsChange}
        />

        <label className={style.contactFormLabels}>Mensaje</label>
        <input
          type="text"
          value={contactForm.message}
          name="message"
          onChange={handleInputsChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default ContactForm;

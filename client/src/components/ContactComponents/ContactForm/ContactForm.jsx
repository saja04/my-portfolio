import style from "./ContactForm.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ContactForm = () => {
  const [emailStatus, setEmailStatus] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
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
        setEmailStatus(
          toast.success('Mensaje enviado')
        );
      }
    } catch (error) {
      console.log(error.message);
      setEmailStatus(
        toast.error('Error al enviar email')
      );
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className={style.contactFormMainDiv}>
      <Toaster/>
      <h2 className={style.contactFormTitle1}>Mandame un mensaje</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.contactFormLabels}>Tu nombre completo</label>
        <input
          type="text"
          value={contactForm.name}
          name="name"
          onChange={handleChange}
        />

        <label className={style.contactFormLabels}>
          Tu direccion de correo electronico
        </label>
        <input
          type="text"
          value={contactForm.mail}
          name="mail"
          onChange={handleChange}
        />

        <label className={style.contactFormLabels}>Asunto</label>
        <input
          type="text"
          value={contactForm.subject}
          name="subject"
          onChange={handleChange}
        />

        <label className={style.contactFormLabels}>Mensaje</label>
        <input
          type="text"
          value={contactForm.message}
          name="message"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default ContactForm;

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
  const [messageLength, setMessageLength] = useState('0')
  const [submittedForm, setSubmittedForm] = useState(null);

  const handleInputsChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
    // NAME ERRORS
    if (e.target.name === "name") {
      if (e.target.value.length <= 50 && e.target.value.length >= 3) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          ``;
          newObj.name = 0;
          return newObj;
        });
      } else if (e.target.value.length < 3) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.name = 1;
          return newObj;
        });
      } else if (e.target.value.length > 50) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.name = 2;
          return newObj;
        });
      }
    }
    //EMAIL ERRORS
    if (e.target.name === "mail") {
      const check = /^[^\s@]{1,100}@[^\s@]{1,50}\.[^\s@]{1,20}$/.test(
        e.target.value
      );
      if (e.target.value.length === 0) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.mail = 1;
          return newObj;
        });
      } else if (e.target.value.length > 100) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.mail = 2;
          return newObj;
        });
      } else if (!check && e.target.value.length > 0) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.mail = 3;
          return newObj;
        });
      } else if (
        check &&
        e.target.value.length <= 100 &&
        e.target.value.length > 0
      ) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.mail = 0;
          return newObj;
        });
      }
    }

    // SUBJECT ERRORS
    if (e.target.name === "subject") {
      if (e.target.value.length <= 4) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.subject = 1;
          return newObj;
        });
      } else if (e.target.value.length > 75) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.subject = 2;
          return newObj;
        });
      } else if (e.target.value.length <= 75 && e.target.value.length > 4) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.subject = 0;
          return newObj;
        });
      }
    }

    //MESSAGE ERROR
    if (e.target.name === "message") {
      if (e.target.value.length <= 10) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.message = 1;
          return newObj;
        });
      } else if (e.target.value.length > 1000) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.message = 2;
          return newObj;
        });
      } else if (e.target.value.length <= 1000 && e.target.value.length > 10) {
        setFormErrors((prevState) => {
          const newObj = { ...prevState };
          newObj.message = 0;
          return newObj;
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedForm(true);
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
        setFormErrors({
          name: 1,
          mail: 1,
          subject: 1,
          message: 1,
        });
        toast.success("Mensaje enviado");
      }
      setSubmittedForm(false);
    } catch (error) {
      console.log(error.message);
      toast.error(
        "Error al enviar email, aguarda un momento y vuelve a intentarlo"
      );
    }
  };
  const errorVerification = () => {
    const validator = [];
    for (let eachError in formErrors) {
      validator.push(formErrors[eachError]);
    }
    if (validator.includes(1 || 2 || 3)) return false;
    else return true;
  };

  return (
    <div className={style.contactFormMainDiv}>
      <Toaster />
      <h2 className={style.contactFormTitle1}>Mandame un mensaje</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.contactFormLabels}>
          Tu nombre completo
          <span className={style.errorFormSpan}>
            {formErrors.name === 1
              ? "*"
              : formErrors.name === 2
              ? " max. 50*"
              : null}
          </span>
        </label>
        <input
          type="text"
          value={contactForm.name}
          name="name"
          onChange={handleInputsChange}
          className={style.formInput1}
        />

        <label className={style.contactFormLabels}>
          Correo electronico
          <span className={style.errorFormSpan}>
            {formErrors.mail === 1
              ? "*"
              : formErrors.mail === 2
              ? " max. 100*"
              : formErrors.mail === 3
              ? "* mail invalido!"
              : null}
          </span>
        </label>
        <input
          type="text"
          value={contactForm.mail}
          name="mail"
          onChange={handleInputsChange}
          className={style.formInput1}
        />

        <label className={style.contactFormLabels}>
          Asunto
          <span className={style.errorFormSpan}>
            {formErrors.subject === 1
              ? "*"
              : formErrors.subject === 2
              ? " max. 75*"
              : null}
          </span>
        </label>
        <input
          type="text"
          value={contactForm.subject}
          name="subject"
          onChange={handleInputsChange}
          className={style.formInput1}
        />

        <label className={style.contactFormLabels}>
          Mensaje{" "}
          <span className={style.errorFormSpan}>
            {formErrors.message === 1
              ? "*"
              : formErrors.message === 2
              ? " max. 1000*"
              : null}
          </span>
        </label>
        <textarea
          id="message"
          value={contactForm.message}
          name="message"
          onChange={handleInputsChange}
          className={style.formInput2}
          rows="4" 
          cols="50"
        />
        {submittedForm ? (
          <button type="button" className={style.trueButton}>
            ...
          </button>
        ) : errorVerification() ? (
          <button type="submit" className={style.trueButton}>
            Enviar
          </button>
        ) : (
          <button type="button" className={style.falseButton}>
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};
export default ContactForm;

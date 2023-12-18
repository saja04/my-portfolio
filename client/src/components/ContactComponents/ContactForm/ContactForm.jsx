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

  // const formValidation = () => {
  //   if (contactForm.name.length > 0 && contactForm.name.length <= 50) {
  //     setFormErrors(prevState => {
  //       const newObj = { ...prevState };
  //       newObj.name = 0;
  //       return newObj;
  //     });
  //     console.log(formErrors);
  //   }
  //   // if (contactForm.name.length == 0) {
  //   //   setFormErrors((prev) => {
  //   //     const newObj = { ...prev };
  //   //     newObj.name = 1;
  //   //     return newObj;
  //   //   });
  //   // }
  //   if (contactForm.name.length > 50) {
  //     setFormErrors({
  //       ...formErrors,
  //       name: 2,
  //     });
  //   }
  //   if (contactForm.mail.length === 0) {
  //     setFormErrors({
  //       ...formErrors,
  //       mail: 1,
  //     });
  //   }
  //   if (contactForm.mail.length > 0) {
  //     setFormErrors({
  //       ...formErrors,
  //       mail: 0,
  //     });
  //   }
  //   const check = /^[^\s@]{1,100}@[^\s@]{1,50}\.[^\s@]{1,20}$/.test(
  //     contactForm.mail
  //   );
  //   if(contactForm.mail !== 0 && !check){
  //     setFormErrors({
  //       ...formErrors,
  //       mail: 2,
  //     });
  //   }
  //   if (check) {
  //     setFormErrors({
  //       ...formErrors,
  //       mail: 0,
  //     });
  //   }
  //   if (contactForm.subject.length === 0) {
  //     setFormErrors({
  //       ...formErrors,
  //       subject: 1,
  //     });
  //   }
  //   if (contactForm.subject.length > 0 && contactForm.subject.length >= 100) {
  //     setFormErrors({
  //       ...formErrors,
  //       subject: 0,
  //     });
  //   }
  //   if (contactForm.subject.length > 100) {
  //     setFormErrors({
  //       ...formErrors,
  //       subject: 2,
  //     });
  //   }
  //   if (contactForm.message.length === 0) {
  //     setFormErrors({
  //       ...formErrors,
  //       message: 1,
  //     });
  //   }
  //   if (contactForm.message.length > 0 && contactForm.message.length <= 750) {
  //     setFormErrors({
  //       ...formErrors,
  //       message: 0,
  //     });
  //   }
  //   if (contactForm.message.length > 750)
  //     setFormErrors({
  //       ...formErrors,
  //       message: 2,
  //     });
  //   console.log(formErrors);
  // };

  const handleInputsChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
    console.log(contactForm.subject.length);
    // NAME ERRORS
    if (contactForm.name.length <= 50 && contactForm.name.length >= 3) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        ``;
        newObj.name = 0;
        return newObj;
      });
    }
    if (contactForm.name.length < 2) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.name = 1;
        return newObj;
      });
    } else if (contactForm.name.length - 1 === 1) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        ``;
        newObj.name = 1;
        return newObj;
      });
    } else if (contactForm.name.length > 50) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.name = 2;
        return newObj;
      });
    }
    // MAIL ERRORS
    const check = /^[^\s@]{1,100}@[^\s@]{1,50}\.[^\s@]{1,20}$/.test(
      contactForm.mail
    );
    if (contactForm.mail.length === 0) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.mail = 1;
        return newObj;
      });
    } else if (contactForm.mail.length > 75) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.mail = 2;
        return newObj;
      });
    } else if (!check && contactForm.mail.length > 0) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.mail = 3;
        return newObj;
      });
    } else if (
      check &&
      contactForm.mail.length <= 75 &&
      contactForm.mail.length > 0
    ) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.mail = 0;
        return newObj;
      });
    }

    // SUBJECT ERRORS
    if (contactForm.subject.length <= 1) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.subject = 1;
        return newObj;
      });
    } else if (contactForm.subject.length - 2 === 1) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.subject = 1;
        return newObj;
      });
    } else if (contactForm.subject.length > 75) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.subject = 2;
        return newObj;
      });
    } else if (
      contactForm.subject.length <= 75 &&
      contactForm.subject.length > 0
    ) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.subject = 0;
        return newObj;
      });
    }
    //MESSAGE ERROR
    if (contactForm.message.length === 0) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.message = 1;
        return newObj;
      });
    } else if (contactForm.message.length > 750) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.message = 2;
        return newObj;
      });
    } else if (
      contactForm.message.length <= 750 &&
      contactForm.message.length > 0
    ) {
      setFormErrors((prevState) => {
        const newObj = { ...prevState };
        newObj.message = 0;
        return newObj;
      });
    }
    console.log(formErrors);
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

  return (
    <div className={style.contactFormMainDiv}>
      <Toaster />
      <h2 className={style.contactFormTitle1}>Mandame un lol</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.contactFormLabels}>
          Tu nombre completo
          <span className={style.contactFormLabels}>
            {formErrors.name === 1 ? "*" : null}
          </span>
        </label>
        <input
          type="text"
          value={contactForm.name}
          name="name"
          onChange={handleInputsChange}
        />

        <label className={style.contactFormLabels}>
          Tu direccion de correo electronico
          <span className={style.contactFormLabels}>
            {formErrors.mail === 1 ? "*" : formErrors.mail === 2 ? "*" : formErrors.mail === 3 ? "*" : null}
          </span>
        </label>
        <input
          type="text"
          value={contactForm.mail}
          name="mail"
          onChange={handleInputsChange}
        />

        <label className={style.contactFormLabels}>
          Asunto
          {formErrors.subject === 1 ? "*" : null}
          </label>
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

import style from "./Footer.module.css";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import henryLogo from "../../assets/henry.png";

const Footer = () => {
  return (
    <div className={style.footerMainDiv}>
      <h2 className={style.footerTitle1}>Federico Saa</h2>
      <div className={style.footerSubtitleDiv}>
        <h4 className={style.footerSubtitle1}>saajamilf@gmail.com</h4>
        <h4 className={style.footerSubtitle1}>+54 9 2966692490</h4>
        <h4 className={style.footerSubtitle1}>
          Ciudad Autonoma de Buenos Aires,
        </h4>
        <h4 className={style.footerSubtitle1}>Argentina</h4>
      </div>
      <div className={style.footerTitle2Div}>
        <h3 className={style.footerTitle2}>👈 Mi ubicacion </h3>
        <h3 className={style.footerTitle2}><span> </span> (aproximada)</h3>
      </div>
      <h3 className={style.footerTitle3}>Redes Sociales</h3>
      <div className={style.buttonsDiv}>
        <a
          href="https://www.linkedin.com/in/federico-saa-4ab74b297/"
          className={style.mainLinks}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin" className={style.logos} />
        </a>
        <a
          href="https://github.com/saja04"
          className={style.mainLinks}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github" className={style.logos} />
        </a>
        <a
          href="https://www.talent.soyhenry.com/candidate/16305"
          className={style.mainLinks}
          target="_blank"
          rel="noreferrer"
        >
          <img src={henryLogo} alt="soy henry" className={style.logoHenry} />
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12759.977661842726!2d-58.42569452811916!3d-34.61760262783556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca440ec19097%3A0x30b34282ae8fae18!2sParque%20Rivadavia!5e0!3m2!1sen!2sar!4v1703033748373!5m2!1sen!2sar"
        className={style.mapFrame}
        width="800"
        height="200"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Footer;

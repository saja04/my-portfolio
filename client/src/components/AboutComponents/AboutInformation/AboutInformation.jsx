import style from "./AboutInformation.module.css";
import nodepb from "../../../assets/pb/nodepb1.png";
import expresspb from "../../../assets/pb/expresspb.png";
import reactpb from "../../../assets/pb/reactpb.png";
import postgresqlpb from "../../../assets/pb/postgresqlpb.png";
import htmlcsspb from "../../../assets/pb/htmlcsspb.png";

const AboutInformation = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.hardContainer}>
          <h2 className={style.subtitleHard}>
            Habilidades <span className={style.hardText}>Duras</span>
          </h2>
          <div className={style.abilitiesContainer}>
            <img src={nodepb} alt="node" className={style.hardLogo}/>
            <img src={expresspb} alt="express" className={style.hardLogo}/>
            <img src={reactpb} alt="react" className={style.hardLogo}/>
            <img src={postgresqlpb} alt="postgres" className={style.hardLogo}/>
            <img src={htmlcsspb} alt="html" className={style.hardLogo}/>
          </div>
        </div>
        <div className={style.softContainer}>
          <h2 className={style.subtitleSoft}>
            Habilidades<span className={style.softText}>Blandas</span>
          </h2>
          <div className={style.sAbilitiesContainer}>
            <h4 className={style.softSkillsText}>Comunicación</h4>
            <h4 className={style.softSkillsText}>Trabajo En Equipo</h4>
            <h4 className={style.softSkillsText}>Pensamiento Crítico</h4>
            <h4 className={style.softSkillsText}>Gestión de crisis</h4>
            <h4 className={style.softSkillsText}>Colaborativo</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInformation;

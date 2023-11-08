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
            <img src={nodepb} alt="node" />
            <img src={expresspb} alt="node" />
            <img src={postgresqlpb} alt="node" />
            <img src={reactpb} alt="node" />
            <img src={htmlcsspb} alt="node" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInformation;

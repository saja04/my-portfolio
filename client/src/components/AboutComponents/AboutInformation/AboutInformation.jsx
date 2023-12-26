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
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189004205864779896/nodepb1.png?ex=659c9575&is=658a2075&hm=479427d1f42f3493edcc57e767f3b59913e087f0e0fd327f6f321f3e09f7dd2f&' alt="node" />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189004205332123658/expresspb.png?ex=659c9575&is=658a2075&hm=37a5b472ce2d1776971923eaf1f760a2f17c99dbd792c4b8124757216670463c&' alt="node" />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189004204786855996/postgresqlpb.png?ex=659c9575&is=658a2075&hm=9e6a68c2256ab0658ce4da349f1795e6182599c86e4cf3c76208cf729de683ee&' alt="node" />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189004205055279265/reactpb.png?ex=659c9575&is=658a2075&hm=e1d4e6f04a56a0cfc252e7d5f153dd16edcf3c26c5a8918d726f4503636d3dc2&' alt="node" />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189004205600551033/htmlcsspb.png?ex=659c9575&is=658a2075&hm=976ec6ecf06432a6b5c62fdad85e2b831b2853ba5622ab04db4c796b7e30aac6&' alt="node" />
          </div>
        </div>
        <div className={style.softContainer}>
          <h2 className={style.subtitleSoft}>
            Habilidades<span className={style.softText}>Blandas</span>
          </h2>
          <div className={style.sAbilitiesContainer}>
            <h4>Comunicación</h4>
            <h4>Trabajo En Equipo</h4>
            <h4>Pensamiento Crítico</h4>
            <h4>Gestión de crisis</h4>
            <h4>Colaborativo</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInformation;

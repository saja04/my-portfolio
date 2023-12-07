import style from "./MyParticipationsCodeCar.module.css";

const MyParticipationsCarCode = () => {
  return (
    <div className={style.participationsMainDiv}>
      <h2 className={style.participationsTitle1}>
        - Liderazgo equipo Back-End
      </h2>
      <h2 className={style.participationsTitle1}>
        - Co-Liderazgo Proyecto entero
      </h2>
      <h2 className={style.participationsTitle1}>
        - Base de datos y conexion con API
      </h2>
      <h2 className={style.participationsTitle1}>- Persistencia de usuario</h2>
      <h2 className={style.participationsTitle1}>- Arquitectura de Back-End</h2>
      <h2 className={style.participationsTitle1}>
        - Implementacion Mercado Pago para pasarela de pagos
      </h2>
      <h2 className={style.participationsTitle1}>- Borrado Logico</h2>
    </div>
  );
};

export default MyParticipationsCarCode;

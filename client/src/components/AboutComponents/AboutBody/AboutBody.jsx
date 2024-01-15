import style from "./AboutBody.module.css";

const AboutBody = () => {
  return (
    <div className={style.mainDiv}>
        <h3 className={style.abtText}>
          Mi nombre es Federico Saa, tengo 19 años y naci en La Patagonia
          argentina, mas concrectamente en Río Gallegos, Santa Crúz. Actualmente
          estoy viviendo en la Ciudad de Buenos Aires.
          <br />
          Me considero un apasionado del mundo tecnologico desde que tengo
          memoria, me gustaba arreglar computadoras, montarlas y ordenar su
          espacio. De lo que no estaba al tanto era el mundo del software, el
          cual comenzo a interesarme en mi adolescencia. <br />A mis 15 anos
          realice mi primer acercamiento al mundo del desarrollo web tomando un
          curso basico de HTML y CSS, el cual me dio suficiente interes como
          para seguir aprendiendo. A dia de hoy estoy orientandome al area de
          BackEnd haciendo uso de JavaScript, me encanta desarrollar en la misma
          y seguir aprendiendo nuevas cosas.
        </h3>
    </div>
  );
};

export default AboutBody;

import abtMePhoto from "../../../assets/abt-me-photo.jpg";
import style from './AboutImage.module.css'

const AboutImage = () => {
    return(
        <div className={style.mainDiv}>
            <img src={abtMePhoto} alt="about me" className={style.abtMePhoto}/>
        </div>
    )
}
export default AboutImage;
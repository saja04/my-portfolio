import abtMePhoto from "../../../assets/abt-me-photo.jpg";
import style from './AboutImage.module.css'

const AboutImage = () => {
    return(
        <div className={style.mainDiv}>
            <img src='https://media.discordapp.net/attachments/1080681344264314920/1189003468107681823/abt-me-photo.jpg?ex=659c94c5&is=658a1fc5&hm=0aba82a88e7bd701fc2e9ea6c4840a94e0708716887fd3249220c5736c8e807f&=&format=webp&width=354&height=473' alt="about me" className={style.abtMePhoto}/>
        </div>
    )
}
export default AboutImage;
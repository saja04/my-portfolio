import style from './profileImage.module.css'
import profileImage from '../../../assets/edit.png'

const ProfileImage = () => {

    return(
        <div className={style.mainDiv}>
            <img src={profileImage} alt="federico saa" className={style.profileImage1} />
            <img src={profileImage} alt="federico saa" className={style.profileImage2} />
            <img src={profileImage} alt="federico saa" className={style.profileImage3} />

        </div>
    )
}

export default ProfileImage
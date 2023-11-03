import style from './profileImage.module.css'
import profileImage from '../../../assets/profile-image.jpg'

const ProfileImage = () => {

    return(
        <div className={style.mainDiv}>
            <img src={profileImage} alt="federico saa" className={style.profileImage} />
        </div>
    )
}

export default ProfileImage
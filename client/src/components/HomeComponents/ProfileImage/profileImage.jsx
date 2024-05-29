import style from './profileImage.module.css'
import profileImage from '../../../assets/edit.png'

const ProfileImage = () => {

    return(
        <div className={style.mainDiv}>
            <img src={profileImage} alt="federico saa" className={style.profileImage1} />   
        </div>
    )
}

export default ProfileImage
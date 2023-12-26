import style from './profileImage.module.css'
import profileImage from '../../../assets/edit.png'

const ProfileImage = () => {

    return(
        <div className={style.mainDiv}>
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189003468761989141/edit.png?ex=659c94c5&is=658a1fc5&hm=ea6002d986e293e7cbbebad112734c9faab2b13e980dcf944871b5c16bc649ea&' alt="federico saa" className={style.profileImage1} />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189003468761989141/edit.png?ex=659c94c5&is=658a1fc5&hm=ea6002d986e293e7cbbebad112734c9faab2b13e980dcf944871b5c16bc649ea&' alt="federico saa" className={style.profileImage2} />
            <img src='https://cdn.discordapp.com/attachments/1080681344264314920/1189003468761989141/edit.png?ex=659c94c5&is=658a1fc5&hm=ea6002d986e293e7cbbebad112734c9faab2b13e980dcf944871b5c16bc649ea&' alt="federico saa" className={style.profileImage3} />

        </div>
    )
}

export default ProfileImage
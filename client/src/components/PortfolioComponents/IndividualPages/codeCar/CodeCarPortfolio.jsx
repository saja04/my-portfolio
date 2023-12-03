import NavBar from '../../../NavBar/navBar'
import style from './CodeCarPortfolio.module.css'

const CodeCarPortfolio = () => {
    return(
        <div>
            <NavBar/>
            <div className={style.mainDivCodeCar}>
            <h2>THIS IS THE CARCODE</h2>
            </div>
            
        </div>
    )
}

export default CodeCarPortfolio;
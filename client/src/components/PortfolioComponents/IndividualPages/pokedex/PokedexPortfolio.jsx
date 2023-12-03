import NavBar from '../../../NavBar/navBar'
import style from './PokedexPortfolio.module.css'

const PokedexPortfolio = () => {
    return(
        <div>
            <NavBar/>
            <div className={style.mainDivPortfolio}>
            <h2>THIS IS THE Pokedex</h2>
            </div>
            
        </div>
    )
}

export default PokedexPortfolio;
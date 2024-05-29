import style from "./Home.module.css";
import NavBar from "../../components/NavBar/navBar";
import HomeBody from "../../components/HomeComponents/HomeBody/homeBody";
import ProfileImage from "../../components/HomeComponents/ProfileImage/profileImage";
import HomeButtons from "../../components/HomeComponents/HomeButtons/homeButtons";

const Home = () => {
  return <div className={style.background1}>
        <NavBar/>
        <ProfileImage/>
        <HomeBody/>
        <HomeButtons/>
  </div>;
};
export default Home;

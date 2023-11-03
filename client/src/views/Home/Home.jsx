import React from "react";
import style from "./Home.module.css";
import NavBar from "../../components/NavBar/navBar";
import HomeBody from "../../components/HomeBody/homeBody";

const Home = () => {
  return <div className={style.background1}>
        <NavBar/>
        <HomeBody/>
  </div>;
};
export default Home;

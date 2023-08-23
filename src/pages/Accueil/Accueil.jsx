import React from "react";
// import Header from "../../components/Header/Header";
import CardLogements from "./CardLogements";
import BannierAccueil from "../../components/BannierAccueil/BannierAccueil";
// import Footer from "../../components/Footer/Footer";

// const Accueil = () => {
    function Accueil(){
    return(
        <>
            <BannierAccueil />               
            <CardLogements />
        </>
    );
};

export default Accueil;
import React from "react";
import Header from "../../components/Header/Header";
import Logements from "./../Logements/Logements";

// const Accueil = () => {
    function Accueil(){
    return(
        <div>
            <Header />
            je vais apprendre react
            <Logements />
        </div>
    );
};

export default Accueil;
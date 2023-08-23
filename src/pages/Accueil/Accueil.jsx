import React from "react";
import Header from "../../components/Header/Header";
import CardLogements from "./CardLogements";
import ImageAccueil from "../../components/ImageAccueil/ImageAccueil";
import Footer from "../../components/Footer/Footer";

// const Accueil = () => {
    function Accueil(){
    return(
        <div>
            <Header />
            <main>
                <ImageAccueil />               
                <CardLogements />
            </main>
            <Footer/>
        </div>
    );
};

export default Accueil;
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
// import CardLogements from "./CardLogements";
// import BannierAccueil from "../../components/BannierAccueil/BannierAccueil";


// const Accueil = () => {
    function General(){
    return(
        <div className="general">  
           <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
           
        </div>
    );
};

export default General;
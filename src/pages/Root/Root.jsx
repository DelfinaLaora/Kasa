import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

function Root(){
    return(
        <>  
           <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />           
        </>
    )
}

export default Root;
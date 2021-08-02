import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNavBar from "./components/bottom-nav-bar/BottomNavBar";
import Welcome from "./components/welcome-banner/Welcome";

const Client:React.FC = () => {
    return(
        <React.Fragment>
            <TopNavBar/>
            <BottomNavBar/>
            <Welcome/>
        </React.Fragment>
    )
}

export default Client;
import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNavBar from "./components/bottom-nav-bar/BottomNavBar";

const Client:React.FC = () => {
    return(
        <React.Fragment>
            <TopNavBar/>
            <BottomNavBar/>
        </React.Fragment>
    )
}

export default Client;
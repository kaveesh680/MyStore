import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNavBar from "./components/bottom-nav-bar/BottomNavBar";
import Footer from "./components/footer/Footer";
import Routes from "./Routes";

const Client: React.FC = () => {
    return (
        <Router>
            <TopNavBar/>
            <BottomNavBar/>
            <Routes/>
            <Footer/>
        </Router>
    )
}

export default Client;
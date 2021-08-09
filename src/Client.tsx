import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNavBar from "./components/bottom-nav-bar/BottomNavBar";
import Welcome from "./components/welcome-banner/Welcome";
import SearchBar from "./components/search-bar/SearchBar";
import CategoryArea from "./components/catogories/CategoryArea";

const Client: React.FC = () => {
    return (
        <React.Fragment>
            <TopNavBar/>
            <BottomNavBar/>
            <Welcome/>
            <SearchBar/>
            <CategoryArea/>
        </React.Fragment>
    )
}

export default Client;
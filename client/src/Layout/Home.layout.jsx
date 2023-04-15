import React from "react"

//components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

const HomeLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <FoodTab />
            <div className="conatiner mx-auto px-4 lg:px-20">
                {children}
            </div>
        </>
    );
}

export default HomeLayout;

import React from "react"

//components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

const HomeLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20">
                {children}
            </div>
            <FoodTab />
        </>
    );
}

export default HomeLayout;

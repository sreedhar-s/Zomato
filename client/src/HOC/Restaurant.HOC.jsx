import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import RestaurantLayout from "../Layout/RestaurantLayout";
import Temp from "../components/temp";


const RestaurantLayoutHOC = () => {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={<RestaurantLayout>{<Temp />}</RestaurantLayout>} />
            </Routes> */}
            <RestaurantLayout>{<Temp />}</RestaurantLayout>
        </>
    );
}

export default RestaurantLayoutHOC;
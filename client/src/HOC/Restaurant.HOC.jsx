import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import RestaurantLayout from "../Layout/RestaurantLayout";
import Temp from "../components/temp";
import Overview from "../page/Restaurant/Overview";
import OrderOnline from "../page/Restaurant/OrderOnline";


const RestaurantLayoutHOC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<RestaurantLayout>{<Overview />}</RestaurantLayout>} />
                <Route path="/order-online" element={<RestaurantLayout>{<OrderOnline />}</RestaurantLayout>} />
            </Routes>
        </>
    );
}

export default RestaurantLayoutHOC;
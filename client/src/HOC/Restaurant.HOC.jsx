import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import RestaurantLayout from "../Layout/RestaurantLayout";
import Temp from "../components/temp";
import Overview from "../page/Restaurant/Overview";
import OrderOnline from "../page/Restaurant/OrderOnline";
import Menu from "../page/Restaurant/Menu";
import Review from "../page/Restaurant/Review";
import Photos from "../page/Restaurant/Photos";


const RestaurantLayoutHOC = () => {
    return (
        <>
            <Routes>
                <Route path="/overview" element={<RestaurantLayout>{<Overview />}</RestaurantLayout>} />
                <Route path="/order-online" element={<RestaurantLayout>{<OrderOnline />}</RestaurantLayout>} />
                <Route path="/menu" element={<RestaurantLayout>{<Menu />}</RestaurantLayout>} />
                <Route path="/review" element={<RestaurantLayout>{<Review />}</RestaurantLayout>} />
                <Route path="/photos" element={<RestaurantLayout>{<Photos />}</RestaurantLayout>} />
            </Routes>
        </>
    );
}

export default RestaurantLayoutHOC;
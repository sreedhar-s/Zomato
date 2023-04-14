import React from "react";

import { Route, Routes } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.layout";
import Temp from "../components/temp";

const HomeLayoutHOC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout>{<Temp />}</HomeLayout>} />
            </Routes>
        </>
    );
}

export default HomeLayoutHOC;


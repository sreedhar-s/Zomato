import React from "react";

import { Route, Routes } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.layout";

//pages
import Home from "../page/Home";

const HomeLayoutHOC = () => {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={<HomeLayout>{<Home />}</HomeLayout>} />
            </Routes> */}
            <HomeLayout>{<Home />}</HomeLayout>
        </>
    );
}

export default HomeLayoutHOC;
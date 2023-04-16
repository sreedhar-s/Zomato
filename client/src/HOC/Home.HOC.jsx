import React from "react";

import { Route, Routes } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.layout";
import Temp from "../components/temp";

//pages
import Home from "../page/Home";

const HomeLayoutHOC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout>{<Temp />}</HomeLayout>} />
                <Route path="/:type" element={<HomeLayout>{<Home />}</HomeLayout>} />
            </Routes>
        </>
    );
}

// const HomeLayoutHOC = ({ component: Component , ...rest}) => {
//   return (
//     <>
//       <Routes>
//         <Route
//             {...rest}
//             element={(props) => (
//             <HomeLayout>
//                 <Component {...props} />
//             </HomeLayout>
//             )}
//         />
//       </Routes>
//     </>
//   );
// };

export default HomeLayoutHOC;
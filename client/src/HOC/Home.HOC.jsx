import React from "react";

import { Route, Routes } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.layout";
import Temp from "../components/temp";
import Master from "../components/master";

const HomeLayoutHOC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout>{<Temp />}</HomeLayout>} />
                <Route path="/:type" element={<HomeLayout>{<Master />}</HomeLayout>} />
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
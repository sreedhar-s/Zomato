import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Hoc 
import HomeLayoutHOC from './HOC/Home.HOC';

//components


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomeLayoutHOC />} />
      </Routes>
    </>
  );
}

export default App;

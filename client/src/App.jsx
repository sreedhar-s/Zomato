import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//Hoc 
import HomeLayoutHOC from './HOC/Home.HOC';

//components


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/*" element={<HomeLayoutHOC />} />
      </Routes>
    </>
  );
}

export default App;

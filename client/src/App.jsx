import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//Hoc 
import HomeLayoutHOC from './HOC/Home.HOC';
import RestaurantLayoutHOC from './HOC/Restaurant.HOC';

//components


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<HomeLayoutHOC />} />
        <Route path="/restaurant/:id" element={<RestaurantLayoutHOC />} />
      </Routes>
    </>
  );
}

export default App;

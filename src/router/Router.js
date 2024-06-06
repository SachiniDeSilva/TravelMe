import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Toures from '../pages/Toures';
import TourDetails from '../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/toures" element={<Toures />} />
        <Route path="/toures/:id" element={<TourDetails />} />
        <Route path="/toures/search" element={<SearchResultList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

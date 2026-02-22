import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';


export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
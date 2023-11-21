import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home';
import { Signup } from './user/Signup';
import { Page404 } from './Page404';
import { Login } from './user/Login';
import { EditUser } from './user/EditUser';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<EditUser />} />
      <Route path="/new" element={<CreateReview />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};
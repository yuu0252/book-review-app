import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Signup } from './user/Signup';
import { Page404 } from './Page404';
import { Login } from './user/Login';
import { EditUser } from './user/EditUser';

export const Router: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/edit" element={<EditUser />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

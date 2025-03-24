import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import SignupStep1 from '../pages/auth/SignupStep1';
import SignupStep2 from '../pages/auth/SignupStep2';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      
      {/* 회원가입 중첩 라우팅 */}
      <Route path="/signup" element={<Signup />}>
        <Route index element={<SignupStep1 />} />
        <Route path="step1" element={<SignupStep1 />} />
        <Route path="step2" element={<SignupStep2 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

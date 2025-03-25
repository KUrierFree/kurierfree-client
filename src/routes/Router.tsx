import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import SignupStep1 from "../pages/auth/SignupStep1";
import SignupStep2 from "../pages/auth/SignupStep2";
import AdminMain from "../pages/admin/AdminMain";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminMain />} />

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

import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import SignupStep1 from "../pages/auth/SignupStep1";
import SignupStep2 from "../pages/auth/SignupStep2";
import AdminLandingPage from "../pages/admin/AdminLandingPage";
import SupporterMatchingPage from "../pages/admin/SupporterMatchingPage";
import AdminApplicantMain from "../pages/admin/AdminApplicantMain";
import AdminApplicantEdit from "../pages/admin/AdminApplicantEdit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin/applicant" element={<AdminApplicantMain />} />
      <Route
        path="/admin/applicant/list"
        element={<AdminApplicantEdit />}
      ></Route>

      {/* 회원가입 중첩 라우팅 */}
      <Route path="/signup" element={<Signup />}>
        <Route index element={<SignupStep1 />} />
        <Route path="step1" element={<SignupStep1 />} />
        <Route path="step2" element={<SignupStep2 />} />
      </Route>
      
      {/* 관리자 페이지 */}
      <Route path="/admin" element={<AdminLandingPage />} />
      <Route path="/admin/supporter-matching" element={<SupporterMatchingPage />} />
    </Routes>
  );
};

export default AppRoutes;

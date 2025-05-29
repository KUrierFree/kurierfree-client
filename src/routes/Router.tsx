import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import SignupStep1 from "../pages/auth/SignupStep1";
import SignupStep2 from "../pages/auth/SignupStep2";
import AdminMain from "../pages/admin/AdminMain";
import SupporterMatchingPage from "../pages/admin/matching/SupporterMatchingPage";
import AdminApplicantMain from "../pages/admin/applicant/AdminApplicantMain";
import AdminApplicantEdit from "../pages/admin/applicant/AdminApplicantEdit";
import SupporterMain from "../pages/supporter/SupporterMain";
import DisabledUserMain from "../pages/disabledUser/DisabledUserMain";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      {/* 관리자 페이지 */}
      <Route path="/admin" element={<AdminMain />} />
      <Route path="/admin/applicant" element={<AdminApplicantMain />} />
      <Route path="/admin/applicant/list" element={<AdminApplicantEdit />} />
      <Route path="/admin/matching" element={<SupporterMatchingPage />} />

      {/* 서포터즈 페이지 */}
      <Route path="/supporters" element={<SupporterMain />} />

      {/* 장애학생 페이지 */}
      <Route path="/disabled-users" element={<DisabledUserMain />} />

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

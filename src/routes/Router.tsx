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
import StudentMainPage from "../pages/StudentMainPage";

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
      <Route path="/supporters" element={
        <StudentMainPage
          role="서포터즈"
          name="정지원"
          label="담당 장애학생"
          people={["김건국"]}
          timetableItems={[{ date: '2025-05-26', startTime: '09:00', endTime: '10:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-27', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
            { date: '2025-05-27', startTime: '11:00', endTime: '12:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-27', startTime: '15:00', endTime: '16:00', title: '수업 필기', location: '공B361', type: '필기' },
            { date: '2025-05-28', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-29', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
            { date: '2025-05-29', startTime: '15:00', endTime: '16:00', title: '수업 보조', location: '공B361', type: '보조' },
            { date: '2025-05-30', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },]}
        />
      } />
      
      {/* 장애학생 페이지 */}
      <Route path="/disabled-users" element={
        <StudentMainPage
          role="장애학생"
          name="김건국"
          label="담당 서포터즈"
          people={["정지원", "송은서"]}
          timetableItems={[{ date: '2025-05-26', startTime: '09:00', endTime: '10:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-27', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
            { date: '2025-05-27', startTime: '11:00', endTime: '12:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-27', startTime: '15:00', endTime: '16:00', title: '수업 필기', location: '공B361', type: '필기' },
            { date: '2025-05-28', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },
            { date: '2025-05-29', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
            { date: '2025-05-29', startTime: '15:00', endTime: '16:00', title: '수업 보조', location: '공B361', type: '보조' },
            { date: '2025-05-30', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },]}
        />
      } />

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

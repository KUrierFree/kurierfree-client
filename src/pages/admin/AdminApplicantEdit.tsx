import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import StudentApplicantListTable from "../../components/admin/StudentApplicantListTable";

interface Student {
  name: string;
  department: string;
  gender: "남성" | "여성";
  grade: string;
  status: "확정" | "탈락" | "미정";
}

// ✅ 더미 데이터
const dummyApplicants: Student[] = [
  {
    name: "김철수",
    department: "컴퓨터공학과",
    gender: "남성",
    grade: "3학년 1학기",
    status: "확정",
  },
  {
    name: "이영희",
    department: "전자공학과",
    gender: "여성",
    grade: "3학년 1학기",
    status: "탈락",
  },
  {
    name: "박민수",
    department: "경영학과",
    gender: "남성",
    grade: "3학년 1학기",
    status: "미정",
  },
  {
    name: "최수지",
    department: "화학공학과",
    gender: "여성",
    grade: "3학년 1학기",
    status: "확정",
  },
  {
    name: "한지민",
    department: "생명공학과",
    gender: "여성",
    grade: "3학년 1학기",
    status: "탈락",
  },
  {
    name: "정우성",
    department: "기계공학과",
    gender: "남성",
    grade: "3학년 1학기",
    status: "미정",
  },
];

const AdminApplicantEdit: React.FC = () => {
  const [_selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // 상세정보 보기 클릭 시 실행할 핸들러
  const handleDetailClick = (student: Student) => {
    alert(`상세정보 보기: ${student.name}`);
    setSelectedStudent(student);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-[var(--header-height)]"></div>
      <StudentApplicantListTable
        students={dummyApplicants}
        onDetailClick={handleDetailClick}
      />
      <Footer />
    </div>
  );
};

export default AdminApplicantEdit;

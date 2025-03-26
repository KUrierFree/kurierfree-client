import React, { useEffect, useState } from "react";
import StudentApplicantTable from "../../components/admin/StudentApplicantTable";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface Student {
  name: string;
  department: string;
  gender: "남성" | "여성";
  grade: string;
}

// ✅ 임시 더미 데이터 (API 준비 전 사용)
const dummyStudents: Student[] = [
  {
    name: "김철수",
    department: "컴퓨터공학과",
    gender: "남성",
    grade: "3학년 1학기",
  },
  {
    name: "이영희",
    department: "전자공학과",
    gender: "여성",
    grade: "3학년 1학기",
  },
  {
    name: "박민수",
    department: "경영학과",
    gender: "남성",
    grade: "3학년 1학기",
  },
  {
    name: "최수지",
    department: "화학공학과",
    gender: "여성",
    grade: "3학년 1학기",
  },
  {
    name: "한지민",
    department: "생명공학과",
    gender: "여성",
    grade: "3학년 1학기",
  },
  {
    name: "정우성",
    department: "기계공학과",
    gender: "남성",
    grade: "3학년 1학기",
  },
];

const AdminApplicantEdit: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 setTimeout을 사용하여 1.5초 후 더미 데이터 설정
    setTimeout(() => {
      setStudents(dummyStudents);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading)
    return <div className="p-4 text-gray-600">📦 데이터 로딩 중...</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-[var(--header-height)]"></div>
      <StudentApplicantTable students={students} />
      <Footer />
    </div>
  );
};

export default AdminApplicantEdit;

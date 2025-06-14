import React, { useEffect, useState } from "react";
import StudentApplicantTable from "../../../components/admin/applicant/StudentApplicantTable";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

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

const AdminApplicantMain: React.FC = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setStudents(dummyStudents);
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f5f7f9] flex flex-col items-center justify-center">
        <div className="w-[80%] inline-flex flex-col justify-start px-[151px] py-[95px] gap-[100px]">
          <StudentApplicantTable students={students} />
          <div className="flex flex-row items-center justify-center gap-[50px]">
            <Button
              variant="primary"
              onClick={() => {
                setTimeout(() => {
                  navigate("/admin/applicant/list");
                }, 0);
              }}
            >
              수정
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setTimeout(() => {
                  navigate("/admin/matching?tab=matching");
                }, 0);
              }}
            >
              매칭 결과 확인하기
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminApplicantMain;

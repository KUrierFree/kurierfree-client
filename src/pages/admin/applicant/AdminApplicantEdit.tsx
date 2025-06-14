import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Button from "../../../components/common/Button";
import StudentApplicantListTable from "../../../components/admin/applicant/StudentApplicantListTable";

interface Student {
  name: string;
  department: string;
  gender: "남성" | "여성";
  grade: string;
  status: "확정" | "탈락" | "미정";
}

const AdminApplicantEdit: React.FC = () => {
  const navigate = useNavigate();
  const [_selectedStudent, _setSelectedStudent] = useState<Student | null>(
    null
  );

  const [students, setStudents] = useState<Student[]>([
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
  ]);

  // 상세정보 보기 클릭 시 실행할 핸들러
  const handleDetailClick = (student: Student) => {
    console.log(student);
  };

  const handleToggleStatus = (target: Student) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.name === target.name
          ? {
              ...student,
              status:
                student.status === "확정"
                  ? "탈락"
                  : student.status === "탈락"
                    ? "미정"
                    : "확정",
            }
          : student
      )
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f5f7f9] flex flex-col items-center justify-center">
        <div className="w-[80%] inline-flex flex-col justify-start px-[151px] py-[95px] gap-[100px]">
          <StudentApplicantListTable
            students={students}
            onDetailClick={handleDetailClick}
            onToggleStatus={handleToggleStatus}
          />
          {/* 버튼을 가운데 정렬 */}
          <div className="w-full flex justify-center px-[30%]">
            <Button
              variant="primary"
              onClick={() => {
                setTimeout(() => {
                  navigate("/admin/applicant");
                }, 0);
              }}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminApplicantEdit;

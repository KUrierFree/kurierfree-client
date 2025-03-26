import React, { useEffect, useState } from "react";
import StudentTable from "../../components/admin/StudentApplicantTable";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface Student {
  // todo: 서버 응답이랑 변수 맞추기
  name: string;
  department: string;
  gender: "남" | "여";
  grade: number;
}

const AdminApplicantEdit: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://your-api.com/students"); // 🔹 API 엔드포인트 변경 필요
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");
        const data: Student[] = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading)
    return <div className="p-4 text-gray-600">📦 데이터 로딩 중...</div>;
  if (error) return <div className="p-4 text-red-500">❌ {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StudentTable students={students} />
      <Footer />
    </div>
  );
};

export default AdminApplicantEdit;

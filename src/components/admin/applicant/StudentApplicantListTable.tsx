import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import Button from "../../common/Button";

// 학생 타입 정의
interface Student {
  [x: string]: any;
  name: string;
  department: string;
  gender: "남성" | "여성";
  grade: string;
  status: "확정" | "탈락" | "미정"; // 🔹 추가: 지원자 선발 상태
}

interface StudentApplicantListProps {
  students: Student[]; // 전체 지원자 데이터
  onDetailClick: (student: Student) => void; // 상세정보 버튼 클릭 핸들러
  onToggleStatus: (student: Student) => void; // 상태 토글 핸들러
}

const columns = (
  students: Student[],
  onDetailClick: (student: Student) => void
): ColumnDef<Student>[] => [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "grade", header: "학년" },
  {
    id: "actions",
    header: "상세정보",
    cell: ({ row }) => (
      <Button
        variant="table"
        className="w-full flex justify-center px-[30%]"
        onClick={() => onDetailClick(students[row.index])}
      >
        상세 보기
      </Button>
    ),
  },
];

const StudentApplicantListTable: React.FC<StudentApplicantListProps> = ({
  students,
  onDetailClick,
  onToggleStatus,
}) => {
  const table = useReactTable({
    data: students,
    columns: columns(students, onDetailClick),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white">
      <table className="w-full border-collapse border border-gray-300">
        {/* 테이블 헤더 */}
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 border border-gray-300 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* 테이블 바디 */}
        <tbody>
          {students.length === 0 ? (
            <tr className="border-b">
              <td
                colSpan={columns(students, onDetailClick).length}
                className="p-3 text-center text-gray-500"
              >
                지원한 서포터즈가 없습니다.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`border-b cursor-pointer ${
                  row.original.status === "확정"
                    ? "bg-[var(--color-success-bg)]"
                    : row.original.status === "탈락"
                      ? "bg-[var(--color-danger-bg)]"
                      : ""
                }`}
                onClick={() => onToggleStatus(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border border-gray-300">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentApplicantListTable;

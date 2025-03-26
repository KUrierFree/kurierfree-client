import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface Student {
  name: string;
  department: string;
  gender: "남" | "여";
  grade: number;
}

interface StudentTableProps {
  students: Student[]; // 부모 컴포넌트에서 전달할 데이터
}

// 컬럼 정의
const columns: ColumnDef<Student>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "grade", header: "학년" },
];

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow">
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3 border border-gray-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;

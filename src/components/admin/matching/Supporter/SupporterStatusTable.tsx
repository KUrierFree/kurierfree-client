/*
  서포터즈 매칭 상태 테이블
  이벤트 발생 X
*/

import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { Supporter } from '../../../../types/user';
import TimeTableButton from '../TimeTableButton';

interface SupporterStatusTableProps {
  data?: Supporter[];
}

const columns: ColumnDef<Supporter>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "grade", header: "학년" },
  {
    id: "matchingStatus",
    header: "매칭상태",
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-sm ${
        row.original.matchingStatus === "completed" ? "bg-green-100 text-green-800" :
        row.original.matchingStatus === "selecting" ? "bg-yellow-100 text-yellow-800" :
        "bg-gray-100 text-gray-800"
      }`}>
        {row.original.matchingStatus === "completed" ? "매칭완료" :
         row.original.matchingStatus === "selecting" ? "매칭중" :
         "미매칭"}
      </span>
    ),
  },
  {
    id: "timeTable",
    header: "시간표",
    size: 80,
    cell: ({ row }) => (
      <TimeTableButton student={row.original} />
    ),
  }
];

const SupporterStatusTable: React.FC<SupporterStatusTableProps> = ( {data} ) => {
  const dummyData: Supporter[] = [
    {
      id: "1",
      name: "김민국",
      department: "컴퓨터공학부",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "2",
      name: "김민준",
      department: "컴퓨터공학부",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "3",
      name: "이서윤",
      department: "경영학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "4",
      name: "박지훈",
      department: "전자공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "5",
      name: "정혜민",
      department: "심리학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "6",
      name: "박도현",
      department: "체육교육과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "7",
      name: "유나영",
      department: "사회복지학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "8",
      name: "강민호",
      department: "기계공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "9",
      name: "윤서진",
      department: "간호학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "10",
      name: "배준혁",
      department: "정책학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "11",
      name: "오태윤",
      department: "수의학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "12",
      name: "오대윤",
      department: "체육교육과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "13",
      name: "서지호",
      department: "항공우주공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "14",
      name: "문수현",
      department: "미디어학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "15",
      name: "조민수",
      department: "정책학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "16",
      name: "안디비",
      department: "디자인학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "17",
      name: "한재림",
      department: "생명공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "18",
      name: "진해림",
      department: "정치외교학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
  ];
  // props로 받은 data가 있으면 사용하고, 없으면 더미 데이터 사용
  const supportersData = data ?? dummyData;

  const table = useReactTable({
    data: supportersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white">
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-y border-gray-300">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 border-x border-gray-300 text-left bg-gray-50"
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
        <tbody>
          {supportersData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500 border-b border-gray-300"
              >
                등록된 서포터즈가 없습니다.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border-x border-gray-300 border-b">
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

export default SupporterStatusTable; 
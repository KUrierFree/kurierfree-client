/*
  장애학생 목록을 표시하는 테이블
  매칭 시작 버튼 누를 시 SupporterCandidateTable 표시
*/

import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { DisabledStudent } from '../../../../types/user';
import SupporterSelectingTable from './SupporterSelectingTable';
import Button from '../../../common/Button';
import TimeTableButton from '../TimeTableButton';

interface TableMeta {
  onTimeTableClick: (student: DisabledStudent) => void;
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
}

interface DisabledStudentTableProps {
  data: DisabledStudent[];
  tableOptions: {
    meta: TableMeta;
  };
}

const columns: ColumnDef<DisabledStudent>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "disabilityType", header: "장애유형" },
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
    cell: () => <TimeTableButton onClick={() => {}} />,
  },
  { 
    id: "actions",
    header: "관리",
    cell: ({ row, table }) => (
      <div className="flex gap-2">
          {row.original.matchingStatus === "waiting" && (
          <Button
            variant="primary"
            onClick={() => (table.options.meta as TableMeta).onMatchingStart(row.original)}
          >
            매칭시작
          </Button>
        )}
      </div>
    ),
  },
];

const DisabledStudentTable: React.FC<DisabledStudentTableProps> = ({ data, tableOptions }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: tableOptions.meta,
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
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500 border-b border-gray-300"
              >
                매칭할 장애학생이 없습니다.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3 border-x border-gray-300 border-b">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {row.original.matchingStatus === "selecting" && (
                  <tr>
                    <td colSpan={columns.length} className="p-3 border-x border-gray-300 border-b">
                      <SupporterSelectingTable
                        supporters={[
                          { name: "홍길동", department: "컴퓨터공학과", gender: "남성", grade: "3학년 1학기" },
                          { name: "김철수", department: "경영학과", gender: "남성", grade: "2학년 2학기" },
                          { name: "이영희", department: "심리학과", gender: "여성", grade: "4학년 1학기" },
                        ]}
                        onSelect={(supporterId) => (table.options.meta as TableMeta).onSupporterSelect(row.original, supporterId)}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisabledStudentTable;
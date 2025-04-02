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
import { DisabledStudent, Supporter } from '../../../../types/user';
import SupporterSelectingTable from './SupporterSelectingTable';
import TimeTableButton from '../TimeTableButton';
import Button from '../../../common/Button';

// 테이블 메타 타입 정의
interface CustomTableMeta {
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  getSupporterCandidates: (studentName: string) => Supporter[];
}

// 테이블 컴포넌트 타입 정의
interface DisabledStudentTableProps {
  data: DisabledStudent[];
  tableOptions: {
    meta: CustomTableMeta;
  };
}

// 테이블 컬럼 정의
const columns: ColumnDef<DisabledStudent>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "grade", header: "학년" },
  { accessorKey: "disabilityType", header: "장애유형" },
  {
    id: "matchingStatus",
    header: "매칭 상태",
    size: 100,
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-sm ${
        row.original.matchingStatus === "completed" ? "bg-green-100 text-green-800" :
        row.original.matchingStatus === "selecting" ? "bg-yellow-100 text-yellow-800" :
        "bg-gray-100 text-gray-800"
      }`}>
        {row.original.matchingStatus === "completed" ? "매칭 완료" :
         row.original.matchingStatus === "selecting" ? "매칭 중" :
         "매칭 전"}
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
  },
  { 
    id: "actions",
    header: "관리",
    size: 120,
    cell: ({ row, table }) => (
      <div className="flex gap-2">
          {row.original.matchingStatus === "waiting" && (
          <Button
            variant="primary"
            onClick={() => (table.options.meta as CustomTableMeta).onMatchingStart(row.original)}
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
    meta: tableOptions.meta as any,
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
                  style={{ 
                    width: header.column.getSize() !== 150 ? header.column.getSize() : undefined 
                  }}
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
                    <td 
                      key={cell.id} 
                      className="p-3 border-x border-gray-300 border-b"
                      style={{ 
                        width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined 
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {row.original.matchingStatus === "selecting" && (
                  <tr>
                    <td colSpan={columns.length} className="p-3 border-x border-gray-300 border-b">
                      <SupporterSelectingTable
                        supporters={(tableOptions.meta as CustomTableMeta).getSupporterCandidates(row.original.name)}
                        onSelect={(supporterId) => (tableOptions.meta as CustomTableMeta).onSupporterSelect(row.original, supporterId)}
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
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
import { supporters } from '../../../../data/dummy/matchingData';
import TimeTableButton from '../TimeTableButton';
import { COLUMN_WIDTHS, COLUMN_WIDTH_PERCENTS, TABLE_STYLES } from '../../../../constants/tableConstants';

interface SupporterStatusTableProps {
  data?: Supporter[];
}

const columns: ColumnDef<Supporter>[] = [
  { accessorKey: "name", header: "이름", size: COLUMN_WIDTHS.NAME },
  { accessorKey: "gender", header: "성별", size: COLUMN_WIDTHS.GENDER },
  { accessorKey: "department", header: "학과", size: COLUMN_WIDTHS.DEPARTMENT },
  { accessorKey: "grade", header: "학년", size: COLUMN_WIDTHS.GRADE },
  { accessorKey: "supportType", header: "지원유형", size: COLUMN_WIDTHS.SUPPORT_TYPE },
  {
    id: "matchingStatus",
    header: "매칭상태",
    size: COLUMN_WIDTHS.STATUS,
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
    size: COLUMN_WIDTHS.TIMETABLE,
    cell: ({ row }) => (
      <TimeTableButton student={row.original} />
    ),
  },
  { accessorKey: "activityTime", header: "활동시간", size: COLUMN_WIDTHS.ACTIVITY_TIME }
];

const SupporterStatusTable: React.FC<SupporterStatusTableProps> = ( {data} ) => {
  // props로 받은 data가 있으면 사용하고, 없으면 더미 데이터 사용
  const supportersData = data ?? supporters;

  const table = useReactTable({
    data: supportersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white overflow-auto" style={{ 
      minWidth: TABLE_STYLES.MIN_WIDTH, 
      maxWidth: TABLE_STYLES.MAX_WIDTH,
      margin: TABLE_STYLES.MARGIN
    }}>
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-y border-gray-300">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 border-x border-gray-300 text-left bg-gray-50"
                  style={{ 
                    width: COLUMN_WIDTH_PERCENTS[header.column.columnDef.header as keyof typeof COLUMN_WIDTH_PERCENTS]
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
                  <td key={cell.id} className="p-3 border-x border-gray-300 border-b"
                    style={{ 
                      width: COLUMN_WIDTH_PERCENTS[cell.column.columnDef.header as keyof typeof COLUMN_WIDTH_PERCENTS]
                    }}
                  >
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
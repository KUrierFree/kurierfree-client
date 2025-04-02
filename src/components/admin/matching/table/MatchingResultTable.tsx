import React, { useCallback } from "react";
import { ColumnDef, createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { DisabledStudent, Supporter } from "../../../../types/user";
import SupporterMatchedTable from "./SupporterMatchedTable";
import TimeTableButton from "../TimeTableButton.tsx";

// DisabledStudent에 supporters 필드 추가
interface DisabledStudentWithSupporters extends DisabledStudent {
  supporters: Supporter[];
}

interface MatchingResultTableProps {
  data: {
    disabledStudent: DisabledStudent;
    supporter: Supporter;
  }[];
}

const MatchingResultTable: React.FC<MatchingResultTableProps> = ({ data }) => {
  // 장애학생별로 서포터를 그룹화
  const groupByDisabledStudent = useCallback((data: MatchingResultTableProps["data"]): DisabledStudentWithSupporters[] => {
    // 임시로 인덱스를 ID로 사용하여 그룹화
    const groupedData: Record<string, DisabledStudentWithSupporters> = {};

    data.forEach((row, index) => {
      // 각 장애학생의 키를 이름+학과 조합으로 만듦
      const key = `${row.disabledStudent.name}-${row.disabledStudent.department}`;

      if (!groupedData[key]) {
        groupedData[key] = {
          ...row.disabledStudent,
          supporters: [],
        };
      }

      groupedData[key].supporters.push(row.supporter);
    });

    return Object.values(groupedData);
  }, []);

  const groupedData = groupByDisabledStudent(data);
  
  const columnHelper = createColumnHelper<DisabledStudentWithSupporters>();

  const columns: ColumnDef<DisabledStudentWithSupporters, any>[] = [
    columnHelper.accessor("name", {
      header: "이름",
    }),
    columnHelper.accessor("department", {
      header: "학과",
    }),
    columnHelper.accessor("gender", {
      header: "성별",
    }),
    columnHelper.accessor("disabilityType", {
      header: "장애 유형",
    }),
    columnHelper.accessor("matchingStatus", {
      header: "매칭",
      cell: () => <span className="text-red-500">매칭 완료</span>,
    }),
    columnHelper.display({
      id: "timeTable",
      header: "시간표",
      cell: ({ row }) => <TimeTableButton student={row.original} />,
      size: 80, // 칼럼 너비 설정
    }),
  ];
  
  const table = useReactTable({
    data: groupedData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded-md shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {table.getHeaderGroups().map((headerGroup) => (
              headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3 py-2 text-xs text-gray-500 border border-gray-200"
                  style={{ 
                    width: header.column.getSize() !== 150 ? header.column.getSize() : undefined 
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-3 py-2 text-sm text-gray-600 border border-gray-200"
                    style={{ 
                      width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined 
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              <tr>
                <td colSpan={columns.length} className="p-0 border border-gray-200">
                  <div className="p-2">
                    <SupporterMatchedTable supporters={row.original.supporters} />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchingResultTable;
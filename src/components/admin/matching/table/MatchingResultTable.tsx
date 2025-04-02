import React from "react";
import { ColumnDef, createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { DisabledStudent, Supporter } from "../../../../types/user";
import SupporterMatchedTable from "./SupporterMatchedTable";

interface MatchingResultTableProps {
  data: {
    disabledStudent: DisabledStudent;
    supporter: Supporter;
  }[];
  onTimeTableClick?: (student: DisabledStudent) => void;
}

// 장애학생별로 데이터 그룹화하는 함수
const groupByDisabledStudent = (data: MatchingResultTableProps["data"]) => {
  const groupedData = data.reduce((acc, curr) => {
    const key = curr.disabledStudent.name;
    if (!acc[key]) {
      acc[key] = {
        disabledStudent: curr.disabledStudent,
        supporters: [],
      };
    }
    acc[key].supporters.push(curr.supporter);
    return acc;
  }, {} as Record<string, { disabledStudent: DisabledStudent; supporters: Supporter[] }>);

  return Object.values(groupedData);
};

const columnHelper = createColumnHelper<DisabledStudent>();

const columns: ColumnDef<DisabledStudent, any>[] = [
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
];

const MatchingResultTable: React.FC<MatchingResultTableProps> = ({ data, onTimeTableClick }) => {
  const groupedData = groupByDisabledStudent(data);
  
  const tableColumns = [...columns];
  
  if (onTimeTableClick) {
    tableColumns.push(
      columnHelper.display({
        id: "actions",
        header: "관리",
        cell: ({ row }) => (
          <button
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => onTimeTableClick(row.original)}
          >
            시간표
          </button>
        ),
      })
    );
  }
  
  const table = useReactTable({
    data: groupedData.map(item => item.disabledStudent),
    columns: tableColumns,
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
          {table.getRowModel().rows.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-3 py-2 text-sm text-gray-600 border border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              <tr>
                <td colSpan={tableColumns.length} className="p-0 border border-gray-200">
                  <div className="p-2">
                    <SupporterMatchedTable supporters={groupedData[index].supporters} />
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
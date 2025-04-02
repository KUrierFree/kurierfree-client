import { ColumnDef, flexRender, getCoreRowModel, useReactTable, createColumnHelper } from "@tanstack/react-table";
import { Supporter } from "../../../types/user";
import TimeTableButton from "./TimeTableButton";

// TableMeta 인터페이스 정의
declare module '@tanstack/react-table' {
  interface TableMeta<TData extends unknown> {
    onSelect?: (supporterId: string) => void;
  }
}

interface SupporterMiniTableProps {
  data: Supporter[];
  extraColumnsBefore?: ColumnDef<Supporter, any>[];
  extraColumnsAfter?: ColumnDef<Supporter, any>[];
  meta?: {
    onSelect?: (supporterId: string) => void;
  };
}

const SupporterMiniTable = ({ 
  data, 
  extraColumnsBefore = [], 
  extraColumnsAfter = [],
  meta 
}: SupporterMiniTableProps) => {
  const columnHelper = createColumnHelper<Supporter>();

  // 기본 컬럼 정의
  const defaultColumns: ColumnDef<Supporter, any>[] = [
    columnHelper.accessor("name", {
      header: "이름",
    }),
    columnHelper.accessor("gender", {
      header: "성별",
    }),
    columnHelper.accessor("department", {
      header: "학과",
    }),
    columnHelper.accessor("grade", {
      header: "학년",
    }),
    columnHelper.accessor("id", {
      id: "timetable",
      header: "시간표",
      cell: (info) => <TimeTableButton student={info.row.original} />,
    }),
  ];

  // 모든 컬럼 합치기
  const columns = [...extraColumnsBefore, ...defaultColumns, ...extraColumnsAfter];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta,
  });

  return (
    <div className="bg-white">
      <table className="w-full border-collapse border border-gray-300">
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

        <tbody>
          {data.length === 0 ? (
            <tr className="border-b">
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500"
              >
                데이터가 없습니다.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
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

export default SupporterMiniTable;
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  TableOptions,
} from "@tanstack/react-table";
import SupporterSelectionTable from './SupporterSelectionTable';

// BaseTable 컴포넌트의 props 타입 정의
export interface BaseTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
  className?: string;
  tableOptions?: Partial<TableOptions<T>>;
}

/**
 * 재사용 가능한 기본 테이블 컴포넌트
 * @template T 테이블 데이터 타입
 */
function BaseTable<T extends object>({
  data,
  columns,
  className = "",
  tableOptions = {},
}: BaseTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: tableOptions?.meta,
  });

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse border border-gray-200">
        {/* 테이블 헤더 */}
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3 px-4 border-b border-gray-200 text-left font-medium text-gray-700"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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
            <React.Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-3 px-4 border-b border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {(row.original as any).matchingStatus === "selecting" && (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-4">
                    <SupporterSelectionTable
                      supporters={[
                        { name: "홍길동", department: "컴퓨터공학과", gender: "남성", grade: "3학년" },
                        { name: "김철수", department: "경영학과", gender: "남성", grade: "2학년" },
                        { name: "이영희", department: "심리학과", gender: "여성", grade: "4학년" },
                      ]}
                      onSelect={(supporterId) => (tableOptions?.meta as any).onSupporterSelect(row.original, supporterId)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BaseTable; 
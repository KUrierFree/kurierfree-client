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
  renderExpandedRow?: (row: T) => React.ReactNode;
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
  renderExpandedRow,
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
              {renderExpandedRow && renderExpandedRow(row.original) && (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-4">
                    {renderExpandedRow(row.original)}
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
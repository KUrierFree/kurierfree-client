import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import EmptyTableMessage from './EmptyTableMessage';
import { DisabledStudent } from "../../types/user";

interface BaseTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
  meta?: Record<string, any>;
  expandable?: {
    expandedRowIds?: string[];
    renderExpandedRow?: (row: T) => React.ReactNode;
  }
}

export type CustomTableMeta = {
  onMatchingStart?: (student: DisabledStudent) => void;
  onMatchingEdit?: (student: DisabledStudent) => void;
  onConfirm?: (studentId: number) => void;
};

export const BaseTable = <T extends { id: number }>({ 
  data, 
  columns, 
  className = "", 
  meta,
  expandable
}: BaseTableProps<T>) => {
  const { expandedRowIds = [], renderExpandedRow } = expandable || {};

  const table = useReactTable<T>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta,
  });

  return (
    <div className={`bg-white rounded-lg shadow-sm w-full overflow-hidden border border-gray-200 ${className}`}>
      <div role="table" className="w-full">
        {/* Header */}
        <div role="rowgroup" className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} role="row" className="flex w-full border-b border-gray-200">
              {headerGroup.headers.map((header, idx) => (
                <div
                  key={header.id}
                  role="columnheader"
                  className={`py-3 px-4 bg-gray-50 font-medium text-xs text-gray-500 tracking-wider uppercase ${
                    ['grade', 'activityTime', 'matchingDate', 'rank'].includes(header.id) ? 'text-right' : 
                    header.id === 'timeTable' ? 'text-center justify-center' : 'text-left'
                  } flex-shrink-0 flex items-center h-[42px] ${
                    idx !== headerGroup.headers.length - 1 ? 'border-r border-gray-200' : ''
                  }`}
                  style={{ width: header.getSize() }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Body */}
        <div role="rowgroup" className="w-full">
          {data.length === 0 ? (
            <EmptyTableMessage colSpan={columns.length} />
          ) : (
            table.getRowModel().rows.map((row) => (              
              <React.Fragment key={row.original.id.toString()}>
                <div role="row" className="flex w-full border-b border-gray-200 hover:bg-gray-50">
                  {row.getVisibleCells().map((cell, idx) => (
                    <div
                      key={cell.id}
                      role="cell"
                      className={`py-3 px-4 text-sm ${
                        ['grade', 'activityTime', 'matchingDate', 'rank'].includes(cell.column.id) ? 'text-right' : 
                        cell.column.id === 'timeTable' ? 'text-center justify-center' : 'text-left'
                      } flex-shrink-0 flex items-center h-[48px] ${
                        idx !== row.getVisibleCells().length - 1 ? 'border-r border-gray-200' : ''
                      }`}
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(cell.column.columnDef.cell,cell.getContext())}
                    </div>
                  ))}
                </div>
                {/* 확장 행 */}
                {expandedRowIds.includes(row.original.id.toString()) && renderExpandedRow && (
                  <div className="w-full border-b border-gray-200 bg-gray-50">
                    {renderExpandedRow(row.original)}
                  </div>
                )}
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseTable;
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import EmptyTableMessage from "./EmptyTableMessage";

interface BaseMiniTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  meta?: Record<string, any>;
} 

const BaseMiniTable = <T,>({ 
  data,
  columns,
  meta,
}: BaseMiniTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta,
  });

  return (
    <div className="bg-white">
      <table className="w-full border-collapse border border-gray-300">

        {/* Header */}
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

        {/* Body */}
        <tbody>
          {data.length === 0 ? (
              <EmptyTableMessage colSpan={columns.length} />
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

export default BaseMiniTable;
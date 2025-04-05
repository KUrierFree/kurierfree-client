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
    <div className="bg-white rounded-lg border border-gray-200">
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-500 bg-gray-50 border-b border-r border-gray-200 last:border-r-0"
                  style={{ width: header.getSize() }}
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
            <EmptyTableMessage colSpan={columns.length} />
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-gray-200 hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm border-r border-gray-200 last:border-r-0">
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
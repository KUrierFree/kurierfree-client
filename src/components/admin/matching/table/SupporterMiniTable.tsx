import { ColumnDef } from "@tanstack/react-table";

interface TableMetaType {
  onSelect?: (supporterId: string) => void;
}

interface SupporterMiniTableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
  meta?: TableMetaType;
}

const SupporterMiniTable = ({ data, columns, meta }: SupporterMiniTableProps) => {
  // 액션 열이 이미 columns에 포함되어 있는지 확인
  const hasActionColumn = columns.some((col) => (col as any).id === "action");
  
  return (
    <div className="bg-white rounded-md shadow-sm">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-3 py-2 text-xs text-gray-500 border border-gray-200">
                {column.header as string}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((column, colIndex) => {
                // 액션 열인 경우 커스텀 렌더링
                if ((column as any).id === "action" && meta?.onSelect) {
                  return (
                    <td key={colIndex} className="px-3 py-2 text-sm border border-gray-200">
                      <button
                        onClick={() => meta.onSelect?.(row.id || rowIndex.toString())}
                        className="px-2 py-1 text-xs bg-secondary text-white rounded-md hover:bg-secondary/80"
                      >
                        매칭 확정
                      </button>
                    </td>
                  );
                }
                
                // 순위 열인 경우 "N순위" 형식으로 표시
                if ((column as any).id === "rank") {
                  return (
                    <td key={colIndex} className="px-3 py-2 text-sm text-gray-600 border border-gray-200">
                      {`${rowIndex + 1}순위`}
                    </td>
                  );
                }
                
                // 일반 열 렌더링
                const accessorKey = (column as any).accessorKey;
                const accessorFn = (column as any).accessorFn;
                let cellValue;

                if (accessorKey) {
                  cellValue = row[accessorKey];
                } else if (accessorFn && (column as any).id) {
                  cellValue = accessorFn(row, rowIndex);
                } else {
                  cellValue = "";
                }

                return (
                  <td key={colIndex} className="px-3 py-2 text-sm text-gray-600 border border-gray-200">
                    {cellValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupporterMiniTable;
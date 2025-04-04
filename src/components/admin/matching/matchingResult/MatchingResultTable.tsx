import React from "react";
import { BaseTable } from "../tables/BaseTable";
import { MatchingResult } from "../../../../types/matching";
import TimeTableButton from "../TimeTableButton";
import MatchedMiniTable from "../miniTables/MatchedMiniTable";
import { ColumnDef } from "@tanstack/react-table";

interface Props {
  data: MatchingResult[];
}

type TableData = MatchingResult & { id: number };

const columns: ColumnDef<TableData>[] = [
  { accessorKey: "disabledStudent.name", header: "이름" },
  { accessorKey: "disabledStudent.gender", header: "성별" },
  { accessorKey: "disabledStudent.department", header: "학과" },
  { accessorKey: "disabledStudent.grade", header: "학년" },
  { accessorKey: "disabledStudent.disabilityType", header: "장애유형" },
  {
    id: "timeTable",
    header: "시간표",
    size: 80,
    cell: ({ row }) => (
      <TimeTableButton student={row.original.disabledStudent} />
    ),
  },
];

const MatchingResultTable: React.FC<Props> = ({ data }) => {
  const tableData = data.map((result, index) => ({
    ...result,
    id: index + 1,
  }));

  return (
    <BaseTable
      data={tableData}
      columns={columns}
      expandable={{
        expandedRowIds: tableData.map(result => result.id.toString()),
        renderExpandedRow: (result: TableData) => (
          <div className="p-4">
            <MatchedMiniTable data={[result]} />
          </div>
        ),
      }}
    />
  );
};

export default MatchingResultTable;

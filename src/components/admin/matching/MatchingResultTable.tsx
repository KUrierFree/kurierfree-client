import React from "react";
import BaseTable from "../../table/BaseTable";
import { createColumnHelper, Row } from "@tanstack/react-table";
import { MatchingResult } from "../../../types/user";
import TimeTableButton from "./TimeTableButton";
import MatchedMiniTable from "./miniTables/MatchedMiniTable";

interface Props {
  data: MatchingResult[];
}

const columnHelper = createColumnHelper<MatchingResult>();

const columns = [
  {
    accessorKey: "disabledStudent.name",
    header: "이름",
  },
  {
    accessorKey: "disabledStudent.department",
    header: "학과",
  },
  {
    accessorKey: "disabledStudent.grade",
    header: "학년",
  },
  {
    accessorKey: "disabledStudent.disabilityType",
    header: "장애유형",
  },
  {
    id: "timeTable",
    header: "시간표",
    size: 80,
    cell: ({ row }: { row: Row<MatchingResult> }) => (
      <TimeTableButton student={row.original.disabledStudent} />
    ),
  },
];

const MatchingResultTable: React.FC<Props> = ({ data }) => {
  return (
    <BaseTable
      data={data}
      columns={columns}
      expandable={{
        expandedRowIds: data.map((_, index) => index.toString()),
        renderExpandedRow: (result) => (
          <div className="p-4">
            <MatchedMiniTable data={[result]} />
          </div>
        ),
      }}
    />
  );
};

export default MatchingResultTable;

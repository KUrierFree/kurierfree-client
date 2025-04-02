import React from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import SupporterMiniTable from "./SupporterMiniTable";
import { Supporter } from "../../../../types/user";
import TimeTableButton from "../TimeTableButton";

interface SupporterMatchedTableProps {
  supporters: Supporter[];
}

const SupporterMatchedTable = ({ supporters }: SupporterMatchedTableProps) => {
  const columnHelper = createColumnHelper<Supporter>();

  const columns: ColumnDef<Supporter, any>[] = [
    columnHelper.accessor("supportType", {
      id: "type",
      header: "유형",
    }),
    columnHelper.accessor("name", {
      header: "이름",
    }),
    columnHelper.accessor("department", {
      header: "학과",
    }),
    columnHelper.accessor("gender", {
      header: "성별",
    }),
    columnHelper.accessor("grade", {
      header: "학년",
    }),
    columnHelper.accessor("activityTime", {
      header: "활동 시간",
    }),
    columnHelper.display({
      id: "timeTable",
      header: "시간표",
      cell: (info) => <TimeTableButton student={info.row.original} />,
      size: 80,
    }),
  ];

  return (
    <SupporterMiniTable 
      data={supporters}
      columns={columns}
    />
  );
};

export default SupporterMatchedTable; 
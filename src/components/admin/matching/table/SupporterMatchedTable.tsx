import React from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import SupporterMiniTable from "./SupporterMiniTable";
import { Supporter } from "../../../../types/user";

interface SupporterMatchedTableProps {
  supporters: Supporter[];
}

const columnHelper = createColumnHelper<Supporter>();

const columns: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor(() => "수업도우미", {
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
];

const SupporterMatchedTable = ({ supporters }: SupporterMatchedTableProps) => {
  return (
    <SupporterMiniTable 
      data={supporters}
      columns={columns}
    />
  );
};

export default SupporterMatchedTable; 
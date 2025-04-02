/*
  매칭 알고리즘에 의해 선정된 서포터즈 3인을 표시하는 테이블
*/

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import SupporterMiniTable from "./SupporterMiniTable";

interface TableMetaType {
  onSelect: (supporterId: string) => void;
}

interface SupporterSelectingTableProps {
  supporters: {
    name: string;
    department: string;
    gender: string;
    grade: string;
  }[];
  onSelect: (supporterId: string) => void;
}

const columnHelper = createColumnHelper<SupporterSelectingTableProps["supporters"][0]>();

const columns: ColumnDef<SupporterSelectingTableProps["supporters"][0], any>[] = [
  columnHelper.accessor(() => "", {
    id: "rank",
    header: "순위",
    cell: (info) => `${info.row.index + 1}순위`,
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
  columnHelper.accessor(() => "", {
    id: "action",
    header: "",
    cell: (info) => (
      <button
        onClick={() => (info.table.options.meta as TableMetaType).onSelect(info.row.index.toString())}
        className="px-2 py-1 text-sm bg-primary text-white rounded hover:bg-primary/80"
      >
        선택
      </button>
    ),
  }),
];

const SupporterSelectingTable = ({ supporters, onSelect }: SupporterSelectingTableProps) => {
  return (
    <SupporterMiniTable
      data={supporters}
      columns={columns}
      meta={{ onSelect }}
    />
  );
};

export default SupporterSelectingTable;
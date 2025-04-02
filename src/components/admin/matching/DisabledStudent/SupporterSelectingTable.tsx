/*
  매칭 알고리즘에 의해 선정된 서포터즈 3인을 표시하는 테이블
*/

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import SupporterMiniTable from "../SupporterMiniTable";
import { Supporter } from "../../../../types/user";

interface SupporterSelectingTableProps {
  supporters: Supporter[];
  onSelect: (supporterId: string) => void;
}

const columnHelper = createColumnHelper<Supporter>();

// 순위 컬럼 정의 (맨 앞에 배치)
const extraColumnsBefore: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor(() => "", {
    id: "rank",
    header: "순위",
    cell: (info) => `${info.row.index + 1}순위`,
  }),
];

// 선택 버튼 컬럼 정의 (맨 뒤에 배치)
const extraColumnsAfter: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor(() => "", {
    id: "action",
    header: "",
    cell: (info) => (
      <button
        onClick={() => info.table.options.meta?.onSelect?.(info.row.original.id)}
        className="px-2 py-1 text-sm bg-secondary text-white rounded hover:bg-secondary/80"
      >
        매칭 확정
      </button>
    ),
  }),
];

// 선택 테이블 컴포넌트
const SupporterSelectingTable = ({ supporters, onSelect }: SupporterSelectingTableProps) => {
  return (
    <SupporterMiniTable
      data={supporters}
      extraColumnsBefore={extraColumnsBefore}
      extraColumnsAfter={extraColumnsAfter}
      meta={{ onSelect }}
    />
  );
};

export default SupporterSelectingTable;
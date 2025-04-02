import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import SupporterMiniTable from "../SupporterMiniTable";
import { Supporter } from "../../../../types/user";

interface SupporterMatchedTableProps {
  supporters: Supporter[];
}

const columnHelper = createColumnHelper<Supporter>();

// 유형 컬럼 정의 (맨 앞에 배치)
const extraColumnsBefore: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor("supportType", {
    id: "type",
    header: "유형",
  }),
];

// 활동 시간 컬럼 정의 (맨 뒤에 배치)
const extraColumnsAfter: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor("activityTime", {
    header: "활동 시간",
  }),
];

const SupporterMatchedTable = ({ supporters }: SupporterMatchedTableProps) => {
  return (
    <SupporterMiniTable 
      data={supporters}
      extraColumnsBefore={extraColumnsBefore}
      extraColumnsAfter={extraColumnsAfter}
    />
  );
};

export default SupporterMatchedTable;
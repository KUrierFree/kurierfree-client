import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import { Supporter } from "../../../../types/user";
import TimeTableButton from "../TimeTableButton";
import Button from "../../../common/Button";
import BaseMiniTable from "../tables/BaseMiniTable";

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends unknown> {
    onSelect?: (supporterId: number) => void;
  }
}

interface CandidateMiniTableProps {
  data: Supporter[];
  onSelect: (supporterId: number) => void;
  onConfirm: () => void;
}

const columnHelper = createColumnHelper<Supporter>();

const columns: ColumnDef<Supporter, any>[] = [
  columnHelper.accessor("name", { header: "이름" }),
  columnHelper.accessor("gender", { header: "성별" }),
  columnHelper.accessor("department", { header: "학과" }),
  columnHelper.accessor("grade", { header: "학년" }),
  columnHelper.accessor("id", {
    id: "timetable",
    header: "시간표",
    cell: ({ row }) => <TimeTableButton student={row.original} />,
  }),
  columnHelper.display({
    id: "actions",
    header: "선택",
    cell: ({ row, table }) => {
      const onSelect = table.options.meta?.onSelect;
      return (
        <Button
          variant="secondary"
          onClick={() => onSelect?.(row.original.id)}
        >
          매칭 확정
        </Button>
      );
    },
  }),
];

const CandidateMiniTable = ({ data, onSelect, onConfirm }: CandidateMiniTableProps) => {
  return (
    <div className="space-y-4">
      <BaseMiniTable<Supporter>
        data={data}
        columns={columns}
        meta={{ onSelect }}
      />
    </div>
  );
};

export default CandidateMiniTable;
import { ColumnDef } from "@tanstack/react-table";
import { Supporter } from "../../../../types/user";
import TimeTableButton from "../TimeTableButton";
import Button from "../../../common/Button";
import BaseMiniTable from "../tables/BaseMiniTable";

interface CandidateMiniTableProps {
  data: Supporter[];
  onSelect: (supporterId: number) => void;
}

const CandidateMiniTable = ({ data, onSelect }: CandidateMiniTableProps) => {
  const columns: ColumnDef<Supporter, any>[] = [
    { accessorKey: "name", header: "이름" },
    { accessorKey: "gender", header: "성별" },
    { accessorKey: "department", header: "학과" },
    { accessorKey: "grade", header: "학년" },
    {
      id: "timetable",
      header: "시간표",
      cell: ({ row }) => <TimeTableButton student={row.original} />,
    },
    {
      id: "actions",
      header: "관리",
      cell: ({ row }) => (
        <Button
          variant="primary"
          onClick={() => onSelect(row.original.id)}
        >
          선택
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <BaseMiniTable
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default CandidateMiniTable;
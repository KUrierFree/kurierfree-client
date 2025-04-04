import BaseTable from "../../../table/BaseTable";
import { Supporter } from "../../../../types/user";
import TimeTableButton from "../TimeTableButton";
import { ColumnDef } from "@tanstack/react-table";

interface Props {
  data: Supporter[];
}

const columns: ColumnDef<Supporter>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "grade", header: "학년" },
  { accessorKey: "supportType", header: "활동유형" },
  {
    id: "matchingStatus",
    header: "매칭 상태",
    size: 100,
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-sm ${
        row.original.matchingStatus === "completed" ? "bg-green-100 text-green-800" :
        row.original.matchingStatus === "selecting" ? "bg-yellow-100 text-yellow-800" :
        "bg-gray-100 text-gray-800"
      }`}>
        {row.original.matchingStatus === "completed" ? "매칭 완료" :
         row.original.matchingStatus === "selecting" ? "매칭 중" :
         "매칭 전"}
      </span>
    ),
  },
  {
    id: "timeTable",
    header: "시간표",
    size: 80,
    cell: ({ row }) => <TimeTableButton student={row.original} />,
  },
];

const SupportersTable = ({
  data,
}: Props) => {
  return (
    <BaseTable
      data={data}
      columns={columns}
    />
  );
};

export default SupportersTable;
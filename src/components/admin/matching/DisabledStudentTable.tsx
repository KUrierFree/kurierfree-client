import BaseTable from "../../table/BaseTable";
import { DisabledStudent } from "../../../types/user";
import CandidateMiniTable from "./miniTables/CandidateMiniTable";
import Button from "../../common/Button";
import TimeTableButton from "./TimeTableButton";
import { ColumnDef } from "@tanstack/react-table";
import type { CustomTableMeta } from "../../../types/table";

interface Props {
  data: DisabledStudent[];
  expandedRowIds: string[];
  toggleRow: (id: string) => void;
  onSelectSupporter: (studentId: number, supporterId: number) => void;
  onMatchingStart: (student: DisabledStudent) => void;
  onMatchingEdit?: (student: DisabledStudent) => void;
  onConfirm: (studentId: number) => void;
}

const columns: ColumnDef<DisabledStudent>[] = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "gender", header: "성별" },
  { accessorKey: "department", header: "학과" },
  { accessorKey: "grade", header: "학년" },
  { accessorKey: "disabilityType", header: "장애유형" },
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
  {
    id: "actions",
    header: "관리",
    size: 120,
    cell: ({ row, table }) => (
      <div className="flex gap-2">
        {row.original.matchingStatus === "waiting" && (
          <Button
            variant="primary"
            data-action="matching"
            onClick={() => (table.options.meta as CustomTableMeta).onMatchingStart(row.original)}
          >
            매칭시작
          </Button>
        )}
        {row.original.matchingStatus === "completed" && (
          <Button
            variant="secondary"
            data-action="matching"
            onClick={() => (table.options.meta as CustomTableMeta).onMatchingEdit?.(row.original)}
          >
            매칭수정
          </Button>
        )}
      </div>
    ),
  },
];

const DisabledStudentTable = ({
  data,
  expandedRowIds,
  onSelectSupporter,
  onMatchingStart,
  onMatchingEdit,
  onConfirm,
}: Props) => {
  return (
    <BaseTable
      data={data}
      columns={columns}
      meta={{
        onMatchingStart,
        onMatchingEdit,
      }}
      expandable={{
        expandedRowIds,
        renderExpandedRow: (disabled_student) => (
          <div className="p-4">
            <CandidateMiniTable
              data={disabled_student.matchingCandidates || []}
              onSelect={(supporterId) => onSelectSupporter(disabled_student.id, supporterId)}
              onConfirm={() => onConfirm(disabled_student.id)}
            />
          </div>
        ),
      }}
    />
  );
};

export default DisabledStudentTable;

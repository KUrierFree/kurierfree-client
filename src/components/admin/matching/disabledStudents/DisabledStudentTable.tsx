import BaseTable from "../tables/BaseTable";
import { DisabledStudent, Supporter } from "../../../../types/user";
import CandidateMiniTable from "./CandidateMiniTable";
import Button from "../../../common/Button";
import TimeTableButton from "../TimeTableButton";
import { ColumnDef } from "@tanstack/react-table";
import type { CustomTableMeta } from "../../../../types/table";

interface Props {
  data: DisabledStudent[];
  expandedRowIds: string[];
  toggleRow: (id: string) => void;
  onSelectSupporter: (studentId: number, supporterId: number) => void;
  onMatchingStart: (student: DisabledStudent, supporters: Supporter[]) => void;
  onMatchingEdit: (student: DisabledStudent) => void;
  onMatchingCancel: (student: DisabledStudent) => void;
  onConfirm: (studentId: number) => void;
  supporters: Supporter[];
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
    size: 120,
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
            onClick={() => (table.options.meta as CustomTableMeta).onMatchingStart(row.original, (table.options.meta as CustomTableMeta).supporters)}
          >
            매칭시작
          </Button>
        )}
        {row.original.matchingStatus === "completed" && (
          <Button
            variant="secondary"
            data-action="matching"
            onClick={() => {
              const supporter = row.original.matchingCandidates?.[0];
              if (supporter) {
                (table.options.meta as CustomTableMeta).onMatchingEdit?.(row.original);
              }
            }}
          >
            매칭수정
          </Button>
        )}
        {row.original.matchingStatus === "selecting" && (
          <Button
            variant="danger"
            data-action="matching-cancel"
            onClick={() => {
              (table.options.meta as CustomTableMeta).onMatchingCancel?.(row.original);
            }}
          >
            매칭취소
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
  onMatchingCancel,
  onConfirm,
  supporters,
}: Props) => {
  return (
    <BaseTable
      data={data}
      columns={columns}
      meta={{
        onMatchingStart,
        onMatchingEdit,
        onMatchingCancel,
        supporters,
      }}
      expandable={{
        expandedRowIds,
        renderExpandedRow: (disabled_student) => (
          <div className="p-4">
            <CandidateMiniTable
              data={disabled_student.matchingCandidates || []}
              onSelect={(supporterId) => onSelectSupporter(disabled_student.id, supporterId)}
            />
          </div>
        ),
      }}
    />
  );
};

export default DisabledStudentTable;

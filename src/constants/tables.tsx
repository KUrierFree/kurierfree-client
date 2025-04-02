import React from "react";
import { ColumnDef, TableMeta } from "@tanstack/react-table";
import { DisabledStudent, Supporter } from "../types/user";
import MatchingStatusBadge from "../components/admin/matching/MatchingStatusBadge";
import TimeTableButton from "../components/admin/matching/TimeTableButton";
import SupporterSelectionTable from "../components/table/SupporterSelectionTable";

interface TableMetaWithTimeTable<T> extends TableMeta<T> {
  onTimeTableClick: () => void;
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  hasSelectingRow: boolean;
}

// 장애학생 테이블 컬럼 정의
export const DISABLED_STUDENT_COLUMNS: ColumnDef<DisabledStudent, any>[] = [
  {
    header: "이름",
    accessorKey: "name",
  },
  {
    header: "학과",
    accessorKey: "department",
  },
  {
    header: "성별",
    accessorKey: "gender",
  },
  {
    header: "장애유형",
    accessorKey: "disabilityType",
  },
  {
    header: "매칭",
    accessorKey: "matchingStatus",
    cell: ({ getValue, row, table }) => {
      const status = getValue();
      if (status === "waiting") {
        return (
          <button
            onClick={() => (table.options.meta as any).onMatchingStart(row.original)}
            className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary/80"
            disabled={(table.options.meta as any).hasSelectingRow}
          >
            매칭 시작
          </button>
        );
      }
      return <MatchingStatusBadge status={status} />;
    },
  },
  {
    header: "시간표",
    cell: ({ table }) => (
      <TimeTableButton onClick={() => (table.options.meta as TableMetaWithTimeTable<DisabledStudent>).onTimeTableClick()} />
    ),
  },
];

// 서포터즈 테이블 컬럼 정의
export const SUPPORTERS_COLUMNS: ColumnDef<Supporter, any>[] = [
  {
    header: "이름",
    accessorKey: "name",
  },
  {
    header: "학과",
    accessorKey: "department",
  },
  {
    header: "성별",
    accessorKey: "gender",
  },
  {
    header: "학년",
    accessorKey: "grade",
  },
  {
    header: "매칭",
    accessorKey: "matchingStatus",
    cell: ({ getValue }) => (
      <MatchingStatusBadge status={getValue()} />
    ),
  },
  {
    header: "시간표",
    cell: ({ table }) => (
      <TimeTableButton onClick={() => (table.options.meta as TableMetaWithTimeTable<Supporter>).onTimeTableClick()} />
    ),
  },
]; 
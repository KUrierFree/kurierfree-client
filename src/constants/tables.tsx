import React from "react";
import { ColumnDef, TableMeta } from "@tanstack/react-table";
import { DisabledStudent, Supporter } from "../types/user";
import MatchingStatusBadge from "../components/table/MatchingStatusBadge";
import TimeTableButton from "../components/table/TimeTableButton";

interface TableMetaWithTimeTable<T> extends TableMeta<T> {
  onTimeTableClick: () => void;
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
    cell: ({ getValue }) => (
      <MatchingStatusBadge status={getValue()} />
    ),
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
import { ColumnDef } from "@tanstack/react-table";
import { COLUMN_WIDTHS } from "./tableConstants";
import { DisabledStudent, Supporter } from "../types/user";

// 장애학생 테이블 기본 컬럼 정의
export const DISABLED_STUDENT_BASE_COLUMNS: ColumnDef<DisabledStudent, any>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },
  {
    accessorKey: "gender",
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },
  {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },
  {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },
  {
    accessorKey: "disabilityType",
    header: "장애유형",
    size: COLUMN_WIDTHS.DISABILITY_TYPE,
  },
  {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  },
];

// 서포터즈 테이블 기본 컬럼 정의
export const SUPPORTER_BASE_COLUMNS: ColumnDef<Supporter, any>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },
  {
    accessorKey: "gender", 
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },
  {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },
  {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },
  {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  },
];

// 서포터즈 테이블 추가 컬럼 정의
export const SUPPORTER_ADDITIONAL_COLUMNS: ColumnDef<Supporter, any>[] = [
  {
    accessorKey: "supportType",
    header: "지원유형",
    size: COLUMN_WIDTHS.SUPPORT_TYPE,
  },
  {
    id: "matchingStatus",
    header: "매칭상태",
    size: COLUMN_WIDTHS.STATUS,
  },
  {
    accessorKey: "activityTime",
    header: "활동시간",
    size: COLUMN_WIDTHS.ACTIVITY_TIME,
  },
];

// 장애학생 테이블 컬럼 정의
export const DISABLED_STUDENT_COLUMNS: ColumnDef<DisabledStudent, any>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },
  {
    accessorKey: "gender",
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },
  {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },
  {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },
  {
    accessorKey: "disabilityType",
    header: "장애유형",
    size: COLUMN_WIDTHS.DISABILITY_TYPE,
  },
  {
    id: "matchingStatus",
    header: "매칭 상태",
    size: COLUMN_WIDTHS.STATUS,
  },
  {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  },
];

// 서포터즈 테이블 컬럼 정의
export const SUPPORTER_COLUMNS: ColumnDef<Supporter, any>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },
  {
    accessorKey: "gender",
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },
  {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },
  {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },
  {
    accessorKey: "supportType",
    header: "지원유형",
    size: COLUMN_WIDTHS.SUPPORT_TYPE,
  },
  {
    id: "matchingStatus",
    header: "매칭상태",
    size: COLUMN_WIDTHS.STATUS,
  },
  {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  },
  {
    accessorKey: "activityTime",
    header: "활동시간",
    size: COLUMN_WIDTHS.ACTIVITY_TIME,
  },
];

// 서포터즈 미니 테이블 기본 컬럼 정의 (확장용)
export const SUPPORTER_MINI_BASE_COLUMNS: ColumnDef<Supporter, any>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },
  {
    accessorKey: "gender",
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },
  {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },
  {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },
  {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  },
]; 
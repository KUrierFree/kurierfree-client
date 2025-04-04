/*
 * 테이블 관련 상수 정의
 * 모든 테이블 컴포넌트에서 공통으로 사용되는 상수들
 */

// 컬럼 너비 상수
export const COLUMN_WIDTHS = {
  NAME: 120,         // 이름
  GENDER: 80,        // 성별
  DEPARTMENT: 200,   // 학과
  GRADE: 80,         // 학년
  DISABILITY_TYPE: 120, // 장애 유형
  SUPPORT_TYPE: 120,  // 지원 유형
  STATUS: 120,        // 상태
  TIMETABLE: 100,     // 시간표
  ACTIONS: 120,        // 액션
  ACTIVITY_TIME: 120,  // 활동 시간
  RANK: 80,           // 순위
  SELECT: 80,         // 선택
  MATCHING_DATE: 120, // 매칭 날짜
};

export const COLUMN_WIDTH_PERCENTS = {
  NAME: '12%',
  GENDER: '8%',
  DEPARTMENT: '20%',
  GRADE: '8%',
  SUPPORT_TYPE: '12%',
  STATUS: '12%',
  TIMETABLE: '10%',
  ACTIVITY_TIME: '12%',
  MATCHING_DATE: '12%',
  RANK: '8%',
  ACTIONS: '12%',
  SELECT: '8%'
};

// 테이블 스타일 상수
export const TABLE_STYLES = {
  CONTAINER: {
    MIN_WIDTH: '100%',
    MAX_WIDTH: '100%',
    MARGIN: '0 auto',
    OVERFLOW: 'auto',
    BACKGROUND: 'white',
  },
  TABLE: {
    WIDTH: '100%',
    BORDER_SPACING: '0',
  },
  HEADER_CELL: {
    PADDING: '12px 16px',
    BORDER: '1px solid #e5e7eb',
    BACKGROUND: '#f9fafb',
    HEIGHT: '42px',
    LINE_HEIGHT: '1.5',
  },
  BODY_CELL: {
    PADDING: '12px 16px',
    BORDER: '1px solid #e5e7eb',
    HEIGHT: '48px',
    LINE_HEIGHT: '1.5',
  },
  ROW: {
    HEIGHT: '42px',
    LINE_HEIGHT: '20px',
    BORDER_BOTTOM: '1px solid #e5e7eb'
  },
};

// 테이블 전체 최소 너비 (모든 탭의 테이블을 일관된 너비로 유지하기 위함)
export const TABLE_MIN_WIDTH = 500;

// 공통 열 기본 정보 (공통 컬럼 정의를 위한 기본 구조)
export const COMMON_COLUMN_BASE = {
  // 이름 열
  NAME: {
    accessorKey: "name",
    header: "이름",
    size: COLUMN_WIDTHS.NAME,
  },

  // 성별 열
  GENDER: {
    accessorKey: "gender",
    header: "성별",
    size: COLUMN_WIDTHS.GENDER,
  },

  // 학과 열
  DEPARTMENT: {
    accessorKey: "department",
    header: "학과",
    size: COLUMN_WIDTHS.DEPARTMENT,
  },

  // 학년 열
  GRADE: {
    accessorKey: "grade",
    header: "학년",
    size: COLUMN_WIDTHS.GRADE,
  },

  // 시간표 열 (cell은 각 컴포넌트에서 구현)
  TIMETABLE: {
    id: "timeTable",
    header: "시간표",
    size: COLUMN_WIDTHS.TIMETABLE,
  }
};
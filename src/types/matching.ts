 // 매칭 상태
// waiting: 매칭 미완료
// selecting: 서포터즈 선택 중 (토글 목록이 열린 상태)
// completed: 매칭 완료

import { DisabledStudent, Supporter } from "./user";

export type MatchingStatus = "waiting" | "selecting" | "completed";

export interface MatchingResult {
    disabledStudent: DisabledStudent;
    supporters: {
      supporter: Supporter;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
      details: string;
    }[];
  }
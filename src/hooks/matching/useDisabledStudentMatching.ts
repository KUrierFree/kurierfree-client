/**
 * 장애학생 매칭 관련 상태와 로직을 관리하는 커스텀 훅입니다
 * 장애학생 목록, 매칭 상태, 매칭 관련 핸들러들을 한 곳에서 관리합니다
 */

import { useState, useMemo, useCallback } from "react";
import { DisabledStudent } from "../../types/user";

// 더미 장애학생 데이터
const DUMMY_DISABLED_STUDENTS: DisabledStudent[] = [
  {
    name: "김건국",
    department: "컴퓨터공학부",
    gender: "남성",
    disabilityType: "시각장애",
    matchingStatus: "waiting",
  },
  {
    name: "김철수",
    department: "컴퓨터공학부",
    gender: "남성",
    disabilityType: "시각장애",
    matchingStatus: "waiting",
  },
  {
    name: "이영희",
    department: "경영학과",
    gender: "여성",
    disabilityType: "청각장애",
    matchingStatus: "waiting",
  },
  {
    name: "박민수",
    department: "전자공학과",
    gender: "남성",
    disabilityType: "지체장애",
    matchingStatus: "waiting",
  },
];

export const useDisabledStudentMatching = () => {
  const [disabledStudents, setDisabledStudents] = useState<DisabledStudent[]>(DUMMY_DISABLED_STUDENTS);

  const hasSelectingRow = useMemo(() => {
    return disabledStudents.some(student => student.matchingStatus === "selecting");
  }, [disabledStudents]);

  // 매칭 시작 시 장애학생의 상태를 selecting으로 변경
  const handleMatchingStart = useCallback((student: DisabledStudent) => {
    setDisabledStudents(prev => 
      prev.map(s => 
        s.name === student.name ? { ...s, matchingStatus: "selecting" } : s
      )
    );
  }, []);

  // 지원자 선택 시 장애학생의 상태를 completed로 변경
  const handleSupporterSelect = useCallback((student: DisabledStudent, supporterId: string) => {
    setDisabledStudents(prev => 
      prev.map(s => 
        s.name === student.name ? { ...s, matchingStatus: "completed" } : s
      )
    );
  }, []);

  return {
    disabledStudents,
    hasSelectingRow,
    handleMatchingStart,
    handleSupporterSelect,
  };
};

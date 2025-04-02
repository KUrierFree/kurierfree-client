/**
 * 장애학생 매칭 관련 상태와 로직을 관리하는 커스텀 훅입니다
 * 장애학생 목록, 매칭 상태, 매칭 관련 핸들러들을 한 곳에서 관리합니다
 */

import { useState, useMemo, useCallback } from "react";
import { DisabledStudent } from "../../types/user";
import { disabledStudents as disabledStudentsData } from "../../data/dummy/matchingData";

export const useDisabledStudentMatching = () => {
  const [disabledStudents, setDisabledStudents] = useState<DisabledStudent[]>(disabledStudentsData);

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

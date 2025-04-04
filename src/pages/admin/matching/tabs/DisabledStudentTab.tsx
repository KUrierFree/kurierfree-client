import React, { useState, useEffect, useRef } from "react";
import DisabledStudentTable from "../../../../components/admin/matching/DisabledStudentTable";
import { DisabledStudent, Supporter } from "../../../../types/user";

// 더미 데이터
const dummyDisabledStudents: DisabledStudent[] = [
  {
    id: 1,
    name: "장애학생1",
    gender: "남성",
    department: "컴퓨터공학과",
    grade: "2학년 1학기",
    disabilityType: "시각장애",
    matchingStatus: "waiting",
    matchingCandidates: []
  },
  {
    id: 2,
    name: "장애학생2",
    gender: "여성",
    department: "전자공학과",
    grade: "3학년 2학기",
    disabilityType: "청각장애",
    matchingStatus: "waiting",
    matchingCandidates: []
  }
];

const dummySupporters: Supporter[] = [
  {
    id: 1,
    name: "서포터1",
    gender: "남성",
    department: "컴퓨터공학과",
    grade: "2학년 1학기",
    matchingStatus: "waiting"
  },
  {
    id: 2,
    name: "서포터2",
    gender: "여성",
    department: "전자공학과",
    grade: "3학년 2학기",
    matchingStatus: "waiting"
  }
];

const DisabledStudentTab: React.FC = () => {
  const [disabledStudents, setDisabledStudents] = useState(dummyDisabledStudents);
  const tableRef = useRef<HTMLDivElement>(null);
  const selectingStudentRef = useRef<DisabledStudent | null>(null);

  const handleMatchingStart = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id 
        ? { 
            ...s, 
            matchingStatus: "selecting",
            matchingCandidates: dummySupporters
          } 
        : s
    ));
    selectingStudentRef.current = student;
  };

  const handleSelectSupporter = (studentId: number, supporterId: number) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === studentId ? { ...s, matchingStatus: "completed" } : s
    ));
    selectingStudentRef.current = null;
  };

  const handleMatchingEdit = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id ? { ...s, matchingStatus: "selecting" } : s
    ));
    selectingStudentRef.current = student;
  };

  const handleConfirm = (studentId: number) => {
    setDisabledStudents(prev =>
      prev.map(student =>
        student.id === studentId
          ? { ...student, matchingStatus: "completed", matchingCandidates: [] }
          : student
      )
    );
    selectingStudentRef.current = null;
  };

  const expandedRowIds = disabledStudents
    .filter(student => student.matchingStatus === "selecting")
    .map(student => student.id.toString());

  return (
    <div ref={tableRef}>
      <DisabledStudentTable
        data={disabledStudents}
        expandedRowIds={expandedRowIds}
        toggleRow={() => {}}
        onSelectSupporter={handleSelectSupporter}
        onMatchingStart={handleMatchingStart}
        onMatchingEdit={handleMatchingEdit}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default DisabledStudentTab;
import React, { useState } from "react";
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
  const [expandedRowIds, setExpandedRowIds] = useState<string[]>([]);

  const handleMatchingStart = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id ? { ...s, matchingStatus: "selecting" } : s
    ));
  };

  const handleSelectSupporter = (studentId: number, supporterId: number) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === studentId ? { ...s, matchingStatus: "completed" } : s
    ));
  };

  const handleMatchingEdit = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id ? { ...s, matchingStatus: "selecting" } : s
    ));
  };

  const toggleRow = (id: string) => {
    setExpandedRowIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <DisabledStudentTable
      data={disabledStudents}
      expandedRowIds={expandedRowIds}
      toggleRow={toggleRow}
      onSelectSupporter={handleSelectSupporter}
      onMatchingStart={handleMatchingStart}
      onMatchingEdit={handleMatchingEdit}
    />
  );
};

export default DisabledStudentTab;
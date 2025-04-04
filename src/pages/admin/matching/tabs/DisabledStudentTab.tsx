import React, { useRef } from "react";
import DisabledStudentTable from "../../../../components/admin/matching/disabledStudents/DisabledStudentTable";
import { useMatching } from "../../../../hooks/useMatching";
import { DisabledStudent, Supporter } from "../../../../types/user";

// 더미 데이터
const dummyDisabledStudents: DisabledStudent[] = [
  // {
  //   id: 1,
  //   name: "장애학생1",
  //   gender: "남성",
  //   department: "컴퓨터공학과",
  //   grade: "2학년 1학기",
  //   disabilityType: "시각장애",
  //   matchingStatus: "waiting",
  //   matchingCandidates: []
  // },
  // {
  //   id: 2,
  //   name: "장애학생2",
  //   gender: "여성",
  //   department: "전자공학과",
  //   grade: "3학년 2학기",
  //   disabilityType: "청각장애",
  //   matchingStatus: "waiting",
  //   matchingCandidates: []
  // }
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
  const tableRef = useRef<HTMLDivElement>(null);
  const {
    disabledStudents,
    selectingStudentRef,
    handleMatchingStart,
    handleSelectSupporter,
    handleMatchingEdit,
    handleMatchingCancel,
    handleConfirm,
  } = useMatching(dummyDisabledStudents);

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
        onMatchingCancel={handleMatchingCancel}
        onConfirm={handleConfirm}
        supporters={dummySupporters}
      />
    </div>
  );
};

export default DisabledStudentTab;
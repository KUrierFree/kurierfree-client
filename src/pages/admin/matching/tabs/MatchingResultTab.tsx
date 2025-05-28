import React, { useState } from "react";
import MatchingResultTable from "../../../../components/admin/matching/matchingResult/MatchingResultTable";
import { MatchingResult } from "../../../../types/matching";
import AdminConfirmModal from "../../../../components/admin/applicant/AdminConfirmModal";
import Button from "../../../../components/common/Button";

// 더미 데이터
const dummyMatchingResults: MatchingResult[] = [
  {
    disabledStudent: {
      id: 1,
      name: "장애학생1",
      gender: "남성",
      department: "컴퓨터공학과",
      grade: "2학년 1학기",
      disabilityType: "시각장애",
      matchingStatus: "completed",
      matchingCandidates: [],
    },
    supporters: [
      {
        supporter: {
          id: 1,
          name: "서포터1",
          gender: "남성",
          department: "컴퓨터공학과",
          grade: "2학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "월",
        startTime: "09:00",
        endTime: "10:00",
        details: "컴퓨터공학과 수업 지원",
      },
      {
        supporter: {
          id: 2,
          name: "서포터2",
          gender: "여성",
          department: "전자공학과",
          grade: "3학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "수",
        startTime: "13:00",
        endTime: "14:00",
        details: "전자공학과 수업 지원",
      },
      {
        supporter: {
          id: 3,
          name: "서포터3",
          gender: "남성",
          department: "기계공학과",
          grade: "4학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "금",
        startTime: "15:00",
        endTime: "16:00",
        details: "기계공학과 수업 지원",
      },
    ],
  },
  {
    disabledStudent: {
      id: 2,
      name: "장애학생2",
      gender: "여성",
      department: "전자공학과",
      grade: "3학년 1학기",
      disabilityType: "청각장애",
      matchingStatus: "completed",
      matchingCandidates: [],
    },
    supporters: [
      {
        supporter: {
          id: 4,
          name: "서포터4",
          gender: "남성",
          department: "화학공학과",
          grade: "2학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "화",
        startTime: "10:00",
        endTime: "11:00",
        details: "화학공학과 수업 지원",
      },
      {
        supporter: {
          id: 5,
          name: "서포터5",
          gender: "여성",
          department: "생명공학과",
          grade: "3학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "목",
        startTime: "14:00",
        endTime: "15:00",
        details: "생명공학과 수업 지원",
      },
      {
        supporter: {
          id: 6,
          name: "서포터6",
          gender: "남성",
          department: "건축공학과",
          grade: "4학년 1학기",
          matchingStatus: "completed",
        },
        dayOfWeek: "금",
        startTime: "11:00",
        endTime: "12:00",
        details: "건축공학과 수업 지원",
      },
    ],
  },
];

const MatchingResultTab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <MatchingResultTable data={dummyMatchingResults} />
      <div className="w-72 flex flex-col mx-auto items-center pt-16">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          선발 완료
        </Button>
      </div>
      <AdminConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("확정되었습니다!");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default MatchingResultTab;

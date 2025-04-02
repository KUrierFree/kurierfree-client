import React from "react";
import MatchingResultTable from "../../../../components/admin/matching/table/MatchingResultTable";
import { DisabledStudent, Supporter } from "../../../../types/user";

const DUMMY_MATCHING_RESULTS = [
  {
    disabledStudent: {
      name: "김장애",
      department: "컴퓨터공학과",
      gender: "남성",
      disabilityType: "지체장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "1",
      name: "이서포터",
      department: "컴퓨터공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    } as Supporter,
  },
  {
    disabledStudent: {
      name: "김장애",
      department: "컴퓨터공학과",
      gender: "남성",
      disabilityType: "지체장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "2",
      name: "박서포터",
      department: "컴퓨터공학과",
      gender: "여성",
      grade: "3학년 2학기",
      matchingStatus: "completed",
    } as Supporter,
  },
  {
    disabledStudent: {
      name: "김장애",
      department: "컴퓨터공학과",
      gender: "남성",
      disabilityType: "지체장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "3",
      name: "최서포터",
      department: "컴퓨터공학과",
      gender: "남성",
      grade: "4학년 1학기",
      matchingStatus: "completed",
    } as Supporter,
  },
  {
    disabledStudent: {
      name: "박장애",
      department: "경영학과",
      gender: "여성",
      disabilityType: "시각장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "4",
      name: "김서포터",
      department: "경영학과",
      gender: "여성",
      grade: "2학년 2학기",
      matchingStatus: "completed",
    } as Supporter,
  },
  {
    disabledStudent: {
      name: "박장애",
      department: "경영학과",
      gender: "여성",
      disabilityType: "시각장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "5",
      name: "이서포터",
      department: "경영학과",
      gender: "남성",
      grade: "3학년 1학기",
      matchingStatus: "completed",
    } as Supporter,
  },
  {
    disabledStudent: {
      name: "박장애",
      department: "경영학과",
      gender: "여성",
      disabilityType: "시각장애",
      matchingStatus: "completed",
    } as DisabledStudent,
    supporter: {
      id: "6",
      name: "박서포터",
      department: "경영학과",
      gender: "여성",
      grade: "4학년 2학기",
      matchingStatus: "completed",
    } as Supporter,
  },
];

const MatchingResultTab: React.FC = () => {
  return (
    <MatchingResultTable data={DUMMY_MATCHING_RESULTS} />
  );
};

export default MatchingResultTab;

import React from "react";
import { Supporter } from "../../../../types/user";
import SupportersTable from "../../../../components/admin/matching/supporters/SupportersTable";

// 더미 데이터
const dummySupporters: Supporter[] = [
  {
    id: 1,
    name: "서포터1",
    gender: "남성",
    department: "컴퓨터공학과",
    grade: "2학년",
    matchingStatus: "waiting",
    supportType: "수업도우미"
  },
  {
    id: 2,
    name: "서포터2",
    gender: "여성",
    department: "전자공학과",
    grade: "3학년",
    matchingStatus: "waiting",
    supportType: "수업도우미"
  }
];

const SupporterTab: React.FC = () => {
  return (
    <SupportersTable
      data={dummySupporters}
    />
  );
};

export default SupporterTab;
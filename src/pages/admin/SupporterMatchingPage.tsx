import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import TabNavigation, { TabType } from "../../components/common/TabNavigation";
import BaseTable from "../../components/table/BaseTable";
import EmptyTable from "../../components/table/EmptyTable";
import MatchingStatusBadge from "../../components/common/MatchingStatusBadge";
import TimeTableModal from "../../components/common/TimeTableModal";
import { DisabledStudent, Supporter } from "../../types/matching";

const SupporterMatchingPage: React.FC = () => {

  // 현재 활성화된 탭 상태
  const [activeTab, setActiveTab] = useState<TabType>("disabled_student");
  const [isTimeTableModalOpen, setIsTimeTableModalOpen] = useState(false);

  // 장애학생 임시 데이터 (실제 프로젝트에서는 API 호출로 대체)
  const disabled_studentData: DisabledStudent[] = [
    {
      name: "김철수",
      department: "컴퓨터공학부",
      gender: "male",
      disabilityType: "visual",
      matchingStatus: "completed",
    },
    {
      name: "이영희",
      department: "경영학과",
      gender: "female",
      disabilityType: "hearing",
      matchingStatus: "selecting",
    },
    {
      name: "박민수",
      department: "전자공학과",
      gender: "male",
      disabilityType: "physical",
      matchingStatus: "waiting",
    },
  ];

  // 장애학생 테이블 컬럼 정의
  const disabled_studentColumns = [
    {
      header: "이름",
      accessorKey: "name",
    },
    {
      header: "학과",
      accessorKey: "department",
    },
    {
      header: "성별",
      accessorKey: "gender",
    },
    {
      header: "장애유형",
      accessorKey: "disabilityType",
    },
    {
      header: "매칭",
      accessorKey: "matchingStatus",
      cell: ({ getValue }: any) => (
        <MatchingStatusBadge status={getValue() as any} />
      ),
    },
    {
      header: "시간표",
      cell: () => (
        <button
          className="p-1 text-gray-500 hover:text-gray-700"
          onClick={() => setIsTimeTableModalOpen(true)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      ),
    },
  ];

  // 서포터즈 임시 데이터 (실제 프로젝트에서는 API 호출로 대체)
  const supportersData: Supporter[] = [
    {
      id: "1",
      name: "김민국",
      department: "컴퓨터공학부",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "2",
      name: "김민준",
      department: "컴퓨터공학부",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "3",
      name: "이서윤",
      department: "경영학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "4",
      name: "박지훈",
      department: "전자공학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "5",
      name: "정혜민",
      department: "심리학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "6",
      name: "박도현",
      department: "체육교육과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "7",
      name: "유나영",
      department: "사회복지학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "8",
      name: "강민호",
      department: "기계공학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "9",
      name: "윤서진",
      department: "간호학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "10",
      name: "배준혁",
      department: "정책학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "11",
      name: "오태윤",
      department: "수의학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "12",
      name: "오대윤",
      department: "체육교육과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "13",
      name: "서지호",
      department: "항공우주공학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "14",
      name: "문수현",
      department: "미디어학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "15",
      name: "조민수",
      department: "정책학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "16",
      name: "안디비",
      department: "디자인학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "17",
      name: "한재림",
      department: "생명공학과",
      gender: "male",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "18",
      name: "진해림",
      department: "정치외교학과",
      gender: "female",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
  ];

  // 서포터즈 테이블 컬럼 정의
  const supportersColumns = [
    {
      header: "이름",
      accessorKey: "name",
    },
    {
      header: "학과",
      accessorKey: "department",
    },
    {
      header: "성별",
      accessorKey: "gender",
    },
    {
      header: "학년",
      accessorKey: "grade",
    },
    {
      header: "매칭",
      accessorKey: "matchingStatus",
      cell: ({ getValue }: any) => (
        <MatchingStatusBadge status={getValue() as any} />
      ),
    },
    {
      header: "시간표",
      cell: () => (
        <button
          className="p-1 text-gray-500 hover:text-gray-700"
          onClick={() => setIsTimeTableModalOpen(true)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      ),
    },
  ];
  
  // 탭 변경 핸들러
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab as typeof activeTab);
  };

  // 현재 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "disabled_student":
        return (
          <div>
            <BaseTable
              data={disabled_studentData}
              columns={disabled_studentColumns}
            />
          </div>
        );
      case "supporters":
        return (
          <div>
            <BaseTable
              data={supportersData}
              columns={supportersColumns}
            />
          </div>
        );
      case "matching":
        return (
          <div className="p-4">
            <p>매칭 결과 화면입니다.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto pt-16 pb-8">
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <TabNavigation
            tabs={[
              { id: "disabled_student", label: "장애학생" },
              { id: "supporters", label: "서포터즈" },
              { id: "matching", label: "매칭 결과" },
            ]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className="px-4"
          />
          {renderContent()}
        </div>
      </main>
      <Footer />
      <TimeTableModal
        isOpen={isTimeTableModalOpen}
        onClose={() => setIsTimeTableModalOpen(false)}
      />
    </div>
  );
};

export default SupporterMatchingPage; 
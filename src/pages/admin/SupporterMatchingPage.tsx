import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import TabNavigation, { TabType } from "../../components/common/TabNavigation";
import BaseTable from "../../components/table/BaseTable";
import EmptyTable from "../../components/table/EmptyTable";
import MatchingStatusBadge from "../../components/common/MatchingStatusBadge";

// 임시 타입 정의 (실제 프로젝트에서는 별도 파일로 분리)
interface Student {
  name: string;
  department: string;
  gender: string;
  disabilityType: string;
  matchingStatus: "waiting" | "pending" | "completed";
}

const SupporterMatchingPage: React.FC = () => {
  // 현재 활성화된 탭 상태
  const [activeTab, setActiveTab] = useState<TabType>("student");

  // 임시 데이터 (실제 프로젝트에서는 API 호출로 대체)
  const studentData: Student[] = [
    {
      name: "김철수",
      department: "컴퓨터공학부",
      gender: "남성",
      disabilityType: "시각장애",
      matchingStatus: "completed",
    },
    {
      name: "이영희",
      department: "경영학과",
      gender: "여성",
      disabilityType: "청각장애",
      matchingStatus: "pending",
    },
    {
      name: "박민수",
      department: "전자공학과",
      gender: "남성",
      disabilityType: "지체장애",
      matchingStatus: "waiting",
    },
  ];

  // 테이블 컬럼 정의
  const studentColumns = [
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
      header: "장애 유형",
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
          onClick={() => alert("시간표 모달이 열립니다")}
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
    setActiveTab(tab);
  };

  // 현재 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "student":
        return (
          <div className="p-4">
            <BaseTable
              data={studentData}
              columns={studentColumns}
              className=""
            />
          </div>
        );
      case "supporter":
        return (
          <div className="p-4">
            <p className="text-gray-500">서포터즈 명단은 준비 중입니다.</p>
          </div>
        );
      case "matching":
        return (
          <div className="p-4">
            <p className="text-gray-500">매칭 결과는 준비 중입니다.</p>
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
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className="px-4"
          />
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupporterMatchingPage; 
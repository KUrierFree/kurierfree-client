import React, { useState, useMemo, useCallback } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import TabNavigation, { TabType } from "../../../components/admin/matching/MatchingTabNavigation";
import BaseTable from "../../../components/table/BaseTable";
import EmptyTable from "../../../components/table/EmptyTable";
import TimeTableModal from "../../../components/admin/matching/TimeTableModal";
import MatchingTable from "../../../components/table/MatchingTable";
import { DisabledStudent, Supporter } from "../../../types/user";
import { SUPPORTERS_COLUMNS } from "../../../constants/tables";

const SupporterMatchingPage: React.FC = () => {

  // 현재 활성화된 탭 상태
  const [activeTab, setActiveTab] = useState<TabType>("disabled_student");
  const [isTimeTableModalOpen, setIsTimeTableModalOpen] = useState(false);
  const [disabledStudents, setDisabledStudents] = useState<DisabledStudent[]>([
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
  ]);

  // 서포터즈 임시 데이터 (실제 프로젝트에서는 API 호출로 대체)
  const supportersData: Supporter[] = [
    {
      id: "1",
      name: "김민국",
      department: "컴퓨터공학부",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "2",
      name: "김민준",
      department: "컴퓨터공학부",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "3",
      name: "이서윤",
      department: "경영학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "4",
      name: "박지훈",
      department: "전자공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "5",
      name: "정혜민",
      department: "심리학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "6",
      name: "박도현",
      department: "체육교육과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "7",
      name: "유나영",
      department: "사회복지학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "8",
      name: "강민호",
      department: "기계공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "9",
      name: "윤서진",
      department: "간호학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "10",
      name: "배준혁",
      department: "정책학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "11",
      name: "오태윤",
      department: "수의학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "12",
      name: "오대윤",
      department: "체육교육과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "13",
      name: "서지호",
      department: "항공우주공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "14",
      name: "문수현",
      department: "미디어학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "15",
      name: "조민수",
      department: "정책학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "16",
      name: "안디비",
      department: "디자인학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "17",
      name: "한재림",
      department: "생명공학과",
      gender: "남성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
    {
      id: "18",
      name: "진해림",
      department: "정치외교학과",
      gender: "여성",
      grade: "2학년 1학기",
      matchingStatus: "completed",
    },
  ];

  // 매칭 시작 중인 행이 있는지 확인
  const hasSelectingRow = useMemo(() => {
    return disabledStudents.some(student => student.matchingStatus === "selecting");
  }, [disabledStudents]);

  // 매칭 시작 버튼 클릭 핸들러
  const handleMatchingStart = useCallback((student: DisabledStudent) => {
    setDisabledStudents(prev => 
      prev.map(s => 
        s.name === student.name ? { ...s, matchingStatus: "selecting" } : s
      )
    );
  }, []);

  // 서포터즈 선택 핸들러
  const handleSupporterSelect = useCallback((student: DisabledStudent, supporterId: string) => {
    setDisabledStudents(prev => 
      prev.map(s => 
        s.name === student.name ? { ...s, matchingStatus: "completed" } : s
      )
    );
  }, []);

  const tableOptions = {
    meta: {
      onTimeTableClick: () => setIsTimeTableModalOpen(true),
      onMatchingStart: handleMatchingStart,
      onSupporterSelect: handleSupporterSelect,
      hasSelectingRow,
    },
  };

  // 탭 변경 핸들러
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab as typeof activeTab);
  };

  // 현재 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "disabled_student":
        return (
          <MatchingTable
            data={disabledStudents}
            tableOptions={tableOptions}
          />
        );
      case "supporters":
        return (
          <BaseTable
            data={supportersData}
            columns={SUPPORTERS_COLUMNS}
            tableOptions={tableOptions}
          />
        );
      case "matching":
        return <EmptyTable message="매칭 결과가 없습니다." />;
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
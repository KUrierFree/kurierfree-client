import React, { useState, useMemo, useCallback } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import TabNavigation, { MatchingTabType } from "../../../components/admin/matching/MatchingTabNavigation";
import TimeTableModal from "../../../components/admin/matching/TimeTableModal";
import { DisabledStudent, Supporter } from "../../../types/user";
import DisabledStudentTable from "../../../components/admin/matching/table/DisabledStudentTable";
import SupporterStatusTable from "../../../components/admin/matching/table/SupporterStatusTable";

const SupporterMatchingPage: React.FC = () => {
  // 현재 활성화된 탭 상태
  const [activeTab, setActiveTab] = useState<MatchingTabType>("disabled_student");
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

  // 탭 변경 핸들러
  const handleTabChange = (tab: MatchingTabType) => {
    setActiveTab(tab);
  };

  // 현재 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "disabled_student":
        return (
          <DisabledStudentTable
            data={disabledStudents}
            tableOptions={{
              meta: {
                onTimeTableClick: () => setIsTimeTableModalOpen(true),
                onMatchingStart: handleMatchingStart,
                onSupporterSelect: handleSupporterSelect,
              },
            }}
          />
        );
      case "supporter":
        return <SupporterStatusTable />;
      case "matching":
        return <div>매칭 결과 테이블 (구현 예정)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <TabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="mt-6">
          {renderContent()}
        </div>
      </main>
      <Footer />
      {isTimeTableModalOpen && (
        <TimeTableModal
          isOpen={isTimeTableModalOpen}
          onClose={() => setIsTimeTableModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SupporterMatchingPage; 
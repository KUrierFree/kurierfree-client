import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import TabNavigation, { MatchingTabType } from "../../../components/admin/matching/MatchingTabNavigation";
import DisabledStudentTab from "./tabs/DisabledStudentTab";
import SupporterTab from "./tabs/SupporterTab";
import MatchingResultTab from "./tabs/MatchingResultTab";
import matchingState from "../../../data/dummy/matchingData";
import { DisabledStudent, Supporter } from "../../../types/user";

const SupporterMatchingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MatchingTabType>("disabled_student");
  // 더미 데이터에서 매칭 상태 초기화
  const [disabledStudents, setDisabledStudents] = useState(matchingState.disabledStudents);
  const [supporters, setSupporters] = useState(matchingState.supporters);
  const [matchingResults, setMatchingResults] = useState(matchingState.matchingResults);
  // supporterCandidates를 불변 상수로 정의 (API 연동 전까지는 변경되지 않음)
  const supporterCandidates = matchingState.supporterCandidates;

  const handleTabChange = (tab: MatchingTabType) => {
    setActiveTab(tab);
  };

  // 장애학생 매칭 시작 처리
  const handleMatchingStart = (student: DisabledStudent) => {
    // 해당 학생의 상태를 "selecting"으로 변경
    const updatedStudents = disabledStudents.map(item => 
      item.name === student.name && item.department === student.department
        ? { ...item, matchingStatus: "selecting" as const }
        : item
    );
    setDisabledStudents(updatedStudents);
  };

  // 서포터 선택 처리
  const handleSupporterSelect = (student: DisabledStudent, supporterId: string) => {
    // 선택한 서포터 찾기
    const selectedSupporter = supporters.find(s => s.id === supporterId);
    if (!selectedSupporter) return;

    // 장애학생 상태 업데이트
    const updatedStudents = disabledStudents.map(item => 
      item.name === student.name && item.department === student.department
        ? { ...item, matchingStatus: "completed" as const }
        : item
    );
    setDisabledStudents(updatedStudents);

    // 서포터 상태 업데이트
    const updatedSupporters = supporters.map(item => 
      item.id === supporterId
        ? { ...item, matchingStatus: "completed" as const }
        : item
    );
    setSupporters(updatedSupporters);

    // 매칭 결과에 추가
    setMatchingResults([
      ...matchingResults,
      { disabledStudent: student, supporter: selectedSupporter }
    ]);
  };

  // 특정 장애학생에 대한 서포터 후보들 찾기
  const getSupporterCandidatesForStudent = (studentName: string) => {
    const candidateInfo = supporterCandidates.find(
      candidate => candidate.disabledStudentName === studentName
    );
    return candidateInfo ? (candidateInfo.supporters as unknown as Supporter[]) : [];
  };

  // 매칭 수정 처리
  const handleMatchingEdit = (student: DisabledStudent) => {
    // 해당 학생을 다시 selecting 상태로 변경
    const updatedStudents = disabledStudents.map(item => 
      item.name === student.name && item.department === student.department
        ? { ...item, matchingStatus: "selecting" as const }
        : item
    );
    setDisabledStudents(updatedStudents);

    // 매칭 결과에서 해당 학생 관련 결과 제거
    const updatedResults = matchingResults.filter(result => 
      !(result.disabledStudent.name === student.name && 
        result.disabledStudent.department === student.department)
    );
    setMatchingResults(updatedResults);

    // 해당 학생과 매칭된 서포터 상태 다시 waiting으로 변경
    const matchedResult = matchingResults.find(result => 
      result.disabledStudent.name === student.name && 
      result.disabledStudent.department === student.department
    );
    
    if (matchedResult) {
      const updatedSupporters = supporters.map(item => 
        item.id === matchedResult.supporter.id
          ? { ...item, matchingStatus: "waiting" as const }
          : item
      );
      setSupporters(updatedSupporters);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "disabled_student":
        return (
          <DisabledStudentTab 
            disabledStudents={disabledStudents}
            onMatchingStart={handleMatchingStart}
            onSupporterSelect={handleSupporterSelect}
            getSupporterCandidates={getSupporterCandidatesForStudent}
            onMatchingEdit={handleMatchingEdit}
          />
        );
      case "supporter":
        return <SupporterTab supporters={supporters} />;
      case "matching":
        return <MatchingResultTab matchingResults={matchingResults} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-4 py-16">
          <TabNavigation
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          <div>{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupporterMatchingPage; 
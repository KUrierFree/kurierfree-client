import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import TabNavigation, { MatchingTabType } from "../../../components/admin/matching/MatchingTabNavigation";
import DisabledStudentTab from "./tabs/DisabledStudentTab";
import SupporterTab from "./tabs/SupporterTab";

const SupporterMatchingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MatchingTabType>("disabled_student");

  const handleTabChange = (tab: MatchingTabType) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "disabled_student":
        return <DisabledStudentTab />;
      case "supporter":
        return <SupporterTab />;
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
    </div>
  );
};

export default SupporterMatchingPage; 
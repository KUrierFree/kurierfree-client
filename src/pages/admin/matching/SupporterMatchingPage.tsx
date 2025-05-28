import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import TabNavigation, {
  MatchingTabType,
} from "../../../components/admin/matching/MatchingTabNavigation";
import DisabledStudentTab from "./tabs/DisabledStudentTab";
import SupporterTab from "./tabs/SupporterTab";
import MatchingResultTab from "./tabs/MatchingResultTab";

const SupporterMatchingPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] =
    useState<MatchingTabType>("disabled_student");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (
      tabParam === "disabled_student" ||
      tabParam === "supporter" ||
      tabParam === "matching"
    ) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

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
        return <MatchingResultTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-4 py-16">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          <div>{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupporterMatchingPage;

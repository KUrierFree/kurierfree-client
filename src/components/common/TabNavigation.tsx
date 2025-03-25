import React from "react";

export type TabType = "matching" | "student" | "supporter";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  className?: string;
}

/**
 * 상단 탭 네비게이션 컴포넌트
 */
const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  className = "",
}) => {
  // 탭 항목 정의
  const tabs = [
    { id: "matching" as TabType, label: "매칭 결과" },
    { id: "student" as TabType, label: "장애학생" },
    { id: "supporter" as TabType, label: "서포터즈" },
  ];

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation; 
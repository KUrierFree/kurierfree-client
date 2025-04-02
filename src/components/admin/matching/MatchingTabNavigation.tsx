import React from "react";

export type TabType = "matching" | "disabled_student" | "supporters";

interface Tab {
  id: TabType;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  className?: string;
}

/**
 * 상단 탭 네비게이션 컴포넌트
 */
const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <div className="flex w-[400px] overflow-visible">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 px-4 flex items-center justify-center font-medium transition-colors outline-none focus:outline-none ${
              activeTab === tab.id
                ? "bg-[var(--color-primary)] text-white h-[48px] -mt-[10px] rounded-t-lg relative z-10"
                : "bg-[#e8f5e9] text-gray-700 hover:bg-[#d7ecd8] h-[38px] rounded-t-md"
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
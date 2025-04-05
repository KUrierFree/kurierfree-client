import React from "react";

export type MatchingTabType = "disabled_student" | "supporter" | "matching";

interface MatchingTabNavigationProps {
  activeTab: MatchingTabType;
  onTabChange: (tab: MatchingTabType) => void;
}

/**
 * 상단 탭 네비게이션 컴포넌트
 */
const MatchingTabNavigation: React.FC<MatchingTabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "disabled_student", label: "장애학생" },
    { id: "supporter", label: "서포터즈" },
    { id: "matching", label: "매칭 결과" },
  ] as const;

  return (
    <div className="flex justify-end">
      <div className="flex w-[400px] overflow-visible">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`flex-1 px-4 flex items-center justify-center font-medium transition-colors cursor-pointer border-t border-gray-300 ${
              index === 0 ? "border-l border-gray-300" : ""
            } ${
              index !== tabs.length - 1 ? "border-r border-gray-300" : ""
            } ${
              activeTab === tab.id
                ? "bg-[var(--color-primary)] text-white h-[48px] -mt-[10px] rounded-t-lg relative z-10"
                : "bg-[#e8f5e9] text-gray-700 hover:bg-[#d7ecd8] h-[38px] rounded-t-lg"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingTabNavigation;
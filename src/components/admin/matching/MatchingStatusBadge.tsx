import React from "react";
import { MatchingStatus } from "../../../types/user";

interface MatchingStatusBadgeProps {
  status: MatchingStatus;
  className?: string;
}

/**
 * 매칭 상태를 표시하는 뱃지 컴포넌트
 */
const MatchingStatusBadge: React.FC<MatchingStatusBadgeProps> = ({
  status,
  className = "",
}) => {
  // 상태별 스타일 및 텍스트 정의
  const statusConfig = {
    waiting: {
      text: "매칭 시작",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    selecting: {
      text: "매칭 중",
      bgColor: "bg-primary-disabled",
      textColor: "text-white",
    },
    completed: {
      text: "매칭 완료",
      bgColor: "bg-gray-400",
      textColor: "text-white",
    },
  };

  const { text, bgColor, textColor } = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} ${className}`}
    >
      {text}
    </span>
  );
};

export default MatchingStatusBadge; 
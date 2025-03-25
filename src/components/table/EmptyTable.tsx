import React from "react";

interface EmptyTableProps {
  message?: string;
  className?: string;
  colSpan?: number;
}

/**
 * 테이블에 데이터가 없을 때 표시되는 컴포넌트
 */
const EmptyTable: React.FC<EmptyTableProps> = ({
  message = "명단이 없습니다.",
  className = "",
  colSpan = 5,
}) => {
  return (
    <tr className={className}>
      <td
        colSpan={colSpan}
        className="py-10 text-center text-gray-500 border-b border-gray-200"
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-300 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p>{message}</p>
        </div>
      </td>
    </tr>
  );
};

export default EmptyTable; 
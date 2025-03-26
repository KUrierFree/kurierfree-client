import React from 'react';

interface SupporterSelectionTableProps {
  supporters: {
    name: string;
    department: string;
    gender: string;
    grade: string;
  }[];
  onSelect: (supporterId: string) => void;
}

const SupporterSelectionTable = ({ supporters, onSelect }: SupporterSelectionTableProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-xs text-gray-500">순위</th>
            <th className="px-3 py-2 text-xs text-gray-500">이름</th>
            <th className="px-3 py-2 text-xs text-gray-500">학과</th>
            <th className="px-3 py-2 text-xs text-gray-500">성별</th>
            <th className="px-3 py-2 text-xs text-gray-500">학년</th>
            <th className="px-3 py-2 text-xs text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          {supporters.map((supporter, index) => (
            <tr key={index} className="border-t">
              <td className="px-3 py-2 text-sm text-gray-600">{index + 1}순위</td>
              <td className="px-3 py-2 text-sm">{supporter.name}</td>
              <td className="px-3 py-2 text-sm">{supporter.department}</td>
              <td className="px-3 py-2 text-sm">{supporter.gender}</td>
              <td className="px-3 py-2 text-sm">{supporter.grade}</td>
              <td className="px-3 py-2 text-sm">
                <button
                  onClick={() => onSelect(index.toString())}
                  className="px-2 py-1 text-xs bg-secondary text-white rounded-md hover:bg-secondary/80"
                >
                  매칭 확정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupporterSelectionTable; 
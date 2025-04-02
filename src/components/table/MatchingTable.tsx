import React from 'react';
import BaseTable from './BaseTable';
import { DisabledStudent } from '../../types/user';
import { DISABLED_STUDENT_COLUMNS } from '../../constants/tables';
import SupporterSelectionTable from './SupporterSelectionTable';

interface MatchingTableProps {
  data: DisabledStudent[];
  tableOptions: {
    meta: {
      onTimeTableClick: () => void;
      onMatchingStart: (student: DisabledStudent) => void;
      onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
      hasSelectingRow: boolean;
    };
  };
}

const MatchingTable: React.FC<MatchingTableProps> = ({ data, tableOptions }) => {
  const renderExpandedRow = (row: DisabledStudent) => {
    if (row.matchingStatus === "selecting") {
      return (
        <SupporterSelectionTable
          supporters={[
            { name: "홍길동", department: "컴퓨터공학과", gender: "남성", grade: "3학년 1학기" },
            { name: "김철수", department: "경영학과", gender: "남성", grade: "2학년 2학기" },
            { name: "이영희", department: "심리학과", gender: "여성", grade: "4학년 1학기" },
          ]}
          onSelect={(supporterId) => tableOptions.meta.onSupporterSelect(row, supporterId)}
        />
      );
    }
    return null;
  };

  return (
    <BaseTable
      data={data}
      columns={DISABLED_STUDENT_COLUMNS}
      tableOptions={tableOptions}
      renderExpandedRow={renderExpandedRow}
    />
  );
};

export default MatchingTable; 
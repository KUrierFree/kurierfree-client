import React from "react";
import DisabledStudentTable from "../../../../components/admin/matching/table/DisabledStudentTable";
import { useDisabledStudentMatching } from "../../../../hooks/matching/useDisabledStudentMatching";

interface DisabledStudentTabProps {
  onTimeTableClick: () => void;
}

const DisabledStudentTab: React.FC<DisabledStudentTabProps> = ({ onTimeTableClick }) => {
  const { disabledStudents, handleMatchingStart, handleSupporterSelect } = useDisabledStudentMatching();

  return (
    <DisabledStudentTable
      data={disabledStudents}
      tableOptions={{
        meta: {
          onTimeTableClick: onTimeTableClick,
          onMatchingStart: handleMatchingStart,
          onSupporterSelect: handleSupporterSelect,
        },
      }}
    />
  );
};

export default DisabledStudentTab;
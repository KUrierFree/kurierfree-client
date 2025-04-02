import React from "react";
import DisabledStudentTable from "../../../../components/admin/matching/table/DisabledStudentTable";
import { useDisabledStudentMatching } from "../../../../hooks/matching/useDisabledStudentMatching";

const DisabledStudentTab: React.FC = () => {
  const { disabledStudents, handleMatchingStart, handleSupporterSelect } = useDisabledStudentMatching();

  return (
    <DisabledStudentTable
      data={disabledStudents}
      tableOptions={{
        meta: {
          onMatchingStart: handleMatchingStart,
          onSupporterSelect: handleSupporterSelect,
        },
      }}
    />
  );
};

export default DisabledStudentTab;
import React, { useState } from "react";
import DisabledStudentTable from "../../../../components/admin/matching/table/DisabledStudentTable";
import { useDisabledStudentMatching } from "../../../../hooks/matching/useDisabledStudentMatching";
import TimeTableModal from "../../../../components/admin/matching/TimeTableModal";

const DisabledStudentTab: React.FC = () => {
  const [isTimeTableModalOpen, setIsTimeTableModalOpen] = useState(false);
  const { disabledStudents, handleMatchingStart, handleSupporterSelect } = useDisabledStudentMatching();

  return (
    <>
      <DisabledStudentTable
        data={disabledStudents}
        tableOptions={{
          meta: {
            onTimeTableClick: () => setIsTimeTableModalOpen(true),
            onMatchingStart: handleMatchingStart,
            onSupporterSelect: handleSupporterSelect,
          },
        }}
      />
      {isTimeTableModalOpen && (
        <TimeTableModal
          isOpen={isTimeTableModalOpen}
          onClose={() => setIsTimeTableModalOpen(false)}
        />
      )}
    </>
  );
};

export default DisabledStudentTab;
import React from "react";
import { DisabledStudent } from "../../../../types/user";
import DisabledStudentTable from "../../../../components/admin/matching/table/DisabledStudentTable";

interface DisabledStudentTabProps {
  disabledStudents: DisabledStudent[];
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  onTimeTableClick: () => void;
}

const DisabledStudentTab: React.FC<DisabledStudentTabProps> = ({
  disabledStudents,
  onMatchingStart,
  onSupporterSelect,
  onTimeTableClick,
}) => {
  return (
    <DisabledStudentTable
      data={disabledStudents}
      tableOptions={{
        meta: {
          onTimeTableClick: onTimeTableClick,
          onMatchingStart: onMatchingStart,
          onSupporterSelect: onSupporterSelect,
        },
      }}
    />
  );
};

export default DisabledStudentTab;

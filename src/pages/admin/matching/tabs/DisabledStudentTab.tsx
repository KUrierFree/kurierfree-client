import React from "react";
import DisabledStudentTable from "../../../../components/admin/matching/DisabledStudent/DisabledStudentTable";
import { DisabledStudent, Supporter } from "../../../../types/user";

interface DisabledStudentTabProps {
  disabledStudents: DisabledStudent[];
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  getSupporterCandidates: (studentName: string) => Supporter[];
  onMatchingEdit?: (student: DisabledStudent) => void;
}

const DisabledStudentTab: React.FC<DisabledStudentTabProps> = ({
  disabledStudents,
  onMatchingStart,
  onSupporterSelect,
  getSupporterCandidates,
  onMatchingEdit
}) => {
  return (
    <DisabledStudentTable
      data={disabledStudents}
      tableOptions={{
        meta: {
          onMatchingStart,
          onSupporterSelect,
          getSupporterCandidates,
          onMatchingEdit,
        },
      }}
    />
  );
};

export default DisabledStudentTab;
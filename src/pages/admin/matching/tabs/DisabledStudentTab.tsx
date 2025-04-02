import React from "react";
import DisabledStudentTable from "../../../../components/admin/matching/DisabledStudent/DisabledStudentTable";
import { DisabledStudent, Supporter } from "../../../../types/user";

interface DisabledStudentTabProps {
  disabledStudents: DisabledStudent[];
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  getSupporterCandidates: (studentName: string) => Supporter[];
}

const DisabledStudentTab: React.FC<DisabledStudentTabProps> = ({
  disabledStudents,
  onMatchingStart,
  onSupporterSelect,
  getSupporterCandidates
}) => {
  return (
    <DisabledStudentTable
      data={disabledStudents}
      tableOptions={{
        meta: {
          onMatchingStart,
          onSupporterSelect,
          getSupporterCandidates,
        },
      }}
    />
  );
};

export default DisabledStudentTab;
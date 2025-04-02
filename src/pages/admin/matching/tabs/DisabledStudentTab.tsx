import React from "react";
import DisabledStudentTable from "../../../../components/admin/matching/table/DisabledStudentTable";
import { DisabledStudent } from "../../../../types/user";

interface DisabledStudentTabProps {
  disabledStudents: DisabledStudent[];
  onMatchingStart: (student: DisabledStudent) => void;
  onSupporterSelect: (student: DisabledStudent, supporterId: string) => void;
  getSupporterCandidates: (studentName: string) => Array<{
    id: string;
    name: string;
    department: string;
    gender: string;
    grade: string;
  }>;
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
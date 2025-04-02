import React from "react";
import MatchingResultTable from "../../../../components/admin/matching/MatchingResult/MatchingResultTable";
import { DisabledStudent, Supporter } from "../../../../types/user";

interface MatchingResultTabProps {
  matchingResults: {
    disabledStudent: DisabledStudent;
    supporter: Supporter;
  }[];
}

const MatchingResultTab: React.FC<MatchingResultTabProps> = ({ matchingResults }) => {
  return (
    <MatchingResultTable data={matchingResults} />
  );
};

export default MatchingResultTab;
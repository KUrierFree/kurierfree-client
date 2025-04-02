import React from "react";
import SupporterStatusTable from "../../../../components/admin/matching/table/SupporterStatusTable";
import { Supporter } from "../../../../types/user";

interface SupporterTabProps {
  supporters: Supporter[];
}

const SupporterTab: React.FC<SupporterTabProps> = ({ supporters }) => {
  return <SupporterStatusTable data={supporters} />;
};

export default SupporterTab;
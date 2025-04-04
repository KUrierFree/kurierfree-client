import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import { MatchingResult } from "../../../../types/matching";
import TimeTableButton from "../TimeTableButton";
import BaseMiniTable from "../../../table/BaseMiniTable";

interface MatchedMiniTableProps {
  data: MatchingResult[];
}

type SupporterWithTime = MatchingResult["supporters"][0];

const columnHelper = createColumnHelper<SupporterWithTime>();

const columns: ColumnDef<SupporterWithTime, any>[] = [
  columnHelper.accessor("supporter.name", { header: "이름" }),
  columnHelper.accessor("supporter.gender", { header: "성별" }),
  columnHelper.accessor("supporter.department", { header: "학과" }),
  columnHelper.accessor("supporter.grade", { header: "학년" }),
  columnHelper.display({
    id: "activityTime",
    header: "활동시간",
    cell: ({ row }) => {
      const { dayOfWeek, startTime, endTime } = row.original;
      return `${dayOfWeek} ${startTime} ~ ${endTime}`;
    }
  }),
  columnHelper.accessor("details", { header: "상세내용" }),
  columnHelper.accessor("supporter.id", {
    id: "timetable",
    header: "시간표",
    cell: ({ row }) => <TimeTableButton student={row.original.supporter} />,
  }),
];

const MatchedMiniTable = ({ data }: MatchedMiniTableProps) => {
  const flattenedData = data.flatMap(result => result.supporters);
  
  return (
    <BaseMiniTable<SupporterWithTime>
      data={flattenedData}
      columns={columns}
    />
  );
};

export default MatchedMiniTable;
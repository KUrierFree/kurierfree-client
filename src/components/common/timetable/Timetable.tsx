import React, { useState } from "react";
import IconCalender from "../../../assets/common/timetable/icon-calendar.svg?react";
import IconMenu from "../../../assets/common/timetable/icon-menu.svg?react";
import CalendarTimetable from "./CalenderTimetable.tsx";
import ScheduleTimetable from "./ScheduleTimetable.tsx";

export interface ScheduleItem {
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  location: string;
  type: "필기" | "이동" | "보조";
}

interface TimetableProps {
  items: ScheduleItem[];
}

const Timetable: React.FC<TimetableProps> = ({ items }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="w-full bg-white max-w-[456px] max-h-[400px] px-3 py-3 bg-neutral-50 rounded-xl border border-[#d6d6d6] text-xs text-black overflow-auto">
      <div className="flex justify-end mb-1">
        {showCalendar ? (
          <IconMenu onClick={() => setShowCalendar(false)} />
        ) : (
          <IconCalender onClick={() => setShowCalendar(true)} />
        )}
      </div>
      {showCalendar ? (
        <CalendarTimetable items={items} />
      ) : (
        <ScheduleTimetable items={items} />
      )}
      <div className="h-3 text-right justify-center text-[#999999] text-[9px] font-pretendard">
        수정하기
      </div>
    </div>
  );
};

export default Timetable;

import React, { JSX } from "react";
import IconChevronLeft from "../../../assets/common/timetable/icon_chevron_left.svg?react";
import IconChevronRight from "../../../assets/common/timetable/icon_chevron_right.svg?react";

type CalendarTimetableProps = {
  items: {
    date: string;
    type: "필기" | "이동" | "보조";
  }[];
};

const CalendarTimetable: React.FC<CalendarTimetableProps> = ({ items }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI"];

  const getColor = (type: string) => {
    switch (type) {
      case "필기":
        return "bg-[#eff9cc]";
      case "이동":
        return "bg-[#fef7d0]";
      case "보조":
        return "bg-[#ffe9e9]";
      default:
        return "";
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <div className="w-full h-5 flex justify-between items-center text-[#4d4d4d] text-lg font-black">
        <span>
          {currentYear}년 {currentMonth + 1}월
        </span>
        <div className="flex">
          <IconChevronLeft
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentYear(currentYear - 1);
                setCurrentMonth(11);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
          />
          <IconChevronRight
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentYear(currentYear + 1);
                setCurrentMonth(0);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-full grid grid-cols-5 gap-[9px]">
          {weekdays.map((day) => (
            <div
              key={day}
              className="h-[18px] bg-[#4caf4f] rounded border border-[#4caf4f] flex items-center justify-center text-white font-medium leading-[7px]"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-1">
          {(() => {
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(
              currentYear,
              currentMonth + 1,
              0
            ).getDate();
            const shiftedFirstDay = (firstDay + 6) % 7; // 0=Mon, ..., 6=Sun
            const totalSlots =
              Math.ceil((shiftedFirstDay + daysInMonth) / 5) * 5;

            return Array.from({ length: totalSlots }, (_, i) => {
              const dayNum = i - shiftedFirstDay + 1;
              const formattedDateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
              const item = items.find((it) => it.date === formattedDateStr);
              return (
                <div
                  key={i}
                  className={
                    "w-[79px] h-[30px] px-5 outline outline-1 outline-offset-[-1px] outline-[#d4d3df] flex flex-col justify-center items-center gap-0.5"
                  }
                >
                  <div className="text-black text-sm">
                    {dayNum > 0 && dayNum <= daysInMonth ? dayNum : ""}
                  </div>
                  <div
                    className={`w-[45px] h-[5px] mb-0.5 ${
                      dayNum > 0 && dayNum <= daysInMonth && item
                        ? getColor(item.type)
                        : "bg-[#FAFAFA]"
                    }`}
                  />
                </div>
              );
            })
              .reduce((rows: JSX.Element[][], cell, idx) => {
                const rowIdx = Math.floor(idx / 5);
                if (!rows[rowIdx]) rows[rowIdx] = [];
                rows[rowIdx].push(cell);
                return rows;
              }, [])
              .map((week, idx) => (
                <div key={idx} className="flex gap-[9px]">
                  {week}
                </div>
              ));
          })()}
        </div>
      </div>
    </div>
  );
};

export default CalendarTimetable;

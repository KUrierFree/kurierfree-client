import React, { useState } from "react";
import IconCalender from "../../assets/common/timetable/icon-calendar.svg?react";

export interface ScheduleItem {
  date: string; // e.g., "3/4"
  startTime: string; // "09:00"
  endTime: string; // "10:30"
  title: string;
  location: string;
  type: "필기" | "이동" | "보조";
}

interface TimetableProps {
  items: ScheduleItem[];
}

const getBlockStyle = (type: ScheduleItem["type"]) => {
  switch (type) {
    case "필기":
      return "bg-[#eff9cc]";
    case "이동":
      return "bg-[#fef7d0]";
    case "보조":
      return "bg-[#ffe9e9]";
    default:
      return "bg-neutral-100";
  }
};

const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

const Timetable: React.FC<TimetableProps> = ({ items }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const dates = Array.from(new Set(items.map((item) => item.date))).sort();

  // Group items by date for easier rendering
  const itemsByDate: { [date: string]: ScheduleItem[] } = {};
  dates.forEach((date) => {
    itemsByDate[date] = items.filter((item) => item.date === date);
  });

  return (
    <div className="w-full max-w-[456px] max-h-[336px] px-4 py-3 bg-neutral-50 rounded-xl border border-[#d6d6d6] text-xs text-black">
      <div className="flex justify-end mb-2">
        <IconCalender onClick={() => setShowCalendar((prev) => !prev)} />
      </div>

      {showCalendar ? (
        <div className="text-sm text-[#4d4d4d]">
          2025년 3월 (달력 placeholder)
        </div>
      ) : (
        <>
          <div className="flex">
            {/* Empty space for aligning with time labels */}
            <div className="w-10 " />
            {/* Date headers */}
            {dates.map((date) => (
              <div
                key={date}
                className={`w-[70px] text-center mx-1 py-1 rounded border ${date === "3/4" ? "bg-[#4caf4f] text-white" : "border-[#4caf4f]"}`}
              >
                {date}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* 시간 라벨 컬럼 */}
            <div className="flex flex-col gap-1 mt-1 ">
              {hours.map((t) => (
                <div
                  key={t}
                  className="w-10 h-6 flex items-center justify-center bg-[#f5f7fa] border border-[#999] rounded-sm"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* 날짜별 컬럼들 */}
            {dates.map((date) => (
              <div
                key={date}
                className="flex flex-col gap-1 mt-1 mx-1 w-[70px]"
              >
                {hours.map((hour) => {
                  const block = itemsByDate[date].find((item) => {
                    const startHour = Number(item.startTime.split(":")[0]);
                    const endHour = Number(item.endTime.split(":")[0]);
                    return startHour <= Number(hour) && Number(hour) < endHour;
                  });

                  if (block) {
                    return (
                      <div
                        key={hour}
                        className={`w-[70px] h-12 px-1 py-1.5 ${getBlockStyle(block.type)} rounded-sm border border-[#d6d6d6] flex flex-col justify-center items-center`}
                      >
                        <div className="font-semibold">{block.title}</div>
                        <div className="text-[8px]">{block.location}</div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={hour}
                        className="h-12 border border-transparent"
                      />
                    );
                  }
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Timetable;

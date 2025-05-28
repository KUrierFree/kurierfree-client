import React from "react";

type CalendarTimetableProps = {
  items: {
    date: string;
    type: "필기" | "이동" | "보조";
  }[];
};

const CalendarTimetable: React.FC<CalendarTimetableProps> = ({ items }) => {
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
    <div className="w-full flex flex-col items-start">
      <div className="w-full px-5 py-2.5 rounded-2xl flex flex-col gap-3">
        <div className="w-full flex justify-between items-center text-[#4d4d4d] text-lg font-black">
          <span>2025년 3월</span>
          <div className="flex gap-2">
            <div className="w-3.5 h-2 bg-[#afafaf] rotate-90" />
            <div className="w-3.5 h-2 bg-black rotate-90" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex justify-start items-center gap-[9px]">
            {weekdays.map((day) => (
              <div
                key={day}
                className="w-[70px] h-[18px] bg-[#4caf4f] rounded border border-[#4caf4f] flex items-center justify-center text-white font-medium leading-[7px]"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {Array.from({ length: 6 }).map((_, weekIdx) => (
              <div key={weekIdx} className="flex gap-[9px]">
                {Array.from({ length: 5 }).map((_, dayIdx) => {
                  const dateNum = weekIdx * 5 + dayIdx + 1;
                  const dateStr = `3/${dateNum}`;
                  const item = items.find((i) => i.date === dateStr);
                  return (
                    <div
                      key={dateStr}
                      className={`w-[70px] h-[30px] px-5 outline outline-1 outline-offset-[-1px] outline-[#d4d3df] flex flex-col justify-center items-center gap-0.5 ${
                        !item ? "" : getColor(item.type)
                      }`}
                    >
                      <div className="text-black text-sm">{dateNum}</div>
                      <div
                        className={`w-[45px] h-[5px] ${
                          item ? getColor(item.type) : "bg-white"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTimetable;

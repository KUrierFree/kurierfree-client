import React from "react";

type ScheduleItem = {
  date: string; // e.g., "3/4"
  startTime: string; // "09:00"
  endTime: string; // "10:30"
  title: string;
  location: string;
  type: "필기" | "이동" | "보조";
};

type ScheduleTimetableProps = {
  items: ScheduleItem[];
};

const generateTimeSlots = () => {
  const slots = [];
  for (let h = 9; h < 17; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  slots.push("17:00");
  return slots;
};
const timeSlots = generateTimeSlots();

const ScheduleTimetable: React.FC<ScheduleTimetableProps> = ({ items }) => {
  const dates = Array.from(new Set(items.map((item) => item.date))).sort();
  const itemsByDate: { [date: string]: ScheduleItem[] } = {};
  dates.forEach((date) => {
    itemsByDate[date] = items.filter((item) => item.date === date);
  });
  const renderedCells: { [key: string]: boolean } = {};

  return (
    <div className="text-[10px] min-h-[273px]">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `48px repeat(${dates.length}, 72px)`,
          gridTemplateRows: `20px repeat(${timeSlots.length}, 10px)`,
        }}
      >
        <div />
        {dates.map((date) => (
          <div
            key={date}
            className={`text-center rounded border text-xs ${
              date ===
              new Date().toLocaleDateString("ko-KR", {
                month: "numeric",
                day: "numeric",
              })
                ? "bg-[#4caf4f] text-white"
                : "border-[#4caf4f]"
            }`}
          >
            {(() => {
              const d = new Date(date);
              const month = d.getMonth() + 1;
              const day = d.getDate();
              return `${month}/${day}`;
            })()}
          </div>
        ))}

        {timeSlots.map((time, rowIdx) => (
          <React.Fragment key={time}>
            {rowIdx % 2 === 0 && (
              <div
                style={{ gridColumnStart: 1, gridRowStart: rowIdx + 2 }}
                className="h-6 flex items-center justify-center bg-[#f5f7fa] border border-[#999] rounded-sm text-[10px]"
              >
                {time.split(":")[0]}
              </div>
            )}
            {dates.map((date, colIdx) => {
              const cellKey = `${date}-${time}`;
              if (renderedCells[cellKey])
                return <React.Fragment key={cellKey} />;
              const item = itemsByDate[date].find((i) => i.startTime === time);
              if (item) {
                const startMinutes =
                  parseInt(item.startTime.split(":")[0]) * 60 +
                  parseInt(item.startTime.split(":")[1]);
                const endMinutes =
                  parseInt(item.endTime.split(":")[0]) * 60 +
                  parseInt(item.endTime.split(":")[1]);
                const duration = (endMinutes - startMinutes) / 30;
                const rowStart = rowIdx + 2;
                const rowEnd = rowStart + duration;
                for (let i = 0; i < duration; i++) {
                  const futureTime = timeSlots[rowIdx + i];
                  if (futureTime) renderedCells[`${date}-${futureTime}`] = true;
                }
                const bgColor =
                  item.type === "필기"
                    ? "bg-[#eff9cc]"
                    : item.type === "이동"
                      ? "bg-[#fef7d0]"
                      : "bg-[#ffe9e9]";
                return (
                  <div
                    key={cellKey}
                    className={`${bgColor} px-[5px] py-1 rounded-sm outline outline-[0.50px] outline-offset-[-0.50px] outline-[#d6d6d6] inline-flex flex-col justify-center items-center gap-1`}
                    style={{
                      gridColumnStart: colIdx + 2,
                      gridRowStart: rowStart,
                      gridRowEnd: rowEnd,
                    }}
                  >
                    <div className="h-2 text-center justify-center text-black text-[10px] font-semibold leading-[7px]">
                      {item.title}
                    </div>
                    <div className="h-2 text-center justify-center text-black text-[8px] font-normal leading-[7px]">
                      {item.location}
                    </div>
                  </div>
                );
              }
              return <React.Fragment key={cellKey} />;
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTimetable;

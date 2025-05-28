import { useState } from "react";
import { DatePickers } from "../common/DatePicker";

const PeriodSettingCard = () => {
  const [applyStart, setApplyStart] = useState<Date>();
  const [applyEnd, setApplyEnd] = useState<Date>();
  const [selectStart, setSelectStart] = useState<Date>();
  const [selectEnd, setSelectEnd] = useState<Date>();
  const [activePicker, setActivePicker] = useState<null | string>(null);

  const [fixedApplyStart] = useState<Date | null>(null);
  const [fixedApplyEnd] = useState<Date | null>(null);
  const [fixedSelectStart] = useState<Date | null>(null);
  const [fixedSelectEnd] = useState<Date | null>(null);

  const format = (date: Date | undefined) =>
    date ? date.toISOString().slice(2, 10).replace(/-/g, ".") : "****-**-**";

  const togglePicker = (picker: string) => {
    setActivePicker((prev) => (prev === picker ? null : picker));
  };

  return (
    <div className="w-full max-w-md p-6 relative border border-gray-300 rounded-xl bg-white shadow-sm">
      <div className="flex flex-col gap-4 text-base font-semibold">
        <div className="flex justify-between items-center gap-4 py-2">
          <span className="text-black">지원 시작 :</span>
          <span
            className={`cursor-pointer hover:underline ${
              applyStart?.getTime() === fixedApplyStart?.getTime()
                ? "text-gray-400"
                : "text-[#df5753]"
            }`}
            onClick={() => togglePicker("applyStart")}
          >
            {format(applyStart)}
          </span>
        </div>
        {activePicker === "applyStart" && (
          <DatePickers
            selectedDate={applyStart}
            onSelectDate={(date) => {
              if (applyEnd && date.getTime() >= applyEnd.getTime()) {
                alert("지원 시작일은 지원 종료일 이전이어야 합니다.");
                return;
              }
              setApplyStart(date);
              setActivePicker(null);
            }}
          />
        )}

        <div className="flex justify-between items-center gap-4 py-2">
          <span className="text-black">지원 종료 :</span>
          <span
            className={`cursor-pointer hover:underline ${
              applyEnd?.getTime() === fixedApplyEnd?.getTime()
                ? "text-gray-400"
                : "text-[#df5753]"
            }`}
            onClick={() => togglePicker("applyEnd")}
          >
            {format(applyEnd)}
          </span>
        </div>
        {activePicker === "applyEnd" && (
          <DatePickers
            selectedDate={applyEnd}
            onSelectDate={(date) => {
              if (!applyStart || date.getTime() <= applyStart.getTime()) {
                alert("지원 종료일은 지원 시작일 이후여야 합니다.");
                return;
              }
              if (selectStart && date.getTime() >= selectStart.getTime()) {
                alert("지원 종료일은 선발 시작일 이전이어야 합니다.");
                return;
              }
              setApplyEnd(date);
              setActivePicker(null);
            }}
          />
        )}

        <div className="flex justify-between items-center gap-4 py-2">
          <span className="text-black">선발 시작 :</span>
          <span
            className={`cursor-pointer hover:underline ${
              selectStart?.getTime() === fixedSelectStart?.getTime()
                ? "text-gray-400"
                : "text-[#4caf4f]"
            }`}
            onClick={() => togglePicker("selectStart")}
          >
            {format(selectStart)}
          </span>
        </div>
        {activePicker === "selectStart" && (
          <DatePickers
            selectedDate={selectStart}
            onSelectDate={(date) => {
              if (!applyEnd || date.getTime() <= applyEnd.getTime()) {
                alert("선발 시작일은 지원 종료일 이후여야 합니다.");
                return;
              }
              if (selectEnd && date.getTime() >= selectEnd.getTime()) {
                alert("선발 시작일은 선발 종료일 이전이어야 합니다.");
                return;
              }
              setSelectStart(date);
              setActivePicker(null);
            }}
          />
        )}

        <div className="flex justify-between items-center gap-4 py-2">
          <span className="text-black">선발 종료 :</span>
          <span
            className={`cursor-pointer hover:underline ${
              selectEnd?.getTime() === fixedSelectEnd?.getTime()
                ? "text-gray-400"
                : "text-[#4caf4f]"
            }`}
            onClick={() => togglePicker("selectEnd")}
          >
            {format(selectEnd)}
          </span>
        </div>
        {activePicker === "selectEnd" && (
          <DatePickers
            selectedDate={selectEnd}
            onSelectDate={(date) => {
              if (!selectStart || date.getTime() <= selectStart.getTime()) {
                alert("선발 종료일은 선발 시작일 이후여야 합니다.");
                return;
              }
              setSelectEnd(date);
              setActivePicker(null);
            }}
          />
        )}
      </div>
      <button
        onClick={() => {
          console.log("Sending data to server:", {
            applyStart,
            applyEnd,
            selectStart,
            selectEnd,
          });
        }}
        className="mt-4 w-full py-2 bg-primary text-white rounded hover:bg-primary-dark"
      >
        기간 픽스
      </button>
    </div>
  );
};

export default PeriodSettingCard;

﻿import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export function DatePickers({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date) => void;
}) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      animate
      mode="single"
      selected={selectedDate}
      onSelect={(date) => {
        if (date) {
          onSelectDate(date);
        }
      }}
      captionLayout="dropdown-years"
      classNames={{
        today: `border-amber-500`,
        selected: `bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full border-amber-500 font-semibold`,
        root: `${defaultClassNames.root} shadow-lg p-5`,
        chevron: `fill-[var(--color-primary)]`,
        weekday: `text-[#3C3C43]/30 uppercase text-xs`,
      }}
      formatters={{
        formatWeekdayName: (date) => {
          return date
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();
        },
      }}
    />
  );
}

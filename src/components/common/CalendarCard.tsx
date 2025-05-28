const CalendarCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
        {/* 날짜 헤더 */}
        <div className="grid grid-cols-6 text-center font-semibold text-sm mb-4">
        <div>3/3</div>
        <div>3/4</div>
        <div>3/5</div>
        <div>3/6</div>
        <div>3/7</div>
        <div></div>
        </div>
        {/* 시간표 (샘플) */}
        <div className="grid grid-rows-9 grid-cols-6 gap-px text-sm text-center">
        {[...Array(9 * 6)].map((_, i) => (
            <div key={i} className="h-10 border bg-yellow-50">{i % 6 === 1 && i < 36 ? '수업 필기' : ''}</div>
        ))}
        </div>
    </div>
)}
export default CalendarCard;
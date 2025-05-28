function FixedPeriodCard() {
  return (
    <div className="w-full max-w-md p-6 border border-gray-300 rounded-xl bg-white shadow-sm text-center">
      <div className="text-[#4d4d4d] text-[15px] font-semibold mb-2">
        설정된 기간
      </div>
      <div className="text-base font-semibold text-[#df5753]">
        <span className="text-[#4d4d4d]">지원 기간: </span>25.03.15 - 25.03.26
      </div>
      <div className="text-base font-semibold text-[#4caf4f] mt-2">
        <span className="text-[#4d4d4d]">선발 기간: </span> 25.03.27 - 25.04.13
      </div>
    </div>
  );
}

export default FixedPeriodCard;

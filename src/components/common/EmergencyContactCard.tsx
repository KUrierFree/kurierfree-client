import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const EmergencyContactCard = () => {
  return (
    <div className="w-[220px] h-[170px] bg-secondary-disabled rounded-[16px] border border-[#2196F3] relative flex flex-col justify-between p-5 shadow-sm">
      {/* 상단 아이콘 */}
      <PhoneIcon className="w-8 h-8 text-[#444] absolute top-4 right-4" />
      {/* 중앙 텍스트 */}
      <div className="flex-1 flex items-center justify-end">
        <span className="text-[#444] text-[28px] font-semibold text-right">긴급 연락처</span>
      </div>
      {/* 하단 화살표 */}
      <ArrowRightIcon className="w-6 h-6 text-[#444] absolute left-4 bottom-4" />
    </div>
  );
};

export default EmergencyContactCard; 
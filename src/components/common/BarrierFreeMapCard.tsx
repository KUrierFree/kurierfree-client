import { MapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BarrierFreeMapCard = () => {
  return (
    <div className="w-[455px] h-[270px] bg-white rounded-[16px] border border-[#D9D9D9] relative flex flex-col justify-between p-5 shadow-sm">
      {/* 상단 지도 아이콘 */}
      <MapIcon className="w-10 h-10 text-[#444] absolute top-4 right-4" />
      {/* 중앙 텍스트 */}
      <div className="flex-1 flex items-center justify-end">
        <span className="text-[#444] text-[28px] font-semibold text-right">건국대학교 배리어프리맵</span>
      </div>
      {/* 하단 화살표 */}
      <ArrowRightIcon className="w-6 h-6 text-[#444] absolute left-4 bottom-4" />
    </div>
  );
};

export default BarrierFreeMapCard; 
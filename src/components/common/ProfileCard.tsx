import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
interface SupporterProfileCardProps {
  name: string;
  role: string;
  label: string; // ex: '담당 학우', '담당 서포터즈'
  people: string[];
  onLogout?: () => void;
}

const SupporterProfileCard: React.FC<SupporterProfileCardProps> = ({
  name,
  role,
  label,
  people,
  onLogout,
}) => {
  return (
    <div
      className="bg-[#BFE0C3] rounded-xl p-6 shadow-sm border-2 border-[#66BA6A] w-[45.5%] min-w-[300px] max-w-full"
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className="font-semibold text-[25px] leading-[35px] tracking-normal text-gray-800 font-inter"
        >
          {name}
        </span>
        <span
          className="font-bold text-[19px] leading-[35px] tracking-normal text-[#4CAF4F] font-inter"
        >
          @{role}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div
          className="font-medium text-[21px] leading-[35px] tracking-normal text-[#333333] font-inter"
        >
          {label}: {people.join(', ')}
        </div>
        <button
          className="bg-primary hover:bg-[#4CAF4F] text-white font-semibold px-6 py-2 rounded transition-all flex items-center ml-4"
          onClick={onLogout}
        >
          로그아웃
          <ArrowRightIcon className="w-4 h-4 ml-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default SupporterProfileCard;
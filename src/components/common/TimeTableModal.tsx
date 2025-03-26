import React from 'react';

interface TimeTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TimeTableModal: React.FC<TimeTableModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[800px] h-[600px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">시간표</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="h-full">
          {/* 시간표 내용은 추후 구현 */}
        </div>
      </div>
    </div>
  );
};

export default TimeTableModal; 
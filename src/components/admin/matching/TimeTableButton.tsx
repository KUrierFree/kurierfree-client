import { useState } from 'react';
import { DisabledStudent, Supporter } from '../../../types/user';
import TimeTableModal from './TimeTableModal';

interface TimeTableButtonProps {
  student: DisabledStudent | Supporter;
}

const TimeTableButton = ({ student }: TimeTableButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="p-1 text-gray-500 hover:text-gray-700"
        onClick={openModal}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>
      <TimeTableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        student={student}
      />
    </>
  );
};

export default TimeTableButton;
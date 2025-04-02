import React from "react";
import Button from "../../../components/common/Button";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AdminConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[575px] h-[233px] px-[11px] py-[21px] bg-[#bfe0c3] rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#4caf4f] inline-flex flex-col justify-center items-center gap-9">
        <div className="self-stretch text-center justify-center">
          <span className="text-black text-xl font-medium font-['Inter'] leading-[30px]">
            이번 학기 선발 완료 버튼을 누르면 되돌릴 수 없습니다.
            <br />
          </span>
          <span className="text-black text-[23px] font-bold font-['Inter'] leading-[34.50px]">
            정말 확정하시겠습니까?
          </span>
        </div>

        <div className="w-60 inline-flex justify-start items-center gap-4">
          <Button variant="success" onClick={onClose}>
            취소
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            확정
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmModal;
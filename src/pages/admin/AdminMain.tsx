import React, { useState } from "react";
import AdminConfirmModal from "../../components/admin/AdminConfirmModal";
import Button from "../../components/common/Button";

const AdminMain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-row items-center justify-center">
        <Button variant="primary" onClick={() => {}}>
          수정
        </Button>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          이번 학기 선발 완료
        </Button>
      </div>

      <AdminConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("확정되었습니다!");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default AdminMain;

import React, { useState } from "react";
import AdminConfirmModal from "../../components/admin/AdminConfirmModal";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const AdminApplicantMain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-[500px] flex-row items-center justify-center">
        <Button
          variant="primary"
          onClick={() => {
            setIsOpen(false);
            setTimeout(() => {
              navigate("/admin/applicant/list");
            }, 0);
          }}
        >
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
      <Footer />
    </div>
  );
};

export default AdminApplicantMain;

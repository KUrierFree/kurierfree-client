import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const AdminLandingPage = () => {
  const navigate = useNavigate();

  const handleSupporterMatchingClick = () => {
    // 서포터즈 매칭 페이지로 이동
    navigate('/admin/supporter-matching');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6 justify-center">
          <button
            className="flex-1 p-12 rounded-lg text-2xl font-bold text-white border-2"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              borderColor: 'var(--color-primary)',
            }}
            disabled
          >
            지원자 관리
          </button>
          <button
            className="flex-1 p-12 rounded-lg text-2xl font-bold text-white border-2"
            style={{ 
              backgroundColor: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)',
            }}
            onClick={handleSupporterMatchingClick}
          >
            서포터즈 매칭
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLandingPage; 
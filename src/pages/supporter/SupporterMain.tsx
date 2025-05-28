import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProfileCard from '../../components/common/ProfileCard';
import ServiceInfoCard from '../../components/common/ServiceInfoCard';
import LearningHelperCard from '../../components/common/LearningHelperCard';
import EmergencyContactCard from '../../components/common/EmergencyContactCard';
import CalendarCard from '../../components/common/CalendarCard';
import BarrierFreeMapCard from '../../components/common/BarrierFreeMapCard';

const SupporterMain: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1 px-6 py-10 mt-16">
        <div className="max-w-[1200px] mx-auto flex flex-row gap-8 items-stretch">
          {/* 왼쪽 컬럼: 프로필 + 캘린더 */}
          <div className="w-[672px] flex flex-col gap-6">
            <ProfileCard name="정지원" role="서포터즈" label="담당 학우" people={["김건국", "이건국"]} />
            <div className="w-full">
              <CalendarCard />
            </div>
          </div>
          {/* 오른쪽 컬럼: 서비스 소개 + 기능 카드 그룹 */}
          <div className="w-[456px] flex flex-col gap-4">
            <ServiceInfoCard />
            <div className="flex gap-4 h-[170px]">
              <div className="w-[220px] h-full">
                <LearningHelperCard />
              </div>
              <div className="w-[220px] h-full">
                <EmergencyContactCard />
              </div>
            </div>
            <BarrierFreeMapCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SupporterMain;
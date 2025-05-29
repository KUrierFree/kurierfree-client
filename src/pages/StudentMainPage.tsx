import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProfileCard from '../components/common/ProfileCard';
import ServiceInfoCard from '../components/common/ServiceInfoCard';
import LearningHelperCard from '../components/common/LearningHelperCard';
import EmergencyContactCard from '../components/common/EmergencyContactCard';
import BarrierFreeMapCard from '../components/common/BarrierFreeMapCard';
import Timetable from '../components/common/timetable/Timetable';

interface StudentMainPageProps {
  role: string;
  name: string;
  label: string;
  people: string[];
  timetableItems: any[];
}

const StudentMainPage: React.FC<StudentMainPageProps> = ({
  role,
  name,
  label,
  people,
  timetableItems,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 px-6 py-10 mt-16 mb-16 flex min-h-0">
        <div className="max-w-[1200px] mx-auto flex flex-row gap-8 items-stretch justify-between w-full">
          {/* 왼쪽 컬럼: 프로필 + 시간표 */}
          <div className="w-[700px] flex flex-col gap-6 h-full">
            <ProfileCard name={name} role={role} label={label} people={people} />
            <Timetable items={timetableItems} />
          </div>
          {/* 오른쪽 컬럼: 서비스 소개 + 기능 카드 그룹 */}
          <div className="w-full max-w-[456px] flex flex-col gap-4 flex-shrink-0">
            <ServiceInfoCard />
            <div className="flex flex-wrap gap-4 min-h-[170px]">
              <div className="flex-1 min-w-[180px]"><LearningHelperCard /></div>
              <div className="flex-1 min-w-[180px]"><EmergencyContactCard /></div>
            </div>
            <BarrierFreeMapCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentMainPage;
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProfileCard from '../../components/common/ProfileCard';
import ServiceInfoCard from '../../components/common/ServiceInfoCard';
import LearningHelperCard from '../../components/common/LearningHelperCard';
import EmergencyContactCard from '../../components/common/EmergencyContactCard';
import BarrierFreeMapCard from '../../components/common/BarrierFreeMapCard';
import Timetable from '../../components/common/timetable/Timetable';

const DisabledUserMain: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1 px-6 py-10 mt-16 mb-16 flex min-h-0">
        <div className="max-w-[1200px] mx-auto flex flex-row gap-8 items-stretch justify-between w-full">
          {/* 왼쪽 컬럼: 프로필 + 캘린더 */}
          <div className="w-[700px] flex flex-col gap-6 h-full">
            <ProfileCard name="김건국" role="장애학생" label="담당 서포터즈" people={["정지원", "송은서"]} />
            <Timetable
              items={[
                { date: '2025-05-26', startTime: '09:00', endTime: '10:00', title: '수업 필기', location: '공C487', type: '필기' },
                { date: '2025-05-27', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
                { date: '2025-05-27', startTime: '11:00', endTime: '12:00', title: '수업 필기', location: '공C487', type: '필기' },
                { date: '2025-05-27', startTime: '15:00', endTime: '16:00', title: '수업 필기', location: '공B361', type: '필기' },
                { date: '2025-05-28', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },
                { date: '2025-05-29', startTime: '10:00', endTime: '11:00', title: '이동 도우미', location: '공A → 상허', type: '이동' },
                { date: '2025-05-29', startTime: '15:00', endTime: '16:00', title: '수업 보조', location: '공B361', type: '보조' },
                { date: '2025-05-30', startTime: '10:00', endTime: '11:00', title: '수업 필기', location: '공C487', type: '필기' },
              ]}
            />
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

export default DisabledUserMain;
/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSvg from '../assets/landing/hero/hero.svg?react';
import UnlockSvg from '../assets/auth/icons/unlock.svg?react';
import CountsSvg from '../assets/landing/counts.svg?react';
import CalenderSvg from '../assets/landing/calender.svg?react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="h-[80vh] bg-[var(--color-light-blue)] relative">
        {/* 헤더 높이만큼 오프셋을 주는 숨겨진 요소 */}
        <div className="h-[var(--header-height)]"></div>
        {/* 헤더 높이를 제외한 영역에서 컨텐츠 중앙 정렬 */}
        <div className="absolute inset-0 top-[var(--header-height)] flex items-center">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
            <div className="flex flex-col max-w-[550px]">
              <p className="text-[40px] leading-[48px] text-[var(--text-primary)] mb-[16px] font-bold">
                KU 장애인 서포터즈 플랫폼
              </p>
              <p className="text-[40px] leading-[48px] text-[var(--color-primary)] mb-[27.84px] font-semibold">
                더 편하게 지원하고 관리하세요 
              </p>
              <p className="text-[20px] leading-[24px] text-[var(--text-secondary)] mb-[27.84px] font-medium">
                장애 학생과 서포터즈를 하나로, KU의 배리어프리 솔루션
              </p>
              <div className="flex gap-[16px]">
                <Link
                  to="/signup"
                  className="bg-[var(--color-primary)] text-[var(--color-white)] px-[24px] py-[14px] rounded-[8px] font-semibold hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)] transition-colors text-[16px]"
                >
                  회원가입 하기
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 ml-[80px]">
              <HeroSvg className="w-[450px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Section */}
      <section className="h-[80vh] bg-[#ffffff] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
            <div className="flex-shrink-0 mr-[80px]">
              <UnlockSvg className="w-[450px] h-auto" />
            </div>
            <div className="flex flex-col max-w-[550px]">
              <p className="text-[40px] leading-[48px] text-[var(--text-primary)] mb-[16px] font-bold">
                일정부터 필기까지, <br /> 서포터즈 활동을 체계적으로!
              </p>
              <p className="text-[20px] leading-[24px] text-[var(--text-secondary)] mb-[27.84px] font-medium">
                서포터즈 활동을 효율적으로 관리하세요.<br />
                시간표 확인 후 일정 등록 및 수정, 필기 기록까지 한곳에서 손쉽게!
              </p>
              <div className="flex gap-[16px]">
                <Link
                  to="/"
                  className="bg-[var(--color-primary)] text-[var(--color-white)] px-[24px] py-[14px] rounded-[8px] font-semibold hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)] transition-colors text-[16px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="h-[80vh] bg-[var(--color-light-blue)] relative">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
            <div className="flex flex-col max-w-[550px]">
              <p className="text-[40px] leading-[48px] text-[var(--text-primary)] mb-[16px] font-bold">
                긴급한 순간, <br /> 신속한 대응이 가능합니다.
              </p>
              <p className="text-[20px] leading-[24px] text-[var(--text-secondary)] mb-[27.84px] font-medium">
                장애 학생별 긴급 연락처 및 응급 가이드를 확인하세요.<br />
                필요한 순간 빠르게 도움을 요청하고, 안전한 캠퍼스를 만들어갑니다.
              </p>
              <div className="flex gap-[16px]">
                <Link
                  to="/"
                  className="bg-[var(--color-primary)] text-[var(--color-white)] px-[24px] py-[14px] rounded-[8px] font-semibold hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)] transition-colors text-[16px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 ml-[80px]">
              <CountsSvg className="w-[450px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Calender Section */}
      <section className="h-[80vh] bg-[#ffffff] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
            <div className="flex-shrink-0 mr-[80px]">
              <CalenderSvg className="w-[450px] h-auto" />
            </div>
            <div className="flex flex-col max-w-[550px]">
              <p className="text-[40px] leading-[48px] text-[var(--text-primary)] mb-[16px] font-bold">
              장애 학생과 서포터즈를 <br /> 쉽고 빠르게 연결합니다.
              </p>
              <p className="text-[20px] leading-[24px] text-[var(--text-secondary)] mb-[27.84px] font-medium">
              관리자의 승인 아래 서포터즈 활동을 시작하세요.<br />
              장애 학생의 서포터즈 신청부터 관리자의 서포터즈 매칭까지<br />
              간편하게 처리할 수 있습니다.
              </p>
              <div className="flex gap-[16px]">
                <Link
                  to="/"
                  className="bg-[var(--color-primary)] text-[var(--color-white)] px-[24px] py-[14px] rounded-[8px] font-semibold hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)] transition-colors text-[16px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing; 
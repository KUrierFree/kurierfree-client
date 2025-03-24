import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/common/logo/logo.svg?react';
import LogoTitle from '../../assets/common/logo/logo-title-white.svg?react';

const Footer = () => {
  return (
    <footer className="bg-[#263238]">
      <div className="max-w-[1002px] mx-auto flex justify-between items-center py-[42px] px-[45px] gap-[376px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <LogoTitle className="h-5 w-auto" />
          </div>
          <p className="text-[16px] text-white">
            Copyright © 2025 Konkuk University<br />
            All rights reserved
          </p>
        </div>
        
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px]">
              <span className="font-bold text-[#4CAF4F]">Konkuk </span>
              <span className="font-semibold text-white">바로가기</span>
            </h3>
            <div className="flex flex-col gap-[12px]">
              <a href="https://www.konkuk.ac.kr" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#CFD8DC] hover:text-white">
                건국대학교
              </a>
              <a href="https://ecampus.konkuk.ac.kr" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#CFD8DC] hover:text-white">
                건국대학교 e-Campus
              </a>
              <a href="https://www.konkuk.ac.kr/csd/15234/subview.do" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#CFD8DC] hover:text-white">
                건국대학교 장애학생 지원센터
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
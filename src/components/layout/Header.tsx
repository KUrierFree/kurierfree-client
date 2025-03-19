import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/design/logo.svg?react';
import LogoTitle from '../../assets/design/logo-title.svg?react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <LogoTitle className="h-5 w-auto" />
          </Link>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#2196F3] text-[#ffffff] rounded-md hover:bg-blue-50 hover:text-[#2196F3]"
            >
              로그인
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#4CAF4F] text-[#ffffff] rounded-md hover:bg-green-50 hover:text-[#4CAF4F]"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
type UserType = 'supporter' | 'disabled';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    userType: '' as UserType,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // TODO: 회원가입 로직 구현
      console.log('회원가입 시도:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          회원가입
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          KU Support와 함께 더 나은 캠퍼스를 만들어가요
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    회원 유형
                  </label>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="radio"
                        id="supporter"
                        name="userType"
                        value="supporter"
                        className="hidden peer"
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="supporter"
                        className="block w-full p-4 text-center border rounded-lg cursor-pointer peer-checked:border-[var(--color-primary)] peer-checked:text-[var(--color-primary)] hover:bg-gray-50"
                      >
                        서포터즈
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="disabled"
                        name="userType"
                        value="disabled"
                        className="hidden peer"
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="disabled"
                        className="block w-full p-4 text-center border rounded-lg cursor-pointer peer-checked:border-[var(--color-primary)] peer-checked:text-[var(--color-primary)] hover:bg-gray-50"
                      >
                        장애학생
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                    학번
                  </label>
                  <div className="mt-1">
                    <input
                      id="studentId"
                      name="studentId"
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      placeholder="학번을 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    비밀번호
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      placeholder="비밀번호를 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                    비밀번호 확인
                  </label>
                  <div className="mt-1">
                    <input
                      id="passwordConfirm"
                      name="passwordConfirm"
                      type="password"
                      required
                      value={formData.passwordConfirm}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      placeholder="비밀번호를 다시 입력하세요"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    이름
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    이메일 (건국대학교)
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      placeholder="건국대학교 이메일을 입력하세요"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    * 이메일 인증이 필요합니다
                  </p>
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
              >
                {step === 1 ? '다음' : '회원가입'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">이미 계정이 있으신가요?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm 
                text-sm font-medium text-[var(--color-primary)]
                bg-white border-[var(--color-primary)]
                hover:bg-[var(--color-primary)] hover:text-white"
              >
                로그인하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 
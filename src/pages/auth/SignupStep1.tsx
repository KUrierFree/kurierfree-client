import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignupStore, UserType } from '../../hooks/useStore';

interface Step1FormData {
  studentId: string;
  password: string;
  passwordConfirm: string;
  userType: UserType;
}

const SignupStep1: React.FC = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useSignupStore();
  
  // 비밀번호 표시 상태 관리
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  
  // React Hook Form 설정
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Step1FormData>({
    defaultValues: {
      studentId: formData.studentId,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
      userType: formData.userType,
    }
  });
  
  // 폼 제출 처리
  const onSubmit: SubmitHandler<Step1FormData> = (data) => {
    // Zustand 스토어 업데이트
    updateFormData(data);
    // 다음 단계로 이동
    navigate('/signup/step2');
  };

  // 비밀번호 표시/숨기기 함수
  const showPasswordHandler = () => {
    setShowPassword(true);
  };
  
  const hidePasswordHandler = () => {
    setShowPassword(false);
  };
  
  // 비밀번호 확인 표시/숨기기 함수
  const showPasswordConfirmHandler = () => {
    setShowPasswordConfirm(true);
  };
  
  const hidePasswordConfirmHandler = () => {
    setShowPasswordConfirm(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          회원 유형
        </label>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <input
              type="radio"
              id="supporter"
              value="supporter"
              className="hidden peer"
              {...register('userType', { required: '회원 유형을 선택해주세요' })}
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
              value="disabled"
              className="hidden peer"
              {...register('userType', { required: '회원 유형을 선택해주세요' })}
            />
            <label
              htmlFor="disabled"
              className="block w-full p-4 text-center border rounded-lg cursor-pointer peer-checked:border-[var(--color-primary)] peer-checked:text-[var(--color-primary)] hover:bg-gray-50"
            >
              장애학생
            </label>
          </div>
        </div>
        {errors.userType && <p className="mt-2 text-sm text-red-600">{errors.userType.message}</p>}
      </div>

      <div>
        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
          학번
        </label>
        <div className="mt-1">
          <input
            id="studentId"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            placeholder="학번을 입력하세요"
            {...register('studentId', { 
              required: '학번을 입력해주세요',
              pattern: {
                value: /^[0-9]{8,10}$/,
                message: '올바른 학번 형식이 아닙니다'
              }
            })}
          />
        </div>
        {errors.studentId && <p className="mt-2 text-sm text-red-600">{errors.studentId.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          비밀번호
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] pr-10"
            placeholder="비밀번호를 입력하세요"
            {...register('password', { 
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다'
              }
            })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 outline-none border-none bg-transparent"
            onMouseDown={showPasswordHandler}
            onMouseUp={hidePasswordHandler}
            onMouseLeave={hidePasswordHandler}
            onTouchStart={showPasswordHandler}
            onTouchEnd={hidePasswordHandler}
            aria-label="비밀번호 보기"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
          비밀번호 확인
        </label>
        <div className="mt-1 relative">
          <input
            id="passwordConfirm"
            type={showPasswordConfirm ? "text" : "password"}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] pr-10"
            placeholder="비밀번호를 다시 입력하세요"
            {...register('passwordConfirm', { 
              required: '비밀번호 확인을 입력해주세요',
              validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다'
            })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 outline-none border-none bg-transparent"
            onMouseDown={showPasswordConfirmHandler}
            onMouseUp={hidePasswordConfirmHandler}
            onMouseLeave={hidePasswordConfirmHandler}
            onTouchStart={showPasswordConfirmHandler}
            onTouchEnd={hidePasswordConfirmHandler}
            aria-label="비밀번호 확인 보기"
          >
            {showPasswordConfirm ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        {errors.passwordConfirm && <p className="mt-2 text-sm text-red-600">{errors.passwordConfirm.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)]"
        >
          다음
        </button>
      </div>
    </form>
  );
};

export default SignupStep1; 
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignupStore } from '../../hooks/useStore';
import { UserType } from '../../types/user';
import PasswordInput from '../../components/auth/PasswordInput';
import StudentIdInput from '../../components/auth/StudentIdInput';
import UserTypeSelect from '../../components/auth/UserTypeSelect';

interface Step1FormData {
  studentId: string;
  password: string;
  passwordConfirm: string;
  userType: UserType;
}

const SignupStep1: React.FC = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useSignupStore();
  
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

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <UserTypeSelect 
        register={register} 
        error={errors.userType} 
      />

      <StudentIdInput 
        register={register} 
        error={errors.studentId} 
      />

      <PasswordInput 
        id="password" 
        label="비밀번호" 
        register={register} 
        error={errors.password} 
        validation={{ 
          required: '비밀번호를 입력해주세요',
          minLength: {
            value: 8,
            message: '비밀번호는 최소 8자 이상이어야 합니다'
          }
        }}
      />

      <PasswordInput 
        id="passwordConfirm" 
        label="비밀번호 확인" 
        placeholder="비밀번호를 다시 입력하세요"
        register={register} 
        error={errors.passwordConfirm} 
        validation={{ 
          required: '비밀번호 확인을 입력해주세요',
          validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다'
        }}
      />

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
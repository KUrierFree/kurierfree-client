import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignupStore } from '../../hooks/useStore';
import { GenderType, DisabilityType } from '../../types/user';

interface Step2FormData {
  name: string;
  department: string;
  grade: string;
  gender: GenderType;
  disabilityType?: DisabilityType;
  otherDisabilityDetail?: string;
}

const SignupStep2: React.FC = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useSignupStore();
  
  // React Hook Form 설정
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Step2FormData>({
    defaultValues: {
      name: formData.name,
      department: formData.department,
      grade: formData.grade,
      gender: formData.gender,
      disabilityType: formData.disabilityType,
      otherDisabilityDetail: formData.otherDisabilityDetail,
    }
  });
  
  // 현재 선택된 장애 유형 값 감시
  const disabilityType = watch('disabilityType');
  
  // "기타" 텍스트 입력 시 자동으로 "기타" 라디오 버튼 선택
  const handleOtherDisabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && disabilityType !== 'other') {
      setValue('disabilityType', 'other');
    }
  };
  
  // 폼 제출 처리
  const onSubmit: SubmitHandler<Step2FormData> = (data) => {
    // Zustand 스토어 업데이트
    updateFormData(data);
    
    // 회원가입 API 호출
    const completeFormData = { ...formData, ...data };
    console.log('회원가입 데이터:', completeFormData);
    
    // 성공 시 로그인 페이지로 이동
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    navigate('/login');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          이름
        </label>
        <div className="mt-1">
          <input
            id="name"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            placeholder="이름을 입력하세요"
            {...register('name', { required: '이름을 입력해주세요' })}
          />
        </div>
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
          학과
        </label>
        <div className="mt-1">
          <input
            id="department"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            placeholder="학과를 입력하세요"
            {...register('department', { required: '학과를 입력해주세요' })}
          />
        </div>
        {errors.department && <p className="mt-2 text-sm text-red-600">{errors.department.message}</p>}
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
          학년
        </label>
        <div className="mt-1">
          <input
            id="grade"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            placeholder="학년을 입력하세요"
            {...register('grade', { required: '학년을 입력해주세요' })}
          />
        </div>
        {errors.grade && <p className="mt-2 text-sm text-red-600">{errors.grade.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          성별
        </label>
        <div className="mt-2 flex space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              value="male"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('gender', { required: '성별을 선택해주세요' })}
            />
            <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
              남자
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              value="female"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('gender', { required: '성별을 선택해주세요' })}
            />
            <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
              여자
            </label>
          </div>
        </div>
        {errors.gender && <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>}
      </div>

      {formData.userType === 'disabled' && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          장애 유형
        </label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="visual"
              value="visual"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('disabilityType', { 
                required: formData.userType === 'disabled' ? '장애 유형을 선택해주세요' : false
              })}
            />
            <label htmlFor="visual" className="ml-3 block text-sm font-medium text-gray-700">
              시각장애
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="hearing"
              value="hearing"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('disabilityType', { 
                required: formData.userType === 'disabled' ? '장애 유형을 선택해주세요' : false
              })}
            />
            <label htmlFor="hearing" className="ml-3 block text-sm font-medium text-gray-700">
              청각장애
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="physical"
              value="physical"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('disabilityType', { 
                required: formData.userType === 'disabled' ? '장애 유형을 선택해주세요' : false
              })}
            />
            <label htmlFor="physical" className="ml-3 block text-sm font-medium text-gray-700">
              지체장애
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="developmental"
              value="developmental"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('disabilityType', { 
                required: formData.userType === 'disabled' ? '장애 유형을 선택해주세요' : false
              })}
            />
            <label htmlFor="developmental" className="ml-3 block text-sm font-medium text-gray-700">
              발달장애
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="disability-other"
              value="other"
              className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
              {...register('disabilityType', { 
                required: formData.userType === 'disabled' ? '장애 유형을 선택해주세요' : false
              })}
            />
            <label htmlFor="disability-other" className="ml-3 block text-sm font-medium text-gray-700 min-w-[40px]">
              기타:
            </label>
            <input
              type="text"
              className="flex-1 appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] disabled:bg-gray-100 disabled:text-gray-500"
              placeholder="직접 입력"
              disabled={disabilityType !== '' && disabilityType !== 'other'}
              {...register('otherDisabilityDetail')}
              onChange={(e) => {
                register('otherDisabilityDetail').onChange(e);
                handleOtherDisabilityChange(e);
              }}
              onClick={() => {
                setValue('disabilityType', 'other');
              }}
            />
          </div>
        </div>
        {errors.disabilityType && <p className="mt-2 text-sm text-red-600">{errors.disabilityType.message}</p>}
      </div>
      )}

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={() => navigate('/signup/step1')}
          className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        >
          이전
        </button>
        <button
          type="submit"
          className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)]"
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignupStep2; 
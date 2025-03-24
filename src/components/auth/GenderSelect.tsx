import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface GenderSelectProps {
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: RegisterOptions;
}

const GenderSelect: React.FC<GenderSelectProps> = ({
  register,
  error,
  validation = { required: '성별을 선택해주세요' }
}) => {
  return (
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
            {...register('gender', validation)}
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
            {...register('gender', validation)}
          />
          <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
            여자
          </label>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default GenderSelect; 
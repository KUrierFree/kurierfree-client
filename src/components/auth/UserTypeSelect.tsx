import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface UserTypeSelectProps {
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: RegisterOptions;
}

const UserTypeSelect: React.FC<UserTypeSelectProps> = ({
  register,
  error,
  validation = { required: '회원 유형을 선택해주세요' }
}) => {
  return (
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
            {...register('userType', validation)}
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
            {...register('userType', validation)}
          />
          <label
            htmlFor="disabled"
            className="block w-full p-4 text-center border rounded-lg cursor-pointer peer-checked:border-[var(--color-primary)] peer-checked:text-[var(--color-primary)] hover:bg-gray-50"
          >
            장애학생
          </label>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default UserTypeSelect; 
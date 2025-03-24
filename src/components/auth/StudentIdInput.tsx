import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface StudentIdInputProps {
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: RegisterOptions;
}

const StudentIdInput: React.FC<StudentIdInputProps> = ({
  register,
  error,
  validation = { 
    required: '학번을 입력해주세요',
    pattern: {
      value: /^[0-9]{8,10}$/,
      message: '올바른 학번 형식이 아닙니다'
    }
  }
}) => {
  return (
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
          {...register('studentId', validation)}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default StudentIdInput; 
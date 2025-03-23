import React, { useState } from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder = '비밀번호를 입력하세요',
  register,
  validation,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(true);
  };
  
  const hidePasswordHandler = () => {
    setShowPassword(false);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] pr-10"
          placeholder={placeholder}
          {...register(id, validation)}
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
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default PasswordInput; 
import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';
import { usePasswordVisibility } from '../../hooks/usePasswordVisibility';
import { VisibleIcon, HiddenIcon } from './icons/PasswordIcons';
import IconButton from '../common/IconButton';

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
  const { visible, show, hide } = usePasswordVisibility();

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] pr-10"
          placeholder={placeholder}
          {...register(id, validation)}
        />
        <IconButton
          size="sm"
          color="gray"
          onMouseDown={show}
          onMouseUp={hide}
          onMouseLeave={hide}
          onTouchStart={show}
          onTouchEnd={hide}
          ariaLabel={`${label} 보기`}
        >
          {visible ? <HiddenIcon /> : <VisibleIcon />}
        </IconButton>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default PasswordInput; 
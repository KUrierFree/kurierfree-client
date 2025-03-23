import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  register,
  validation,
  error,
  type = 'text'
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
          placeholder={placeholder}
          {...register(id, validation)}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default TextInput; 
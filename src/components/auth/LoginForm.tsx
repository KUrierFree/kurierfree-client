import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

interface LoginFormProps {
  onSubmit: (data: { studentId: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="studentId"
          className="block text-sm font-medium text-gray-700"
        >
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
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)]"
            placeholder="학번을 입력하세요"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
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
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)]"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[var(--color-secondary)] focus:ring-[var(--color-secondary)] border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            로그인 상태 유지
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="/forgot-password"
            className="font-medium text-[var(--color-secondary)] hover:text-[var(--color-secondary-hover)]"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>

      <div>
        <Button type="submit" variant="secondary">
          로그인
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">또는</span>
        </div>
      </div>

      <div>
        <Link
          to="/signup"
          className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-[var(--color-secondary)] bg-white border-[var(--color-secondary)]"
        >
          회원가입
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

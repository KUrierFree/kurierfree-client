import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success"; // 버튼 타입 추가
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  type = "",
  className = "",
  ...props
}) => {
  const baseStyle =
    "w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium transition";
  const variantStyles = {
    primary:
      "text-white bg-[var(--color-primary)] border-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)]",
    secondary:
      "text-white bg-[var(--color-secondary)] border-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-secondary)]",
    danger:
      "text-white bg-[var(--color-danger)] hover:bg-white hover:text-[var(--color-danger)] hover:border-[var(--color-danger)]",
    success:
      "text-white bg-[var(--color-success)] hover:bg-white hover:text-[var(--color-success)] hover:border-[var(--color-success)]",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

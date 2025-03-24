import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Login = () => {
  const handleLogin = (data: { studentId: string; password: string }) => {
    // TODO: 로그인 로직 구현
    console.log('로그인 시도:', data);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold text-[var(--color-secondary)]">
            LOGIN
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login; 
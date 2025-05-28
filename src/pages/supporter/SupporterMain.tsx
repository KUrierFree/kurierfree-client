import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const SupporterMain: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 mt-16">
        <h1>SupporterMain</h1>
      </div>
      <Footer />
    </div>
  );
};

export default SupporterMain;
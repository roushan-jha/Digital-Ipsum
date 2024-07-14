import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-slate-100">
        <Header />
        <MainSection />
      </div>
    </div>
  );
};

export default DashboardPage;

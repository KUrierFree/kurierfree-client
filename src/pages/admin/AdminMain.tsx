import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import PeriodSettingCard from "../../components/admin/PeriodSettingCard";
import FixedPeriodCard from "../../components/admin/FixedPeriodCard";

const AdminMain = () => {
  const navigate = useNavigate();
  const [canEditPeriod] = useState(false); // todo: 서버 응답 연결 필요
  const [isWithinSelectionPeriod] = useState(false); // todo: 서버 응답 연결 필요

  const cards = [
    {
      text: "지원자 관리",
      bgColor: "bg-[#bfe0c3]",
      path: "/admin/applicant",
      enabled: isWithinSelectionPeriod,
    },
    {
      text: "서포터즈 매칭",
      bgColor: "bg-[#c6e2f8]",
      path: "/admin/matching",
      enabled: isWithinSelectionPeriod,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f5f7f9] flex flex-col justify-center items-center gap-10 py-24 sm:px-6 lg:px-8">
        {canEditPeriod ? <PeriodSettingCard /> : <FixedPeriodCard />}
        <div className="sm:mx-auto flex justify-center gap-24">
          {cards.map(({ text, bgColor, path, enabled }, index) => (
            <div
              key={index}
              className={`w-[322px] h-[183px] ${bgColor} rounded-[20px] outline outline-1 outline-[#263238] flex justify-center items-center cursor-pointer transition hover:scale-105 ${enabled ? "" : "opacity-50 cursor-not-allowed"}`}
              onClick={() => enabled && navigate(path)}
            >
              <span className="text-black text-3xl font-semibold leading-[45px] text-center">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminMain;

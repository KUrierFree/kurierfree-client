import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const AdminMain = () => {
  const navigate = useNavigate();

  // 카드 데이터 (text, 배경색, 이동할 경로)
  const cards = [
    { text: "지원자 관리", bgColor: "bg-[#bfe0c3]", path: "/admin/applicant" },
    // todo : 서포터즈 매칭이랑 route 조정
    { text: "서포터즈 매칭", bgColor: "bg-[#c6e2f8]", path: "/admin/matching" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f5f7f9] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto flex justify-center items-center gap-[73px]">
          {cards.map(({ text, bgColor, path }, index) => (
            <div
              key={index}
              className={`w-[322px] h-[183px] ${bgColor} rounded-[20px] outline outline-1 outline-[#263238] flex justify-center items-center cursor-pointer transition hover:scale-105`}
              onClick={() => navigate(path)} // 클릭 시 페이지 이동
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

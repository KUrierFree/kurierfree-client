import logo from '../../assets/images/logo.svg'
import logoTitle from '../../assets/images/logo-title.svg'

const ServiceInfoCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#D9D9D9] px-8 py-6 flex items-center gap-6 shadow-sm w-[400px] min-w-[320px] max-w-full">
      <img src={logo} alt="KUrier Free Logo" className="w-28 h-28" />
      <div>
        <img src={logoTitle} alt="KUrier Free Logo" className="w-[220px] mb-2" />
        <div className="text-[#888888] text-[15px] leading-[28px] font-normal">
          장애 학생과 서포터즈를 하나로,<br />
          건국대학교의 배리어프리 솔루션
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
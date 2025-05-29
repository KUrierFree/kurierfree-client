import logo from '../../assets/images/logo.svg'
import logoTitle from '../../assets/images/logo-title.svg'

const ServiceInfoCard = () => {
  return (
    <div className="w-[456px] bg-white rounded-2xl border border-[#D9D9D9] px-8 py-6 flex items-center gap-6 shadow-sm min-w-[456px] max-w-[456px]">
      <img src={logo} alt="KUrier Free Logo" className="w-25 h-25" />
    <div>
        <img src={logoTitle} alt="KUrier Free Logo" className="w-[150px] mb-2" />
        <div className="text-[#888888] text-[15px] font-normal">
          장애 학생과 서포터즈를 하나로,<br />
          건국대학교의 배리어프리 솔루션
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
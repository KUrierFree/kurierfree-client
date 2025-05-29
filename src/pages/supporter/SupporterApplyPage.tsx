import React from 'react';
import Header from '../../components/layout/Header';
import { useSignupStore } from '../../hooks/useStore';
import { SignupFormData } from '../../types/user';
import Footer from '../../components/layout/Footer';

const SupporterApplyPage: React.FC = () => {
  // 더미 데이터
  const dummyUserData: SignupFormData = {
    studentId: '20240001',
    password: '',
    passwordConfirm: '',
    name: '홍길동',
    department: '컴퓨터공학부',
    grade: '1학년 1학기',
    gender: '남성',
    userType: 'supporter'
  };

  // 실제로는 API나 상태 관리에서 가져와야 함
  const { formData } = useSignupStore();
  const userData = formData.studentId ? formData : dummyUserData;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-32 pb-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8 border">
          {/* 제목 */}
          <h1 className="text-2xl font-bold text-center mb-5 tracking-widest">장애학생 서포터즈 지원서</h1>
          {/* 기본 정보 표시 (표 스타일) */}
          <table className="w-full border text-sm mb-6">
            <tbody>
              <tr>
                <td className="border px-2 py-1 bg-gray-100 w-24">소속</td>
                <td className="border px-2 py-1 bg-gray-50 text-gray-500 italic cursor-not-allowed" colSpan={3}>{userData.department}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1 bg-gray-100">학번</td>
                <td className="border px-2 py-1 bg-gray-50 text-gray-500 italic cursor-not-allowed">{userData.studentId}</td>
                <td className="border px-2 py-1 bg-gray-100">학년</td>
                <td className="border px-2 py-1 bg-gray-50 text-gray-500 italic cursor-not-allowed">{userData.grade}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1 bg-gray-100">성명</td>
                <td className="border px-2 py-1 bg-gray-50 text-gray-500 italic cursor-not-allowed">{userData.name}</td>
                <td className="border px-2 py-1 bg-gray-100">성별</td>
                <td className="border px-2 py-1 bg-gray-50 text-gray-500 italic cursor-not-allowed">{userData.gender}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1 bg-gray-100">생년월일</td>
                <td className="border px-2 py-1"><input className="w-full" /></td>
                <td className="border px-2 py-1 bg-gray-100">서포터즈 활동경험</td>
                <td className="border px-2 py-1" colSpan={3}>
                  <label className="mr-4"><input type="radio" name="exp" className="mr-1" />유</label>
                  <label><input type="radio" name="exp" className="mr-1" />무</label>
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 bg-gray-100">E-mail</td>
                <td className="border px-2 py-1"><input className="w-full" /></td>
                <td className="border px-2 py-1 bg-gray-100">휴대폰</td>
                <td className="border px-2 py-1"><input className="w-full" /></td>
              </tr>
              <tr>
                <td className="border px-2 py-1 bg-gray-100">활동 유형</td>
                <td className="border px-2 py-1" colSpan={5}>
                  <label className="mr-4"><input type="radio" name="activity" className="mr-1" />국가근로</label>
                  <label><input type="radio" name="activity" className="mr-1" />사회봉사</label>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 봉사활동 경력 */}
          <div className="mb-6">
            <div className="bg-gray-100 border border-t-0 border-x-0 px-2 py-1 font-semibold">봉사활동 경력</div>
            <textarea className="w-full border rounded p-2 mt-1 min-h-[80px]" placeholder="봉사활동 경력을 입력하세요" />
          </div>
          {/* 희망 활동 및 시간 */}
          <div className="mb-6">
            <div className="bg-gray-100 border border-t-0 border-x-0 px-2 py-1 font-semibold">희망 활동 및 활동 가능 시간</div>
            <table className="w-full border text-sm mt-1">
              <thead>
                <tr>
                  <th className="border px-2 py-1 bg-gray-50">번호</th>
                  <th className="border px-2 py-1 bg-gray-50">희망 활동</th>
                  <th className="border px-2 py-1 bg-gray-50">활동 가능 시간</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map((n) => (
                  <tr key={n}>
                    <td className="border px-2 py-1 text-center">{n}순위</td>
                    <td className="border px-2 py-1"><input className="w-full" placeholder="예) 수업 지원" /></td>
                    <td className="border px-2 py-1"><input className="w-full" placeholder="예) 월 9-12시, 화 1-5시 30분" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-xs text-gray-500 mt-1">* 지정 도우미 활동시 해당 사항 기입</div>
          </div>
          {/* 동의 문구 */}
          <div className="text-xs text-gray-600 mb-6 leading-relaxed">
            상기 본인은 성실하고 책임감 있게 장애학생 도우미 활동에 임할 것을 서약하며, 개인의 신상 정보를 관리기관의 요구에 따라 성실히 제공하고 정부 정책사업 관련 목적으로 정보를 공개(도우미 활동 장학금 지급 및 각종 통계 및 설문조사에 한함)하는데 동의합니다.
          </div>
          {/* 신청자/날짜 */}
          <div className="flex justify-end items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <span>신청자 :</span>
              <input className="border-b border-gray-400 w-24 text-center" placeholder="이름" />
              <span>(인)</span>
            </div>
            <div className="flex items-center gap-1">
              <input className="border-b border-gray-400 w-10 text-center" />
              <span>년</span>
              <input className="border-b border-gray-400 w-6 text-center" />
              <span>월</span>
              <input className="border-b border-gray-400 w-6 text-center" />
              <span>일</span>
            </div>
          </div>
          {/* 제출 버튼 */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded transition"
            >
              제출하기
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupporterApplyPage;
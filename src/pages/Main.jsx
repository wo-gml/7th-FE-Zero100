import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8">
        <h1 className="text-[24px] font-bold text-black mb-6">대시보드</h1>

        {/* Cards Row */}
        <div className="flex gap-6">

          {/* Card: 내 정보 */}
          <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-6 w-[548px] shrink-0">
            <h2 className="text-[18px] font-bold text-black mb-4">내 정보</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
                <span className="text-[14px] text-[#4A5565]">이름</span>
                <span className="text-[14px] font-medium text-black">홍길동</span>
              </div>
              <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
                <span className="text-[14px] text-[#4A5565]">이메일</span>
                <span className="text-[14px] font-medium text-black">hong@example.com</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[14px] text-[#4A5565]">가입일</span>
                <span className="text-[14px] font-medium text-black">2024.01.15</span>
              </div>
            </div>
          </div>

          {/* Card: 문의 현황 */}
          <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-6 w-[548px] shrink-0">
            <h2 className="text-[18px] font-bold text-black mb-4">문의 현황</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
                <span className="text-[14px] text-[#4A5565]">전체 문의</span>
                <span className="text-[14px] font-medium text-black">24건</span>
              </div>
              <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
                <span className="text-[14px] text-[#4A5565]">내가 쓴 문의</span>
                <span className="text-[14px] font-medium text-black">8건</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
};

export default Main;

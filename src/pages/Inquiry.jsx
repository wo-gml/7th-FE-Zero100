import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Toast from '../components/Toast';

const inquiries = [
  { id: 1, title: '서비스 이용 관련 문의드립니다', date: '2026년 3월 25일 17:11' },
  { id: 2, title: '결제 시스템에 대해 질문이 있습니다', date: '2026년 3월 24일 14:30' },
  { id: 3, title: '회원가입이 되지 않습니다', date: '2026년 3월 23일 09:15' },
  { id: 4, title: '대시보드 기능 개선 요청', date: '2026년 3월 22일 16:45' },
  { id: 5, title: 'API 연동 방법 문의', date: '2026년 3월 21일 11:20' },
];

const Inquiry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toastConfig, setToastConfig] = useState({ isVisible: false, message: '' });

  useEffect(() => {
    if (location.state?.deleted) {
      setToastConfig({ isVisible: true, message: '문의가 삭제되었습니다.' });
      navigate('/inquiry', { replace: true });
    } else if (location.state?.created) {
      setToastConfig({ isVisible: true, message: '문의가 등록되었습니다.' });
      navigate('/inquiry', { replace: true });
    }
  }, [location.state, navigate]);

  const handleCloseToast = useCallback(() => setToastConfig(prev => ({ ...prev, isVisible: false })), []);

  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8">

        {/* Title + Button Row */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] font-bold text-black">문의 목록</h1>
          <Button variant="primary" onClick={() => navigate('/inquiry/create')}>문의 등록</Button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="text-left px-4 py-3 text-[14px] font-bold text-[#364153] w-[80px]">
                  번호
                </th>
                <th className="text-left px-4 py-3 text-[14px] font-bold text-[#364153]">
                  제목
                </th>
                <th className="text-left px-4 py-3 text-[14px] font-bold text-[#364153] w-[192px]">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((item, idx) => (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/inquiry/${item.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      navigate(`/inquiry/${item.id}`);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  className={`${idx < inquiries.length - 1 ? 'border-b border-[#F3F4F6]' : ''} hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors cursor-pointer`}
                >
                  <td className="px-4 py-[14px] text-[14px] text-black">{item.id}</td>
                  <td className="px-4 py-[14px] text-[14px] font-medium text-black">{item.title}</td>
                  <td className="px-4 py-[14px] text-[14px] text-[#4A5565]">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>

      <Footer />

      {/* 상태에 따른 토스트 메시지 */}
      <Toast
        message={toastConfig.message}
        isVisible={toastConfig.isVisible}
        onClose={handleCloseToast}
      />

    </div>
  );
};

export default Inquiry;

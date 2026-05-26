import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import DeleteModal from '../components/DeleteModal';
import { getInquiryById, deleteInquiry } from '../api/inquiries';

const InquiryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [inquiry, setInquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const data = await getInquiryById(id);
        console.log('문의 상세 API 응답:', data);
        
        // 서버 응답 구조(data, data.data 등)에 맞게 안전하게 처리
        const inquiryData = data?.data || data; 
        setInquiry(inquiryData);
      } catch (error) {
        console.error('문의 상세 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInquiry();
  }, [id]);

  if (isLoading) {
    return (
      <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">
        <Header />
        <Sidebar />
        <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!inquiry) {
    return (
      <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">
        <Header />
        <Sidebar />
        <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] flex items-center justify-center">
          <p className="text-[16px] text-[#6A7282]">문의 내용을 찾을 수 없습니다.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8 flex justify-center">
        <div className="w-full max-w-[896px]">

          {/* Title + Buttons Row */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[24px] font-bold text-black">문의 상세</h1>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={() => navigate('/inquiry')}>
                목록으로
              </Button>
              <Button variant="secondary" onClick={() => setIsDeleteOpen(true)}>
                삭제
              </Button>
            </div>
          </div>

          {/* Detail Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden">

            {/* 제목 + 날짜 */}
            <div className="px-8 py-6 border-b border-[#E5E7EB]">
              <p className="text-[14px] text-[#6A7282] mb-3">{inquiry.date}</p>
              <h2 className="text-[24px] font-bold text-black">{inquiry.title}</h2>
            </div>

            {/* 작성자 정보 */}
            <div className="px-8 py-5 bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <div className="flex gap-12">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] text-[#6A7282]">작성자</span>
                  <span className="text-[14px] font-medium text-black">{inquiry.author}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] text-[#6A7282]">이메일</span>
                  <span className="text-[14px] font-medium text-black">{inquiry.email}</span>
                </div>
              </div>
            </div>

            {/* 문의 내용 */}
            <div className="px-8 py-6 min-h-[160px]">
              <p className="text-[12px] font-bold text-[#6A7282] mb-4">문의 내용</p>
              <p className="text-[14px] text-[#1E2939] leading-[23px] whitespace-pre-line">
                {inquiry.content}
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* 삭제 확인 모달 */}
      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={async () => {
          try {
            await deleteInquiry(id);
            setIsDeleteOpen(false);
            navigate('/inquiry', { state: { deleted: true } });
          } catch (error) {
            console.error('문의 삭제 실패:', error);
            alert('삭제에 실패했습니다.');
            setIsDeleteOpen(false);
          }
        }}
      />

    </div>
  );
};

export default InquiryDetail;

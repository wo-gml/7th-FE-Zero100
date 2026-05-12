import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import DeleteModal from '../components/DeleteModal';

// 추후 API 연동 
const inquiries = [
  {
    id: 1,
    title: '서비스 이용 관련 문의드립니다',
    date: '2026년 3월 25일 17:11',
    author: '홍길동',
    email: 'hong@example.com',
    content: `안녕하세요. 서비스 이용 중 몇 가지 궁금한 사항이 있어 문의드립니다.

1. API 연동 시 인증 방식이 어떻게 되는지 알고 싶습니다.
2. 대시보드에서 데이터 갱신 주기를 변경할 수 있는지 궁금합니다.
3. 관리자 계정과 일반 계정의 권한 차이가 어떻게 되는지 설명 부탁드립니다.

감사합니다.`,
  },
  {
    id: 2,
    title: '결제 시스템에 대해 질문이 있습니다',
    date: '2026년 3월 24일 14:30',
    author: '홍길동',
    email: 'hong@example.com',
    content: '',
  },
  {
    id: 3,
    title: '회원가입이 되지 않습니다',
    date: '2026년 3월 23일 09:15',
    author: '홍길동',
    email: 'hong@example.com',
    content: '',
  },
  {
    id: 4,
    title: '대시보드 기능 개선 요청',
    date: '2026년 3월 22일 16:45',
    author: '홍길동',
    email: 'hong@example.com',
    content: '',
  },
  {
    id: 5,
    title: 'API 연동 방법 문의',
    date: '2026년 3월 21일 11:20',
    author: '홍길동',
    email: 'hong@example.com',
    content: '',
  },
];

const InquiryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const inquiry = inquiries.find((item) => item.id === Number(id));

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
        onConfirm={() => {
          // TODO: API 연동 시 삭제 요청 추가
          setIsDeleteOpen(false);
          navigate('/inquiry', { state: { deleted: true } });
        }}
      />

    </div>
  );
};

export default InquiryDetail;

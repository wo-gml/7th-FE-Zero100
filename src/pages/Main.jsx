import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import { getMe } from '../api/auth/me';
import { getInquiries } from '../api/inquiries';

const Main = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        // 내 정보 호출
        const userData = await getMe(token);
        if (userData) {
          setUserInfo(userData);
        }
        
        // 문의 내역 호출
        try {
          const inquiriesData = await getInquiries();
          const validData = Array.isArray(inquiriesData) ? inquiriesData : (inquiriesData?.data || []);
          setInquiryCount(validData.length);
        } catch (error) {
          console.error("문의 현황 로드 실패:", error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <PageLayout>
      <h1 className="text-[24px] font-bold text-black mb-6">대시보드</h1>

      {/* Cards Row */}
      <div className="flex gap-6">

        {/* Card: 내 정보 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-6 w-[548px] shrink-0">
          <h2 className="text-[18px] font-bold text-black mb-4">내 정보</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
              <span className="text-[14px] text-[#4A5565]">이름</span>
              <span className="text-[14px] font-medium text-black">{userInfo ? userInfo.name : '로딩중...'}</span>
            </div>
            <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
              <span className="text-[14px] text-[#4A5565]">이메일</span>
              <span className="text-[14px] font-medium text-black">{userInfo ? userInfo.email : '로딩중...'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-[14px] text-[#4A5565]">가입일</span>
              <span className="text-[14px] font-medium text-black">
                {userInfo?.createdAt ? new Date(userInfo.createdAt).toLocaleDateString() : (userInfo ? '-' : '로딩중...')}
              </span>
            </div>
          </div>
        </div>

        {/* Card: 문의 현황 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-6 w-[548px] shrink-0">
          <h2 className="text-[18px] font-bold text-black mb-4">문의 현황</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-start pb-2 border-b border-[#F3F4F6]">
              <span className="text-[14px] text-[#4A5565]">내가 쓴 문의</span>
              <span className="text-[14px] font-medium text-black">{inquiryCount}건</span>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Main;

import axios from 'axios';

const BASE_URL = 'https://leetszero100-fe.kro.kr/api/inquiries';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// 1. 문의 목록 조회 API (GET)
export const getInquiries = async () => {
  const response = await axios.get(BASE_URL, { headers: getAuthHeader() });
  // 서버 응답 구조에 따라 response.data.data 등으로 변경이 필요할 수 있습니다.
  return response.data;
};

// 2. 문의 등록 API (POST)
export const createInquiry = async (inquiryData) => {
  const response = await axios.post(BASE_URL, inquiryData, { headers: getAuthHeader() });
  return response.data;
};

// 3. 문의 상세 조회 API (우회 방법: 전체 목록을 불러온 뒤 ID로 찾기)
export const getInquiryById = async (id) => {
  // 백엔드에 단건 조회(GET /id) API가 없을 경우(405 에러 발생 시) 사용하는 우회 방법입니다.
  const data = await getInquiries();
  const inquiriesArray = Array.isArray(data) ? data : (data?.data || []);
  const inquiry = inquiriesArray.find((item) => String(item.id) === String(id));
  
  if (!inquiry) {
    throw new Error('해당 문의를 찾을 수 없습니다.');
  }
  return inquiry;
};

// 4. 문의 삭제 API (DELETE)
export const deleteInquiry = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`, { headers: getAuthHeader() });
  return response.data;
};

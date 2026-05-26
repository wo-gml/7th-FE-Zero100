import axios from 'axios';

const BASE_URL = 'https://leetszero100-fe.kro.kr/api/inquiries';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// 1. 특정 문의 상세 조회 API
export const getInquiryById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, { headers: getAuthHeader() });
  return response.data;
};

// 2. 특정 문의 삭제 API
export const deleteInquiryById = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`, { headers: getAuthHeader() });
  return response.data;
};

// 3. 특정 문의 수정 API
export const updateInquiryById = async (id, updateData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updateData, { headers: getAuthHeader() });
  return response.data;
};
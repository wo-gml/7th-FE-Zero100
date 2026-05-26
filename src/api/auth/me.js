export const getMe = async (token) => {
  const apiUrl = 'https://leetszero100-fe.kro.kr/api/auth/me';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage = result.error || `내 정보 조회 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    return result.data;
  } catch (error) {
    console.error("내 정보 조회 API 에러:", error);
    return null;
  }
};

export const updateMe = async (token, userData) => {
  const apiUrl = 'https://leetszero100-fe.kro.kr/api/auth/me';

  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    });

    const text = await response.text();
    const result = text ? JSON.parse(text) : {};

    if (!response.ok) {
      const errorMessage = result.error || `내 정보 수정 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    // 서버가 빈 응답을 줄 수도 있으므로, result.data가 없으면 전체 result 또는 true 반환
    return result.data !== undefined ? result.data : (text ? result : true);
  } catch (error) {
    console.error("내 정보 수정 API 에러:", error);
    alert(error.message); 
    return null;
  }
};

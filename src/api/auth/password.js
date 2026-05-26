export const updatePassword = async (token, passwords) => {
  const apiUrl = 'https://leetszero100-fe.kro.kr/api/auth/me/password';

  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(passwords)
    });

    const text = await response.text();
    const result = text ? JSON.parse(text) : {};

    if (!response.ok) {
      const errorMessage = result.error || `비밀번호 변경 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    return result.data !== undefined ? result.data : (text ? result : true);
  } catch (error) {
    console.error("비밀번호 변경 API 에러:", error);
    alert(error.message); 
    return null;
  }
};

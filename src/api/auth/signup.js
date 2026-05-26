export const fetchSignup = async (userData) => {
  const apiUrl = 'https://leetszero100-fe.kro.kr/api/auth/signup';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage = result.error || `회원가입 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    return result.data;
  } catch (error) {
    console.error("회원가입 API 에러:", error);
    alert(error.message); 
    return null;
  }
};

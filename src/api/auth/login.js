export const fetchLogin = async (userEmail, userPassword) => {
  const apiUrl = 'https://leetszero100-fe.kro.kr/api/auth/login';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      })
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage = result.error || `로그인 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    return result.data;

  } catch (error) {
    console.error("로그인 API 에러:", error);
    alert(error.message); 
    
    return null;
  }
};

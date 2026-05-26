export const fetchKakaoLogin = async (authCode) => {
  const apiUrl = `https://leetszero100-fe.kro.kr/api/auth/kakao/redirect?code=${encodeURIComponent(authCode)}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      }
    });

    const result = await response.json();

    // 401 Unauthorized이고 미등록 회원(unregistered)인 경우, 가입 정보(kakaoId) 처리를 위해 결과를 반환합니다.
    if (response.status === 401 && result.error === 'unregistered') {
      return result;
    }

    if (!response.ok) {
      const errorMessage = result.error || `카카오 로그인 실패! 상태 코드: ${response.status}`;
      throw new Error(errorMessage);
    }

    // 서버에서 발급받은 자체 토큰(JWT 등)과 유저 정보를 반환
    return result.data || result;
  } catch (error) {
    console.error("카카오 로그인 API 에러:", error);
    if (error.message !== 'unregistered') {
      alert(error.message);
    }
    return null;
  }
};

export const KAKAO_AUTH_URL = 'https://leetszero100-fe.kro.kr/api/auth/kakao';

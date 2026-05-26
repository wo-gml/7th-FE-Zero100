import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchKakaoLogin } from '../api/auth/kakao';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const hasFetched = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    
    if (code && !hasFetched.current) {
      hasFetched.current = true;
      const handleCallback = async () => {
        const loginResult = await fetchKakaoLogin(code);
        if (loginResult) {
          if (loginResult.error === 'unregistered') {
            // 카카오 계정은 연동되었으나 회원가입이 안 된 경우 -> 회원가입 페이지로 이동하며 kakaoId 전달
            alert('등록되지 않은 회원입니다. 회원가입 페이지로 이동합니다.');
            navigate(`/signup?kakaoId=${loginResult.kakaoId}`);
          } else {
            const token = typeof loginResult === 'string' ? loginResult : (loginResult.token || loginResult.accessToken || '');
            localStorage.setItem('token', token);
            navigate('/main');
          }
        } else {
          navigate('/login');
        }
      };
      handleCallback();
    } else if (!code) {
      navigate('/login');
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#FEE500] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[16px] font-medium text-gray-600">카카오 로그인 처리 중입니다...</p>
      </div>
    </div>
  );
};

export default KakaoCallback;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { fetchLogin } from '../api/auth/login';
import { KAKAO_AUTH_URL } from '../api/auth/kakao';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginResult = await fetchLogin(email, password);
    if (loginResult) {
      // API 응답 형태에 따라 token을 추출하여 저장합니다. 
      // 만약 loginResult 자체가 토큰 문자열이라면 그대로, 객체라면 .token을 저장합니다.
      const token = typeof loginResult === 'string' ? loginResult : (loginResult.token || loginResult.accessToken || '');
      localStorage.setItem('token', token);
      navigate('/main');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-100 p-8">
        <h1 className="text-[22px] font-bold text-center text-gray-900 mb-8">로그인</h1>

        <form className="space-y-3" onSubmit={handleLogin}>
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="pt-2">
            <Button variant="primary" fullWidth type="submit">
              로그인
            </Button>
          </div>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-100"></div>
          <span className="px-4 text-[13px] text-gray-400 font-medium">또는</span>
          <div className="flex-1 border-t border-gray-100"></div>
        </div>

        <Button
          variant="kakao"
          fullWidth
          type="button"
          onClick={() => window.location.href = KAKAO_AUTH_URL} // 카카오 인증 페이지로 직접 리다이렉트
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 2C4.02944 2 0 5.134 0 9C0 11.4556 1.57947 13.6186 4.02871 14.8696C3.9056 15.2638 3.51868 16.5165 3.4864 16.634C3.4864 16.634 3.45413 16.7516 3.53483 16.7809C3.61552 16.8103 3.69622 16.7516 3.69622 16.7516C3.9383 16.5752 6.74641 14.6349 7.37583 14.2234C7.89228 14.341 8.43564 14.4 9 14.4C13.9706 14.4 18 11.266 18 9C18 5.134 13.9706 2 9 2Z" fill="currentColor"/>
          </svg>
          카카오 로그인
        </Button>

        <div className="mt-8 text-center text-[13px] text-gray-500">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="text-gray-900 font-medium underline hover:text-black underline-offset-2">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

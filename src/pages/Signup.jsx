import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { fetchSignup } from '../api/auth/signup';

const Signup = () => {
  const [searchParams] = useSearchParams();
  const kakaoId = searchParams.get('kakaoId');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value && !validatePassword(value)) {
      setErrors((prev) => ({ ...prev, password: true }));
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value && value !== password) {
      setErrors((prev) => ({ ...prev, confirmPassword: true }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.password || errors.confirmPassword) {
      alert('입력하신 정보를 다시 확인해주세요.');
      return;
    }
    
    if (!email || !password || !confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const userData = {
      email,
      password,
      name: "User",
      ...(kakaoId ? { kakaoId } : {})
    };
    const result = await fetchSignup(userData);

    if (result) {
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4 font-sans">
      <div className="bg-white border border-[#E5E7EB] rounded-[10px] w-full max-w-md p-8">
        <h2 className="text-[24px] font-bold text-center text-black mb-7">회원가입</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmailChange}
            error={errors.email}
            helperText={errors.email ? "올바른 이메일 형식을 입력하세요" : ""}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handlePasswordChange}
            error={errors.password}
            helperText={errors.password ? "8자 이상, 영문/숫자/특수문자 포함" : "8자 이상, 영문/숫자/특수문자 포함"}
          />
          <TextInput
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword ? "비밀번호가 일치하지 않습니다" : ""}
          />

          <Button variant="primary" fullWidth type="submit" className="mt-2">
            가입하기
          </Button>
        </form>

        <div className="mt-5 text-center text-[14px] text-[#4A5565]">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-[#4A5565] font-medium hover:text-black hover:underline underline-offset-2">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

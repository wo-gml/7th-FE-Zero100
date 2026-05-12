import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4 font-sans">
      <div className="bg-white border border-[#E5E7EB] rounded-[10px] w-full max-w-md p-8">
        <h2 className="text-[24px] font-bold text-center text-black mb-7">회원가입</h2>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            error
            helperText="올바른 이메일 형식을 입력하세요"
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            helperText="8자 이상, 영문/숫자/특수문자 포함"
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            helperText="8자 이상, 영문/숫자/특수문자 포함"
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

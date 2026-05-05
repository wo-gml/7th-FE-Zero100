import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full h-[60px] bg-white border-b border-[#E5E7EB] flex items-center justify-between px-6 z-10">
      <Link
        to="/main"
        className="text-[20px] font-bold text-black hover:opacity-70 transition-opacity"
      >
        ZERO100 Admin
      </Link>
      <button
        onClick={handleLogout}
        className="text-[14px] font-medium text-[#4A5565] hover:text-black transition-colors"
      >
        로그아웃
      </button>
    </header>
  );
};

export default Header;

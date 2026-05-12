import { NavLink } from 'react-router-dom';

const navItems = [
  { label: '대시보드 홈', to: '/main' },
  { label: '문의', to: '/inquiry' },
  { label: '마이페이지', to: '/mypage' },
];

const Sidebar = () => {
  return (
    <aside className="absolute top-[60px] left-0 w-[240px] h-[calc(100%-120px)] bg-white border-r border-[#E5E7EB]">
      <nav className="pt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center px-6 h-[44px] text-[14px] transition-colors ${
                isActive
                  ? 'bg-[#F3F4F6] font-medium text-black'
                  : 'font-normal text-[#4A5565] hover:bg-gray-50'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

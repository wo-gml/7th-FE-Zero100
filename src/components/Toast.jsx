import { useEffect } from 'react';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875ZM13.8496 8.22461L9.34961 12.7246C9.22754 12.8467 9.06348 12.915 8.89258 12.915C8.72168 12.915 8.55762 12.8467 8.43555 12.7246L6.15039 10.4395C5.89648 10.1855 5.89648 9.77051 6.15039 9.51660C6.4043 9.26270 6.81934 9.26270 7.07324 9.51660L8.89258 11.3359L12.9268 7.30176C13.1807 7.04785 13.5957 7.04785 13.8496 7.30176C14.1035 7.55566 14.1035 7.96484 13.8496 8.22461Z"
      fill="#171717"
    />
  </svg>
);

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  return (
    <div
      className={`fixed bottom-[77px] right-[39px] z-[100] w-[320px] h-[53px] flex items-center px-[14px] gap-[10px]
        bg-white border border-[#EDEDED] rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-in-out
        ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <CheckIcon />
      <span className="text-[13px] font-medium leading-[20px] text-[#171717] font-['Noto_Sans_KR']">
        {message}
      </span>
    </div>
  );
};

export default Toast;

import React from 'react';

const variantStyles = {
  primary:
    'bg-black text-white font-medium text-[16px] h-[44px] px-6 rounded-[10px] hover:bg-gray-800 transition-colors',
  secondary:
    'border border-[#E5E7EB] text-[#364153] font-medium text-[16px] h-[44px] px-6 rounded-[10px] hover:bg-gray-50 transition-colors',
  ghost:
    'text-[14px] font-medium text-[#4A5565] hover:text-black transition-colors',
  kakao:
    'bg-[#FEE500] text-black text-sm font-medium py-3.5 rounded-xl hover:bg-[#FDD800] transition-colors flex items-center justify-center gap-2',
};

const Button = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

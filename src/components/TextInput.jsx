import { useState } from 'react';

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const TextInput = ({ error = false, helperText, className = '', type = 'text', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="relative w-full">
        <input
          type={inputType}
          className={`w-full bg-[#F9FAFB] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all placeholder:text-black/50 text-gray-900 ${isPasswordType ? 'pr-12' : ''}
            ${error
              ? 'border border-[#FB2C36] focus:ring-1 focus:ring-[#FB2C36]'
              : 'border border-[#E5E7EB] focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
            }
            ${className}`}
          {...props}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {helperText && (
        <span className={`text-[10px] ${error ? 'text-[#FB2C36]' : 'text-[#6A7282]'}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextInput;


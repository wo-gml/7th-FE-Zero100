const TextInput = ({ error = false, helperText, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <input
        className={`w-full bg-[#F9FAFB] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all placeholder:text-black/50 text-gray-900
          ${error
            ? 'border border-[#FB2C36] focus:ring-1 focus:ring-[#FB2C36]'
            : 'border border-[#E5E7EB] focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
          }
          ${className}`}
        {...props}
      />
      {helperText && (
        <span className={`text-[10px] ${error ? 'text-[#FB2C36]' : 'text-[#6A7282]'}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextInput;

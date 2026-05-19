const LabeledField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[14px] font-medium text-[#364153]">{label}</label>
    {children}
  </div>
);

export default LabeledField;

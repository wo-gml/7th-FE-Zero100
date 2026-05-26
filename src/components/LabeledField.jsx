import { useId, cloneElement, isValidElement } from 'react';

const LabeledField = ({ label, id: externalId, children }) => {
  const generatedId = useId();
  const id = externalId || generatedId;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-[14px] font-medium text-[#364153]">
        {label}
      </label>
      {isValidElement(children) ? cloneElement(children, { id }) : children}
    </div>
  );
};

export default LabeledField;

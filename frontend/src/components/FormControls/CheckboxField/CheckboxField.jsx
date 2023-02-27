import React from 'react';

const CheckboxField = (props) => {
  const { children, field, register, errors, ...rest } = props;

  return (
    <div {...rest}>
      <label className="flex cursor-pointer">
        <input {...register(field)} type="checkbox" className="w-5" />
        <span className="ml-2 text-[#606770]">{children}</span>
      </label>
    </div>
  );
};

export default CheckboxField;

import React from 'react';
import ErrorTextField from '@/components/ErrorTextField/ErrorTextField';

const InputField = (props) => {
  const { field, register, errors, validateField, ...rest } = props;

  return (
    <div className="my-2">
      <input
        {...register(field, { ...validateField })}
        placeholder={`Nhập vào ${field} của bạn`}
        className="border outline-0 p-2 w-full"
        type="text"
        {...rest}
      />
      {errors.field && <ErrorTextField>Không được bỏ trống {field}</ErrorTextField>}
    </div>
  );
};

export default InputField;

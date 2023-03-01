import React from 'react';

const RadioField = (props) => {
  const { label, register, value, errors } = props;
  console.log('🚀 ~ RadioField ~ errors:', errors);

  return (
    <label
      className={`border border-borderColor p-2 my-2 cursor-pointer flex justify-between items-center rounded-sm ${
        errors['gender'] ? 'border-borderError' : ''
      }`}
    >
      {label && <span>{label}</span>}
      <input {...register('gender')} type="radio" name="gender" value={value} />
    </label>
  );
};

export default RadioField;

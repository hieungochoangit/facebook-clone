import React, { useCallback } from 'react';
import { BIRTHDAY_KEYS } from '@/utils/constant';
import { convertMonth } from '@/utils/functions';

const BirthDaySelectField = (props) => {
  const { data, className, register, field } = props;

  const renderValue = useCallback((value) => {
    switch (data.type) {
      case BIRTHDAY_KEYS.MONTH:
        return convertMonth(value);
      default:
        return value;
    }
  }, []);

  return (
    <div className={`h-11 my-2 border rounded-sm border-borderColor ${className}`}>
      <select {...register(field)} className="w-full h-full py-1.5 outline-none" name={data.type}>
        {data &&
          data.data.map((item) => (
            <option key={item} value={item}>
              {renderValue(item)}
            </option>
          ))}
      </select>
    </div>
  );
};

export default BirthDaySelectField;

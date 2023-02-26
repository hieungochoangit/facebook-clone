import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const useHookForm = () => {
  const [disabled, setDisabled] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onClickSubmit = useCallback((data) => {
    setDisabled(true);

    console.log(data);

    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  });

  return { register, handleSubmit, watch, formState: { errors }, onClickSubmit, disabled };
};

export default useHookForm;

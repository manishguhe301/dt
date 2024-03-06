import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  pattern: RegExp;
  errorMessage: string;
  defaultValue?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  pattern,
  errorMessage,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col '>
      <label className='text-base font-semibold'>{label}</label>
      <input
        {...register(name, {
          required: `${label} is required`,
          pattern: { value: pattern, message: errorMessage },
        })}
        defaultValue={defaultValue}
        className='h-10 p-3 outline-none bg-gray-300 rounded-xl'
        type={type}
        placeholder={`Enter ${label}`}
      />
      {errors[name] && (
        <p className='text-red-500 text-[10px] mt-1'>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;

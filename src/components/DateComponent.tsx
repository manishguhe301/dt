import { useFormContext } from 'react-hook-form';

const DateComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className='text-base font-semibold'>Date of Birth</label>
      <input
        className='h-10 w-full p-3 outline-none bg-gray-300 rounded-xl'
        type='date'
        {...register('dob', {
          required: 'Date of birth is required',
          validate: {
            validDate: (value) =>
              new Date(value) <= new Date() ||
              'Date of birth cannot be in the future',
          },
        })}
      />
      {errors.dob && typeof errors.dob.message === 'string' && (
        <p className='text-red-500 text-[10px] mt-1'>{errors.dob.message}</p>
      )}
    </div>
  );
};

export default DateComponent;

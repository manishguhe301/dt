import { Select } from 'chakra-react-select';
import { Controller, useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type GenderSelectProps = {
  options: Option[];
};

const GenderSelect: React.FC<GenderSelectProps> = ({ options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className='text-base font-semibold'> Gender</label>
      <Controller
        name='gender'
        control={control}
        rules={{ required: 'Gender is required' }}
        render={({ field }) => (
          <Select
            className='bg-gray-300 rounded-2xl'
            size='md'
            {...field}
            options={options}
            isClearable
            isSearchable
            selectedOptionStyle='check'
          />
        )}
      />
      {errors.gender && typeof errors.gender.message === 'string' && (
        <p className='text-red-500 text-[10px] mt-1'>{errors.gender.message}</p>
      )}
    </div>
  );
};

export default GenderSelect;

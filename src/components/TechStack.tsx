import { CreatableSelect } from 'chakra-react-select';
import { Controller, useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type TechStackProps = {
  options: Option[];
};

const TechStack: React.FC<TechStackProps> = ({ options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className='text-base font-semibold'>Tech Stack</label>
      <Controller
        name='techStack'
        control={control}
        rules={{ required: 'Tech Stack is required' }}
        render={({ field }) => (
          <CreatableSelect
            {...field}
            className='bg-gray-300 rounded-2xl '
            isMulti
            options={options}
            isClearable
            isSearchable
          />
        )}
      />
      {errors.techStack && typeof errors.techStack.message === 'string' && (
        <p className='text-red-500 text-[10px]'>{errors.techStack.message}</p>
      )}
    </div>
  );
};

export default TechStack;

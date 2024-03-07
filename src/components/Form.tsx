import { useForm, FormProvider } from 'react-hook-form';
import InputField from './InputField';
import SelectComponent from './SelectComponent';
import DateComponent from './DateComponent';
import TechStack from './TechStack';
import { options, techStackOptions } from '../data/constants';
import Grid from './Grid';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import Result from './Result';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNo: string;
  email: string;
  gender: { label: string; value: string };
  techStack: { label: string; value: string }[];
}

const Form = () => {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 3000);
  };

  return (
    <FormProvider {...methods}>
      <div className='w-[70%] max-[768px]:w-[80%] max-sm:w-full h-full bg-[#EAEAEA] p-5 rounded-xl '>
        <h1 className='text-xl font-bold mb-3 '>Basic Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <InputField
              name='firstName'
              label='First Name'
              type='text'
              pattern={/^[A-Za-z]+$/}
              errorMessage='Name is incorrect'
            />
            <InputField
              name='lastName'
              label='Last Name'
              type='text'
              pattern={/^[A-Za-z]+$/}
              errorMessage='Name is incorrect'
            />
          </Grid>
          <Grid>
            <InputField
              name='phoneNo'
              label='Phone Number'
              type='tel'
              pattern={/^(\+\d{1,3}[- ]?)?\d{10}$/}
              errorMessage='Phone number is incorrect'
              defaultValue='+91'
            />
            <InputField
              name='email'
              label='Email Address'
              type='email'
              pattern={/^\S+@\S+\.\S+$/}
              errorMessage='Email is incorrect'
            />
          </Grid>
          <h1 className='text-xl font-bold mb-3 '>Other Information</h1>
          <Grid>
            <SelectComponent options={options} />
            <DateComponent />
          </Grid>
          <Grid>
            <TechStack options={techStackOptions} />
          </Grid>
          <div className='flex justify-end pr-4'>
            <button
              type='submit'
              className='bg-gray-500 hover:bg-gray-400 hover:text-black text-white font-bold py-2 px-4 rounded'
            >
              {isLoading ? <Spinner /> : 'Submit'}{' '}
            </button>
          </div>
        </form>
      </div>
      {isLoading ? null : isSubmitted && <Result />}{' '}
    </FormProvider>
  );
};

export default Form;

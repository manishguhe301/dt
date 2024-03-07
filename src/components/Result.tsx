import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNo: string;
  email: string;
  gender: { label: string; value: string };
  techStack: { label: string; value: string }[];
}

const styles = 'm-1 text-base font-bold';

const Result: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const data = watch();
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className='w-[70%] max-[768px]:w-[80%] max-sm:w-full h-full  mt-6 bg-[#EAEAEA] p-5 rounded-xl flex flex-col mb-3'
      ref={resultRef}
    >
      <p className={styles}>First Name : {data.firstName}</p>
      <p className={styles}>Last Name : {data.lastName}</p>
      <p className={styles}>Phone No : {data.phoneNo}</p>
      <p className={styles}>Email : {data.email}</p>
      <p className={styles}>Gender : {data.gender.label}</p>
      <p className={styles}>
        Tech Stack :{' '}
        {data.techStack.map(
          (stack: { label: string; value: string }, key: number) => {
            return (
              <span
                className='px-4 py-1 bg-[#f5f5f5] border-[1px] border-gray-600 text-black mr-2 rounded-full'
                key={`key-${key}-${stack.label}`}
              >
                {stack.label}
              </span>
            );
          }
        )}
      </p>
    </div>
  );
};

export default Result;

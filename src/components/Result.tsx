const Result = ({ data }) => {
  return (
    <div className='w-[70%] max-[768px]:w-[80%] max-sm:w-full h-full  mt-6 bg-[#EAEAEA] p-5 rounded-xl flex flex-col mb-3'>
      <p className='m-1 text-base font-bold'>First Name : {data.firstName}</p>
      <p className='m-1 text-base font-bold'>Last Name : {data.lastName}</p>
      <p className='m-1 text-base font-bold'>Phone No : {data.phoneNo}</p>
      <p className='m-1 text-base font-bold'>Email : {data.email}</p>
      <p className='m-1 text-base font-bold'>Gender : {data.gender.label}</p>
      <p className='m-1 text-base font-bold'>
        Tech Stack :{' '}
        {data.techStack.map((stack: string, key: number) => {
          return (
            <span
              className='px-4 py-1 bg-[#f5f5f5] border-[1px] border-gray-600 text-black mr-2 rounded-full'
              key={`key-${key}-${stack.label}`}
            >
              {stack.label}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Result;
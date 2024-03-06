import React, { ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1'>
      {children}
    </div>
  );
};

export default Grid;

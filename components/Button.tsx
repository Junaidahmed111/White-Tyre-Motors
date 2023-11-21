import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className=" hover:bg-slate-300 text-colorText py-1 px-2 font-medium rounded">
      {children}
    </button>
  );
};

export default Button;

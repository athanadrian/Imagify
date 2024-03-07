import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <main className='auth'>{children}</main>;
};

export default AuthLayout;

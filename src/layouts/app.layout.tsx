import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;

  return <main>{children}</main>;
};

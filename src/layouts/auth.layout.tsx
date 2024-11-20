import React from 'react';
import * as classes from './auth.styles';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = props => {
  const { children } = props;

  return <main className={classes.root}>{children}</main>;
};

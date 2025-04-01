import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { FileRouteTypes } from '#core/router/route-tree.ts';

interface Props {
  path: FileRouteTypes['to'];
  text: string;
  params?: Record<string, string | number>;
  variant?: ButtonProps['variant'];
  fullWidth?: boolean;
}

export const NavigationButton: React.FC<Props> = props => {
  const { path, params, text, variant = 'contained', fullWidth } = props;

  return (
    <Link to={path} params={params}>
      <Button variant={variant} fullWidth={fullWidth}>
        {text}
      </Button>
    </Link>
  );
};

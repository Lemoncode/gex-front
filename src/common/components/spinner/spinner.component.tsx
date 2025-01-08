import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useWithTheme } from '#core/theme';
import * as innerClasses from './spinner.styles';

interface Props {
  isSpinnerShowing: boolean;
}

export const Spinner: React.FC<Props> = props => {
  const { isSpinnerShowing } = props;
  const classes = useWithTheme(innerClasses);

  if (!isSpinnerShowing) {
    return null;
  }

  return (
    <div className={classes.blockingSpinnerOverlay}>
      <div className={classes.blockingSpinner}>
        <CircularProgress />
      </div>
    </div>
  );
};

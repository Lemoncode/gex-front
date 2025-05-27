import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const buttonContainer = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(4)};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

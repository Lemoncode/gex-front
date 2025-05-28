import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const formContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing(4)};
  align-self: stretch;
  width: 100%;
`;

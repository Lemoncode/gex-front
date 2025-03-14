import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const buttonContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${theme.spacing(2)};
`;

export const buttonGroup = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(1)};
`;

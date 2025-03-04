import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const buttonContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  padding-top: ${theme.spacing(2)};
`;

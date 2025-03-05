import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(4)};
`;

export const stepperContainer = css`
  max-width: 602px;
  width: 100%;
`;

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

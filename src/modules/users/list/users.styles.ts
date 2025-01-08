import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const header = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${theme.spacing(2)};
`;

export const table = css`
  min-width: 1200px;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const link = (theme: Theme) => css`
  color: ${theme.palette.common.black};
  text-decoration: none;
  cursor: pointer;
`;

import { css } from '@emotion/css';
import { theme } from '#core/theme/theme.ts';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const table = css`
  min-width: 1200px;
`;

export const head = css`
  background-color: ${theme.palette.primary.dark};
  color: ${theme.palette.primary.contrastText};
`;

export const row = css`
  &:nth-of-type(odd) {
    background-color: ${theme.palette.grey[100]};
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

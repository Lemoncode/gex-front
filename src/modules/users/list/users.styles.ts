import { css } from '@emotion/css';
import { theme } from '#core/theme/theme.ts';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const head = css`
  background-color: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
`;

export const row = css`
  &:nth-of-type(odd) {
    background-color: ${theme.palette.action.hover};
  }
`;

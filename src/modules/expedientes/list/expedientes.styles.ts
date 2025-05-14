import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${theme.spacing(2)};
`;

export const link = css`
  color: ${theme.palette.common.black};
  text-decoration: none;
  cursor: pointer;
`;

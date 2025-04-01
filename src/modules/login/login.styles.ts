import { theme } from '#core/theme/theme';
import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(4)};
  padding: ${theme.spacing(6)};
  & > * {
    width: 372px;
  }
`;

export const loginContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 372px;
`;

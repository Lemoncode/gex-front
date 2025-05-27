import { theme } from '#core/theme/theme.ts';
import { css } from '@emotion/css';

export const header = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.spacing(2)};
`;

export const newCertificacionButton = () => css`
  display: 'flex';
  align-items: 'center';
  justify-content: 'space-between';
  gap: '1rem';
`;

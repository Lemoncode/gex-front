import { Theme } from '@mui/material';
import { css } from '@emotion/css';

export const container = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(2)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

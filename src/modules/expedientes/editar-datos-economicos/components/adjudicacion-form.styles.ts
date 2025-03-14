import { Theme } from '@mui/material';
import { css } from '@emotion/css';

export const adjudicatarioContainer = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(2)};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

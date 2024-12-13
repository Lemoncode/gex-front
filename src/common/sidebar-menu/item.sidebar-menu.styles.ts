import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const itemsExtraIndent = (theme: Theme) => css`
  & .MuiListItem-root {
    margin-left: ${theme.spacing(5)};
  }
`;

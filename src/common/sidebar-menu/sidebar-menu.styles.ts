import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const list = (theme: Theme, open: boolean) => css`
  & .MuiListItem-root {
    display: block;
    padding: ${theme.spacing(1)};
  }

  & .MuiListItemButton-root {
    min-height: 48px;
    justify-content: ${open ? 'initial' : 'center'};
  }
  & .MuiListItemText-root {
    opacity: ${open ? 1 : 0};
  }

  & .MuiListItemIcon-root {
    min-width: 0;
    justify-content: center;
    margin-right: ${open ? theme.spacing(3) : 'auto'};
  }

  & .Mui-selected {
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.tonalOffset};
    border-radius: 4px;

    & .MuiListItemIcon-root {
      color: ${theme.palette.primary.main};
    }
  }
`;

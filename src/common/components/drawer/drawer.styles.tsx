import { Theme } from '@mui/material/styles';
import { css } from '@emotion/css';

interface Props {
  isDrawerOpen: boolean;
}

export const responsiveAnimatedDrawer = (theme: Theme, props: Props): string => css`
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 1;
  background-color: ${theme.palette.background.paper};
  &,
  & .MuiDrawer-paper {
    position: relative;
    width: ${props.isDrawerOpen ? '256px' : theme.spacing(9)};
    overflow-x: hidden;
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: props.isDrawerOpen
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    })};
    @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
      position: absolute;
      height: 100%;
    }
  }
`;

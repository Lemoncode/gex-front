import { Theme } from '@mui/material/styles';
import { css } from '@emotion/css';

export const responsiveAnimatedDrawer = (isOpen: boolean, theme: Theme): string => css`
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 1;
  background-color: ${theme.palette.background.paper};
  /** WARN: regarding MUI API classNames.
    * Unlike 'styled()' approach shown in MUI web examples,
    * the 'Emotion template string' classes MUST match their case-sensitive names.
  */
  /** NOTE: When using an animated drawer,
    * some styles must be duplicated also in its 'paper component' child to work*/
  &,
  & .MuiDrawer-paper {
    position: relative;
    width: ${isOpen ? '256px' : theme.spacing(9)};
    overflow-x: hidden;
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: isOpen ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
    })};
    @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
      position: absolute;
      height: 100%;
    }
  }
`;

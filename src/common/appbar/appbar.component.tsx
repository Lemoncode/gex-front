import React from 'react';
import { Link } from '@tanstack/react-router';

import { AppBar as MUIAppbar, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import * as classes from './appbar.styles';
import { AppBarProfile } from './appbar.profile.component';

interface AppBarProps {
  open?: boolean;
  isUserlogged?: boolean;
  handleMenu: () => void;
}

export const AppBar: React.FC<AppBarProps> = props => {
  // TODO: Mock User login state until we have concrete data to build it correctly
  const { isUserlogged = true } = props;

  return (
    <MUIAppbar
      className={classes.appBarContainer}
      position="static"
      elevation={1}
      color="default"
      variant="outlined"
      square
    >
      <Toolbar disableGutters className={classes.toolbar} variant="regular">
        <div className={classes.leftGroup}>
          <IconButton color="inherit" onClick={props.handleMenu} aria-label="open drawer">
            {props.open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" fontWeight={'bold'}>
            GEX
          </Typography>
        </div>

        {isUserlogged ? (
          <AppBarProfile username="PM" />
        ) : (
          <Link to="/login">
            <Button color="primary" variant="outlined">
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </MUIAppbar>
  );
};

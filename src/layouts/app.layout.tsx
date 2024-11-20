import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import * as classes from './app.styles';
import { Link } from '@tanstack/react-router';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">AppBar</Typography>
          <IconButton size="large" edge="start" sx={{ mr: 2 }}>
            <Link to="/login" style={{ color: 'white' }}>
              <LogoutIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};

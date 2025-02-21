import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useWithTheme } from '#core/theme';
import * as innerStyles from './create-record.styles';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

export const CreateRecordPod: React.FC<Props> = props => {
  const classes = useWithTheme(innerStyles);

  const { isOpen, toggleModal } = props;

  return (
    <Dialog open={isOpen} onClose={toggleModal} className={classes.root}>
      <DialogTitle>Crear nuevo expediente</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={toggleModal}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

import React from 'react';
import { Button, createTheme, Dialog, DialogContent, DialogTitle, IconButton, styled, ThemeProvider } from "@mui/material"
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './crear-notas.styles';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components/index.ts';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { FileUploaded } from './components/fileUpload/fileUpload.component';
import CloseIcon from '@mui/icons-material/Close';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            borderWidth: "2px",
            borderStyle: "dashed",
            borderColor: '#E0E0E0',
            transition: 'border-color 0.3s ease-in-out',
            "&:hover": {
              borderColor: '#1976D2'
            }
          }
        }
      ],
    }
  }
})

interface Props {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CrearNota: React.FC<Props> = (props) => {

  // Sustituir por useState del contexto
  // const isOpen = false;
  const { isOpen, setOpen } = props;

  const classes = useWithTheme(innerClasses);
  const handleSubmit = () => {
    // Implementacion
  }

  return (
    <Dialog open={isOpen} maxWidth='md' fullWidth>
      <DialogTitle>
        <div className={classes.titleBox}>
          <span>Nueva Nota</span>
          <IconButton aria-label="close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Formik
            initialValues={[]}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >
            <Form className={classes.form}>
              <div className={classes.formHeader}>
                <TextFieldForm name='id' label="ID" />
                <TextFieldForm name='autor' label="Autor" />
              </div>
              <TextFieldForm
                name='noteContent'
                label="Contenido de la nota"
                multiline
                rows={3}
              />
              <ThemeProvider theme={theme}>
                <Button
                  component="label"
                  role={undefined}
                  variant="text"
                  tabIndex={-1}
                  fullWidth

                >
                  <div className={classes.formAddFile}>
                    <UploadFileIcon />
                    <span className={classes.formAddFileTitle}>
                      <b className={classes.formAddFileTitleStart}>Enlaza</b>
                      <span> o arrastra y suelta un archivo</span>
                    </span>
                    <span className={classes.formAddFileTypes}>
                      SVG, PNG, JPG o GIF (max. 3MB)
                    </span>
                  </div>

                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                  />
                </Button>
              </ThemeProvider>
            </Form>
          </Formik>
          <div className={classes.filesBox}>
            <FileUploaded />
            <FileUploaded />
          </div>
          <div className={classes.buttonsGroup}>
            <Button variant='text'>Cancelar</Button>
            <Button variant='contained'>Guardar</Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

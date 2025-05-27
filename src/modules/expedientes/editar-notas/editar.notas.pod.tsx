import React, { useState } from 'react';
import { TableComponent } from './components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './editar.notas.styles';
import { useColumns } from './editar.notas.columns';
import { TextFieldForm } from '#common/components/form/index.ts';
import { Form, Formik } from 'formik';
import { Button, Card } from '@mui/material';
import { CrearNotaPod } from '../crear-notas';

export const EditarNotasPod: React.FC = () => {

  const columns = useColumns();
  const classes = useWithTheme(innerClasses);

  const [newNoteOpen, setNewNoteOpen] = useState(false);

  const handleSubmit = () => {
    //function
  }

  return (
    <Card className={classes.root}>
      <div className={classes.notesSectionHeader}>
        <Formik
          initialValues={[]}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <TextFieldForm name="name" label="Busqueda" placeholder='Nombre, email, etc...'
                sx={{
                  margin: '0px',
                  width: '300px'
                }}
              />
            </Form>
          )}
        </Formik>
        <Button variant="contained" className={classes.addNote} onClick={() => setNewNoteOpen(true)}>
          NUEVA NOTA
        </Button>
      </div>
      <TableComponent
        columns={columns}
        notesCollection={[
          {
            id: '001',
            nota: 'Primera nota',
            fecha: '17/03/2025',
            autor: 'Oscar'
          },
          {
            id: '002',
            nota: 'Segunda nota',
            fecha: '07/04/2026',
            autor: 'Antonio'
          },
          {
            id: '003',
            nota: 'Tercera nota',
            fecha: '06/05/2024',
            autor: 'Victoria'
          },
          {
            id: '004',
            nota: 'Cuarta nota',
            fecha: '07/04/2025',
            autor: 'Marta'
          }
        ]}
        totalItems={2}
        currentPage={0}
      />
      <CrearNotaPod isOpen={newNoteOpen} setNewNoteOpen={setNewNoteOpen} />
    </Card>
  )
    ;
};

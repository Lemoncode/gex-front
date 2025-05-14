import React from 'react';
import { CrearNota } from "./crear-notas.component"

interface Props {
  isOpen: boolean
  setNewNoteOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CrearNotaPod: React.FC<Props> = props => {

  const { isOpen, setNewNoteOpen } = props;

  return <CrearNota isOpen={isOpen} setOpen={setNewNoteOpen} />
}

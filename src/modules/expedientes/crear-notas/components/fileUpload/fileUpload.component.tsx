import { IconButton, LinearProgress } from "@mui/material"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useWithTheme } from "#core/theme/theme.hooks.ts";
import * as innerClasses from './fileUpload.styles';

export const FileUploaded = () => {

  // logica segun si el archivo se ha subido correctamente o no
  // mostrar nombre del fichero o Upload failed
  // motivo del error ejemplo: File to large
  // mostrar de un color u otro según estado

  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.fileBox}>
      <div className={classes.fileBoxLeft}>
        <UploadFileIcon color="primary" />
        <div>
          <span>document_file_name.pdf</span>
          <div className={classes.uploadingState}>
            <span>100kb</span>
            <span className={classes.pointSeparation}></span>
            <span>Cargando</span>
          </div>
          <LinearProgress variant="determinate" value={30} />
        </div>
      </div>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>

  )
}

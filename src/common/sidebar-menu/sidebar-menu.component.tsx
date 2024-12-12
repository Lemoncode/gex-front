import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import { Divider, useTheme } from '@mui/material';
import * as classes from './sidebar-menu.styles';

interface Props {
  open: boolean;
}

// TODO: Provisional. Pending to implement with dropdown menus and proper Icons
export const SidebarMenu = (props: Props) => {
  const { open = false } = props;
  const theme = useTheme();
  return (
    <List className={classes.list(theme, open)}>
      {['Principal', 'Expedientes', 'Empresas', 'Informes'].map(text => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}

      <Divider variant="middle" />

      <ListItem key={'Usuarios'}>
        <ListItemButton selected>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Usuarios'} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

import React from 'react';
import { Tabs as MUITabs, Tab, Paper } from '@mui/material/';
import { Edit as EditIcon, Https as LockIcon } from '@mui/icons-material';
import { useParams } from '@tanstack/react-router';
import { EditUserSheet } from '#modules/users/edit-user-sheet/edit-user-sheet.pod.tsx';
import { EditResetPassword } from '#modules/users/edit-reset-password/edit-reset-password.pod.tsx';
import { TabPanel } from './components/tab-panel.component';
import * as innerClasses from './edit-user.styles';

enum TabIndex {
  USER_SHEET,
  RESET_PASSWORD,
}

export const UserScene: React.FC = () => {
  const { id } = useParams({ from: '/_auth/edit-user/$id' });
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => setActiveTab(newValue);

  return (
    <div className={innerClasses.tabsComponent}>
      <Paper elevation={0}>
        <div className={innerClasses.tabsContainer}>
          <MUITabs value={activeTab} onChange={handleChange}>
            <Tab label="Ficha de usuario" icon={<EditIcon />} iconPosition="start" />
            <Tab label="Resetear Password" icon={<LockIcon />} iconPosition="start" />
          </MUITabs>
        </div>
        <TabPanel value={activeTab} index={TabIndex.USER_SHEET}>
          <EditUserSheet id={id} />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.RESET_PASSWORD}>
          <EditResetPassword id={id} />
        </TabPanel>
      </Paper>
    </div>
  );
};

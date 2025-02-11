import * as React from 'react';
import { TabPanel } from './tab-panel.component';
import { Tabs as MUITabs, Tab, Paper } from '@mui/material/';

import * as innerClasses from './tabs.styles';

enum TabIndex {
  USER_SHEET,
  RESET_PASSWORD,
}

interface Props {
  id: string;
}

export const Tabs: React.FC<Props> = ({ id }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => setActiveTab(newValue);

  return (
    <div className={innerClasses.tabsComponent}>
      <Paper elevation={0}>
        <div className={innerClasses.tabsContainer}>
          <MUITabs value={activeTab} onChange={handleChange}>
            <Tab label="Ficha de usuario" />
            <Tab label="Resetear Password" />
          </MUITabs>
        </div>
        <TabPanel value={activeTab} index={TabIndex.USER_SHEET}>
          <h3>User id: {id}</h3>
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.RESET_PASSWORD}>
          <h3>Reset Password</h3>
        </TabPanel>
      </Paper>
    </div>
  );
};

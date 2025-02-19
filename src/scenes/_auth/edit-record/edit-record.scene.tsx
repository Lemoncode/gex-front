import React from 'react';
import { useParams } from '@tanstack/react-router';
import { Tabs as MUITabs, Tab, Paper } from '@mui/material/';
import { EditGeneralInformationPod } from '#modules/records/edit-general-information';
import { EditFinancialInformationPod } from '#modules/records/edit-financial-information';
import { EditCertificationsPod } from '#modules/records/edit-certifications';
import { EditNotesPod } from '#modules/records/edit-notes';
import { TabPanel } from './components/tab-panel.component';
import * as innerClasses from './edit-record.styles';

enum TabIndex {
  GENERAL_INFORMATION,
  FINANCIAL_INFORMATION,
  CERTIFICATIONS,
  NOTES,
}

export const EditRecordScene: React.FC = () => {
  const { id } = useParams({ from: '/_auth/edit-record/$id' });
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => setActiveTab(newValue);

  return (
    <div className={innerClasses.tabsComponent}>
      <Paper elevation={0}>
        <div className={innerClasses.tabsContainer}>
          <MUITabs value={activeTab} onChange={handleChange}>
            <Tab label="DATOS GENERALES" />
            <Tab label="DATOS ECONÓMICOS" />
            <Tab label="CERTIFICACIONES" />
            <Tab label="NOTAS" />
          </MUITabs>
        </div>
        <TabPanel value={activeTab} index={TabIndex.GENERAL_INFORMATION}>
          <EditGeneralInformationPod id={id} />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.FINANCIAL_INFORMATION}>
          <EditFinancialInformationPod />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.CERTIFICATIONS}>
          <EditCertificationsPod />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.NOTES}>
          <EditNotesPod />
        </TabPanel>
      </Paper>
    </div>
  );
};

import React from 'react';
import { useParams } from '@tanstack/react-router';
import { Tabs as MUITabs, Tab, Paper } from '@mui/material/';
import { EditarDatosGeneralesPod } from '#modules/expedientes/editar-datos-generales/index.ts';
import { EditFinancialInformationPod } from '#modules/expedientes/edit-financial-information';
import { EditCertificationsPod } from '#modules/expedientes/edit-certifications';
import { EditNotesPod } from '#modules/expedientes/edit-notes';
import { TabPanel } from './components/tab-panel.component';
import * as innerClasses from './editar-expediente.styles';

enum TabIndex {
  DATOS_GENERALES,
  DATOS_ECONOMICOS,
  CERTIFICACIONES,
  NOTAS,
}

export const EditarExpedienteScene: React.FC = () => {
  const { id } = useParams({ from: '/_auth/editar-expediente/$id' });
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
        <TabPanel value={activeTab} index={TabIndex.DATOS_GENERALES}>
          <EditarDatosGeneralesPod id={id} />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.DATOS_ECONOMICOS}>
          <EditFinancialInformationPod />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.CERTIFICACIONES}>
          <EditCertificationsPod />
        </TabPanel>
        <TabPanel value={activeTab} index={TabIndex.NOTAS}>
          <EditNotesPod />
        </TabPanel>
      </Paper>
    </div>
  );
};

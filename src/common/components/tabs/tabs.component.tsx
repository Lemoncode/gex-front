import * as React from 'react';
import { TabsProps, TabPanelProps } from '#common/models';
import { Tabs as MUITabs, Tab, Box } from '@mui/material/';

import * as classes from './tabs.styles';

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const { contents } = props;
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MUITabs
          className={classes.tabsContainer}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {contents.map((prop, idx) => {
            return <Tab label={prop.label} key={prop.label} {...a11yProps(idx)} />;
          })}
        </MUITabs>
      </Box>
      {contents.map((prop, idx) => {
        return (
          <TabPanel key={idx} value={value} index={idx}>
            {prop.panel}
          </TabPanel>
        );
      })}
    </Box>
  );
};

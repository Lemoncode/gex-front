import * as React from 'react';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './tab-panel.styles';

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;
  const classes = useWithTheme(innerClasses);

  return value === index && <div className={classes.tabPanel}>{children}</div>;
};

import * as React from 'react';

export interface TabsProps {
  contents: TabsObjectProps[];
}

export interface TabsObjectProps {
  label: string;
  panel: any;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

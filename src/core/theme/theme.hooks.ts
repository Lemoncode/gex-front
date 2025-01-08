import React from 'react';
import { useTheme, Theme } from '@mui/material';

export type ResultType<Classes> = {
  [K in keyof Classes]?: Classes[K] extends string | ((...args: any[]) => any) ? string : ResultType<Classes[K]>;
};

export type PropsType<Classes, K extends keyof Classes = keyof Classes> = {
  [Key in K]: Classes[Key] extends (arg1: any, arg2: any) => string
    ? Parameters<Classes[Key]>[1] extends undefined
      ? never
      : Parameters<Classes[Key]>[1]
    : Classes[Key] extends string
      ? never
      : PropsType<Classes[Key]>;
}[K];

export type ClassesHasProps<Classes> = PropsType<Classes> extends never ? false : true;

const feedThemeAndProps = <Classes extends Record<string, unknown>>(
  classes: Classes,
  theme: Theme,
  props: unknown
): ResultType<Classes> => {
  return Object.entries(classes).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]:
        typeof value === 'function'
          ? (value as (theme: Theme, props: unknown) => string)(theme, props)
          : value && typeof value === 'object'
            ? feedThemeAndProps(value as Record<string, unknown>, theme, props)
            : value,
    }),
    {}
  ) as ResultType<Classes>;
};

export const useWithTheme = <Classes extends Record<string, unknown>>(
  classes: Classes,
  ...rest: ClassesHasProps<Classes> extends true ? [props: PropsType<Classes>] : []
): ResultType<Classes> => {
  const theme = useTheme();
  const props = React.useMemo(() => rest[0], [rest[0]]);

  const result = React.useMemo(
    () => feedThemeAndProps(classes, theme, props) as ResultType<Classes>,
    [classes, theme, props]
  );

  return result;
};

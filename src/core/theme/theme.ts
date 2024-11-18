import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultTheme = createTheme();

export const theme = responsiveFontSizes(defaultTheme);

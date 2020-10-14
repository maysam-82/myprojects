import { createMuiTheme } from '@material-ui/core';
import { themeConfigDark, themeConfigLight } from '../styles/theme';

// set relevant theme according to dark/light status
export const setTheme = (isDarkMode) => {
    return createMuiTheme(isDarkMode ? themeConfigDark : themeConfigLight);
};

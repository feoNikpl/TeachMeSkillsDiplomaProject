import React from 'react';
import { THEMES } from './types';

const ThemeContext = React.createContext({} as {theme: THEMES, setTheme: Function});

export {
    ThemeContext
}
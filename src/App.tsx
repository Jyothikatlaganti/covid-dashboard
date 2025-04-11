import React, { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Switch, Tooltip, Box } from '@mui/material';

import Dashboard from './components/Dashboard';

import { CovidProvider } from './context/CovidContext';

const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked);
    };

    const theme = createTheme({
        palette: {
        mode: darkMode ? 'dark' : 'light',
        ...(darkMode
            ? { primary: { main: '#90caf9' } }
            : { primary: { main: '#1976d2' } }),
        },
    });

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    COVID‑19 Dashboard
                </Typography>
                <Tooltip title="Dark/Light Mode">
                    <Box>
                        <Switch checked={darkMode} onChange={handleDarkMode} color="default" />
                    </Box>
                </Tooltip>
            </Toolbar>
        </AppBar>
        <CovidProvider>
            <Dashboard />
        </CovidProvider>
        </ThemeProvider>
    );
};

export default App;

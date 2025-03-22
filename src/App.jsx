import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import getTheme from "./utils/theme";
import Navbar from "./components/navbar";

export default function App() {
    // Logic for Setting up the correct theme
    const storedMode = localStorage.getItem("themeMode") || "light";
    const [mode, setMode] = useState(storedMode);

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar mode={mode} setMode={setMode} />
            <Box sx={{ p: 2, minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
                {"Hello World"}
            </Box>
        </ThemeProvider>
    )
}
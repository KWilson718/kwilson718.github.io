import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import getTheme from "./utils/theme";

import Navbar from "./components/navbar";

import PageNotFound from "./pages/PageNotFound";

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
            <Router>
                <Navbar mode={mode} setMode={setMode} />
                <Box sx={{ p: 2, bgcolor: "background.default", color: "text.primary" }}>
                    <Routes>
                        <Route path="*" element={<PageNotFound/>} />
                    </Routes>
                </Box>
            </Router>
        </ThemeProvider>
    )
}
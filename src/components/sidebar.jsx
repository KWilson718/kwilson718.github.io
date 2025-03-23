import { Drawer, Tabs, Tab, Switch, Box, Typography } from "@mui/material";
import { useState } from "react";

export default function SideBar ({mode, setMode}) {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Drawer
            anchor="right"
            variant="permanent" // Sticks to the side
            sx={{
                width: 250,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 250,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "1rem",
                },
            }}
        >
            {/* Dark Mode Toggle at the Top */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography variant="body1">Dark Mode</Typography>
                <Switch
                    checked={mode === "dark"}
                    onChange={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
                />
            </Box>

            {/* Sidebar Tabs */}
            <Tabs
                orientation="vertical"
                value={selectedTab}
                onChange={(_, newValue) => setSelectedTab(newValue)}
                sx={{ flexGrow: 1, width: "100%" }}
            >
                <Tab label="Home" />
                <Tab label="Profile" />
                <Tab label="Settings" />
            </Tabs>
        </Drawer>
    );
}
import React from "react";
import { AppBar, Toolbar, Typography, Switch, IconButton, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ mode, setMode }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  
  const navigate = useNavigate();

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
    const routes = ["/", "/projects", "/experience", "/misc"];
    navigate(routes[newValue]);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          Kyle's Portfolio
        </Typography>
        <Switch
          checked={mode === "dark"}
          onChange={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        />
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
        >
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="Experience" />
          <Tab label="Misc" />
        </Tabs>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
        >
          <MenuIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
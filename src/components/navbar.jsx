import React from "react";
import { AppBar, Toolbar, Typography, Switch, IconButton, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';

import NavDrawer from "./navDrawer";

const Navbar = ({ mode, setMode }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
    const routes = ["/", "/projects", "/experience", "/misc"];
    navigate(routes[newValue]);
  };

  const toggleDrawer = (newState) => {
    setDrawerOpen(newState);
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            Kyle's Portfolio
          </Typography>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
          >
            <Tab label="About" />
            <Tab label="Projects" />
            <Tab label="Experience" />
            <Tab label="Misc" />
          </Tabs>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavDrawer isOpen={drawerOpen} closeDrawer={() => toggleDrawer(false)} mode={mode} setMode={(newVal) => setMode(newVal)} />
    </>
  );
};

export default Navbar;
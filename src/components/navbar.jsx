import React from "react";
import { AppBar, Toolbar, Typography, Switch, IconButton, Tab, Tabs } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {useState, useEffect} from "react";

import MenuIcon from '@mui/icons-material/Menu';

import NavDrawer from "./navDrawer";

const Navbar = ({ mode, setMode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabRoutes = ["/", "/projects", "/experience", "/misc"];

  const currentTabIndex = tabRoutes.indexOf(location.pathname);
  const [selectedTab, setSelectedTab] = useState(
    currentTabIndex !== -1 ? currentTabIndex : 0
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (currentTabIndex !== -1) {
      setSelectedTab(currentTabIndex);
    }
  }, [currentTabIndex]);

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
    navigate(tabRoutes[newValue]); // Navigate to the selected tab's path
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
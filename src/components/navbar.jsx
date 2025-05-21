import React from "react";
import { AppBar, Toolbar, Typography, Switch, IconButton, Tab, Tabs, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {useState, useEffect} from "react";

import MenuIcon from '@mui/icons-material/Menu';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = ({ mode, setMode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabRoutes = ["/", "/projects", "/experience", "/misc"];

  const currentTabIndex = tabRoutes.indexOf(location.pathname);
  const [selectedTab, setSelectedTab] = useState(
    currentTabIndex !== -1 ? currentTabIndex : 0
  );

  useEffect(() => {
    if (currentTabIndex !== -1) {
      setSelectedTab(currentTabIndex);
    }
  }, [currentTabIndex]);

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
    navigate(tabRoutes[newValue]); // Navigate to the selected tab's path
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center" }}>
            <Typography variant="h1">
              Kyle Wilson
            </Typography>
            <Typography variant="subTitle1" sx={{paddingLeft: 5}} >
              Aspiring Software Engineer
            </Typography>
          </Box>
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
            onClick={() => {
            mode === "dark" ? setMode("light") : setMode("dark");
            }}
          >
            {mode === "dark" ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
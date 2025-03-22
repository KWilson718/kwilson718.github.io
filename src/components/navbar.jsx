import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

const Navbar = ({ mode, setMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Switch
          checked={mode === "dark"}
          onChange={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
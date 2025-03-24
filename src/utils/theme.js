import {createTheme} from "@mui/material/styles";

const getTheme = (mode) => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#ffffff",
        },
        background: {
          default: mode === "dark" ? "#121212" : "#f5f5f5",
          paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
        },
        text: {
          primary: mode === "dark" ? "#ffffff" : "#333333",
          secondary: mode === "dark" ? "#bbbbbb" : "#555555",
        },
      },
      typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
          fontSize: "2rem",
          fontWeight: 700,
        },
        body1: {
          fontSize: "1rem",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: "8px",
              color: `${mode === "dark" ? "#bbbbbb" : "#333333"} !important`,
            },
          },
        },
        MuiTabs: {
          styleOverrides: {
            root: {
              "& .MuiTabs-indicator": {
                backgroundColor: mode === "dark" ? "#1976d2" : "#eeeeee", // Make the indicator visible
              },
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              color: `${mode === "dark" ? "#bbbbbb" : "#333333"} !important`,
              "&.Mui-selected": {
                color: "#ffffff !important",
                fontWeight: 700,
              },
            },
          },
        },
      },
    });
}

export default getTheme;
import {Drawer, Box, IconButton} from "@mui/material";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function NavDrawer({isOpen, closeDrawer, mode, setMode}){
    return (
        <Drawer open={isOpen} onClose={closeDrawer} anchor={"right"}>
            <Box
                sx={{
                width: "15vw",
                minWidth: "250px",
                display: "flex",
                flexDirection: "column",
                padding: 2,
                }}
            >
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                <Box> {/* Placeholder for other content */}</Box>
                <IconButton
                    onClick={() => {
                    mode === "dark" ? setMode("light") : setMode("dark");
                    }}
                >
                    {mode === "dark" ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
                </IconButton>
                </Box>
            </Box>
        </Drawer>
    )
}
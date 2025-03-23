import {Typography, Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

export default function PageNotFound () {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100vh",
                textAlign: "center",
                gap: 2, // Adds spacing between elements
                marginTop: "6rem"
            }}
        >
            <Typography variant="h2">
                Error: Page Not Found
            </Typography>
            <Typography variant="h6">
                Please verify the URL or return home.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ mt: 2 }} // Adds margin-top for spacing
            >
                Go Home
            </Button>
        </Box>
    )
}
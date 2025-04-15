import {Avatar, Box, Typography} from "@mui/material";

import profilePic from "../assets/photos/profile.png";

export default function Home () {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    marginTop: "5vh",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Avatar 
                    alt="Kyle Wilson"
                    src={profilePic}
                    sx={{
                        width: "40vh",
                        height: "40vh"
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography variant={"h1"}>
                        Hi, I'm Kyle
                    </Typography>
                    <Typography variant={"h5"}>
                        Welcome to my Portfolio!
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
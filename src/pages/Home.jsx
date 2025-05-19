import {Avatar, Box, Typography, Divider} from "@mui/material";

import profilePic from "../assets/photos/profile.png";

import aboutEntries from "../data/about.json"

export default function Home () {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    width: "90%",
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
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Typography variant={"title1"}>
                        Hi, I'm Kyle
                    </Typography>
                    <Typography variant={"h5"}>
                        Welcome to my Portfolio!
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "75%",
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Typography variant={"h1"}>
                    Who Am I?
                </Typography>
                <Divider sx={{margin: "0.5rem"}} />
                <Typography variant={"p"}>
                    {aboutEntries.about}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "75%",
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Typography variant={"h1"}>
                    What Have I Done?
                </Typography>
                <Divider sx={{margin: "0.5rem"}} />
                <Typography variant={"p"}>
                    {aboutEntries.past}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "75%",
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Typography variant={"h1"}>
                    What Are My Future Goals?
                </Typography>
                <Divider sx={{margin: "0.5rem"}} />
                <Typography variant={"p"}>
                    {aboutEntries.future}
                </Typography>
            </Box>
        </Box>
    );
}
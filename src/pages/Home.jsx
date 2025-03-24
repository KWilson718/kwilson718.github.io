import {Avatar} from "@mui/material";

import profilePic from "../assets/photos/profile.png";

export default function Home () {
    return (
        <>
            <Avatar 
                alt="Kyle Wilson"
                src={profilePic}
                sx={{
                    width: "30vh",
                    height: "30vh"
                }}
            />
        </>
    );
}
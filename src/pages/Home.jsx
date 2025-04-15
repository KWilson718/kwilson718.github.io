import {Avatar, Box, Typography, Divider} from "@mui/material";

import profilePic from "../assets/photos/profile.png";

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
                <Divider />
                <Typography variant={"p"}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi doloribus minima voluptas quae vero eaque illo in, repudiandae eligendi illum dolores aut, esse aspernatur omnis labore, porro mollitia ducimus repellat quisquam provident molestias. Magnam perspiciatis vel sint ullam suscipit. Deleniti suscipit enim, magni accusamus tempore id voluptas adipisci delectus alias rerum quis exercitationem quidem officiis. Quidem sed porro esse veritatis magnam voluptatum nihil temporibus tempore voluptatibus asperiores similique reprehenderit, dolorum numquam eaque omnis incidunt earum laboriosam maxime. Eligendi sint voluptate asperiores, cupiditate optio quo, odio dolor incidunt quaerat eum, possimus accusantium iusto at architecto aliquam ad in ab nesciunt!
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
                <Divider />
                <Typography variant={"p"}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi doloribus minima voluptas quae vero eaque illo in, repudiandae eligendi illum dolores aut, esse aspernatur omnis labore, porro mollitia ducimus repellat quisquam provident molestias. Magnam perspiciatis vel sint ullam suscipit. Deleniti suscipit enim, magni accusamus tempore id voluptas adipisci delectus alias rerum quis exercitationem quidem officiis. Quidem sed porro esse veritatis magnam voluptatum nihil temporibus tempore voluptatibus asperiores similique reprehenderit, dolorum numquam eaque omnis incidunt earum laboriosam maxime. Eligendi sint voluptate asperiores, cupiditate optio quo, odio dolor incidunt quaerat eum, possimus accusantium iusto at architecto aliquam ad in ab nesciunt!
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
                <Divider />
                <Typography variant={"p"}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi doloribus minima voluptas quae vero eaque illo in, repudiandae eligendi illum dolores aut, esse aspernatur omnis labore, porro mollitia ducimus repellat quisquam provident molestias. Magnam perspiciatis vel sint ullam suscipit. Deleniti suscipit enim, magni accusamus tempore id voluptas adipisci delectus alias rerum quis exercitationem quidem officiis. Quidem sed porro esse veritatis magnam voluptatum nihil temporibus tempore voluptatibus asperiores similique reprehenderit, dolorum numquam eaque omnis incidunt earum laboriosam maxime. Eligendi sint voluptate asperiores, cupiditate optio quo, odio dolor incidunt quaerat eum, possimus accusantium iusto at architecto aliquam ad in ab nesciunt!
                </Typography>
            </Box>
        </Box>
    );
}
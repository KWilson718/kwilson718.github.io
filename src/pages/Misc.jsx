import {Box, Grid, Typography, Divider} from "@mui/material"

import miscellaneous from "../data/miscellaneous.json"

import ItemCard from "../components/itemCard";

export default function Misc () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>

            {miscellaneous.map((category) => (
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 2}}>
                    <Typography variant="title1" >{category.title}</Typography>
                    <Typography variant="subTitle2" >{category.description}</Typography>
                    <Divider sx={{margin: 1.5}} />
                    <Grid container spacing={2} justifyContent="center">
                        {category.items.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <ItemCard
                                itemName={item.name}
                                itemType={item.type}
                                itemDur={item.duration}
                                itemDesc={item.description}
                                itemSkills={item.skills}
                                itemSource={item.source}
                            />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}